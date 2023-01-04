import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";
import { getAll, update } from "./BooksAPI";
import { useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(async () => {
    const books = await getAll();
    setBooks(books);
  }, [toggle]);

  const updateShelf = async (book, shelf) => {
    await update(book, shelf);
    setToggle((prev) => !prev);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Home books={books} updateShelf={updateShelf} />}
      />
      <Route
        path="/search"
        element={<SearchPage books={books} updateShelf={updateShelf} />}
      />
    </Routes>
  );
}

export default App;
