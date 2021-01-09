import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import DataTableRow from '../DataTableRow/DataTableRow';

const URL = 'https://demo6922545.mockable.io';

function DataTable() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data using Axios
  async function fetchResults() {
    setIsLoading(true);
    try {
      const response = await Axios.get(URL); // Axios request
      // Sort data in descending order
      const sortedData = response.data.data
        .slice(0, 5)
        .sort((a, b) => b.association_score.overall - a.association_score.overall);
      setData(sortedData);
      setIsLoading(false);
    } catch (e) {
      throw new Error(e);
    }
  }

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <>
      {!isLoading && (
        <table className="table is-responsive is-striped is-bordered">
          <thead>
            <tr>
              <th />
              <th>Symbol</th>
              <th>Gene ID</th>
              <th>Gene Name</th>
              <th>Overall Association Score</th>
            </tr>
          </thead>

          {data && (
            <tbody>
              {data.map((item) => (
                <DataTableRow key={item.id} data={item} />
              ))}
            </tbody>
          )}
        </table>
      )}

      {isLoading && <p>Please wait...</p>}
    </>
  );
}

export default DataTable;
