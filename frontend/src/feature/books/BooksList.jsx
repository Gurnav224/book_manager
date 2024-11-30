/* eslint-disable react/prop-types */

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

const BooksList = ({ books, handleDeleteBook, deletingBookId, status }) => {

  if (status === "loading") {
    return (
      <ul className="list-group">
        {Array.from({ length: 5 }).map((_, index) => (
          <li className="list-group-item" key={index}>
            <Skeleton height={20} width={150} style={{ marginBottom: "10px" }} />
            <Skeleton height={20} width={100} style={{ marginBottom: "10px" }} />
            <Skeleton height={20} width={200} style={{ marginBottom: "10px" }} />
            <Skeleton height={40} width={80} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <ul className="list-group">
        {books.map((book) => (
          <li className="list-group-item" key={book._id}>
            <p>Book Name: {book.bookName}</p>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <button
              className="btn btn-danger float-end mx-3"
              onClick={() => handleDeleteBook(book._id)}
              disabled={deletingBookId === book._id}
            >
              {deletingBookId === book._id ? (
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              ) : (
                "Delete"
              )}
            </button>
            <Link to="/add_books" state={book} className="btn btn-primary float-end">Edit</Link>
            
          </li>
        ))}
      </ul>
    </>
  );
};

export default BooksList;
