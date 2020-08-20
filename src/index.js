import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/main";
import GlobalStyle from "./styles/global";

ReactDOM.render(
    <>
        <App />
        <GlobalStyle />
    </>,

    document.getElementById("root")
);
