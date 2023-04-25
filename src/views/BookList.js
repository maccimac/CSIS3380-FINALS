import { API_ENDPOINT } from "../utils";
import { useState, useEffect } from "react";
// import {Link} from "react-router-dom"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import axios  from "axios";
import BookCard from "./../components/BookCard"

function BookList() {
    const [books, setBooks] = useState([]);

    const fetchBooks = () => {
      axios
        .get(`${API_ENDPOINT}`)
        .then((res) => {
          setBooks(res.data);
        })
        .catch((err) => {
          console.log('Error from BookList');
        });
    }
  
    useEffect(() => {
      fetchBooks();
      
    }, []);
  
    const deleteBook = async (id)=>{
      const delRes = await axios
        .delete(`${API_ENDPOINT}/` + id);
      if(delRes) fetchBooks()
    } 
    const bookList =
      books.length === 0
        ? 'there is no book record!'
        : books.map((book, k) => 
        <BookCard 
          book={book} 
          deleteBook={ ()=>deleteBook(book._id)} 
          key={k} />);
  
    return (
      <div className='BookList'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <br />
              <h2 className='display-4 text-center'>Books List</h2>
            </div>
  
            <div className='col-md-11'>
              <Link
                to='/create-book'
                className='btn btn-outline-warning float-right'
              >
                + Add New Book
              </Link>
              <br />
              <br />
              <hr />
            </div>
          </div>
  
          <div className='list d-flex'>{bookList}</div>
        </div>
      </div>
    );
  }

  export default BookList;