import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

const data = [
    {
        id: 1,
        image: IMG1,
        title: "Figma dashboard UI kit for data design web apps",
        github: "https://github.com",
        demo: "https://dribbble.com/shots/17661128-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
    },
    {
        id: 2,
        image: IMG2,
        title: "Figma dashboard UI kit for data design web apps",
        github: "https://github.com",
        demo: "https://dribbble.com/shots/17661094-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
    },
    {
        id: 3,
        image: IMG3,
        title: "Figma dashboard UI kit for data design web apps",
        github: "https://github.com",
        demo: "https://dribbble.com/shots/17661068-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
    },
    {
        id: 4,
        image: IMG4,
        title: "Figma dashboard UI kit for data design web apps",
        github: "https://github.com",
        demo: "https://dribbble.com/shots/17661056-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
    },
    {
        id: 5,
        image: IMG5,
        title: "Figma dashboard UI kit for data design web apps",
        github: "https://github.com",
        demo: "https://dribbble.com/shots/17610739-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
    },
    {
        id: 6,
        image: IMG6,
        title: "Figma dashboard UI kit for data design web apps",
        github: "https://github.com",
        demo: "https://dribbble.com/shots/17610643-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {data.map(({ id, image, title, github, demo }) => {
                    return (
                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a
                                    href={github}
                                    className="btn"
                                    target="_blank"
                                >
                                    Github
                                </a>
                                <a
                                    href={demo}
                                    className="btn btn-primary"
                                    target="_blank"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;
