import { useState, useEffect } from "react";
// import {Link} from "react-router-dom"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import axios  from "axios";

function BookCard() {
    return <div class="card-container">
    <img
      src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
      alt="Books"
      height="200"
    />
    <div class="desc">
      <h2><a href="/show-book/123id">React.JS 101</a></h2>
      <h3>Raymond Gallagher</h3>
      <p>Introduction to React.JS</p>
    </div>
  </div>
}

export default BookCard;
  