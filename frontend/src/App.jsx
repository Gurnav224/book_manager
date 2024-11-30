import BookView from "./feature/books/BookView"
import Header from "./components/Header"
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import BookForm from "./feature/books/BookForm"
import Home from "./page/Home";


function App() {
  
 
  
  return (
<Router>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>} />
      <Route path="/books" element={<BookView/>} />
      <Route path="/add_books"  element={<BookForm/>}/>
      
    </Routes>
    </Router>
    
  )
}

export default App
