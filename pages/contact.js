import Navbar from "@/components/navbar";

export default function Contact () {
    return (
    <>
        <Navbar />
        <section className="info-contact">
            <div className="contact-text">
                <p>Je vous invite donc de me joindre afin de collaborer ensemble, ou bien même échanger</p>
            </div>
        </section>
        <section className="slide-section">
        <div class="slide-button-contact">
        <button className="contact-button">Me contacter</button>
        <p>Appeler moi au : 06 07 08 09 10</p>
        </div>
        </section>
    </>
    );
}