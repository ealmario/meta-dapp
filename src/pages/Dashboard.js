import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({addr}) => {
  console.log(addr);
  return(
    <>
      <div className="container d-flex justify-content-center align-items-center flex-column py-3">
        <h1 className="m-0">Dashboard</h1>
        
        <div className="card text-center mt-5">
          <div className="card-header">
            Metamask User
          </div>
          <div className="card-body">
            <p className="card-text">ETH Address: {addr === undefined ? 'Address Not Found' : addr}</p>
            <p className="card-text">__USER NETWORK__</p>
            <p className="card-text">ECR TOKENS:</p>
            <h1 className="card-text">__ ECR TOKENS__</h1>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary">Get Tokens</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;