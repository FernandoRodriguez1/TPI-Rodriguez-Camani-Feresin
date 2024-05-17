import { useState } from "react";

import "./ReviewList.css";

const ReviewList = () => {
  const [showResponseForm, setShowResponseForm] = useState(false);
  const [response, setResponse] = useState("");

  const handleDelete = () => {
    alert("Reseña eliminada");
  };

  const handleResponse = () => {
    setShowResponseForm(true);
  };

  const handleSubmitResponse = (e) => {
    e.preventDefault();

    alert("Respuesta enviada: " + response);
    setShowResponseForm(false);
    setResponse("");
  };

  return (
    <div className="review">
      <p className="content-review">
        Muy buenos cortes mal estoy re fachero para ir de joda.
      </p>
      <div>
        <button onClick={handleDelete}>Eliminar</button> {/*Admin*/}
        <button onClick={handleResponse}>Responder</button> {/*barber*/}
        {showResponseForm && (
          <form onSubmit={handleSubmitResponse}>
            <textarea
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              placeholder="Escribe tu respuesta aquí..."
              required
            />
            <button type="submit">Enviar respuesta</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ReviewList;
