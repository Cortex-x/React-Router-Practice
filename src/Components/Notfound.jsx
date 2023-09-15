import { Link } from "react-router-dom";
const Notfound = () => {
  return (
    <div
      className="container mt-5 p-4 rounded-3"
      style={{ backgroundColor: "#44475a" }}
    >
      <div className="row">
        <div className="text-center text-danger">
          <h1 style={{ fontSize: "120px" }}>404</h1>
          <h2>UH OH! You're lost.</h2>
          <p>Page you Searched Not Founded</p>
          <Link to="/" className="btn btn-primary">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Notfound;
