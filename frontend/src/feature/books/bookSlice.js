import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = 'https://book-manager-lovat.vercel.app';

export const fetchBooks = createAsyncThunk("fetchBooks", async () => {
    const response = await axios.get(`${apiUrl}/books`);
    return response.data
})

export const deleteBookAsync = createAsyncThunk('deleteBook', async (bookId , {rejectWithValue}) => {
    try {
        const response = await axios.delete(`${apiUrl}/books/${bookId}`);
        return response.data;
    } catch (error) {
     return   rejectWithValue(error.response?.data?.message || "An error occurred")
    }
})


export const addBookAsync = createAsyncThunk('addNewBook', async (newBook , {rejectWithValue}) => {
    try {
        const response = await axios.post(`${apiUrl}/books`, newBook);
        console.log(response.data)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "An error occurred")
    }
})

export const updateBookAsync = createAsyncThunk('updateBook', async ({updatedBook , bookId}, {rejectWithValue} ) => {
    
    try {
        const response = await axios.put(`${apiUrl}/books/${bookId}`,updatedBook);
        return response.data
    } catch (error) {
       return rejectWithValue(error.response?.data?.message || "An error occurred") 
    }
})

export const bookSlice = createSlice({
    name:"books",
    initialState:{
        books:[],
        status:'idle',
        error:null
    },
    reducers:{

    },
    extraReducers:(builder) => {
        builder.addCase(fetchBooks.pending,(state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchBooks.fulfilled, (state , action) => {
            state.status = 'success'
            state.books = action.payload
        })
        builder.addCase(fetchBooks.rejected, (state) => {
            state.status = 'error'
        })
        builder.addCase(deleteBookAsync.pending, (state ) =>{
            state.status = 'loading'
        })
        builder.addCase(deleteBookAsync.fulfilled, (state , action) => {
            state.status = 'success'
            state.books = state.books.filter((book) => book._id !== action.payload.book._id)
        })
        builder.addCase(deleteBookAsync.rejected, (state) => {
            state.status = 'error'
        })
        builder.addCase(updateBookAsync.pending, (state) => {
            state.status = "loading"
        })
        builder.addCase(updateBookAsync.fulfilled, (state , action) => {
            state.status = "success";
            state.books = state.books.map((book) => (
                book._id === action.payload._id ? action.payload :book
            ))
        })
        builder.addCase(updateBookAsync.rejected, (state , action) => {
            state.status = 'error';
            state.error = action.payload
        })
    }
})


export default bookSlice.reducer;