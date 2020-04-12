import React, { Fragment, useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Formulario from "./componentes/Formulario";
import Header from "./componentes/Header";
import Citas from "./componentes/Citas";

function App() {
  //arreglo citas
  const [citas, guardarCitas] = useState([]);
  //Agregar citas
  const crearCitas = (cita) => {
    guardarCitas([...citas, cita]);
  };
  //Eliminar citas
  // Función que elimina una cita por su id
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    guardarCitas(nuevasCitas);
  };
  // Mensaje condicional
  const titulo = citas.length === 0 ? "No hay citas" : "Administra tus Citas";
  //citas local strorage
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }
  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem("citas"));

    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas]);

  return (
    <Fragment>
      <div className="App">
        <Header></Header>
        <div className="row">
          <div class="col-md-6">
            <Formulario crearCitas={crearCitas}></Formulario>
          </div>
          <div class="col-md-6">
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Citas
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              ></Citas>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
