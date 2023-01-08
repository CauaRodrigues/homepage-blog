import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import Header from "../../components/Header";
import Post from "../../components/Post";
import fetchAPI from "../../service/fetchApi";
import formatDate from "../../utils/formatDate";

const response = fetchAPI(
	"https://my-json-server.typicode.com/CauaRodrigues/homepage-blog/db"
);

const Home = () => {
	const isDesktopDown = useMediaQuery({
		query: "(max-width: 1200px)",
	});
	const [recentPosts, setRecentPosts] = useState([]);
	const [listPosts, setListPosts] = useState([]);

	useEffect(() => {
		response.then(({ data, error }) => {
			if (!error) {
				setRecentPosts(data.recentPost);
				setListPosts(data.post);
			} else {
				console.log(error);
			}
		});
	}, []);

	const getSize = (index) => {
		if (index + 1 === 1) {
			return "lg";
		} else {
			return isDesktopDown ? "lg" : "sm";
		}
	};

	return (
		<main>
			<Header />

			<article>
				<h2>Recent blog posts</h2>

				<section className="recent-posts">
					{recentPosts.map((post, index) => (
						<Post
							key={index}
							item={index + 1}
							iconLink
							size={getSize(index)}
							img={post.image}
							title={post.title}
							author={post.author}
							release={formatDate(post.release)}
							description={post.description}
							label={post.tags}
						/>
					))}
				</section>

				<h2>All blog posts</h2>
				<section className="all-posts">
					{listPosts.map((post, index) => (
						<Post
							key={index}
							item={index + 1}
							iconLink
							size="lg"
							img={post.image}
							title={post.title}
							author={post.author}
							release={formatDate(post.release)}
							description={post.description}
							label={post.tags}
						/>
					))}
				</section>
			</article>
		</main>
	);
};

export default Home;
