//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Proptypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
import { NavBar } from "./component/navbar.js";
import { Jumbotron } from "./component/jumbotron.js";
import { Cards } from "./component/cards";
import { Footer } from "./component/footer";
//render your react application. que quiero dibujar y donde lo dibujo.
ReactDOM.render(<Home />, document.querySelector("#app"));
