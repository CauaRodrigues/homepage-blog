import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

import Label from "../Label";

const Post = ({
	size = "md",
	img,
	title,
	date,
	author,
	description,
	label,
	iconLink,
}) => {
	return (
		<div className={`box--post ${size}`}>
			<img src={img} alt={title} />

			<div className="info-posts">
				<span>
					{author} - {date}
				</span>

				<div className="title-post--link-icon">
					<h3>{title}</h3>

					{iconLink && <FiArrowUpRight />}
				</div>

				<p>{description}</p>

				<Label tags={label} />
			</div>
		</div>
	);
};

export default Post;
