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
            <Topbar />

            <Navbar />

            <Corusel />

            <Banner />

            <About />

            <Services />

            <Features />

            <Team />

            <Blog />

            <Footer />
            
        </>
    )
}

export default App
