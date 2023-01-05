import React from "react";
import BackToHome from "./BackToHome";

function NotFound() {
  return (
    <div className="not-found">
      <p>404 Not Found</p>
      <div>
        <BackToHome />
        <p>Back To Home</p>
      </div>
    </div>
  );
}

export default NotFound;
