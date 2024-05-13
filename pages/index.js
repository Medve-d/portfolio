import { Inter } from "next/font/google";
import Navbar from "../components/navbar"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
      <img src="\photo-etudiant.jpg" className="photo-etudiant" />
    </div>
      <div className="portfolio-text">
      <p>Hi !</p>
      <p>I'm <span style={{color: "blue" }}> Nikolaï</span></p>
      <p>Web Developper</p>
      </div>

      <button className="bouton-contact">
        <a href="https://imgs.search.brave.com/XaUuZptfk1FiJY4zzhL33g2qk2C1gvuqvJ6zAWGne5s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMDU4/OS83OTgyL2kvNDUw/L2RlcG9zaXRwaG90/b3NfNzk4MjUwMjAt/c3RvY2stcGhvdG8t/YmVlZi1zdGVha3Mt/b24td29vZGVuLWJv/YXJkLmpwZw">Me contacter</a>
      </button>

    </>
  );
}
