import React from "react";
import Slider from "react-slick";
import { Col, Row } from "react-bootstrap";

const Electronic = () => {
  const button = React.useRef();
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: ".prev",
    nextArrow: ".next",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  const products = [
    {
      head: "Man T-shirt",
      para: "price",
      price: "$30",
      timg: "https://themewagon.github.io/eflyer/images/laptop-img.png",
      buyproduct: "Buy Now",
      seemore: "See More",
    },
    {
      head: "Man T-shirt",
      para: "price",
      price: "$30",
      timg: "https://themewagon.github.io/eflyer/images/mobile-img.png",
      buyproduct: "Buy Now",
      seemore: "See More",
    },
    {
      head: "Man T-shirt",
      para: "price",
      price: "$30",
      timg: "https://themewagon.github.io/eflyer/images/mobile-img.png",
      buyproduct: "Buy Now",
      seemore: "See More",
    },
    {
      head: "Man T-shirt",
      para: "price",
      price: "$30",
      timg: "https://themewagon.github.io/eflyer/images/laptop-img.png",
      buyproduct: "Buy Now",
      seemore: "See More",
    },
    {
      head: "Man T-shirt",
      para: "price",
      price: "$30",
      timg: "https://themewagon.github.io/eflyer/images/mobile-img.png",
      buyproduct: "Buy Now",
      seemore: "See More",
    },
    {
      head: "Man T-shirt",
      para: "price",
      price: "$30",
      timg: "https://themewagon.github.io/eflyer/images/mobile-img.png",
      buyproduct: "Buy Now",
      seemore: "See More",
    },
  ];
  return (
    <div>
      <div className="my_container pt-5 ">
        <h2 className="ff_poppins fs_lg clr_moreblack fw-bold text-center py-4">
          Electronic
        </h2>
        <Slider {...settings} ref={button} className="">
          {
          products.map((product, index) => (
            <Col lg="4" className="px-3">
              <div className="box_main mt-4 mb-5 h-100">
                <h1 className="ff_poppins fs_md fw-semibold clr_normalblack text-center">
                  {product.head}
                </h1>
                <div className="d-flex justify-content-center">
                  <p className="ff_poppins fs_sm clr_ylo fw-normal">
                    {product.para}
                  </p>
                  <span className="ff_poppins fs_sm clr_normalblack fw-normal ps-2">
                    {product.price}
                  </span>
                </div>
                <div className="py-4">
                  <img className="w-100" src={product.timg} alt="" />
                </div>
                <div className="d-flex justify-content-between pt-3">
                  <div>
                    <a className="ff_poppins fs_sm clr_ylo fw-medium" href="#">
                      {product.buyproduct}
                    </a>
                  </div>
                  <div>
                    <a
                      className="ff_poppins fs_sm clr_normalblack  fw-normal"
                      href="#"
                    >
                      {product.seemore}
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Slider>
        <div className="d-flex justify-content-center gap-5 pt-3">
          <button
            className="btn_arrow prev"
            onClick={() => button.current.slickPrev()}
          >
            &#8592;
          </button>
          <button
            className="btn_arrow next"
            onClick={() => button.current.slickNext()}
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Electronic;
