import { useContext } from "react";
import { AuthProviderContext } from "../components/AuthContext";
import { Navigate } from "react-router-dom";


const SecretRoutes = ({children}) => {

    const {user,loading} = useContext(AuthProviderContext);

    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>
    }

    if(user){
        return children;
    }

    // user na thakle login e jabe
    return (
        <Navigate to='/login'></Navigate>
    );
};

export default SecretRoutes;