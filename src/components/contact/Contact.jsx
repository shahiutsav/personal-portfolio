import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaViber } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_zhbi821",
            "template_pbtond6",
            form.current,
            "cThBH5N6X8LwBMf6q"
        );

        e.target.reset();
    };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>shahiutsav62@gmail.com</h5>
                        <a href="mailto:shahiutsav62@gmail.com" target="_blank">
                            Send a Message
                        </a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon" />
                        <h4>Messenger</h4>
                        <h5>Utsav Shahi</h5>
                        <a href="https://m.me/shahi.utsav101" target="_blank">
                            Send a Message
                        </a>
                    </article>
                    <article className="contact__option">
                        <FaViber className="contact__option-icon" />
                        <h4>Viber</h4>
                        <h5>+977 9861297501</h5>
                        <a
                            href="viber://chat?number=+9779861297501"
                            target="_blank"
                        >
                            Send a Message
                        </a>
                    </article>
                </div>
                {/* End of contact options */}

                <form ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                    />
                    <textarea
                        name="message"
                        rows="7"
                        placeholder="Your Message"
                        required
                    />
                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
