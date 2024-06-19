import { useState } from "react";
import "./ReviewList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

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

  const handleEdit = () => {
    alert("Modificar reseña");
  };

  return (
    <div className="ReviewList">
      <div className="ReviewItem">
        <p className="content-review">
          Muy buenos cortes mal estoy re fachero para ir de joda.
        </p>
        <div className="button-group">
          <button onClick={handleDelete} className="button-delete">
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <button onClick={handleResponse} className="button-comment">
            <FontAwesomeIcon icon={faComment} />
          </button>
          <button onClick={handleEdit} className="button-edit">
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </div>
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
