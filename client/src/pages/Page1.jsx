import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_EXAMPLE } from '../utils/queries';

function Page1() {
    // grab data from example DB
    const { loading, data } = useQuery(QUERY_EXAMPLE, {
        fetchPolicy: "no-cache"
    });

    return (
        <div className="card-body m-5">
            <h2>Page 1!</h2>
            {/* while loading, display below div */}
            {loading ? (
                <div>Loading...</div>
            ) : (
                // once loaded, map through data and display the name of each item in a <p>
                <ul className="square">
                    {data.map((data) => {
                        return (
                            <li key={data._id}>
                                <p>{`${data.name}`}</p>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}

export default Page1;