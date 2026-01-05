import {useRef, useEffect, useState} from "react"
import {motion} from 'framer-motion'
import {TITLE, SECTION_TITLE, SECTION_TEXT, CARD} from "@/components/ui/format_tags.tsx";

export default function Paradoks_coastline() {
    const resolution = [3, 5, 7, 9, 11, 20];

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const labelRef = useRef<HTMLLabelElement | null>(null);

    const idx = useRef(0);
    const [canvasSize, setCanvasSize] = useState({width: 0, height: 0});

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

        if (change) idx.current++;
        if (idx.current >= resolution.length) idx.current = 0;
        drawNgon(resolution[idx.current], ctx, canvas);
        const circumference = (2 * resolution[idx.current] * Math.sin(Math.PI / resolution[idx.current]))
        const str = circumference.toLocaleString("pl-PL", {minimumFractionDigits: 3})
        labelRef.current.textContent = "Obwód = " + str.slice(0, str.indexOf('.', 0)) + " jednostek";
    }

    useEffect(() => {
        const updateSize = () => {
            const width = window.innerWidth / 2;
            const height = window.innerHeight / 2;
            const size = Math.min(width, height);
            setCanvasSize({width: size, height: size});
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
        <CARD>
            <TITLE className="text-5xl font-extrabold">Paradoks wybrzeża</TITLE>
            <SECTION_TITLE>Co to jest?</SECTION_TITLE>
            <SECTION_TEXT>
                Paradoks wybrzeża opisuje zaskakujące zjawisko polegające na tym, że linia brzegowa lądu nie ma jednej,
                obiektywnej długości. Został on odkryty przez Lewisa Fry’a Richardsona, który zauważył,
                że im dokładniej mierzymy wybrzeże, tym dłuższy wynik otrzymujemy. Nie wynika to z błędu pomiaru,
                lecz z samej natury linii brzegowej.
            </SECTION_TEXT>
            <br/>

            <SECTION_TITLE>Fraktalne wybrzeża</SECTION_TITLE>
            <SECTION_TEXT>
                Wybrzeża mają właściwości fraktalne – są bardzo nieregularne i pełne zakrętów na wielu skalach.
                Gdy używa się dużego „przyrządu” pomiarowego, np. długiego odcinka na mapie, pomija się drobne zatoki,
                półwyspy czy skały. Gdy natomiast zmniejsza się skalę pomiaru, zaczyna się uwzględniać coraz więcej
                szczegółów,
                przez co mierzona długość rośnie. W granicy, przy idealnie małej skali, długość dąży do nieskończoności.
            </SECTION_TEXT>
            <br/>

            <SECTION_TITLE>Wybrzeża Norwegii</SECTION_TITLE>
            <SECTION_TEXT>
                Klasycznym przykładem są fiordy wybrzeża Norwegii, gdzie ogromna liczba wąskich zatok sprawia,
                że wynik pomiaru silnie zależy od zastosowanej skali. Paradoks wybrzeża pokazuje więc,
                że pojęcie „długości” w przypadku obiektów naturalnych nie zawsze jest jednoznaczne
                i że matematyczne modele fraktalne lepiej opisują ich strukturę niż klasyczna geometria.
            </SECTION_TEXT>
            <br/>

            <SECTION_TITLE>Animacja</SECTION_TITLE>
            <SECTION_TEXT>
                Poniższa animacja pokazuje koncept zbliżony do paradoksu wybrzeża, natomiast z figurą o określonym obwodzie.
                W tym przypadku obwód mierzony (czarne linie) będzie zbliżał się do obwodu koła, nie do nieskończoności.
                Im mniejsze są nasze miarki, obwód bardziej zbliża się do prawdziwego obwodu, w kole - do pewnej liczby,
                a na wybrzeżu do nieskończoności. Animacja została wykonana w umownych "jednostkach".
            </SECTION_TEXT>
            <br/>

            <div className="flex justify-center items-center gap-4 border-6 border-gray-500 bg-gray-500 rounded-4xl p-4 mt-4">
                <motion.button
                    type="button"
                    aria-label="run animation"
                    onClick={() => {
                        draw(true)
                    }}
                    whileHover={{y: -5}}
                    whileTap={{scale: 0.90}}
                    className="mx-auto bg-gray-900 text-white px-5 py-3 rounded-2xl"
                >Kolejny pomiar
                </motion.button>
                <br/>
                <label
                    id="label"
                    ref={labelRef}
                    className="w-full justify-center mt-2"
                >Obwód = </label>
            </div>
            <canvas
                id="canvas"
                ref={canvasRef}
                width={canvasSize.width}
                height={canvasSize.height}
                style={{display: "block", marginTop: "10px"}}
            />
        </CARD>
    )
}