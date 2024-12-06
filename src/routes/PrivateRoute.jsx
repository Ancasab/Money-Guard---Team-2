import { useSelector } from 'react-redux';
import { Navigate }  from "react-router-dom";
import { selectIsLoggedIn } from '../redux/Auth/selectors';

function PrivateRoute({ children }) {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return isLoggedIn ? children : <Navigate to='/login' />;
}

export default PrivateRoute;