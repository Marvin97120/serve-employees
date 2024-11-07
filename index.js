import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const sampleEmployee = [
	{
		name: {
			first: "Charlie",
			last: "Thompson",
		},
		email: "charlie.thompson@example.com",
		picture: {
			medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
		},
	},
	{
		name: {
			first: "Peter",
			last: "Thompson",
		},
		email: "Peter.thompson@example.com",
		picture: {
			medium: "https://randomuser.me/api/portraits/med/men/41.jpg",
		},
	},
	{
		name: {
			first: "Marc",
			last: "Thompson",
		},
		email: "Marc.thompson@example.com",
		picture: {
			medium: "https://randomuser.me/api/portraits/med/men/42.jpg",
		},
	},
];

app.get("/api/employees", (req, res) => {
	res.json({ results: sampleEmployee });
});

const port = 3310;

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});