import "./App.css";
import { React, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import BooksList from "./components/BooksList";
import Navbar from "./components/Navbar";
import BookService from "./repo/repository";
import EditBook from "./components/EditBook";
import AddBook from "./components/AddBook";
import Categories from "./components/Categories";

function App() {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBook, setSelectedBook] = useState([]);

  //make me a void function

  useEffect(() => {
    getData();
  }, categories);

  function getData() {
    getBooks();
    getAuthors();
    getCategories();
  }

  function getBooks() {
    BookService.fetchBooks().then((data) => {
      setBooks(data.data);
      setLoading(false);
    });
  }

  function getAuthors() {
    BookService.fetchAuthors().then((data) => {
      setAuthors(data.data);
      setLoading(false);
    });
  }

  function getCategories() {
    BookService.fetchCategories().then((data) => {
      setCategories(data.data);
      setLoading(false);
    });
  }

  function onEditBook(id, name, quantity, authorId, category) {
    BookService.editBook(id, name, quantity, authorId, category).then(() => {
      getData();
    });
  }

  function getBook(id) {
    console.log("SE VIKKAAAAA" + id);
    BookService.getBook(id).then((data) => {
      setSelectedBook(data.data);
    });
  }

  function onDeleteBook(id) {
    BookService.deleteBook(id).then(() => {
      getData();
    });
  }

  function reserveBook(id) {
    BookService.reserveBook(id).then(() => {
      getData();
    });
  }

  function addBook(name, quantity, authorId, category) {
    BookService.addBook(name, quantity, authorId, category).then(() => {
      getData();
    });
  }

  function findBooksByCategory(category) {
    BookService.findByCategory(category).then((data) => {
      console.log(data.data);
      setBooks(data.data);
    });
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <BooksList
              books={books}
              loading={loading}
              getBook={getBook}
              deleteBook={onDeleteBook}
              reserveBook={reserveBook}
            />
          }
        />
        <Route
          path={"/book/edit/:id"}
          element={
            <EditBook
              selectedBook={selectedBook}
              onEditBook={onEditBook}
              authors={authors}
              categories={categories}
            />
          }
        />
        <Route
          path={"/book/add/"}
          element={
            <AddBook
              authors={authors}
              categories={categories}
              addBook={addBook}
            />
          }
        />

        <Route
          path={"/categories/"}
          element={
            <BooksList
              books={books}
              loading={loading}
              getBook={getBook}
              deleteBook={onDeleteBook}
              reserveBook={reserveBook}
              categories={categories}
              findBooksByCategory={findBooksByCategory}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
