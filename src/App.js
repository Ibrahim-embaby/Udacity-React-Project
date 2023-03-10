import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";
import { getAll, update } from "./BooksAPI";
import { useEffect, useState } from "react";
import NotFound from "./components/NotFound";
import BookDetails from "./components/BookDetails";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(async () => {
    const books = await getAll();
    const deleted = books.filter((book) => book.id === "evuwdDLfAyYC");
    if (deleted) {
      setBooks(books.filter((book) => book.id !== "evuwdDLfAyYC"));
    } else {
      setBooks(books);
    }
  }, []);

  const updateShelf = async (book, shelf) => {
    book.shelf = shelf;
    await update(book, shelf).then(() => {
      setBooks([...books.filter((b) => b.id !== book.id), book]);
    });
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Home books={books} updateShelf={updateShelf} />}
      />
      <Route
        path="/Udacity-React-Project"
        element={<Home books={books} updateShelf={updateShelf} />}
      />
      <Route
        path="/Udacity-React-Project/search"
        element={<SearchPage books={books} updateShelf={updateShelf} />}
      />
      <Route
        path="/Udacity-React-Project/book/:id"
        element={<BookDetails books={books} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
