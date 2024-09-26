import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
import { Provider } from "react-redux";

import App from "./App/App.tsx";
import firebase from "firebase/compat/app";
import firebaseConfig from "../firebaseConfige.ts";
import store from "./Services/store";

import "./Style/index.scss";

firebase.initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
