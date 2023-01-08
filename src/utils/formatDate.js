const formatDate = (date) => {
	date = new Date(date);
	const day = date.getDate();
	const month = date.toLocaleString("en-US", { month: "short" });
	const year = date.getFullYear();

	return `${day} ${month} ${year}`;
};

export default formatDate;
