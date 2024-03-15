import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_EXAMPLE } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_EXAMPLE, {
    fetchPolicy: "no-cache"
  });

  const dataList = data?.data || [];

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to the Homepage!</h1>
      </div>
      <Link to={{ pathname: `/page1` }}>
        Click here to go to Page1
      </Link>
      <div className="card-footer text-center m-3">
        <h2>This is the Footer!</h2>
      </div>
    </div>
  );
};

export default Home;
