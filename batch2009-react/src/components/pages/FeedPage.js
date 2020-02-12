/* This page is not added in the website */

import React from "react";
import { Header, Grid } from "semantic-ui-react";

import Article from "../utilities/Article";

const feeds = [
	{
		id: 1,
		title: "Lorem Ipsum",
		date: "August 3, 2018",
		labels: ["Navodaya Dayz", "12th class", "Memories"],
		content:
			"Ut sit amet nunc in nisi efficitur fermentum. Phasellus vehicula tellus et justo pharetra, eu accumsan magna placerat. Phasellus enim enim, tempus vel lectus in, finibus egestas tellus. Ut aliquam porttitor egestas. Etiam justo ipsum, fringilla a sodales et, lacinia lobortis felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut in finibus leo. Sed aliquam ipsum mi, non rutrum odio viverra a. Etiam et laoreet diam. Ut sit amet nunc in nisi efficitur fermentum. Phasellus vehicula tellus et justo pharetra, eu accumsan magna placerat. Phasellus enim enim, tempus vel lectus in, finibus egestas tellus. Ut aliquam porttitor egestas. Etiam justo ipsum, fringilla a sodales et, lacinia lobortis felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut in finibus leo. Sed aliquam ipsum mi, non rutrum odio viverra a. Etiam et laoreet diam.",
		rating: 4.4,
		NoOfRatings: 20,
		ratedUsers: []
	},
	{
		id: 2,
		title: "Lorem Ipsum",
		date: "August 3, 2018",
		labels: ["Navodaya Dayz", "12th class", "Memories"],
		content:
			"Ut sit amet nunc in nisi efficitur fermentum. Phasellus vehicula tellus et justo pharetra, eu accumsan magna placerat. Phasellus enim enim, tempus vel lectus in, finibus egestas tellus. Ut aliquam porttitor egestas. Etiam justo ipsum, fringilla a sodales et, lacinia lobortis felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut in finibus leo. Sed aliquam ipsum mi, non rutrum odio viverra a. Etiam et laoreet diam. Ut sit amet nunc in nisi efficitur fermentum. Phasellus vehicula tellus et justo pharetra, eu accumsan magna placerat. Phasellus enim enim, tempus vel lectus in, finibus egestas tellus. Ut aliquam porttitor egestas. Etiam justo ipsum, fringilla a sodales et, lacinia lobortis felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut in finibus leo. Sed aliquam ipsum mi, non rutrum odio viverra a. Etiam et laoreet diam.",
		rating: 4.4,
		NoOfRatings: 20,
		ratedUsers: []
	},
	{
		id: 3,
		title: "Lorem Ipsum",
		date: "August 3, 2018",
		labels: ["Navodaya Dayz", "12th class", "Memories"],
		content:
			"Ut sit amet nunc in nisi efficitur fermentum. Phasellus vehicula tellus et justo pharetra, eu accumsan magna placerat. Phasellus enim enim, tempus vel lectus in, finibus egestas tellus. Ut aliquam porttitor egestas. Etiam justo ipsum, fringilla a sodales et, lacinia lobortis felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut in finibus leo. Sed aliquam ipsum mi, non rutrum odio viverra a. Etiam et laoreet diam. Ut sit amet nunc in nisi efficitur fermentum. Phasellus vehicula tellus et justo pharetra, eu accumsan magna placerat. Phasellus enim enim, tempus vel lectus in, finibus egestas tellus. Ut aliquam porttitor egestas. Etiam justo ipsum, fringilla a sodales et, lacinia lobortis felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut in finibus leo. Sed aliquam ipsum mi, non rutrum odio viverra a. Etiam et laoreet diam.",
		rating: 4.4,
		NoOfRatings: 20,
		ratedUsers: []
	}
];

class FeedPage extends React.Component {
	state = { feeds };

	SetRating = (id, newRating, newNoOfRatings) => {
		Object.assign(feeds.find(ann => ann.id === id), {
			rating: parseFloat(newRating, 10),
			NoOfRatings: parseInt(newNoOfRatings, 10)
		});

		this.setState({ feeds });
	};

	render() {
		return (
			<Grid centered textAlign="center" stackable>
				<Grid.Row centered>
					<Header as="h1" content="Feed" color="teal" />
				</Grid.Row>
				{feeds.map(feed => (
					<Grid.Row columns={2} key={feed.id}>
						<Grid.Column>
							<Article
								fromPage={"AnnouncementsPage"}
								title={feed.title}
								date={feed.date}
								labels={feed.labels}
								content={feed.content}
								rating={feed.rating}
								id={feed.id}
								NoOfRatings={feed.NoOfRatings}
								SetRating={this.SetRating}
							/>
						</Grid.Column>
					</Grid.Row>
				))}
			</Grid>
		);
	}
}

export default FeedPage;
