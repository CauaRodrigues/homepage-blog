import React from "react";

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

	const colorsUsed = [];

	class createTag {
		constructor(name) {
			this.name = name;
			this.getRadomColor = () => {
				let numberColor = Math.floor(Math.random() * colors.length);
				while (colorsUsed.includes(numberColor)) {
					numberColor = Math.floor(Math.random() * colors.length);
				}
				colorsUsed.push(numberColor);
				return colors[numberColor];
			};

			return {
				name: this.name,
				color: this.getRadomColor(),
			};
		}
	}

	const listTags = () => {
		let arr = [];
		for (let i = 0; i < tags.length; i++) {
			let tag = new createTag(tags[i]);
			arr.push(tag);
		}
		return arr;
	};

	return (
		<div className="labels">
			{listTags().map(({ name, color }, id) => (
				<span key={id} className={color}>
					{name}
				</span>
			))}
		</div>
	);
};

export default Label;
