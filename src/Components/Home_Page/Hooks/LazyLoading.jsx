import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../../Route/pages/Home"));
const About = lazy(() => import("../../Route/pages/About"));
const Contact = lazy(() => import("../../Route/pages/Contact"));

function LazyLoading() {
    return (
        <Suspense fallback={<h2>Loading Page...</h2>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<About />} />
            </Routes>
        </Suspense>
    );
}

export default LazyLoading;