import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useLogout } from "../../hooks/useAuth";

export default function Logout() {
    const logout = useLogout();
    const [isLoggedOut, setIsLoggedOut] = useState(false);

    useEffect(() => {
        const performLogout = async () => {
            try {
                await logout();
            } catch (error) {
                if (error.code === 403) {
                    console.error("User session does not exist. Clearing local state and redirecting to login...");
                } else {
                    console.error("Logout failed:", error);
                }
            } finally {
                setIsLoggedOut(true);
            }
        };

        performLogout();
    }, [logout]);

    if (isLoggedOut) {
        return <Navigate to='/' />;
    }

    return <p>Logging out...</p>;
}