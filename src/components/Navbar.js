import React from 'react';

function Navbar(){
    return (
  <nav className="navbar navbar-expand-lg navbar navbar navbar-light bg-light" >
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
    <strong>What to do today?</strong></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="/">About Us</a>
        </li>
      </ul>
        <button type="submit" className="btn btn-primary" style={{marginRight : "30px"}}>SignIn</button>
        <button type="button" className="btn btn-dark" style={{borderRadius : "50%" ,height : "25px" ,width : "25px"}}></button>

    </div>
  </div>
</nav>
);
}

export default Navbar;

 