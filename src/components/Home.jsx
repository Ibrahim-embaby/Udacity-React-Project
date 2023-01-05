import Shelf from "./Shelf";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Home({ books, updateShelf }) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf
            shelfName="Currently Reading"
            books={books.filter((book) => book.shelf === "currentlyReading")}
            updateShelf={updateShelf}
          />
          <Shelf
            shelfName="Want to Read"
            books={books.filter((book) => book.shelf === "wantToRead")}
            updateShelf={updateShelf}
          />
          <Shelf
            shelfName="Read"
            books={books.filter((book) => book.shelf === "read")}
            updateShelf={updateShelf}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/Udacity-React-Project/search">Add a book</Link>
      </div>
    </div>
  );
}

Home.propTypes = {
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
};

export default Home;
