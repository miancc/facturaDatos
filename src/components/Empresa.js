import React, { Component, Fragment } from 'react';
import Util from '../Helpers/Util';

export default class Empresa extends Component {
  constructor(props) {
    super(props);
    this.form = null;
  }

  // #region ------------------------------------------------> "COMPONENT" //
  componentDidMount() {
    this.form = document.getElementById('form-empresa');
    if (typeof this.props.onRef === 'function') this.buildRef();
  }

  /**
   * Función que asigna las funciones a las que tendra acceso la referencia del componente
   **/
  buildRef = () => {
    const { onRef } = this.props;
    onRef({
      getDataForm: this.getDataForm,
      resetForm: () => this.form && this.form.reset(),
    });
  };
  // #endregion --------------------------------------------------------> //

  /**
   * Función que recupera la información del formulario y la retorna
   */
  getDataForm = () => {
    // Si no se encuentra forumlario, se informa y se retorna error
    if (!this.form) {
      Util.getMsnDialog('warning', 'Form not found');
      return { data: {}, error: true };
    }
    return Util.getValidateDataForm(this.form, true);
  };
  render() {
    return (
      <div className="row">
        <span className="card-title">
          <h4>Empresa</h4>
        </span>
        <form id="form-empresa" className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input
                id="razon_social"
                name="razon_social"
                type="text"
                className="validate"
                required
              />
              <label for="razon_social">Razon Social</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8">
              <input
                id="nombre_comercial"
                name="nombre_comercial"
                type="text"
                className="validate"
                required
              />
              <label for="nombre_comercial ">Nombre comercial </label>
            </div>

            <div className="input-field col s4">
              <input
                id="nacionalidad"
                name="nacionalidad"
                type="text"
                className="validate"
                required
              />
              <label for="nacionalidad">Nacionalidad</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input
                id="fecha_constitución"
                name="fecha_constitución"
                type="date"
                className="validate"
                required
              />
              <label for="fecha_constitución">Fecha de constitución</label>
            </div>

            <div className="input-field col s6">
              <input
                id="rfc"
                name="rfc"
                type="text"
                className="validate"
                required
              />
              <label for="rfc">RFC</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input
                id="regimen_fiscal"
                name="regimen_fiscal"
                type="text"
                className="validate"
                required
              />
              <label for="regimen_fiscal ">Régimen Fiscal</label>
            </div>
            <div className="input-field col s6">
              <input
                id="industria"
                name="industria"
                type="text"
                className="validate"
                required
              />
              <label for="industria">Industria</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input
                id="telefonico"
                name="telefonico"
                type="text"
                className="validate"
              />
              <label for="telefonico">Telefónico</label>
            </div>
            <div className="input-field col s6">
              <input
                id="correo"
                name="correo"
                type="email"
                className="validate"
                required
              />
              <label for="correo">Correo</label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
