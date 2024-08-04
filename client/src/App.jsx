

import { Route, Routes } from "react-router-dom"
import About from "./componnents/about/About"
import Banner from "./componnents/banner/Banner"
import Blog from "./componnents/blog/Blog"
import Corusel from "./componnents/corusel/Corusel"
import Features from "./componnents/features/Features"
import Footer from "./componnents/footer/Footer"
import Navbar from "./componnents/navbar/Navbar"
import Topbar from "./componnents/topbar/Topbar"
import Services from "./services/Services"
import Team from "./team/Team"

function App() {
    return (
        <>
            <div className="box">
                <Topbar />

                <Navbar />

                <div className="main-content">
                    <Routes>
                        <Route path='/' element={<Corusel />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/services' element={<Services />} />
                        <Route path='/features' element={<Features />} />
                        <Route path='/team' element={<Team />} />
                        <Route path='/blog' element={<Blog />} />
                    </Routes>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default App
