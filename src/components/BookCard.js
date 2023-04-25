import { useState, useEffect } from "react";
// import {Link} from "react-router-dom"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import axios  from "axios";

function BookCard({book, deleteBook}) {
    return <div class="card-container">
    <img
      src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
      alt="Books"
      height="200"
    />
    <div class="desc">
      <h2><a href="/show-book/123id">{book.title}</a></h2>
      <h3>{book.author}</h3>
      <p>{book.description && book.description}</p>
      <button onClick={deleteBook}>
        X
      </button>
    </div>
  </div>
}

export default BookCard;
  