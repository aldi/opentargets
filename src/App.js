import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './Components/Error/ErrorFallback';
import DataTable from './Components/DataTable/DataTable';

function App() {
  return (
    <section className="section">
      <div className="column is-8-widescreen mx-auto">
        <p className="title is-3 has-text-weight-bold p-2">Genes associated with lung carcinoma</p>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <DataTable />
        </ErrorBoundary>
      </div>
    </section>
  );
}

export default App;
