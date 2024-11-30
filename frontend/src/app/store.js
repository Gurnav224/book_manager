import { configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "../feature/books/bookSlice";


export  const store = configureStore({
    reducer:{
        books:bookSlice.reducer
    }
})