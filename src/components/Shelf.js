import Book from "./Book";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Shelf({ shelfName, books, updateShelf }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => {
            return (
              <li key={book.id}>
                <Link
                  to={`/Udacity-React-Project/book/${book.id}`}
                  style={{ color: "unset", textDecoration: "unset" }}
                >
                  <Book book={book} updateShelf={updateShelf} />
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelfName: PropTypes.string.isRequired,
  updateShelf: PropTypes.func.isRequired,
};
export default Shelf;
