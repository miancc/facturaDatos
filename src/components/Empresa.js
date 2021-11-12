import React, { Component, Fragment } from 'react';

export default class Empresa extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        <span className="card-title">Empresa</span>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input id="razon_social" type="text" className="validate" />
              <label for="razon_social">Razon Social</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8">
              <input id="nombre_comercial" type="text" className="validate" />
              <label for="nombre_comercial ">Nombre comercial </label>
            </div>

            <div className="input-field col s4">
              <input id="nacionalidad" type="text" className="validate" />
              <label for="nacionalidad">Nacionalidad</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input id="fecha_constitución" type="date" className="validate" />
              <label for="fecha_constitución">Fecha de constitución</label>
            </div>

            <div className="input-field col s6">
              <input id="rfc" type="text" className="validate" />
              <label for="rfc">RFC</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input id="regimen_fiscal" type="text" className="validate" />
              <label for="regimen_fiscal ">Régimen Fiscal</label>
            </div>
            <div className="input-field col s6">
              <input id="industria" type="text" className="validate" />
              <label for="industria">Industria</label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
