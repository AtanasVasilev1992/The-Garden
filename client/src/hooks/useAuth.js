import { login, logout, register } from "/src/api/auth-api.js";
import { useAuthContext } from "/src/context/authContext.jsx";

export const useLogin = () => {
  const { changeAuthState } = useAuthContext();

  const loginHandler = async (email, password) => {
    try {
      const { password: _, ...authData } = await login(email, password);
      changeAuthState(authData);
      return authData;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  return loginHandler;
};

export const useRegister = () => {
  const { changeAuthState } = useAuthContext();

  const registerHandler = async (email, password) => {
    try {
      const { password: _, ...authData } = await register(email, password);
      changeAuthState(authData);
      return authData;
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  };

  return registerHandler;
};

export const useLogout = () => {
  const { logout: localLogout } = useAuthContext();

  const logoutHandler = async () => {
    try {
      await logout();
      localLogout();
    } catch (error) {
      console.error("Logout failed:", error);  
      if (error.code === 403) {
        console.error("User session does not exist. Clearing local state and redirecting to login...");
        localLogout();
       
      }
    }
  };

  return logoutHandler;
};
