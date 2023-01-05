import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import useDebounce from "../hooks/useDebounce";
import Book from "./Book";
import PropTypes from "prop-types";
import BackToHome from "./BackToHome";

function SearchPage({ books, updateShelf }) {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");

  const debouncedValue = useDebounce(query, 500);

  useEffect(() => {
    async function fetchData() {
      const res = await search(debouncedValue);
      if (!res.error) {
        for (const e of res) {
          for (const b of books) {
            if (b.id === e.id) {
              e.shelf = b.shelf;
            }
          }
        }
        setSearchResults(res);
      } else {
        setSearchResults([]);
      }
    }

    if (debouncedValue.trim()) fetchData();
    else setSearchResults([]);
  }, [debouncedValue]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <BackToHome />
        <div className="search-books-input-wrapper">
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            type="text"
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchResults.length !== 0 ? (
            searchResults.map((book) => {
              return (
                <li key={book.id}>
                  <Book book={book} updateShelf={updateShelf} />
                </li>
              );
            })
          ) : (
            <li>Book Not Found</li>
          )}
        </ol>
      </div>
    </div>
  );
}

SearchPage.propTypes = {
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
};

export default SearchPage;
