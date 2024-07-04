import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-message d-flex justify-content-center align-items-center">
      {message}
    </div>
  );
};

export default ErrorMessage;
