import { Route, Routes } from "react-router-dom";
import Sofizmaty from "./pages/sofizmaty/sofizmaty.tsx";
import Paradoksy from "./pages/paradoksy/paradoksy.tsx";
import Home from "./pages/home.tsx";
import { PrerenderReady } from "./seo/prerenderReady";

export default function App() {
  return (
    <>
      <PrerenderReady />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sofizmaty" element={<Sofizmaty />} />
        <Route path="/paradoksy" element={<Paradoksy />} />
      </Routes>
    </>
  )
}