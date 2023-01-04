import React from "react";
import Header from "../../components/Header";
import Post from "../../components/Post";

const Home = () => {
	return (
		<main>
			<Header />

			<article>
				<h2>Recent blog posts</h2>

				<section className="recent-posts">
					<Post
						size="lg"
						img="https://imgur.com/eo3UMVl.png"
						title="UX review presentations"
						author="Olivia Rhye"
						date="20 Jan 2022"
						description="How do you create compelling presentations that wow your colleagues and impress your managers?"
						label={["design", "research", "presentation"]}
						iconLink
					/>

					<Post
						size="md"
						img="https://imgur.com/OJ4U0HM.png"
						title="Migrating to Linear 101"
						author="Phoenix Baker"
						date="19 Jan 2022"
						description="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get..."
						label={["Design", "Research"]}
						iconLink={false}
					/>

					<Post
						size="md"
						img="https://imgur.com/2LfaLcX.png"
						title="Building your API Stack"
						author="Lana Steiner"
						date="18 Jan 2022"
						description="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag..."
						label={["Design", "Research"]}
						iconLink={false}
					/>
				</section>

				<section className="all-posts"></section>
			</article>

			<footer></footer>
		</main>
	);
};

export default Home;
