import { useAppSelector } from '../../../redux/hooks';
import WithSpinner from '../../with-spinner/with-spinner.component';
import Trending from './trending.component';

const TrendingContainer: React.FC = () => {
  const isLoading = useAppSelector((state) => state.trending.loading);

  return WithSpinner(Trending)(isLoading);
};

export default TrendingContainer;
