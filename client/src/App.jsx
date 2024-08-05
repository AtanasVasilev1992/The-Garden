import { Route, Routes } from "react-router-dom"

import { AuthContextProvider } from "./context/authContext"

import About from "./componnents/about/About"
import Blog from "./componnents/blog/Blog"
import Home from "./componnents/home/Home"
import Features from "./componnents/features/Features"
import Footer from "./componnents/footer/Footer"
import Navbar from "./componnents/navbar/Navbar"
import Topbar from "./componnents/topbar/Topbar"
import Login from "./componnents/login/Login"
import Register from "./componnents/register/Register"
import Services from "./componnents/services/Services"
import Team from "./componnents/team/Team"
import Logout from "./componnents/logout/Logout"

function App() {
    return (
            <AuthContextProvider >
                <div className="box">
                    <Topbar />

                    <Navbar />

                    <div className="main-content">
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/services' element={<Services />} />
                            <Route path='/features' element={<Features />} />
                            <Route path='/team' element={<Team />} />
                            <Route path='/blog' element={<Blog />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/logout' element={<Logout />} />
                        </Routes>
                    </div>

                    <Footer />
                </div>
            </AuthContextProvider>
    )
}

export default App
