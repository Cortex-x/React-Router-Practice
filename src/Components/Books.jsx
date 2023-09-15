import { getBooks } from "../../data/data.js";
import { Link, useSearchParams } from "react-router-dom";

import bookimg from "./../assets/book.png";

const Books = () => {
  let [search, setsearch] = useSearchParams();
  const books = getBooks();
  return (
    <div
      className="container rounded-3 mt-5 p-4"
      style={{ backgroundColor: "#44475a", color: "#f8f8f2" }}
    >
      <form
        className="d-flex pb-4 justify-content-center border-bottom"
        role="search"
      >
        <button className="btn btn-outline-primary" type="submit">
          Search
        </button>
        <input
          type="search"
          className="form-control me-2 w-25"
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setsearch({ filter });
            } else setsearch({});
          }}
          placeholder="Search"
        />
      </form>
      <div className="row mt-5">
        {books
          .filter((book) => {
            let filter = search.get("filter");
            if (!filter) return true;
            let name = book.name.toLowerCase();
            return name.includes(filter.toLowerCase());
          })
          .map((book) => (
            <div
              className="card col-3 mb-3"
              style={{ backgroundColor: "#44475a" }}
              key={book.number}
            >
              <img className="card-img-top" src={bookimg} alt="book" />
              <div className="card-body text-white">
                <h5 className="card-title pb-2">{book.name}</h5>
                <p>Amount: {book.amount}</p>
                <p>published: {book.due}</p>
              </div>
              <Link
                to={`/Books/${book.number}`}
                key={book.number}
                className="text-decoration-none text-white p-3 rounded-3"
                style={{ backgroundColor: "#bd93f9" }}
              >
                Show Book
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Books;
