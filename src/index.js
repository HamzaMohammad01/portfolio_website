import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { register } from "swiper/element/bundle";

const root = ReactDOM.createRoot(document.getElementById("root"));
register();
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

reportWebVitals();
