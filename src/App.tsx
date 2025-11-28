import { Route, Routes } from "react-router-dom";
import Sofizmaty from "./pages/sofizmaty/sofizmaty.tsx";
import Paradoksy from "./pages/paradoksy/paradoksy.tsx";
import Home from "./pages/home.tsx";

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