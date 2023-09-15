{
  /*React Componentso*/
}
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

{
  /*Built Components*/
}
import App from "./App.jsx";
import About from "./Components/About.jsx";
import Books from "./Components/Books.jsx";
import Book from "./Components/Book.jsx";
import Notfound from "./Components/Notfound.jsx";

import "./index.css";
import "./../public/css/Font.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/Books" element={<Books />} />
          <Route path="/About" element={<About />} />
          <Route path={"/Books/:bookId"} element={<Book />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
