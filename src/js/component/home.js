import React from "react";

//include images into your bundle
import { NavBar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Cards } from "./cards";
import { Footer } from "./footer";

//create your first component
export function Home() {
	return (
		<div>
			<NavBar />
			<Jumbotron />
			<div className="row">
				<div className="col-lg-3">
					<Cards
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum"
						title="Titulo"
						buttonLabel="click"
						image="https://picsum.photos/id/237/500/325"
						buttonType="danger"
					/>
				</div>
				<div className="col-lg-3">
					<Cards
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum"
						title="Titulo"
						buttonLabel="click"
						image="https://picsum.photos/id/238/500/325"
						buttonType="primary"
					/>
				</div>
				<div className="col-lg-3">
					<Cards
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum"
						title="Titulo"
						buttonLabel="click"
						image="https://picsum.photos/id/231/500/325"
						buttonType="secondary"
					/>
				</div>
				<div className="col-lg-3">
					<Cards
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum"
						title="Titulo"
						buttonLabel="click"
						image="https://picsum.photos/id/239/500/325"
						buttonType="danger"
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}
