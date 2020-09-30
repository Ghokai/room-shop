import React, { useState } from "react";
import IconArrow from "../public/images/icon-arrow.svg";
import IconLeft from "../public/images/icon-angle-left.svg";
import IconRight from "../public/images/icon-angle-right.svg";
import IconClose from "../public/images/icon-close.svg";
import IconHamburger from "../public/images/icon-hamburger.svg";

const SlideButtons = ({ setSlideIndex }) => {
  return (
    <div className="slider-wrapper">
      <div
        className="slider-button-wrapper"
        onClick={() =>
          setSlideIndex((slideIndex) => ((slideIndex ? slideIndex : 3) - 1) % 3)
        }
      >
        <IconLeft />
      </div>
      <div
        className="slider-button-wrapper"
        onClick={() => setSlideIndex((slideIndex) => (slideIndex + 1) % 3)}
      >
        <IconRight />
      </div>
    </div>
  );
};

const DesktopMenu = () => {
  return (
    <div className="nav">
      <div>room</div>
      <ul>
        <li>home</li>
        <li>shop</li>
        <li>about</li>
        <li>contact</li>
      </ul>
    </div>
  );
};

const MobileMenu = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      {isOpen ? (
        <div className="mobilenavopen">
          <div onClick={() => setisOpen(false)}>
            <IconClose />
          </div>
          <ul>
            <li>home</li>
            <li>shop</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </div>
      ) : (
        <div className="mobilenav">
          <div onClick={() => setisOpen(true)}>
            <IconHamburger />
          </div>
          <div>room</div>
        </div>
      )}
    </>
  );
};

const sliderContent = [
  {
    image: "/images/desktop-image-hero-1.jpg",
    title: "Discover innovative ways to decorate",
    text:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    linkText: "Shop now",
    linkUrl: "/",
  },
  {
    image: "/images/desktop-image-hero-2.jpg",
    title: "We are available all across the globe",
    text:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    linkText: "Shop now",
    linkUrl: "/",
  },
  {
    image: "/images/desktop-image-hero-3.jpg",
    title: "Manufactured with the best materials",
    text:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    linkText: "Shop now",
    linkUrl: "/",
  },
];

const Index = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <div className="container">
      <div className="slider">
        <DesktopMenu />
        <MobileMenu />
        <img
          alt={sliderContent[slideIndex].title}
          src={sliderContent[slideIndex].image}
        />
        <SlideButtons setSlideIndex={setSlideIndex} />
      </div>
      <div className="maintext">
        <div className="title">
          <h1>{sliderContent[slideIndex].title}</h1>
        </div>
        <div className="text">{sliderContent[slideIndex].text}</div>
        <div className="link">
          {sliderContent[slideIndex].linkText} <IconArrow />
        </div>
        <SlideButtons setSlideIndex={setSlideIndex} />
      </div>
      <div className="left">
        <img src="/images/image-about-dark.jpg" alt="left-image" />
      </div>
      <div className="mid">
        <div className="title">
          <h2>About our furniture</h2>
        </div>
        <div className="description">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </div>
      </div>
      <div className="right">
        <img src="/images/image-about-light.jpg" alt="right-image" />
      </div>
    </div>
  );
};

export default Index;
