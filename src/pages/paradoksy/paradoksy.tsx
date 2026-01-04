import Navbar from "../../components/navbar";
import logo from "../../assets/mathLox_icon.png"
import Paradoks_coastline from "@/components/paradoksy/paradoks_coastline";
import Paradoks_galileo from "@/components/paradoksy/paradoks_galileo";

export default function Sofizmaty() {
    return (
        <>
            <div className="">
                <Navbar logoSrc={logo} title="/Paradoksy" />
                <Paradoks_coastline />
                <Paradoks_galileo />
            </div>
        </>
    )
}