import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {Provider} from 'react-redux'
import store from "./store.js";

const container = document.getElementById("app"); 
const root = createRoot(container);

function RootComponent() {
  return (
    <>
    <Provider store={store}>
      <App />
      </Provider>
    </>
  );
}

// Use the `root` object to render your app.
root.render(<RootComponent />);
