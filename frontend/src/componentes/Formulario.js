import React, { Fragment, useState } from "react";

const Formulario = () => {
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });
  //funcion cuando se escribe
  const actualizarState = e => {
    actualizarCita({
        ...cita,
        [e.target.name]:e.target.value
    })
 // Extraer los valores
  };
  const { mascota, propietario, fecha, hora, sintomas } = cita;
  const submitCita = e => {

  }
  return (
    <Fragment>
      <div className="container">
        <h1>Añadir cita</h1>
        <form className="form-group"
        onSubmit={submitCita}
        >

          <label>Nombre Mascota</label>
          <input
            type="text"
            name="mascota"
            className="form-control"
            placeholder="Nombre Mascota"
            onChange={actualizarState}
            value={mascota}
          />

          <label>Nombre Dueño</label>
          <input
            type="text"
            name="propietario"
            className="form-control"
            placeholder="Nombre  Dueño de la mascota"
            onChange={actualizarState}
            value={propietario}
          />

          <label>Fecha</label>
          <input
            type="date"
            name="fecha"
            className="form-control"
            onChange={actualizarState}
              value={fecha}
          />

          <label>Hora</label>
          <input
            type="time"
            name="hora"
            className="form-control"
            onChange={actualizarState}
              value={hora}
          />

          <label>Síntomas</label>
          <textarea
            className="form-control"
            name="sintomas"
            onChange={actualizarState}
              value={sintomas}
          ></textarea>

          <button type="submit" className="btn btn-primary">
            Agregar Cita
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Formulario;
