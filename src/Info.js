import React from "react"
import image from './images/america.JPG'

export default function Info() {
    return (
        <>
        <img src={image} alt='america' />
        <h1>Reena Thomas</h1>
        <p>Frontend Developer</p>
        <p>repositoryreena.github.io</p>
        <span>
        <button>Email</button>
        <button className="linkedin">Linkedin</button>
        </span>
        </>
    )
}