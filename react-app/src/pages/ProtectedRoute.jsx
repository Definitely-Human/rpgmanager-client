import { Navigate } from "react-router-dom";
import { getUserFromLocalStorage } from "../utils/localStorage";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
    const user = getUserFromLocalStorage();
    if (!user) {
        return <Navigate to="/" />;
    }
    return children;
};

ProtectedRoute.propTypes = {
    children: PropTypes.element,
};

export default ProtectedRoute;
