import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <h1>Error, página no encontrada, por favor vuelva al inicio.</h1>
      <h1>
        Volver al <Link to="/">inicio</Link>
      </h1>
    </div>
  );
};

export default Error404;
