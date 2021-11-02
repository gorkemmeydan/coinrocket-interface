import { useAppSelector } from '../../../redux/hooks';
import WithSpinner from '../../with-spinner/with-spinner.component';
import MiniNews from './mini-news.component';

const MiniNewsContainer: React.FC = () => {
  const isLoading = useAppSelector((state) => state.news.loading);

  return WithSpinner(MiniNews)(isLoading);
};

export default MiniNewsContainer;
