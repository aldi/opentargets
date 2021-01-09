import React from 'react';
import ChartsRow from '../ChartsRow/ChartsRow';

function DataTableRow({ data }) {
  const [expandRow, setExpandRow] = React.useState(false);

  return (
    <>
      <tr>
        <td className="expandButton has-text-centered" onClick={() => setExpandRow(!expandRow)}>
          {expandRow ? '-' : '+'}
        </td>
        <td>{data.target.gene_info.symbol}</td>
        <td>{data.target.id}</td>
        <td>{data.target.gene_info.name}</td>
        <td>{data.association_score.overall}</td>
      </tr>

      {expandRow && (
        <tr>
          <td colSpan={5}>
            <div className="columns py-4">
              <ChartsRow data={data} />
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

export default DataTableRow;
