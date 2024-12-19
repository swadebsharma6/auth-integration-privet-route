import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivetRoutes = ({children}) => {

      const {user, loading} = useContext(AuthContext);

      if(loading){
            return <div className="text-center my-4"><span className="loading text-primary loading-infinity loading-lg"></span></div>
      }

      if(user){
            return children;
      }

      return <Navigate to='/login'></Navigate>
};

export default PrivetRoutes;