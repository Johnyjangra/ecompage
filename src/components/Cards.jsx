import React from "react";
import { Col, Row } from "react-bootstrap";

const Cards = () => {
  const shopcard = [{ show: "myname" }, { myroll: "1689" }];
  return (
    <div>
      <div className="my_container">
        <h2 className="ff_poppins fs_lg clr_normalblack fw-bold text-center pt-5">
          Man & Woman Fashion
        </h2>
        <Row className="d-flex">
          {shopcard.map((crds) => (
            <Col lg="4">
              <div className="bg_red mt-4 "> {crds}</div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Cards;
