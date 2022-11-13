import React, { useState } from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import InputSlider from "./Slider";
import { Button } from "@material-ui/core";

function Header(props) {
  
  return (
    <header>
      <h1>
        <img src="backpack2.png" style={{width : '40px'}} />
        Problème du sac à dos
      </h1>
      <Button style={{backgroundColor : '#BF720D', color : '#fff'}} onClick ={props.onSolve}>{props.value}</Button>
      <div className="inputSlider">
      <InputSlider />
      </div>
    </header>
  );
}

export default Header;
