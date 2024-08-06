import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";

export default function GuestGuard() {
    const { isAuthenticated } = useAuthContext();

    return isAuthenticated
        ? <Navigate to="/" />
        : <Outlet />
};