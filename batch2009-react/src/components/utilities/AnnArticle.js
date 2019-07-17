import React, { Component } from "react";
import PropTypes from "prop-types";
import {
	Header,
	Label,
	Segment,
	Rating,
	Container,
	Icon
} from "semantic-ui-react";
import ReadMoreReact from "read-more-react";

class AnnArticle extends Component {
	state = {};

	handleRate = (e, { rating }) => {
		// TODO
		// This is needed to be fixed
		// This values will depend upon whether user has given the rating or not.
		// If user given, this won't be updated but if he is giving for the first time, it will update.
		const newNoOfRatings = this.props.NoOfRatings + 1;
		let newRating =
			(this.props.rating * this.props.NoOfRatings + rating) /
			newNoOfRatings;
		newRating = newRating.toFixed(2);
		this.props.SetRating(this.props.id, newRating, newNoOfRatings);
		// If user has already given the rating, just update the rating of article with newRating (calculated one)
		// If user is giving rating for the first time, update rating as well as add this user to rated user list of annarticle array
	};

	render() {
		const { title, date, content, rating, NoOfRatings } = this.props;

		return (
			<div>
				<Segment attached="top" color="teal" secondary>
					<Header as="h3" color="teal">
						{title}
					</Header>
				</Segment>
				<Segment attached>
					<Label as="a" color="green" ribbon="right">
						{date}
					</Label>
					{/* <p>{content}</p> */}
					<ReadMoreReact
						text={content}
						min={80}
						ideal={120}
						max={200}
					/>
					<br />
					<br />
					<Icon name="star" color="yellow" /> {rating} ({NoOfRatings}{" "}
					ratings)
				</Segment>
				<Segment attached="bottom" stacked tertiary>
					<Container>
						Your Rating:{" "}
						<Rating
							icon="star"
							maxRating={5}
							onRate={this.handleRate}
						/>
					</Container>
				</Segment>
			</div>
		);
	}
}

AnnArticle.propTypes = {
	title: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
	SetRating: PropTypes.func.isRequired,
	id: PropTypes.number.isRequired,
	NoOfRatings: PropTypes.number.isRequired
};

export default AnnArticle;
