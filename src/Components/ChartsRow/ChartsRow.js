import React from 'react';
import RadarChart from '../Charts/RadarChart';
import BarChart from '../Charts/BarChart';

const title = 'Association Score vs Data Types';
const labels = [
  'literature',
  'rna_expression',
  'genetic_association',
  'somatic_mutation',
  'known_drug',
  'animal_model',
  'affected_pathway',
];

function ChartRow({ data }) {
  const {
    literature,
    rna_expression,
    genetic_association,
    somatic_mutation,
    known_drug,
    animal_model,
    affected_pathway,
  } = data.association_score.datatypes;
  const values = [
    literature,
    rna_expression,
    genetic_association,
    somatic_mutation,
    known_drug,
    animal_model,
    affected_pathway,
  ];
  return (
    <>
      <div className="column is-6">
        <BarChart labels={labels} title={title} values={values} />
      </div>
      <div className="column is-6">
        <RadarChart labels={labels} title={title} values={values} />
      </div>
    </>
  );
}

export default ChartRow;
