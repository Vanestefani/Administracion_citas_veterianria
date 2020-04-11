import React , {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import Formulario from './componentes/Formulario';
import Header from './componentes/Header';
import Cita from './componentes/Cita';

function App() {
  return (
    <Fragment>
    <div className="App">
<Header></Header>
<div className="row">
<div class="col-md-6">
<Formulario></Formulario>
    </div>
    <div class="col-md-6">
<Cita></Cita>
    </div>
    </div>
    </div>

    </Fragment>
  );
}

export default App;
