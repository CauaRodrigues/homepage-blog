const data = {
	Post: [
		{
			id: 1,
			image: "https://imgur.com/eo3UMVl.png",
			title: "UX review presentations",
			author: "Olivia Rhye",
			release: new Date("20-01-2023"),
			description:
				"How do you create compelling presentations that wow your colleagues and impress your managers?",
			tags: ["Design", "research"],
		},
		{
			id: 2,
			image: "https://imgur.com/OJ4U0HM.png",
			title: "Migrating to Linear 101",
			author: "Phoenix Baker",
			release: new Date("19-01-2023"),
			description:
				"Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get...",
			tags: ["Design", "Research"],
		},
		{
			id: 3,
			image: "https://imgur.com/OXHe2DC.png",
			title: "Building your API Stack",
			author: "Lana Steiner",
			release: new Date("18-01-2023"),
			description:
				"The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
			tags: ["Design", "Research"],
		},
		{
			id: 4,
			image: "https://imgur.com/VMvVlV7.png",
			title: "Bill Walsh leadership lessons",
			author: "Alec Whitte",
			release: new Date("17-01-2023"),
			description:
				"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
			tags: ["Leadership", "Management"],
		},
		{
			id: 5,
			image: "https://imgur.com/ymOW4ys.png",
			title: "PM mental models",
			author: "Demi WIlkinson",
			release: new Date("16-01-2023"),
			description:
				"Mental models are simple expressions of complex processes or relationships.",
			tags: ["Product", "Research", "Frameworks"],
		},
		{
			id: 6,
			image: "https://imgur.com/2LfaLcX.png",
			title: "What is Wireframing?",
			author: "Candice Wu",
			release: new Date("15-01-2023"),
			description:
				"Introduction to Wireframing and its Principles. Learn from the best in the industry.",
			tags: ["Design", "Research"],
		},
		{
			id: 7,
			image: "https://imgur.com/jkDiNAH.png",
			title: "How collaboration makes us better designers",
			author: "Natali Craig",
			release: new Date("14-01-2023"),
			description:
				"Collaboration can make our teams stronger, and our individual designs better.",
			tags: ["Design", "Research"],
		},
		{
			id: 8,
			image: "https://imgur.com/jbN4HmY.png",
			title: "Our top 10 Javascript frameworks to use",
			author: "Drew Cano",
			release: new Date("13-01-2023"),
			description:
				"JavaScript frameworks make development easy with extensive features and functionalities.",
			tags: ["Software Development", "Tools", "SaaS"],
		},
		{
			id: 9,
			image: "https://imgur.com/sxJA7TZ.png",
			title: "Podcast: Creating a better CX Community",
			author: "Orlando Diggs",
			release: new Date("12-01-2023"),
			description:
				"Starting a community doesn't need to be complicated, but how do you get started?",
			tags: ["Podcasts", "Customer Success"],
		},
	],
};

const json = JSON.stringify(data);

console.log(json);
