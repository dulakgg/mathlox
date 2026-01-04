import Navbar from "../../components/navbar";
import logo from "../../assets/mathLox_icon.png" //import logo from "../../assets/react.svg"
import { useRef, useEffect, useState } from "react"
import { motion} from 'framer-motion'




export default function Sofizmaty() {
    const resolution = [3, 5, 7, 9, 11, 13];

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const labelRef = useRef<HTMLLabelElement | null>(null);

    var idx = useRef(0);
    const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

    const drawNgon = (n: number, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        const r = canvasSize.width / 2 * 0.9;
        ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);

        ctx.beginPath();
        for (let i = 0; i <= 360; i++) {
            const angle = (i / 360) * Math.PI * 2;
            const x = centerX + Math.cos(angle) * r;
            const y = centerY + Math.sin(angle) * r;
            if (i == 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = "gray";
        ctx.lineWidth = 5;

        ctx.stroke();

        ctx.beginPath();

        for (let i = 0; i <= n; i++) {
            const angle = (i / n) * Math.PI * 2;
            const x = centerX + Math.cos(angle) * r;
            const y = centerY + Math.sin(angle) * r;
            if (i == 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }

        ctx.strokeStyle = "black";
        ctx.lineWidth = 10;

        ctx.stroke();
    }

    const draw = (change: boolean) => {
        const canvas = canvasRef.current;
        if (!canvas) throw new Error("fuck, canvas not found!");
        if (!labelRef.current) throw Error("fuck, label not found!");
        const ctx = canvas.getContext("2d")
        if (!ctx) throw new Error("2d context not supported, you 1d?");

        if (idx.current >= resolution.length) idx.current = 0;
        drawNgon(resolution[idx.current], ctx, canvas);
        const circumference = (2 * resolution[idx.current] * 100 * Math.sin(Math.PI / resolution[idx.current]))
        const str = circumference.toString();
        labelRef.current.textContent = "Obwód = " + str.slice(0, str.indexOf('.', 0));
        if (change) idx.current++;
    }

    useEffect(() => {
        const updateSize = () => {
            const width = window.innerWidth / 2;
            const height = window.innerHeight / 2;
            const size = Math.min(width, height);
            setCanvasSize({ width: size, height: size });
        };
        updateSize();

        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    useEffect(() => {
        if (canvasSize.width > 0) {
            draw(false);
        }
    }, [canvasSize])


    return (
        <>
            <div className="">
                <Navbar logoSrc={logo} title="/Paradoksy" />
                <div className="w-3/4 p-6 rounded-2xl shadow-xl flex flex-col items-center gap-4 border-8 border-black mx-auto mt-10 mb-10">
                    <div className="justify-center">
                        <motion.button
                            type="button"
                            aria-label="run animation"
                            onClick={() => { draw(true) }}
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.90 }}
                            className="mx-auto bg-gray-900 text-white px-5 py-3 rounded-2xl"
                        >Run animation</motion.button>
                        <label
                            id="label"
                            ref={labelRef}
                            className="w-full text-center mt-2"
                        >Obwód = </label>
                        <canvas
                            id="canvas"
                            ref={canvasRef}
                            width={canvasSize.width}
                            height={canvasSize.height}
                            style={{ display: "block", marginTop: "10px" }}
                        />
                    </div>

                </div>

                <div className="w-3/4 p-6 rounded-2xl shadow-xl flex flex-col items-center gap-4 border-8 border-black mx-auto mt-10 mb-10">
                    <h1 className="text-5xl font-extrabold">Paradoks Galileusza </h1>

                    <h2 className="text-3xl font-bold">Autor i czas:</h2>
                    <h3>
                        Paradoks został opisany przez Galileusza Galileiego w jego dziele “Rozmowy i dowodzenia matematyczne dotyczące dwóch nowych nauk” z 1638 roku. Był to okres, gdy Galileusz, już w podeszłym wieku i w konflikcie z Kościołem, podsumowywał swoje najważniejsze odkrycia naukowe.
                    </h3>

                    <h2 className="text-3xl font-bold">Na czym polega paradoks:</h2>

                    <h3>
                        Galileusz zauważył bardzo niezwykłą własność liczb naturalnych i liczb będących ich kwadratami (1, 4, 9, 16…).<br />
                        Z jednej strony:<br />
                        Liczb naturalnych jest „oczywiście” więcej, bo kwadraty pojawiają się rzadko:<br />
                        np. do 100 jest 100 liczb, ale tylko 10 kwadratów.<br /><br />

                        Intuicyjnie więc oczekujemy, że kwadratów jest mniej.<br />
                        Z drugiej strony:<br />

                        Galileusz wskazał, że możemy stworzyć doskonałą parę:<br />
                        każdej liczbie naturalnej odpowiada dokładnie jeden jej kwadrat:<br />
                        1 ↔ 1, 2 ↔ 4, 3 ↔ 9, 4 ↔ 16, …<br />

                        Jeśli między dwoma zbiorami da się stworzyć taką jednoznaczną parę (odpowiedniość 1:1), to w pewnym sensie mają tyle samo elementów.<br /><br />

                        To prowadzi do pozornie sprzecznego wniosku:<br />
                        O ile popatrzymy na liczby skończone, kwadratów jest mniej;<br />
                        ale w nieskończoności — jest ich tyle samo co liczb naturalnych.<br />

                    </h3>
                    <h2 className="text-3xl font-bold">Co to ujawniło o nieskończoności: </h2>
                    <h3>Galileusz jako jeden z pierwszych zauważył, że nieskończone zbiory nie zachowują się tak jak zbiory skończone. Paradoks ten zasygnalizował, że intuicje z liczb skończonych zawodzą i że do badania nieskończoności potrzebne są nowe pojęcia i narzędzia matematyczne. Dopiero 250 lat później Georg Cantor stworzył pełną teorię mocy zbiorów, która wyjaśniła takie zjawiska. </h3>
                </div>
            </div>
        </>
    )
}