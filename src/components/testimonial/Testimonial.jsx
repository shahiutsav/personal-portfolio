import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// importing Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// importing Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
    {
        id: 1,
        image: AVTR1,
        name: "Oswald Thatendswald",
        review: "Yeah, he can really do some stuff. Who wouldn't want to hire an overpriced less valued web developer as this one? Not me.",
    },
    {
        id: 2,
        image: AVTR2,
        name: "Pierre Causemybladdersempty",
        review: "My wife left me after I used our retirement fund and her enheritance money from her mum to buy a website from this guy. The kids only visit me once every month now, but they think the design's cool. Does look very out of date in my old CRT monitor though.",
    },
    {
        id: 3,
        image: AVTR3,
        name: "Thor Butnotcomplaining",
        review: "Huh? What website? I thought you were selling me Amazon the forest? What the hell is an amazon website? Do antlers grow there? Can I eat them? Hellloooo??",
    },
    {
        id: 4,
        image: AVTR4,
        name: "Lars Lars Pants on Fars",
        review: "It used to be that I got home from work and the only thing I'd want to put in my mouth was the cold barrel of my grandfather's shotgun. Then I discovered this guy's websites, and now there are two things.",
    },
];
const Testimonial = () => {
    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper
                className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {reviews.map(({ id, image, name, review }) => {
                    return (
                        <SwiperSlide
                            key={id}
                            className="testimonial"
                            style={{ height: "auto" }}
                        >
                            <div className="client__avatar">
                                <img src={image} alt="Avatar 1" />
                            </div>
                            <h5 className="client__name">{name}</h5>
                            <small className="client__review">{review}</small>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default Testimonial;
