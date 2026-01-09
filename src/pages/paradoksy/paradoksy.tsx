import Navbar from "../../components/navbar";
import logo from "../../assets/mathLox_icon.png"
import Paradoks_coastline from "@/components/paradoksy/paradoks_coastline";
import Paradoks_galileo from "@/components/paradoksy/paradoks_galileo";
import { useSeo } from "@/seo/useSeo";
import { StructuredData } from "@/seo/structuredData";

export default function Paradoksy() {
    useSeo("/paradoksy");

    return (
        <>
            <div className="">
                <Navbar logoSrc={logo} title="/Paradoksy" />
                <main id="main-content" aria-label="Paradoksy matematyczne">
                    <StructuredData pathname="/paradoksy" />
                    <h1 className="sr-only">Paradoksy matematyczne</h1>
                <Paradoks_coastline />
                <Paradoks_galileo />
                </main>
            </div>
        </>
    )
}