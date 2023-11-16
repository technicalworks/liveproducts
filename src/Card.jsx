import React from "react";

const Card = (props) => {
    return(
        <>
        <div className="card" style={{borderRadius:'2px'}}>
        <div>
        <img src={props.image} className="card-img-top" alt="no image" style={{width:'100%'}} /></div>
        <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn">Check Now</a>
  </div>
</div>
        </>
    )
}

export default Card;