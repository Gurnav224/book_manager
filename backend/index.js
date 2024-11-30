const express = require("express");
const cors = require("cors");
const morgan = require('morgan')
const app = express();

const { initializeDatabase } = require("./db/db.connection");
const { Books } = require("./models/books.model");

app.use(cors());
app.use(express.json());
app.use(morgan("dev"))

initializeDatabase();

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.get("/books", async (req, res) => {
  try {
    const allbooks = await Books.find();
    res.json(allbooks);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/books", async (req, res) => {
  const { bookName, author, genre } = req.body;

  try {
    const bookData = new Books({ bookName, author, genre });
    await bookData.save();
    res.status(201).json(bookData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.put('/books/:id', async (req ,res) => {
  const {id} = req.params;
  const updatedBook = req.body;

  try {
    const book = await Books.findByIdAndUpdate(id, updatedBook,{new:true});
  
    res.status(200).json(book)
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
})

app.delete("/books/:id", async (req, res) => {
  const bookId = req.params.id;

  try {
    const deletedBook = await Books.findByIdAndRemove(bookId);

    if (!deletedBook) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.status(200).json({
      message: "Book deleted successfully",
      book: deletedBook,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
