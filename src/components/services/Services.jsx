import React from "react";
import "./services.css";

const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <p>Conducting user research</p>
                        </li>
                        <li>
                            <p>Creating user personas</p>
                        </li>
                        <li>
                            <p>
                                Determining the information architecture of a
                                digital product
                            </p>
                        </li>
                        <li>
                            <p>Designing user flows and wireframes</p>
                        </li>
                        <li>
                            <p>Creating prototypes</p>
                        </li>
                        <li>
                            <p>Conducting user testing</p>
                        </li>
                    </ul>
                </article>

                {/* End of UI/UX */}

                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <p>
                                Designing user interfaces and navigation menus
                            </p>
                        </li>
                        <li>
                            <p>
                                Writing and reviewing code for sites, typically
                                HTML, XML, or JavaScript
                            </p>
                        </li>
                        <li>
                            <p>Integrating multimedia content onto a site</p>
                        </li>
                        <li>
                            <p>Testing web applications</p>
                        </li>
                        <li>
                            <p>
                                Troubleshooting problems with performance or
                                user experience
                            </p>
                        </li>
                        <li>
                            <p>
                                Collaborating with designers, developers, and
                                stakeholders
                            </p>
                        </li>
                    </ul>
                </article>

                {/* End of Web Development */}
                <article className="service">
                    <div className="service__head">
                        <h3>Content Creation</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <p>Researching industry-related topics</p>
                        </li>
                        <li>
                            <p>
                                Edit and proofread written pieces before
                                publication
                            </p>
                        </li>
                        <li>
                            <p>
                                Conduct keyword research and use SEO guidelines
                                to optimize content
                            </p>
                        </li>
                        <li>
                            <p>
                                Identify customers’ needs and recommend new
                                topics
                            </p>
                        </li>
                    </ul>
                </article>
                {/* End of Content Creation */}
            </div>
        </section>
    );
};

export default Services;
