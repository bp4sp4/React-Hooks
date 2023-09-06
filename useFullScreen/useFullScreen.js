import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFUll = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { element, triggerFull, exitFUll };
};

const App = () => {
  const onFullS = (isFUll) => {
    console.log(isFUll ? "we are full" : "we are small");
  };
  const { element, triggerFull, exitFUll } = useFullscreen(onFullS);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img src=" https://cdn.gameple.co.kr/news/photo/202212/204524_210082_2252.png" />
        <button onClick={exitFUll}>exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>make fullscreen</button>
    </div>
  );
};

export default App;
