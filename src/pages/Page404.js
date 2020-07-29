import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return(
    <>
      <div className="jumbotron jumbotron-fluid hero-section d-flex justify-content-center align-items-center m-0">
        <div className="container d-flex justify-content-center align-items-center flex-column">
          <h1 className="m-0">Sorry</h1>
          <h2 className="mb-3">Page you requested can't be found</h2>
          <Link class="btn btn-primary" to="/">Go Back to Home</Link>
        </div>
      </div>
    </>
  )
}

export default Page404;