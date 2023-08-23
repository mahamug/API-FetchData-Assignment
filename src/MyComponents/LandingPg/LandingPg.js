import React, { useReducer, useState } from "react";
import "../Styles/Styles.css";
import Explore from "./Explore/Explore";
import reducer from "../../helper/reducer";

const initialState = {
  showExplore: false,
};

const LandingPg = ({ cartCount, onAddToCart }) => {
  // const [showExplore, setShowExplore] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleOnClick = () => {
    // setShowExplore(true);
    dispatch({ type: "Show-explore" });
  };

  return (
    <div className="main">
      <div className="nav">
        <h5>Happy Shopping</h5>
        <h5>Colorful</h5>
        <h5>Website</h5>
        <h5>Sales</h5>
        <h5>Interaction</h5>
        <h5>Concept</h5>
        <button className="bucket-icon"></button>
        <span>{cartCount}</span>
      </div>
      {state.showExplore ? (
        <Explore cartCount={cartCount} onAddToCart={onAddToCart} />
      ) : (
        <div className="center">
          <div className="heading">
            <h1>Happy Shopping</h1>
            <h2>Happy Shopping</h2>
          </div>
          <div className="image">
            <img
              src="https://a.storyblok.com/f/54304/1438x960/5097b7bdfd/fw23-brand-launch-720x480_0008_listing-page-hero-adult-_-sneaker-socks.jpg/m/1366x0/filters:quality(60)"
              alt=""
            />
          </div>
          <div className="explore">
            <button onClick={handleOnClick}>explore</button>
          </div>
          <div className="socks"></div>
          <div className="socksLeft"></div>
        </div>
      )}
    </div>
  );
};

export default LandingPg;
