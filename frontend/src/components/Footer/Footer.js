import React from "react";
import "./index.css";
import first from "../../assets/visibility1.png";

import second from "../../assets/visibility2.png";
import third from "../../assets/visibility3.png";
import fourth from "../../assets/visibility4.png";

const Footer = () => {
  return (
    <>
      <div className="heading-div">
        <h1 className="heading">One login for multi-bank cash visibility</h1>
      </div>
      <div className="main">
        <div className="main-container grid grid-cols-2 gap-4">
          <div className="">
            <p>Maximize returns, minimize hassle</p>
            <p>
              Access US Treasuries, Money Market Funds and Cash Sweeps with
              automatic rollovers and rebalancing, done for you.
            </p>
          </div>
          <div>
            <img className="img" src={first} alt="image" />
          </div>
        </div>

        <div className="main-container grid grid-cols-4 gap-4">
          <div>
            <p>Custodial strength and stability</p>
            <p>
              Retain full control of your assets with the strength and stability
              of an institutional custodian, with up to $5.5M in insurance
              coverage available* and portfolios that aim to preserve principal.
            </p>
          </div>
          <div>
            <img className="img" src={second} alt="image" />
          </div>
        </div>
        <div className="main-container">
          <div>
            <p>Seamless money movement</p>
            <p>
              Add and withdraw funds in 1 to 2 business days with unlimited free
              ACH or Wire transfers, and build rules to automate money moves.
            </p>
          </div>
          <div>
            <img className="img" src={third} alt="image" />
          </div>
        </div>
        <div className="main-container">
          <div>
            <p>Sync your books, in one click</p>
            <p>
              Seamlessly connect Vesto with your accounting systems and automate
              hours of manual work.
            </p>
          </div>
          <div>
            <img className="img" src={fourth} alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
