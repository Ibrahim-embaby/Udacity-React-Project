import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import BackToHome from "./BackToHome";
import NotFound from "./NotFound";

function BookDetails({ books }) {
  const params = useParams();
  const book =
    books.filter((b) => b.id === params.id) &&
    books.filter((b) => b.id === params.id)[0];

  return book ? (
    <div className="book-details">
      <BackToHome />
      <div className="book-header">
        <div className="book-img">
          {book.imageLinks ? (
            <img src={book.imageLinks.thumbnail} alt="" width="200" />
          ) : (
            <div className="palce-holder">no image</div>
          )}
        </div>

        <div className="book-header-info">
          <div className="book-header-title">
            <span>Title</span>: {book.title}
          </div>
          <div className="book-header-subtitle">
            <span>Subtitle</span>: {book.subtitle}
          </div>
          <div className="book-header-shelf">
            <span>Shelf</span>: {book.shelf}
          </div>
          <div className="book-header-pageCount">
            <span>Page count</span>: {book.pageCount}
          </div>
          <div className="book-header-language">
            <span>Language</span>: {book.language}
          </div>
          <div className="book-header-contentVersion">
            <span>Content version</span>: {book.contentVersion}
          </div>
          <div className="book-header-authors">
            <span>Authors</span>: {book.authors}
          </div>
        </div>
      </div>
      <div className="book-body">
        {book.description ? book.description : "no description"}
      </div>
    </div>
  ) : (
    <NotFound />
  );
}

BookDetails.propTypes = {
  books: PropTypes.array.isRequired,
};

export default BookDetails;
