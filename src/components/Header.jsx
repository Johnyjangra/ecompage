import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faCartShopping,
  faUser,
  faMagnifyingGlass,
  faCross,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Slider from "react-slick";
const Header = () => {
  const [nav, setnav] = useState(true);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="head_bg overflow-hidden">
      <div className="bg_blur">
        <div className="my_container">
          <div className="bg_brown py-3 d-md-block d-none">
            <ul className=" d-flex justify-content-between align-items-center mx_650 mx-auto mb-0 ps-0">
              <li>
                <a
                  className="ff_poppins clr_lytwhite fs_sm fw-normal hover_text_orng"
                  href="#"
                >
                  Best Seller
                </a>
              </li>
              <li>
                <a
                  className="ff_poppins clr_lytwhite fs_sm fw-normal hover_text_orng"
                  href="#"
                >
                  Gift Ideas
                </a>
              </li>
              <li>
                <a
                  className="ff_poppins clr_lytwhite fs_sm fw-normal hover_text_orng"
                  href="#"
                >
                  New Releases
                </a>
              </li>
              <li>
                <a
                  className="ff_poppins clr_lytwhite fs_sm fw-normal hover_text_orng"
                  href="#"
                >
                  Today's Deals
                </a>
              </li>
              <li>
                <a
                  className="ff_poppins clr_lytwhite fs_sm fw-normal hover_text_orng"
                  href="#"
                >
                  Customer Service
                </a>
              </li>
            </ul>
          </div>
          {/* -----------logo--------- */}
          <div>
            <div className="pt-3">
              <h1 className="logo_style pt-4">Eflyer</h1>
            </div>
          </div>
          {/* ------head---------- */}
          <div className="d-flex align-items-center justify-content-between pt-4 px-lg-0 px-5">
            <div
              className="cur_pointr"
              onClick={() => {
                setnav(false);
              }}
            >
              <div className="click_nav"></div>
              <div className="click_nav2"></div>
              <div className="click_nav3"></div>
            </div>
            <div>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="d-lg-block d-none">
              <div
                id="head_input"
                className="d-flex align-items-center search_style "
              >
                <input className="w-100 " type="search" placeholder="search" />
                <div className="bg_ylow">
                  <FontAwesomeIcon
                    className="clr_lytwhite cur_pointr"
                    icon={faMagnifyingGlass}
                  />
                </div>
              </div>
            </div>
            <div className="d-lg-block d-none">
              <div className="bg-white d-flex align-items-center ps-2 br_rdc12 ">
                <div>
                  <img
                    src="https://themewagon.github.io/eflyer/images/flag-uk.png"
                    alt="flag"
                  />
                </div>
                <select className="ff_poppins clr_lytblack fs_sm br_rdc12">
                  <option value="A">English</option>
                  <option value="B">French</option>
                </select>
              </div>
            </div>
            <div className="d-flex">
              <div className="cart_hover">
                <FontAwesomeIcon
                  className="clr_lytwhite clr_set cur_pointr"
                  icon={faCartShopping}
                />
                <a
                  className="ff_poppins clr_lytwhite fs_sm fw-normal hover_t ext_orng clr_set ps-2"
                  href="#"
                >
                  CART
                </a>
              </div>
              <div className="ps-4 cart_hover">
                <FontAwesomeIcon
                  className="clr_lytwhite clr_set cur_pointr"
                  icon={faUser}
                />
                <a
                  className="ff_poppins clr_lytwhite fs_sm fw-normal hover_text_orng clr_set ps-2"
                  href="#"
                >
                  PROFILE
                </a>
              </div>
            </div>
          </div>
          <div className="d-lg-none d-block">
            <div className="d-flex justify-content-center pt-5 gap-5">
              <div
                id="head_input"
                className="d-flex align-items-center search_style "
              >
                <input className="w-100 " type="search" placeholder="search" />
                <div className="bg_ylow">
                  <FontAwesomeIcon
                    className="clr_lytwhite cur_pointr"
                    icon={faMagnifyingGlass}
                  />
                </div>
              </div>
              <div className="bg-white d-flex align-items-center ps-2 br_rdc12">
                <div>
                  <img
                    src="https://themewagon.github.io/eflyer/images/flag-uk.png"
                    alt="flag"
                  />
                </div>
                <select className="ff_poppins clr_lytblack fs_sm br_rdc12">
                  <option value="A">English</option>
                  <option value="B">French</option>
                </select>
              </div>
            </div>
          </div>

          {/* -----------------slide--------------- */}
          <div className="pt-lg-5 mt-5">
            <Slider className="pt-5" {...settings}>
              <div>
                <h3 className="ff_poppins fw-bold fs_xl clr_lytwhite mx_700 text-center mx-auto">
                  Get Start <br /> Your Free Shopping
                </h3>
                <div className="text-center pt-2">
                  <button className="but_btn ff_poppins clr_lytwhite fw-normal fs_sm ">
                    Buy Now
                  </button>
                </div>
              </div>
              <div>
                <h3 className="ff_poppins fw-bold fs_xl clr_lytwhite mx_700 text-center mx-auto">
                  Get Start <br /> Your Free Shopping
                </h3>
                <div className="text-center  pt-2">
                  <button className="but_btn ff_poppins clr_lytwhite fw-normal fs_sm ">
                    Buy Now
                  </button>
                </div>
              </div>
              <div>
                <h3 className="ff_poppins fw-bold fs_xl clr_lytwhite mx_700 text-center mx-auto">
                  Get Start <br /> Your Free Shopping
                </h3>
                <div className="text-center  pt-2">
                  <button className="but_btn ff_poppins clr_lytwhite fw-normal fs_sm ">
                    Buy Now
                  </button>
                </div>
              </div>
              <div>
                <h3 className="ff_poppins fw-bold fs_xl clr_lytwhite mx_700 text-center mx-auto">
                  Get Start <br /> Your Free Shopping
                </h3>
                <div className="text-center  pt-2">
                  <button className="but_btn ff_poppins clr_lytwhite fw-normal fs_sm ">
                    Buy Now
                  </button>
                </div>
              </div>
              <div>
                <h3 className="ff_poppins fw-bold fs_xl clr_lytwhite mx_700 text-center mx-auto">
                  Get Start <br /> Your Free Shopping
                </h3>
                <div className="text-center  pt-2">
                  <button className="but_btn ff_poppins clr_lytwhite fw-normal fs_sm ">
                    Buy Now
                  </button>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/* -------------side nav-------- */}

      <div>
        <ul className={nav ? "side_nave l_m100" : "side_nave l_0"}>
          <li>
            <FontAwesomeIcon
              onClick={() => {
                setnav(true);
              }}
              className="clr_lytwhite cross_style cur_pointr"
              icon={faXmark}
            />
          </li>
          <li>
            <a
              className="ff_poppins fs_md fw-semibold clr_white nav_lihovr"
              href="#"
            >
              Home
            </a>
          </li>
          <li className="pt-4">
            <a
              className="ff_poppins fs_md fw-semibold clr_white nav_lihovr"
              href="#"
            >
              Function
            </a>
          </li>
          <li className="pt-4">
            <a
              className="ff_poppins fs_md fw-semibold clr_white nav_lihovr"
              href="#"
            >
              Electronic
            </a>
          </li>
          <li className="pt-4">
            <a
              className="ff_poppins fs_md fw-semibold clr_white nav_lihovr"
              href="#"
            >
              Jewellery
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
