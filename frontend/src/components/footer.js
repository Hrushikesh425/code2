import React from "react";
import { CDBFooter, CDBBox, CDBBtn, CDBIcon } from "cdbreact";
import footer from "../images/footer.png";
import "../App.css";

export const Footer = () => {
  return (
    <CDBFooter className="footer  z-10">
      <CDBBox
        display="flex"
        color="#808080"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: "80%" }}
      >
        <CDBBox heig display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img alt="logo" src={footer} width="30px" />
            <span className="ml-4 h5 mb-0 font-weight-bold">EventApp</span>
          </a>
          <small className="ml-2">
            &copy; EventApp, 2022. All rights reserved.
          </small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};
