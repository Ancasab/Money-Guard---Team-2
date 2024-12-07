// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshThunk } from './redux/Auth/operations';
import { selectIsRefreshing, selectIsLoggedIn } from './redux/Auth/selectors';

// Import rute
import PublicRoute from './routes/PublicRoute';

// Import pagini
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // Refresh token
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  // Redirecționare la login
  useEffect(() => {
    console.log('isRefreshing:', isRefreshing);
    console.log('isLoggedIn:', isLoggedIn);

    if (!isRefreshing && !isLoggedIn) {
      navigate('/login');
    }
  }, [isRefreshing, isLoggedIn, navigate]);

  // Loader temporar în timpul verificării autentificării
  if (isRefreshing) {
    return <div>Loading...</div>; // Sau componenta Loader
  }

  return (
    <Routes>
      <Route
        path="login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="register"
        element={
          <PublicRoute>
            <RegistrationPage />
          </PublicRoute>
        }
      />
      <Route
        path="/"
        element={<Navigate to={isLoggedIn ? '/dashboard' : '/login'} />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;

// import { Routes, Route, Navigate } from "react-router-dom";
// // import PrivateRoute from "./routes/PrivateRoute";
// // import DashboardPage from "./pages/DashboardPage";

// import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
// import LoginPage from "./pages/LoginPage/LoginPage";
// import PublicRoute from "./routes/PublicRoute";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { refreshThunk } from "./redux/Auth/operations";

// const App = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(refreshThunk());
//   }, [dispatch]);

//   return (
//     <Routes>
//       <Route
//         path="login"
//         element={
//           <PublicRoute>
//             <LoginPage />
//           </PublicRoute>
//         }
//       />
//       <Route
//         path="register"
//         element={
//           <PublicRoute>
//             <RegistrationPage />
//           </PublicRoute>
//         }
//       />
//       {/* Rute private */}
//       {/* <Route
//         path="/dashboard"
//         element={
//           <PrivateRoute>
//             <DashboardPage />
//           </PrivateRoute>
//         }
//       /> */}

//       <Route path="*" element={<Navigate to="/" />} />
//     </Routes>
//   );
// };

// export default App;
