import React from "react";
import { Link } from "react-router-dom";

const startPage = () => {
  return (
    <div className="container">
      <div className="text-center mt-5">
        <h2> Welcome to the examination page</h2>
        <p>To start the examination click on the start button </p>
        <h4>
          Please note that you can only select an option once, so be sure of the
          option you are selecting
        </h4>
        <Link to="/examination">
          <button className=" btn btn-success mt-4">Start</button>
        </Link>
      </div>
    </div>
  );
};

export default startPage;
