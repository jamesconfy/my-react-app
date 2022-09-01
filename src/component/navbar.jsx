/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function NavBar(props) {
  const { totalCount } = props;

  return (
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand">
          Navbar{" "}
          <span className="badge badge-primary badge-sm badge-light">
            {totalCount}
          </span>
        </a>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
