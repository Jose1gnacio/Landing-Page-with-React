import React from "react";
import PropTypes from "prop-types";

function Card(props) {
  return (
    <div className="card mb-3" style={{ width: "18rem", "background-color":"#e5383b" }} >
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" style={{ "color":"#f5f3f4"}}>{props.titulo}</h5>
        <p className="card-text" style={{ "color":"#f5f3f4"}}>{props.parrafo}</p>
      
      
      <button style={{ "background-color": "#0b090a" }} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${props.id}`}>
      Trailer
    </button>

    <div className="modal fade" id={props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          
          <div className="modal-body ratio ratio-16x9">
          <iframe src={props.trailer} title="YouTube video" ></iframe>
          </div>
          <div className="modal-footer" style={{ "background-color": "black" }}>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}
Card.propTypes={
id:PropTypes.string,
titulo:PropTypes.string,
img:PropTypes.string,
trailer:PropTypes.string,
parrafo:PropTypes.string
};
export default Card;
