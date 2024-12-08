// DashboardPage Component
//import { Outlet } from 'react-router-dom';
//import { Suspense } from 'react';
// import { useSelector } from 'react-redux';

// import useMedia from '../../hooks/useMedia';
// import { selectIsEditModalOpen, selectIsAddModalOpen } from '../../redux/Modals/slice';

import s from './DashboardPage.module.css';
//import Header from '../../components/Header/Header';
//import Loader from '../../components/Loader/Loader';
// import ModalEditTransaction from '../../components/ModalEditTransaction/ModalEditTransaction';
// import ModalAddTransaction from '../../components/ModalAddTransaction/ModalAddTransaction';
import Navigation from '../../components/Navigation/Navigation';
import Balance from '../../components/Balance/Balance';
import Currency from '../../components/Currency/Currency';

function DashboardPage() {
   // const { isMobile } = useMedia();

    // const isEditOpen = useSelector(selectIsEditModalOpen) || false;
    // const isAddOpen = useSelector(selectIsAddModalOpen) || false;

    return (
        <div>
            {/* <Header />
            {isMobile && <Navigation />} */}
            {/* {isAddOpen && <ModalAddTransaction />}
            {isEditOpen && <ModalEditTransaction />} */}


                    <Navigation />
                    <Balance />
                    <Currency />
                
                {/* <div className={s.column}>
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </div> */}
        </div>
    );
}

export default DashboardPage;