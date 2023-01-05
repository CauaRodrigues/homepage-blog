import React from "react";
import { useMediaQuery } from "react-responsive";
import Header from "../../components/Header";
import Post from "../../components/Post";

const Home = () => {
	const isDesktopDown = useMediaQuery({
		query: "(max-width: 1200px)",
	});

	return (
		<main>
			<Header />

			<article>
				<h2>Recent blog posts</h2>

				<section className="recent-posts">
					<Post
						size="lg"
						item={1}
						img="https://imgur.com/eo3UMVl.png"
						title="UX review presentations"
						author="Olivia Rhye"
						release="20 Jan 2022"
						description="How do you create compelling presentations that wow your colleagues and impress your managers?"
						label={["design", "research", "presentation"]}
						iconLink
					/>

					<Post
						size={isDesktopDown ? "lg" : "sm"}
						item={2}
						img="https://imgur.com/OJ4U0HM.png"
						title="Migrating to Linear 101"
						author="Phoenix Baker"
						release="19 Jan 2022"
						description="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get..."
						label={["Design", "Research"]}
						iconLink={isDesktopDown}
					/>

					<Post
						size={isDesktopDown ? "lg" : "sm"}
						item={3}
						img="https://imgur.com/OXHe2DC.png"
						title="Building your API Stack"
						author="Lana Steiner"
						release="18 Jan 2022"
						description="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag..."
						label={["Design", "Research"]}
						iconLink={isDesktopDown}
					/>
				</section>

				<h2>All blog posts</h2>
				<section className="all-posts">
					<Post
						size="lg"
						item={1}
						img="https://imgur.com/VMvVlV7.png"
						title="Bill Walsh leadership lessons"
						author="Alec Whitten"
						release="17 Jan 2022"
						description="Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?"
						label={["Leadership", "Management"]}
						iconLink
					/>

					<Post
						size="lg"
						item={2}
						img="https://imgur.com/ymOW4ys.png"
						title="PM mental models"
						author="Demi WIlkinson"
						release="16 Jan 2022"
						description="Mental models are simple expressions of complex processes or relationships."
						label={["Product", "Research", "Frameworks"]}
						iconLink
					/>

					<Post
						size="lg"
						item={3}
						img="https://imgur.com/2LfaLcX.png"
						title="What is Wireframing?"
						author="Candice Wu"
						release="15 Jan 2022"
						description="Introduction to Wireframing and its Principles. Learn from the best in the industry."
						label={["Design", "Research"]}
						iconLink
					/>

					<Post
						size="lg"
						item={4}
						img="https://imgur.com/jkDiNAH.png"
						title="How collaboration makes us better designers"
						author="Natali Craig"
						release="14 Jan 2022"
						description="Collaboration can make our teams stronger, and our individual designs better."
						label={["Design", "Research"]}
						iconLink
					/>

					<Post
						size="lg"
						item={5}
						img="https://imgur.com/jbN4HmY.png"
						title="Our top 10 Javascript frameworks to use"
						author="Drew Cano"
						release="13 Jan 2022"
						description="JavaScript frameworks make development easy with extensive features and functionalities."
						label={["Software Development", "Tools", "SaaS"]}
						iconLink
					/>

					<Post
						size="lg"
						item={6}
						img="https://imgur.com/sxJA7TZ.png"
						title="Podcast: Creating a better CX Community"
						author="Orlando Diggs"
						release="12 Jan 2022"
						description="Starting a community doesn't need to be complicated, but how do you get started?"
						label={["Podcasts", "Customer Success"]}
						iconLink
					/>
				</section>
			</article>

			<footer></footer>
		</main>
	);
};

export default Home;
