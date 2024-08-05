import { useAuthContext } from "../context/authContext";


export default function withAuth(Component) {
    const ComponnentWrapper = (props) => {
        const authContext = useAuthContext()
        return  <Component {...props} auth={authContext} />
    };

    return ComponnentWrapper;
};