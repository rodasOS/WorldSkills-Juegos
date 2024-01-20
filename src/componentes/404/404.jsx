import React from "react";
import './404.css'
import { Link } from "react-router-dom";

export default function Error () {
  return (
    <div className="contenedor-error">
      <h1 className="error">Ruta incorrecta!</h1>
      <Link to='/' className="volver">Volver al Home</Link>
    </div>
  )
}