import React from 'react';

const Alert = () => {
  return(
    <div className="alert alert-danger alert-dismissible fade show d-flex flex-column" role="alert">
      <p className="m-0">No Ethereum Wallet detected. Please install <strong>MetaMask</strong></p> 
      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  )
}

export default Alert;