import Navbar from "../../components/navbar";
import logo from "../../assets/react.svg"
import Sofizmat1 from "@/components/sofizmaty/sofizmat1";

export default function Sofizmaty() {
    return (
        <>
            <div className="">
                <Navbar logoSrc={logo} title="/Sofizmaty" />
                <Sofizmat1 />
            </div>
        </>
    )
}