import React from "react";

const Header = () => {
	return (
		<header>
			<span className="legend">Our blog</span>
			<h1>Stories and interviews</h1>
			<p>
				Subscribe to learn about new product features, the latest in technology,
				solutions, and updates.
			</p>

			<form>
				<div className="input-btn">
					<input type="email" placeholder="Enter your email" />
					<button>Subscribe</button>
				</div>

				<p className="advice">
					We care about your data in our <span>privacy policy</span>
				</p>
			</form>
		</header>
	);
};

export default Header;
