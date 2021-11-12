import React, { Component, Fragment } from 'react';

export default class Domicilio extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title } = this.props;
    return (
      <div className="row">
        <span className="card-title">{title}</span>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input id="calle" type="text" className="validate" />
              <label for="calle">Calle</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s4">
              <input id="num_ext" type="text" className="validate" />
              <label for="num_ext">Num Ext</label>
            </div>

            <div className="input-field col s4">
              <input id="num_int" type="text" className="validate" />
              <label for="num_int">Num Int</label>
            </div>

            <div className="input-field col s4">
              <input id="cp" type="number" className="validate" />
              <label for="cp">C.P</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input id="colonia" type="text" className="validate" />
              <label for="colonia">Colonia</label>
            </div>

            <div className="input-field col s6">
              <input id="ciudad" type="text" className="validate" />
              <label for="ciudad">Ciudad</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input id="estado" type="text" className="validate" />
              <label for="estado">Estado</label>
            </div>
            <div className="input-field col s6">
              <input id="pais" type="text" className="validate" />
              <label for="pais">Pais</label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
