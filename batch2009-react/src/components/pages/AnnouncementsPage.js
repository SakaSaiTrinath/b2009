import React from "react";
import { Grid, Header } from "semantic-ui-react";

import AnnArticle from "../utilities/AnnArticle";

const anns = [
	{
		id: 1,
		title: "Lorem Ipsum",
		date: "August 3, 2018",
		content:
			"Ut sit amet nunc in nisi efficitur fermentum. Phasellus vehicula tellus et justo pharetra, eu accumsan magna placerat. Phasellus enim enim, tempus vel lectus in, finibus egestas tellus. Ut aliquam porttitor egestas. Etiam justo ipsum, fringilla a sodales et, lacinia lobortis felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut in finibus leo. Sed aliquam ipsum mi, non rutrum odio viverra a. Etiam et laoreet diam.",
		rating: 4.4,
		NoOfRatings: 20,
		ratedUsers: []
	},
	{
		id: 2,
		title: "Lorem Ipsum",
		date: "August 3, 2018",
		content:
			"Ut sit amet nunc in nisi efficitur fermentum. Phasellus vehicula tellus et justo pharetra, eu accumsan magna placerat. Phasellus enim enim, tempus vel lectus in, finibus egestas tellus. Ut aliquam porttitor egestas. Etiam justo ipsum, fringilla a sodales et, lacinia lobortis felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut in finibus leo. Sed aliquam ipsum mi, non rutrum odio viverra a. Etiam et laoreet diam.Ut sit amet nunc in nisi efficitur fermentum. Phasellus vehicula tellus et justo pharetra, eu accumsan magna placerat. Phasellus enim enim, tempus vel lectus in, finibus egestas tellus. Ut aliquam porttitor egestas. Etiam justo ipsum, fringilla a sodales et, lacinia lobortis felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut in finibus leo. Sed aliquam ipsum mi, non rutrum odio viverra a. Etiam et laoreet diam.",
		rating: 2.5,
		NoOfRatings: 15,
		ratedUsers: []
	},
	{
		id: 3,
		title: "Lorem Ipsum",
		date: "August 3, 2018",
		content:
			"Ut sit amet nunc in nisi efficitur fermentum. Phasellus vehicula tellus et justo pharetra, eu accumsan magna placerat. Phasellus enim enim, tempus vel lectus in, finibus egestas tellus. Ut aliquam porttitor egestas. Etiam justo ipsum, fringilla a sodales et, lacinia lobortis felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut in finibus leo. Sed aliquam ipsum mi, non rutrum odio viverra a. Etiam et laoreet diam.Ut sit amet nunc in nisi efficitur fermentum. Phasellus vehicula tellus et justo pharetra, eu accumsan magna placerat. Phasellus enim enim, tempus vel lectus in, finibus egestas tellus. Ut aliquam porttitor egestas. Etiam justo ipsum, fringilla a sodales et, lacinia lobortis felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut in finibus leo. Sed aliquam ipsum mi, non rutrum odio viverra a. Etiam et laoreet diam.",
		rating: 5,
		NoOfRatings: 6,
		ratedUsers: []
	}
];

class AnnouncementsPage extends React.Component {
	state = { anns };

	SetRating = (id, newRating, newNoOfRatings) => {
		Object.assign(anns.find(ann => ann.id === id), {
			rating: parseFloat(newRating, 10),
			NoOfRatings: parseInt(newNoOfRatings, 10)
		});

		this.setState({ anns });
	};
 
	render() {
		return (
			<Grid centered textAlign="center" stackable>
				<Grid.Row centered>
					<Header as="h1" content="Announcements" color="teal" />
				</Grid.Row>
				{anns.map(ann => (
					<Grid.Row centered columns={2} key={ann.id}>
						<Grid.Column>
							<AnnArticle
								title={ann.title}
								date={ann.date}
								content={ann.content}
								rating={ann.rating}
								id={ann.id}
								NoOfRatings={ann.NoOfRatings}
								SetRating={this.SetRating}
							/>
						</Grid.Column>
					</Grid.Row>
				))}
			</Grid>
		);
	}
}

export default AnnouncementsPage;
