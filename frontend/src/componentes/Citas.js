import React, { Fragment } from "react";
import PropTypes from 'prop-types';
const Citas  = ({cita,eliminarCita}) => {
  return (
    <Fragment>
      <div className="container alert alert-secondary">
      <p><b>Mascota </b><span class="badge badge-secondary">{cita.mascota}</span></p>
      <p><b>Propietario</b> {cita.propietario}</p>
      <p><b>Fecha</b> {cita.fecha}</p>
      <p><b>Hora</b> {cita.hota}</p>
      <p><b>Sintomas </b>{cita.sintomas}</p>
      <button
      className="btn btn-primary"
      onClick={ ()=> {eliminarCita(cita.id)}  }
      >Eliminar</button>
</div>
      </Fragment>
  );

};

export default Citas;
