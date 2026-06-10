import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./assets/components/auth-store";

const ProtectedRoute = ({ children }) => {
  const authCtx = useContext(AuthContext);
  console.log('ProtectedRoute check - isLoggedIn:', authCtx.isLoggedIn, 'token:', authCtx.token);

  if (!authCtx.isLoggedIn) {
    console.log('Not logged in, redirecting to /Auth');
    return <Navigate to="/Auth" replace />;
  }

  return children;
};

export default ProtectedRoute;