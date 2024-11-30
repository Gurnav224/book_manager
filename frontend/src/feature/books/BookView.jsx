import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import {  fetchBooks, deleteBookAsync } from "./bookSlice";
import BooksList from "./BooksList";


const BookView = () => {
    const {books, status , error} = useSelector((state) => state.books);
    const dispatch = useDispatch();
    const [ deletingBookId, setDeletingBooKId] = useState(null)


    useEffect(() => {
      dispatch(fetchBooks())
  },[dispatch])
   
     const handleDeleteBook = async (bookId) => {
      setDeletingBooKId(bookId)
     dispatch(deleteBookAsync(bookId))
     setDeletingBooKId(null)
      }

  


  return (
    <div className="container my-3">
      <h1 className="my-3">Book View</h1>
      { status === "loading" && <p>Loading.... <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> </p>}
      {error && <p>Error occured</p>}
      
      <BooksList books={books} handleDeleteBook={handleDeleteBook}  deletingBookId={deletingBookId} status={status} />
    </div>
  )
}

export default BookView
