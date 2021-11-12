import React, { Component } from 'react';
import { Domicilio, Empresa, Representante } from './components/index';
import Util from './Helpers/Util';

export default class App extends Component {
  constructor() {
    super();
    this.language = localStorage.language;
    this.state = {
      tStep: 1,
      disableNext: false,
      data: {},
    };
  }

  nextStep = (isNext) => {
    const { tStep, disableNext, data: D } = this.state;

    // Se verifica si se esta en el paso uno o en algun otro y se obtiene la información del componente Step
    const stepRef = this[`step${tStep}Ref`];
    if (!stepRef)
      return Util.getMsnDialog('warning', 'Imposible to get Stepper Instance!');
    const { data, error } = stepRef.getDataForm();
    console.log(data, error);
    if (error) return;
    let dataT = Object.assign({}, D, data);
    this.setState({ tStep: tStep + 1, data: dataT });
  };

  render() {
    let { tStep, disableNext } = this.state;
    return (
      <div className="row">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-content">
              {tStep == 1 && <Empresa onRef={(ref) => (this.step1Ref = ref)} />}
              {tStep == 2 && (
                <Domicilio onRef={(ref) => (this.step2Ref = ref)} />
              )}
              {tStep == 1 && (
                <Representante onRef={(ref) => (this.step3Ref = ref)} />
              )}
            </div>
            <div className="card-action">
              {tStep > 1 && (
                <a
                  className="btn-floating btn-small"
                  onClick={() => this.nextStep(false)}
                >
                  <i className="material-icons prefix">arrow_back</i>
                </a>
              )}
              <span> </span>
              <a
                className="btn-floating btn-small"
                onClick={() => this.nextStep(true)}
              >
                <i className="material-icons prefix">arrow_forward</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
