import { useParams, useNavigate } from "react-router-dom";
import { getBook, deletbook } from "../../data/data.js";
import bookimg from "./../assets/book.png";
const Book = () => {
  const navigate = useNavigate();
  const params = useParams();
  const book = getBook(parseInt(params.bookId));
  return (
    <div
      className="container p-4 rounded-3"
      style={{ backgroundColor: "#44475a" }}
    >
      <div className="row">
        <div className="col-5">
          <img
            src={bookimg}
            alt="book image"
            className="img-fluid img-thumbnail"
            style={{ width: "350px", height: "350px" }}
          />
        </div>
        <div className="col-3"></div>
        <div className="col-4">
          <h2>{book.name}</h2>
          <div
            className="card mt-5"
            style={{ backgroundColor: "#282A36", color: "#f8f8f2" }}
          >
            <div className="card-body">
              <p className="h5 card-title">{`قیمت کتاب: ${book.amount}`}</p>
              <p className="h5 card-title">{`تاریخ چاپ: ${book.due}`}</p>
            </div>
          </div>
          <button
            className="btn btn-danger mt-3"
            onClick={() => {
              deletbook(book.number);
              navigate("/Books");
            }}
          >
            Delete Book
          </button>
        </div>
      </div>
    </div>
  );
};
export default Book;
