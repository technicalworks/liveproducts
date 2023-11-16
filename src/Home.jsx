import React from "react";
import Common from "./Common";
import web1 from './logo.jpg';
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const startTo = () => {
        navigate('/services')
    }

    return(
        <>
        <Common
        head='Grow your business with'
        highlight = 'FizaTechnical'
        paragraph = 'We are team of talented developer making websites'
        buttn = 'Get Started'
        image = {web1}
        go = {startTo}
         />
        </>
    )
}

export default Home;