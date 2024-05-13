import React from "react";
import Navbar from "../components/navbar";


export default function About () {
    return (
    <>
        <Navbar />
        <section className="about-section-1">
            <div className="about-text-1">
            <p>I'm Nikolaï ZLODEYEV, i'm learning React at the moment. But now i can help you for HTML/CSS. I'm studying in ISITECH School.</p>
        </div>
        <div className="about-img-1">
        <img src="https://lh3.googleusercontent.com/p/AF1QipPhuE6eQNGad4Z_V_F9eke34_jyVr3t6Z5_A9-F=s1360-w1360-h1020" className="about-img-1"></img>
        </div>
        </section>
    </>
    );
}