
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI; 
const dbName = "library"; 
const collectionName = "books"; 

const books = [
  { bookName: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
  { bookName: "1984", author: "George Orwell", genre: "Dystopian" },
  { bookName: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classics" },
  { bookName: "Pride and Prejudice", author: "Jane Austen", genre: "Romance" },
  { bookName: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction" },
  { bookName: "Moby Dick", author: "Herman Melville", genre: "Adventure" },
  { bookName: "Brave New World", author: "Aldous Huxley", genre: "Science Fiction" },
  { bookName: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" },
  { bookName: "War and Peace", author: "Leo Tolstoy", genre: "Historical" },
  { bookName: "The Alchemist", author: "Paulo Coelho", genre: "Philosophical" }
];

async function seedDatabase() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    await collection.deleteMany({});
    // insert new data
    const result = await collection.insertMany(books);
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await client.close();
    console.log("Connection closed");
  }
}

seedDatabase();
