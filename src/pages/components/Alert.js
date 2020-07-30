import React from 'react';

const Alert = () => {
  const meta = 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en';
  
  return(
    <div className="alert alert-danger alert-dismissible fade show d-flex flex-column" role="alert">
      <p className="m-0">No Ethereum Wallet detected. Please install <a href={meta} target="_blank" rel="noopener noreferrer">MetaMask</a></p> 
      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  )
}

export default Alert;