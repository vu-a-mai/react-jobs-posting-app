import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/react-logo.png";
import catImage from "../assets/images/cat.jpg";

const NotFoundPage = () => {
  return (
    <>
      <section className="text-center flex flex-col justify-center items-center h-96">
        <img className="h-40 w-auto" src={logo} alt="React Jobs" />
        <h1 className="text-6xl font-bold mb-4">About React Jobs Posting</h1>
        <p className="text-xl mb-5">
          This project is created using Vite React, TailwindCSS and JSON-Server.
        </p>
        <p>Created by: Vu Mai</p>
      </section>
      <div className="text-center flex flex-col justify-center items-center">
        <img className="h-400 w-auto" src={catImage} alt="React Jobs" />
      </div>
    </>
  );
};

export default NotFoundPage;
