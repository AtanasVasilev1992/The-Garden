import { Route, Routes } from "react-router-dom"

import { AuthContextProvider } from "./context/authContext"

import PrivateGuard from "./componnents/common/PrivateGuard"
import GuestGuard from "./componnents/common/GuestGuard"

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
import Fruits from "./componnents/fruits/Fruits"
import Vegetables from "./componnents/vegetables/Vegetables"
import AddFruit from "./componnents/addFruit/AddFruit"
import AddVegetable from "./componnents/addVegetable/AddVegetable"
import NotFound from "./componnents/notFound/NotFound"
import EditVegetable from "./componnents/editVegetable/EditVegetable"
import DetailsFruit from "./componnents/detailsFruit/DetailsFruit"
import DetailsVegetable from "./componnents/detailsVegetable/DetailsVegetable"
import EditFruit from "./componnents/editFruit/editFruit"


function App() {
    return (
        <AuthContextProvider >
            <div className="box">
                <Topbar />

                <Navbar />

                <div className="main-content">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/fruits' element={<Fruits />} />
                        <Route path='/fruits/:fruitId/edit' element={<EditFruit />} />
                        <Route path='/fruits/:fruitId/details' element={<DetailsFruit />} />
                        <Route path='/vegetables' element={<Vegetables />} />
                        <Route path='/vegetables/:vegetableId/edit' element={<EditVegetable />} />
                        <Route path='/vegetables/:vegetableId/details' element={<DetailsVegetable />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/services' element={<Services />} />
                        <Route path='/features' element={<Features />} />
                        <Route path='/team' element={<Team />} />
                        <Route path='/blog' element={<Blog />} />
                        <Route element={<GuestGuard />}>
                            <Route path='/login' element={<Login />} />
                            <Route path='/register' element={<Register />} />
                        </Route>
                        <Route element={<PrivateGuard />}>
                            <Route path='/fruits/create' element={<AddFruit />} />
                            <Route path='/vegetables/create' element={<AddVegetable />} />
                            <Route path='/logout' element={<Logout />} />
                        </Route>
                        <Route path="/not-found" element={<NotFound />} />
                        <Route path="/*" element={<NotFound />} />
                    </Routes>
                </div>

                <Footer />
            </div>
        </AuthContextProvider>
    )
}

export default App
