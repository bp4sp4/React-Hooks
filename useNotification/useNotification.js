import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }

  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options); // options를 사용하여 알림을 생성합니다.
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options); // options를 사용하여 알림을 생성합니다.
    }
  };

  return fireNotif;
};

const App = () => {
  const triggerNotif = useNotification("Can I steal your kimchi?", {
    body: "This is a notification from your app.",
  });

  return (
    <div className="App" style={{ height: "1000vh" }}>
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};

export default App;
