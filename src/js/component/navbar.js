import React from "react";
import Proptypes from "prop-types";
//create your first component
export function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
			<a className="navbar-brand" href="#">
				Start Bootstrap
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav sticky-top ml-auto">
					<a className="nav-item nav-link" href="#">
						Homes <span className="sr-only">(current)</span>
					</a>
					<a className="nav-item nav-link" href="#">
						About
					</a>
					<a className="nav-item nav-link" href="#">
						Services
					</a>
					<a className="nav-item nav-link align-right" href="#">
						Contact
					</a>
				</div>
			</div>
		</nav>
	);
}
