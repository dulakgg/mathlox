import Navbar from "../../components/navbar";
import logo from "../../assets/react.svg"
import {useRef, useEffect, useState} from "react"
import { motion } from 'framer-motion'





export default function Sofizmaty() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const labelRef = useRef<HTMLLabelElement | null>(null);
    var idx = useRef(0);
    const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
    
    const draw = () => {
        const resolution = [3, 5, 7, 9, 11, 13];
        const canvas = canvasRef.current;
        if (!canvas) throw new Error("fuck, canvas not found!");
        if (!labelRef.current) throw Error("fuck, label not found!");
        const ctx = canvas.getContext("2d")
        if (!ctx) throw new Error("2d context not supported, you 1d?");

        const centerX = canvas.width/2;
        const centerY = canvas.height/2;

        const r = canvasSize.width/2*0.9;
        

        const drawNgon = (n: number) => {
            ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);
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
        
        if (idx.current >= resolution.length) idx.current = 0;
        drawNgon(resolution[idx.current]);
        const circumference =  (2 * resolution[idx.current] * 100 * Math.sin(Math.PI/resolution[idx.current]))
        const str = circumference.toString();
        labelRef.current.textContent = "Obwód = " + str.slice(0, str.indexOf('.', 0));
        idx.current++;
    }

    useEffect(() => {
        const updateSize = () => {
            const width = window.innerWidth / 2;
            const height = window.innerHeight / 2;
            const size = Math.min(width, height);
            setCanvasSize({ width:size, height:size });
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    
    return (
        <>
            <div className="">
                <Navbar logoSrc={logo} title="/Paradoksy" />
                <div className="w-3/4 p-6 rounded-2xl shadow-xl flex flex-col items-center gap-4 border border-black mx-auto mt-10">
                    <div className="justify-center">
                        <motion.button
                            type="button"
                            aria-label="run animation"
                            onClick={draw}
                            whileHover={{ y: -5}}
                            whileTap={{ scale: 0.90 }}
                            className="mx-auto bg-gray-900 text-white px-5 py-3 rounded-2xl"
                        >Run animation</motion.button>
                        <label
                            id="label"
                            ref={labelRef}
                            className= "w-full text-center mt-2"
                        >Obwód = </label>
                        <canvas
                            id="canvas"
                            ref={canvasRef}
                            width={canvasSize.width}
                            height={canvasSize.height}
                            style={{display: "block", marginTop: "10px" }}
                        />
                    </div>
                    
                </div>
            </div>
        </>
    )
}