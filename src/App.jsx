import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Sofizmaty from "./pages/Sofizmaty.tsx";
import Paradoksy from "./pages/paradoksy.tsx";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sofizmaty" element={<Sofizmaty />} />
        <Route path="/paradoksy" element={<Paradoksy />} />
      </Routes>
    </>
  )
}