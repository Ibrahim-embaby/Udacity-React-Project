import { useState } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import Book from "./Book";

export default function SearchPage({ books, updateShelf }) {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");

  const doSearch = async (q) => {
    setQuery(q);
    const res = query.trim() && (await search(query));

    if (!res.error) {
      for (const e of res) {
        for (const b of books) {
          if (b.id === e.id) {
            e.shelf = b.shelf;
          }
        }
      }
      console.log("searched books", res);
      setSearchResults(res);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            value={query}
            onChange={(e) => {
              doSearch(e.target.value);
            }}
            type="text"
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchResults &&
            searchResults.map((book) => {
              return (
                <li key={book.id}>
                  <Book book={book} updateShelf={updateShelf} />
                </li>
              );
            })}
        </ol>
      </div>
    </div>
  );
}
