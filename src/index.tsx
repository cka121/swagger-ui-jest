import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

async function init () {
    try {
  
      const root = createRoot(document.getElementById("root") as HTMLElement);
  
      root.render(
            <React.StrictMode>
              <App />
            </React.StrictMode>
      );
  
      // If you want to start measuring performance in your app, pass a function
      // to log results (for example: reportWebVitals(console.log))
      // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
      // eslint-disable-next-line no-console
     // reportWebVitals(console.log);
    } catch (err) {
      console.error("Application can't start", err);
    }
  }
  
  void init();