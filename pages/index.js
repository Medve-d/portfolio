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
        <a href="\contact">Me contacter</a>
      </button>

    </>
  );
}
