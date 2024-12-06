import { useSelector } from 'react-redux';
import { Navigate }  from "react-router-dom";
import { selectIsLoggedIn } from '../redux/Auth/selectors';

function PublicRoute({ children }) {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return isLoggedIn ? <Navigate to="/" /> : children;
}

export default PublicRoute;