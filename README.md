# 📚 Book Manager Application

A simple and intuitive application for managing books, allowing users to add, edit, delete, and view a list of books. Built with modern web technologies, this project showcases seamless integration of frontend and 
backend development.

# Preview

![Screenshot from 2024-11-30 19-23-11](https://github.com/user-attachments/assets/ac4be2af-2c4f-448a-8b1c-f8432dec1c83)
![Screenshot from 2024-11-30 19-25-11](https://github.com/user-attachments/assets/8f665aa7-52af-4ab7-9bd6-21e35f0bf5e1)
![Screenshot from 2024-11-30 19-25-43](https://github.com/user-attachments/assets/3ae58865-ee51-4c35-b36a-7d783b83ec1d)
![Screenshot from 2024-11-30 19-25-20](https://github.com/user-attachments/assets/8ca20794-592d-46af-8f2e-7d57b0d59df0)


## 🌟 Features

- **Home Page**: Displays an overview of all available features in the Book Manager application.
- **Book List**: View a list of books with options to:
  - **Edit**: Update book details.
  - **Delete**: Remove books from the list.
- **Add New Book**: Quickly add new books to the collection with a user-friendly form.

## 🛠️ Technologies Used

### Frontend
- **React**: For building a dynamic and responsive user interface.
- **React Router DOM**: For seamless navigation between pages.
- **Redux Toolkit**: For efficient state management.
- **Bootstrap**: For a clean and responsive design.

### Backend
- **Express**: To create RESTful APIs for the application.
- **MongoDB**: For storing book data.
- **Node.js**: For running the server and backend logic.

## 🚀 Getting Started

### Prerequisites
- Node.js installed on your system.
- MongoDB running locally or a connection string to a cloud MongoDB instance.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/book-manager.git
   cd book-manager

2. Install dependencies for the frontend and backend:
   ```bash
    for backend 
    npm install
    cd backend
    npm run dev

    for client
    cd client
    yarn
    yarn dev

3. Open the app in your browser at http://localhost:3000


#  🌐 API Endpoints

- **GET:** /books: Fetch all books.
- **POST:** /books: Add a new book.
- **PUT** /books/:id: Update an existing book.
- **DELETE:** /books/:id: Delete a book.

# 📂 Folder Structure
``` bash
book-manager/
├── client/        # Frontend (React)
├── server/        # Backend (Express and Node.js)
├── models/        # MongoDB models
├── routes/        # API routes
├── public/        # Static files
└── README.md      # Project documentation


