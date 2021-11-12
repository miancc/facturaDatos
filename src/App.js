import React from 'react';
import Domicilio from './components/Domicilio';
import Empresa from './components/Empresa';

export default function App() {
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card">
          <div className="card-content">
            <Empresa />
          </div>
          <div className="card-action">
            <a className="btn-floating btn-small">
              <i className="material-icons prefix">arrow_back</i>
            </a>
            <span> </span>
            <a className="btn-floating btn-small">
              <i className="material-icons prefix">arrow_forward</i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
