import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return(
    <>
      <div className="container content-container d-flex justify-content-center align-items-center flex-column">
        <h1 className="m-0">Sorry</h1>
        <h2 className="mb-3">Page you requested can't be found</h2>
        <Link class="btn btn-custom" to="/">Go Back to Home</Link>
      </div>
    </>
  )
}

export default Page404;