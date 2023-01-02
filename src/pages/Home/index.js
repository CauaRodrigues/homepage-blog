import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Header from "../../components/Header";
import Image from "../../assets/images/ux-review-presentations.png";
import Label from "../../components/Label";

const Home = () => {
	return (
		<main>
			<Header />

			<article>
				<section className="container-posts">
					<h2>Recent blog posts</h2>

					<section className="recent-posts">
						<div className="box--lg-post">
							<img src={Image} alt="UX review presentations" />

							<div className="info-posts">
								<span>Olivia Rhye - 20 Jan 2022</span>
								<h3>UX review presentations</h3>
								<p>
									How do you create compelling presentations that wow your
									colleagues and impress your managers?
								</p>

								<Label tags={["design", "research", "presentation"]} />
							</div>
						</div>
					</section>
				</section>

				<section></section>
			</article>

			<footer></footer>
		</main>
	);
};

export default Home;
