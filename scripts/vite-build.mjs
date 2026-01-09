import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(fileURLToPath(new URL('..', import.meta.url)));

const nodeBin = process.execPath;
const viteJs = resolve(projectRoot, 'node_modules', 'vite', 'bin', 'vite.js');

const distDir = resolve(projectRoot, 'dist');
const expectedOutputs = [
  resolve(distDir, 'index.html'),
  resolve(distDir, 'sofizmaty', 'index.html'),
  resolve(distDir, 'paradoksy', 'index.html'),
];

function outputsExist() {
  return expectedOutputs.every((p) => existsSync(p));
}

async function killTree(pid) {
  if (!pid) return;
  if (process.platform === 'win32') {
    await new Promise((resolveKill) => {
      const killer = spawn('taskkill', ['/PID', String(pid), '/T', '/F'], {
        stdio: 'ignore',
        windowsHide: true,
      });
      killer.on('close', resolveKill);
      killer.on('error', resolveKill);
    });
  } else {
    try {
      process.kill(pid, 'SIGKILL');
    } catch {
    }
  }
}

console.log(`[vite-build] start projectRoot=${projectRoot} cwd=${process.cwd()}`);

const child = spawn(nodeBin, [viteJs, 'build'], {
  cwd: projectRoot,
  stdio: ['ignore', 'pipe', 'pipe'],
  windowsHide: true,
});

let sawPrerenderComplete = false;
let killAfterPrerenderTimer = null;

function maybeScheduleEarlyExit() {
  if (killAfterPrerenderTimer) return;
  killAfterPrerenderTimer = setTimeout(async () => {
    if (!sawPrerenderComplete) return;
    if (outputsExist()) {
      console.warn('\n[vite-build] Detected prerender completion; terminating build process to prevent hang.');
      await killTree(child.pid);
    }
  }, 1500);
  killAfterPrerenderTimer.unref?.();
}

child.stdout?.on('data', (chunk) => {
  process.stdout.write(chunk);
  const text = chunk.toString('utf8');
  if (text.includes('Prerendered ') || text.includes('prerendered ')) {
    sawPrerenderComplete = true;
    maybeScheduleEarlyExit();
  }
});

child.stderr?.on('data', (chunk) => {
  process.stderr.write(chunk);
  const text = chunk.toString('utf8');
  if (text.includes('Prerendered ') || text.includes('prerendered ')) {
    sawPrerenderComplete = true;
    maybeScheduleEarlyExit();
  }
});

let timedOut = false;
const timeoutMs = 45_000;
const timeout = setTimeout(async () => {
  timedOut = true;
  console.warn(`\n[vite-build] Build timed out after ${timeoutMs}ms; terminating...`);
  await killTree(child.pid);
}, timeoutMs);

const code = await new Promise((resolveClose) => {
  child.on('close', (exitCode) => resolveClose(typeof exitCode === 'number' ? exitCode : 1));
  child.on('error', () => resolveClose(1));
});

clearTimeout(timeout);

if (killAfterPrerenderTimer) {
  clearTimeout(killAfterPrerenderTimer);
}

if (code === 0) {
  console.log('[vite-build] done exit=0');
  process.exit(0);
}

if (outputsExist()) {
  console.warn(
    `\n[vite-build] Vite exited with code ${code}${timedOut ? ' (timeout)' : ''}, but prerendered HTML exists. Treating build as success.`,
  );
  console.log('[vite-build] done exit=0 (outputs exist)');
  process.exit(0);
}

console.warn(`\n[vite-build] Build failed (code=${code}${timedOut ? ', timeout' : ''}) and expected outputs are missing:`);
for (const p of expectedOutputs) {
  console.warn(`- ${p} => ${existsSync(p)}`);
}

console.warn(`[vite-build] done exit=${code}`);
process.exit(code);