import Navbar from "../../components/navbar";
import logo from "../../assets/react.svg"
import Sofizmat1 from "@/components/sofizmaty/sofizmat1";
import Sofizmat2 from "@/components/sofizmaty/sofizmat2";


export default function Sofizmaty() {
    return (
        <>
            <div className="">
                <Navbar logoSrc={logo} title="/Sofizmaty" />
                <Sofizmat1 />
                <Sofizmat2 />
            </div>
        </>
    )
}