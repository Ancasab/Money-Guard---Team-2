import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import StatisticsPage from './StatisticsPage';
import { selectIsLoggedIn } from '../../redux/Auth/selectors';

const RestrictedStatisticsPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return <StatisticsPage />;
};

export default RestrictedStatisticsPage;
