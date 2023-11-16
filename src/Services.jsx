import React from "react";
import Card from "./Card";
import Arr from "./Arr";

const Services = () => {
    return(
        <>
        <h5 className="container mt-2 mb-4 text-center">Our Services</h5>
        <div className="service_grid container">
        {Arr.map((elem, index) => {
            return(
                <Card
                key={index}
                title = {elem.title}
                image = {elem.image}
                 />
            )
        })}
        </div>
        </>
    )
}

export default Services;