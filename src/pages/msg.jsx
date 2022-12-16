import React from "react";
import { Link } from "react-router-dom";
import "../component/auth/auth.css";

const Message = () => {
  return (
    <div>
      <h1>Reservation was deleted successfully</h1>
      <button className="button row">
        <Link to={`/reserve`}>Back</Link>
      </button>
    </div>
  );
};

export default Message;
