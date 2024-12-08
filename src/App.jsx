export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    ></div>
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
