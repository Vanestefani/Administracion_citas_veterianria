import React, { Fragment, useState } from "react";
import uuid from "uuid/v4";
const Formulario = () => {
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });
  //error campor vacio
  const [error, actualizarError] = useState(false);

  //funcion cuando se escribe
  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };
  //Extraer datos
  const { mascota, propietario, fecha, hora, sintomas } = cita;
  const submitCita = (e) => {
    //impide que se envie por get
    e.preventDefault();

    console.log("enviando");
    //Validar
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      actualizarError(true);
      return;
    }
    // Eliminar el mensaje previo
    actualizarError(false);
    //Asignar  un id
    cita.id = uuid();
    console.log(cita);
  };

  return (
    <Fragment>
      <div className="container">
        <h1>Añadir cita</h1>
        {error ? (
          <p className="alert alert-danger" role="alert">
            Todos los campos son obligatorios
          </p>
        ) : null}

        <form className="form-group" onSubmit={submitCita}>
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
