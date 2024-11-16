import React from "react"
import image from './images/america.JPG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Info() {
    return (
        <>
        <img src={image} alt='america' />
        <h1>Reena Thomas</h1>
        <p>Frontend Developer</p>
        <p>repositoryreena.github.io</p>
        <span>
        <button><FontAwesomeIcon icon="fa-solid fa-envelope" />Email</button>
        <button className="linkedin"><FontAwesomeIcon icon="fa-brands fa-linkedin" />Linkedin</button>
        </span>
        </>
    )
}