import React from "react";
import Navbar from "./navbar";

import logo from "../accests/icon/logo-color.png";
import one from "../accests/products/1.jpeg";
import two from "../accests/products/2.jpeg";
import three from "../accests/products/3.jpeg";
import four from "../accests/products/4.jpeg";
import five from "../accests/products/5.jpeg";
import six from "../accests/products/6.jpeg";
import seven from "../accests/products/7.jpeg";
import eight from "../accests/products/8.jpeg";
import nine from "../accests/products/9.jpg";
import ten from "../accests/products/10.jpg";
import eleven from "../accests/products/11.jpg";
import twelve from "../accests/products/12.jpg";
import thirteen from "../accests/products/13.jpg";
import fourteen from "../accests/products/14.jpg";
import fifteen from "../accests/products/15.jpg";
import sixteen from "../accests/products/16.jpg";
import seventeen from "../accests/products/17.jpg";
import eighteen from "../accests/products/18.jpg";
import nineteen from "../accests/products/19.jpg";
import twenty from "../accests/products/20.jpg";

import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
import { useState } from "react";
export default function Gallery() {
  const images = [
    { id: 1, src: one, alt: "aari work", title: "Aari Work" },
    { id: 2, src: two, alt: "Handwork Designs", title: "Handwork Designs" },
    { id: 3, src: three, alt: "aari work blouse", title: "Aari Work Blouse" },
    { id: 4, src: four, alt: "handwork designs", title: "Handwork Designs" },
    {
      id: 5,
      src: five,
      alt: "Custom Handwork Designs",
      title: "Custom Designs",
    },
    {
      id: 6,
      src: six,
      alt: "Aari Work  Design 20231",
      title: "Aari Work  Design 20231",
    },
    {
      id: 7,
      src: seven,
      alt: "Aari Work  Design 20232",
      title: "Aari Work  Design 20232",
    },
    {
      id: 8,
      src: eight,
      alt: "Aari Work  Design 20233",
      title: "Aari Work  Design 20233",
    },
    // {
    //   id: 9,
    //   src: nine,
    //   alt: "Aari Work  Design 20234",
    //   title: "Aari Work  Design 20234",
    // },
    // {
    //   id: 10,
    //   src: ten,
    //   alt: "Aari Work  Design 20235",
    //   title: "Aari Work  Design 20235",
    // },
    // {
    //   id: 11,
    //   src: eleven,
    //   alt: "Aari Work  Design 20236",
    //   title: "Aari Work  Design 20236",
    // },
    // {
    //   id: 12,
    //   src: twelve,
    //   alt: "Aari Work  Design 20237",
    //   title: "Aari Work  Design 20237",
    // },
    // {
    //   id: 13,
    //   src: thirteen,
    //   alt: "Aari Work  Design 20238",
    //   title: "Aari Work  Design 20238",
    // },
    // {
    //   id: 14,
    //   src: fourteen,
    //   alt: "Aari Work  Design 20239",
    //   title: "Aari Work  Design 20239",
    // },
    // {
    //   id: 15,
    //   src: fifteen,
    //   alt: "Aari Work  Design 202310",
    //   title: "Aari Work  Design 202310",
    // },
    // {
    //   id: 16,
    //   src: sixteen,
    //   alt: "Aari Work  Design 202311",
    //   title: "Aari Work  Design 202311",
    // },
    // {
    //   id: 17,
    //   src: seventeen,
    //   alt: "Aari Work  Design 202312",
    //   title: "Aari Work  Design 202312",
    // },
    // {
    //   id: 18,
    //   src: eighteen,
    //   alt: "Aari Work  Design 202313",
    //   title: "Aari Work  Design 202313",
    // },
    // {
    //   id: 19,
    //   src: nineteen,
    //   alt: "Aari Work  Design 202314",
    //   title: "Aari Work  Design 202314",
    // },
    // {
    //   id: 20,
    //   src: twenty,
    //   alt: "Aari Work  Design 202315",
    //   title: "Aari Work  Design 202315",
    // },
  ];
  const handleCardClick = (image) => {
    window.location.href = `/product?id=${image.id}&title=${encodeURIComponent(
      image.title
    )}&src=${encodeURIComponent(image.src)}`;
  };
  const [selectedProduct, setSelectedProduct] = useState(null);
  // const handleCardClick = (image) => {
  //   setSelectedProduct(image);
  //   history.push("/product");
  // };

  return (
    <>
      <div className="gallery-containerx">
        <div className="gallery-rowx">
          {images.map((image) => (
            <div
              className="cardx"
              key={image.id}
              onClick={() => handleCardClick(image)}
            >
              <a
                href={`https://wa.me/916238573109?text=${encodeURIComponent(
                  `code (10${image.id}) ${image.title}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="card-imagex zoom-effect"
                />
                <div className="card-titlex">
                  Aari Work – Hand Work Design – Maggam Work – Bridal Blouse
                  Designs – (10{image.id}) {image.title}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
