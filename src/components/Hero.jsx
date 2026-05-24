import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  const carouselRef = useRef(null);

  // useEffect(() => {
  //   const carousel = carouselRef.current;
  //   let index = 0;

  //   const interval = setInterval(() => {
  //     if (!carousel) return;

  //     const items = carousel.children;
  //     if (items.length === 0) return;

  //     index = (index + 1) % items.length;

  //     items[index].scrollIntoView({
  //       behavior: "smooth",
  //       inline: "center",
  //     });
  //   }, 3000); // change slide every 3 seconds

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      {/* TEXT */}
      <div className="max-w-2xl text-4xl tracking-tight">
        <h1>We are changing the way people shop</h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="mt-10">
          <Link to="/products" className="btn btn-primary">Our products</Link>
        </div>
      </div>

      {/* CAROUSEL */}
      <div
        ref={carouselRef}
        className="carousel carousel-center rounded-box h-[28rem] lg:w-[22rem]  p-4 space-x-4 bg-neutral overflow-x-auto scroll-smooth"
      >
        {carouselImages.map((image, index) => (
          <div className="carousel-item flex-shrink-0" key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="rounded-box h-full w-80 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;