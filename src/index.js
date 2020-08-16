import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/main";
import GlobalStyle from "./styles/global";

ReactDOM.render(
    <React.StrictMode>
        <App />
        <GlobalStyle />
    </React.StrictMode>,
    document.getElementById("root")
);
