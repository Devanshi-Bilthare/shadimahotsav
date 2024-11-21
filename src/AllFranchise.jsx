import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllFranchise = () => {
  const [franchises, setFranchises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFranchises = async () => {
      try {
        const response = await axios.get('https://shadi-mahotsav-backend.vercel.app/api/franchise/all'); // Replace with your backend endpoint
        
        setFranchises(response.data.franchises);
      } catch (err) {
        setError('Failed to fetch franchises');
        console.error('Error fetching franchises:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFranchises();
  }, []);

  if (loading) {
    return <div>Loading franchises...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mt-4">
      <h2>All Franchises</h2>
      {franchises?.length === 0 ? (
        <p>No franchises found.</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Code</th>
              <th>Mobile Number</th>
              <th>State</th>
              <th>City</th>
              <th>Upline Of</th>
              <th>Referred By</th>
            </tr>
          </thead>
          <tbody>
            {franchises?.map((franchise, index) => (
              <tr key={franchise._id}>
                <td>{index + 1}</td>
                <td>{franchise.name}</td>
                <td>{franchise.code}</td>
                <td>{franchise.mobileNumber}</td>
                <td>{franchise.state}</td>
                <td>{franchise.city}</td>
                <td>{franchise.uplineOf ? franchise.uplineOf.code : 'N/A'}</td>
                <td>{franchise.refBy ? franchise.refBy.code : 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllFranchise;
