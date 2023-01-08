import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

import Label from "../Label";

const Post = ({
	size = "lg",
	item,
	img,
	title,
	release,
	author,
	description,
	label,
	iconLink,
}) => {
	return (
		<div className={`box--post ${size} post${item}`}>
			<img src={img} alt={title} />

			<div className="info-posts">
				<span className="author--release">
					{author} • {release}
				</span>

				<div className="title--icon">
					<h3>{title}</h3>

					{iconLink && <FiArrowUpRight size={24} color="#101828" />}
				</div>

				<p>{description}</p>

				<Label tags={label} />
			</div>
		</div>
	);
};

export default Post;
