import React from 'react';

const Home = () => {
    return (
      <div>
        <div className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container">
            <p className="navbar-brand brand-style">WeConnect</p>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item mr-3">
                  <p className="nav-link">SignIn</p>
                </li>
                <li className="nav-item ">
                  <p className="nav-link">SignUp</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }


export default Home;
