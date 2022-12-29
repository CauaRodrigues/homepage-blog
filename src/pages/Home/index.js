import React from "react";
import "./style.scss";
import { FiArrowUpRight } from "react-icons/fi";

const Home = () => {
	return (
		<main>
			<header>
				<span>Our blog</span>
				<h1>Stories and interviews</h1>
				<p>
					Subscribe to learn about new product features, the latest in
					technology, solutions, and updates.
				</p>

				<form>
					<div>
						<input type="email" placeholder="Enter your email" />
						<button>Subscribe</button>
					</div>

					<p>
						We care about your data in our <span>privacy policy</span>
					</p>
				</form>
			</header>

			<article>
				<section></section>
				<section></section>
			</article>

			<footer></footer>
		</main>
	);
};

export default Home;
