import React from "react";

function Navbar (){
return(
    <nav className="navbar navbar-expand-lg" style={{ "background-color": "#0b090a" }}>
  <div className="container-fluid" >
    <a className="navbar-brand" style={{ "color":"#ffffff"}}  href="#">ANIME</a>
    <button className="navbar-toggler " style={{ "background-color": "#b1a7a6" }}type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" style={{ "color":"#ffffff"}} aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{ "color":"#ffffff"}} href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{ "color":"#ffffff"}} href="#">More</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
);    
}
export default Navbar;
