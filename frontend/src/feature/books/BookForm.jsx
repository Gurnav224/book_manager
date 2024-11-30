import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addBookAsync, updateBookAsync } from "./bookSlice";
import { useLocation, useNavigate } from "react-router-dom";

const BookForm = () => {
  const location = useLocation();
  const editBook = location.state;
  const navigate = useNavigate()

  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({
    bookName: "",
    author: "",
    genre: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  useEffect(()=> {
    if(editBook){
      setNewBook(editBook)
    }
  },[editBook])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBookAsync(newBook));
    setMsg("new book added successfully");
  };

  const handleEditBookSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBookAsync({updatedBook:newBook, bookId:editBook._id}))
    setMsg('book details updated successfully')
    setTimeout(() => {
      
      navigate('/books')
    },1000)
  }

  return (
    <div className="container">
      {editBook ? (
        <>
          <h1 className="my-4">Edit book</h1>
          <form>
            <div className="mb-3">
              <label className="form-label" htmlFor="bookName">
                Book Name:
              </label>
              <input
                className="form-control"
                type="text"
                name="bookName"
                id="bookName"
                value={newBook.bookName}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="author">
                Author:
              </label>
              <input
                className="form-control"
                type="text"
                name="author"
                id="author"
                value={newBook.author}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="genre">
                Genre:
              </label>
              <input
                className="form-control"
                type="text"
                name="genre"
                id="genre"
                value={newBook.genre}
                onChange={handleInputChange}
              />
            </div>
            <button className="btn btn-success" onClick={handleEditBookSubmit}>
              Update Book
            </button>
          </form>
          {msg && <p className="fs-3 my-3 text-success">{msg}</p>}
        </>
      ) : (
        <>
          <h1 className="my-4">Book Form</h1>

          <form>
            <div className="mb-3">
              <label className="form-label" htmlFor="bookName">
                Book Name:
              </label>
              <input
                className="form-control"
                type="text"
                name="bookName"
                id="bookName"
                value={newBook.bookName}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="author">
                Author:
              </label>
              <input
                className="form-control"
                type="text"
                name="author"
                id="author"
                value={newBook.author}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="genre">
                Genre:
              </label>
              <input
                className="form-control"
                type="text"
                name="genre"
                id="genre"
                value={newBook.genre}
                onChange={handleInputChange}
              />
            </div>
            <button className="btn btn-primary" onClick={handleSubmit}>
              Add Book
            </button>
          </form>
          {msg && <p className="fs-3 my-3 text-success">{msg}</p>}
        </>
      )}
    </div>
  );
};

export default BookForm;
