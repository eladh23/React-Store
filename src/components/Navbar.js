import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

function Navbar({ categories, clickButton, searchProduct }) {
  const [searchText, setSearchText] = useState("");
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        My Store
      </Link>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link"
              onClick={() => clickButton("")}
            >
              All Products
            </Link>
          </li>
          {categories.map((category) => (
            <li key={category.id} className="nav-item">
              <Link
                to="/"
                className="nav-link"
                onClick={() => clickButton(category.id)}
              >
                {category.name} -({category.id})
              </Link>
            </li>
          ))}
        </ul>

        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="button"
            onClick={() => searchProduct(searchText)}
          >
            Search
          </button>
        </form>

        <ul className="navbar-nav">
          {location.pathname === "/login" ? null : (
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          )}
          <li className="nav-item">
            <Link className="nav-link" to="/add_product">
              Add Product
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              <BsCart4 style={{ fontSize: "1.5em", color: "white" }} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
