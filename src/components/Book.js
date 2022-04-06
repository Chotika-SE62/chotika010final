import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Book.css"
import { Link } from "react-router-dom";

function Book ({ title, thumbnailUrl, categories, isbn }) {
  return (
    <div className="card col-3" style={{ width: "18cm" }}>
      <Link to={``}>
        <span>Book Number = {isbn}</span>
      </Link>
      <img src={thumbnailUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Name = {title}</h5>
        <p className="card-text">Category = {categories}</p>
      </div>
    </div>
  )
}

export default Book;
