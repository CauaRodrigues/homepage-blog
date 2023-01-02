import React, { useEffect, useState } from "react";

const Label = ({ tags }) => {
	const colors = [
		"purple",
		"blue",
		"darkblue",
		"pink",
		"darkpink",
		"orange",
		"green",
	];

	const [color, setColor] = useState(
		colors[Math.floor(Math.random() * colors.length)]
	);

	const randomColor = (color) => {};

	return (
		<div className="labels">
			<span className={color}>{tags[0]}</span>

			<span className={color}>{tags[1]}</span>
		</div>
	);
};

export default Label;
