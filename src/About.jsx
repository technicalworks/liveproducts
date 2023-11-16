import React from "react";
import Common from "./Common";
import logo from './web1.jpg';
import { useNavigate } from "react-router-dom";

const About = () => {

    const move = useNavigate();

    const goingTo = () => {
        move('/contact')
    }

    return(
        <>
        <Common
        head='Welcome to About page'
        highlight = 'FizaTechnical'
        paragraph = 'We are team of talented developer making websites'
        buttn = 'Contact Here'
        image = {logo}
        go = {goingTo}
         />
        </>
    )
}

export default About;