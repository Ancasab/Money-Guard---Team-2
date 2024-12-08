import { Routes, Route } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { refreshThunk } from "./redux/Auth/operations";
// import { selectIsRefreshing } from "./redux/Auth/selectors";
//import DashboardPage from "pages/DashboardPage/DashboardPage";
// import Navigation from "./components/Navigation/Navigation"
// import Currency from "components/Currency/Currency";
// import Balance from "components/Balance/Balance";
import SharedLayout from "components/Currency/SharedLayout";
import CurrencyPage from "components/Currency/CurrencyPage";

const App = () => {
    // const dispatch = useDispatch();
    // const isRefreshing = useSelector(selectIsRefreshing);

    // useEffect(() => {
    //     dispatch(refreshThunk());
    // }, [dispatch]);

    // if (isRefreshing) {
    //     return <div>Loading...</div>;
    // }

    return (
        <Routes>
     
            <Route path="/" element={<SharedLayout />} />
            <Route path="/currency" element={<CurrencyPage />} />
        </Routes>
    );
};

export default App;