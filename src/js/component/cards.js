import React from "react";
import PropTypes from "prop-types";

export function Cards(props) {
	return (
		<div className="card">
			<img
				className="card-img-top"
				src={props.image}
				alt="Card image cap"
			/>
			<div className="card-body text-center ">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text text-justify">{props.text}</p>
				<a href="#" className={"btn btn-" + props.buttonType}>
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
}

Cards.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	buttonLabel: PropTypes.string,
	image: PropTypes.string,
	buttonType: PropTypes.string
};
