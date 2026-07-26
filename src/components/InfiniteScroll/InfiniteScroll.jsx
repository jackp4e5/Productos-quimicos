import React, { useEffect, useRef } from "react";
import "./InfiniteScroll.css";
import { mockProducts } from "../../data/mockProducts";

export const InfiniteScroll = () => {
  const slideShow = useRef(null);
  const slide = useRef(null);
  const before = useRef(null);
  const next = useRef(null);

  useEffect(() => {
    let intervalLoop = setInterval(() => {
      slider("siguiente");
    }, 3000);

    slideShow.current.addEventListener("mouseenter", () => {
      clearInterval(intervalLoop);
    });
    slideShow.current.addEventListener("mouseleave", () => {
      intervalLoop = setInterval(() => {
        slider("siguiente");
      }, 3000);
    });
  }, []);

  const slider = (position) => {
    const firstElement = slideShow.current.children[0];

    const sizeSlide = firstElement.offsetWidth;

    const transition = () => {
      slideShow.current.style.transition = `none`;
      slideShow.current.style.transform = `translateX(0px)`;
      slideShow.current.appendChild(firstElement);
      slideShow.current.removeEventListener("transitionend", transition);
    };

    if (position === "siguiente") {
      if (slideShow.current.children.length > 0) {
        slideShow.current.style.transition = `500ms ease-out transform`;
        slideShow.current.style.transform = `translateX(-${sizeSlide}px)`;

        slideShow.current.addEventListener("transitionend", transition);
      }

      return;
    }

    if (position === "anterior") {
      if (slideShow.current.children.length > 0) {
        const index = slideShow.current.children.length - 1;
        const lastElement = slideShow.current.children[index];

        slideShow.current.style.transition = `none`;
        slideShow.current.style.transform = `translateX(-${sizeSlide}px)`;

        slideShow.current.insertBefore(
          lastElement,
          slideShow.current.firstChild,
        );

        setTimeout(() => {
          slideShow.current.style.transition = `500ms ease-out transform`;
          slideShow.current.style.transform = `translateX(0)`;
        }, 50);
      }
    }
  };

  return (
    <div className="contenedor">
      <div className="slide-show" ref={slideShow}>
        {mockProducts.map((product) => (
          <div className="slide" key={product.id} ref={slide}>
            <a href="">
              <img
                className="slideimg"
                src={product.image}
                alt={product.title}
              />
            </a>
            <div className="texto-slide">
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="controles">
        <button
          ref={before}
          onClick={() => slider("anterior")}
          className="boton"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.80"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-left-icon lucide-chevron-left bg-white"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button
          ref={next}
          onClick={() => slider("siguiente")}
          className="boton"
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.80"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right-icon lucide-chevron-right bg-white"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
};
