import React from "react";

const Common = (props) => {
    return(
        <>
        <div className="container main_home align-items-center">
            <div className="row align-items-center">
                <div className="col">
                    <h1 className="home_head">{props.head} <br /><span style={{color:'rgb(103, 14, 219)'}}>{props.highlight}</span></h1>
                    <p className="home_para">{props.paragraph}</p>
                    <button className="btn btn-outline" id="home_btn" onClick={props.go}>{props.buttn}</button>
                </div>
                <div className="col imaged align-items-end"><img src={props.image} className="animated" alt="no image" /></div>
            </div>
        </div>
        </>
    )
}

export default Common;