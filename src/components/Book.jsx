import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Book({ book, updateShelf }) {
  return (
    <div className="book">
      <div className="book-top">
        <Link
          to={`/Udacity-React-Project/book/${book.id}`}
          style={{ color: "unset", textDecoration: "unset" }}
        >
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 192,
              backgroundImage: `url(${
                book.imageLinks ? book.imageLinks.thumbnail : ""
              })`,
            }}
          ></div>
        </Link>

        <div className="book-shelf-changer">
          <select
            value={book.shelf ? book.shelf : "none"}
            onChange={(e) => updateShelf(book, e.target.value)}
          >
            <option disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <Link
        to={`/Udacity-React-Project/book/${book.id}`}
        style={{ color: "unset", textDecoration: "unset" }}
      >
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </Link>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateShelf: PropTypes.func.isRequired,
};

export default Book;
