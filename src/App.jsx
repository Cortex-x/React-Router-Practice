import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import "./App.css";
import loading from "./assets/54HjC.gif";

function App() {
  let [ishome, setishome] = useState(true);
  const active = ({ isActive }) => {
    if (isActive) {
      return "text-decoration-none text-white btn btn-danger nav-item";
    } else return "text-decoration-none text-white btn btn-primary nav-item";
  };
  return (
    <div className="text-center" style={{ color: "#f8f8f2" }}>
      <div className="container-fluid d-grid justify-content-center pt-4">
        <div className="row">
          <h1>React Router Library</h1>
        </div>
      </div>
      <div className="navbar mt-4">
        <div className="container-fluid">
          <div className="navbar-nav mx-auto flex-row">
            <NavLink to="/" className={active} onClick={() => setishome(true)}>
              Home
            </NavLink>
            <NavLink
              to="/Books"
              className={active}
              style={{ marginLeft: "20px", marginRight: "20px" }}
              onClick={() => setishome(false)}
            >
              {" "}
              Library
            </NavLink>

            <NavLink
              to="/About"
              className={active}
              onClick={() => setishome(false)}
            >
              About Us
            </NavLink>
          </div>
        </div>
      </div>
      {ishome ? <img src={loading} alt="" className="mt-5" /> : <Outlet />}
    </div>
  );
}

export default App;
