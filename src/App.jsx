// import { Navigate, Route, Routes } from 'react-router-dom';

import AddTransactionForm from 'components/AddTransactionForm/AddTransactionForm';
import TransactionsItem from 'components/TransactionItem/TransactionItem';
import TransactionsList from 'components/TransactionList/TransactionList';

// import './App.css';

// import PublicRoute from './routes/PublicRoute';

// import LoginPage from './pages/LoginPage/LoginPage';
// import RegistrationPage from './pages/RegistrationPage/RegistrationPage';

// function App() {
//     return (
//         <div className="app">
//             <Routes>
//                 <Route
//                     path="login"
//                     element={
//                         <PublicRoute>
//                             <LoginPage />
//                         </PublicRoute>
//                     }
//                 />
//                 <Route
//                     path="register"
//                     element={
//                         <PublicRoute>
//                             <RegistrationPage />
//                         </PublicRoute>
//                     }
//                 />
//                 <Route path="*" element={<Navigate to="login" />} />
//             </Routes>
//         </div>
//     );
// }

// export default App;

// import { Navigate, Route, Routes } from 'react-router-dom';
// import { refreshThunk } from './redux/Auth/operations';
// import { useDispatch, useSelector } from 'react-redux';
// import { lazy, useEffect } from 'react';

// import useMedia from './hooks/useMedia';
// import './App.css';

// import PublicRoute from './routes/PublicRoute';
// import PrivateRoute from './routes/PrivateRoute';
// import DashboardPage from './pages/DashboardPage/DashboardPage';
// import LoginPage from './pages/LoginPage/LoginPage';
// import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
// import clsx from 'clsx';
// import { selectIsAddModalOpen, selectIsEditModalOpen } from './redux/Modals/slice';

// const Home = lazy(() => import('./components/Home/Home'));
// const Statistics = lazy(() => import('./components/Statistics/Statistics'));
// const Balance = lazy(() => import('./components/Balance/Balance'));
// const Currency = lazy(() => import('./components/Currency/Currency'));

// function App() {
//     const dispatch = useDispatch();
//     useEffect(() => {
//         dispatch(refreshThunk());
//     }, [dispatch]);

//     const { isMobile } = useMedia();

//     const isEditOpen = useSelector(selectIsEditModalOpen);
//     const isAddOpen = useSelector(selectIsAddModalOpen);

//     return (
//         <div className={clsx('app', isEditOpen || isAddOpen && 'block-scroll')}>
//             <Routes>
//                 <Route
//                     path="/"
//                     element={
//                         <PrivateRoute>
//                             <DashboardPage />
//                         </PrivateRoute>
//                     }
//                 >
//                     <Route
//                         index
//                         element={
//                             isMobile ? (
//                                 <>
//                                     <Balance />
//                                     <Home />
//                                 </>
//                             ) : (
//                                 <Home />
//                             )
//                         }
//                     />
//                     <Route path="statistics" element={<Statistics />} />
//                     <Route path="currency" element={isMobile ? <Currency /> : <Navigate to="/" />} />
//                 </Route>
//                 <Route
//                     path="login"
//                     element={
//                         <PublicRoute>
//                             <LoginPage />
//                         </PublicRoute>
//                     }
//                 />
//                 <Route
//                     path="register"
//                     element={
//                         <PublicRoute>
//                             <RegistrationPage />
//                         </PublicRoute>
//                     }
//                 />

//                 <Route path="*" element={<Navigate to="/" />}></Route>
//             </Routes>
//         </div>
//     );
// }

// export default App;

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
    >
      <TransactionsList />

      <AddTransactionForm />
    </div>
  );
};

export default App;
