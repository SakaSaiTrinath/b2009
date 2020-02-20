import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
	Header,
	// Image,
	Dropdown,
	Segment,
	Label,
	Icon
} from "semantic-ui-react";
// import BImg from "../images/my pic.jpg";
import EditArticle from "../modals/EditArticle";

class Article extends React.Component {
	state = { open: false };

	onChange = (e, { value }) => {
		if (value === "Edit") {
			this.setState({
				open: true
			});
		}
	};

	onClose = () => {
		this.setState({
			open: false
		});
	};

	handleRate = (e, { rating }) => {
		// TODO
		// This is needed to be fixed
		// This values will depend upon whether user has given the rating or not.
		// If user given, this won't be updated but if he is giving for the first time, it will update.
		const newNoOfRatings = this.props.NoOfRatings + 1;
		let newRating =
			(this.props.rating * this.props.NoOfRatings + rating) / newNoOfRatings;
		newRating = newRating.toFixed(2);
		this.props.SetRating(this.props.id, newRating, newNoOfRatings);
		// If user has already given the rating, just update the rating of article with newRating (calculated one)
		// If user is giving rating for the first time, update rating as well as add this user to rated user list of annarticle array
	};

	render() {
		const {
			fromPage,
			title,
			labels,
			date,
			content,
			rating,
			NoOfRatings
		} = this.props;

		return (
			<div>
				<Segment.Group>
					<Segment color="teal">
						<Header>
							{/* <Image avatar src={BImg} /> Saka Sai Trinath */}
							<Header floated="right" as="h4">
								{fromPage === "FeedPage" && (
									<Dropdown className="icon">
										<Dropdown.Menu>
											<Dropdown.Item
												key="Edit"
												icon="pencil"
												text="Edit"
												value="Edit"
												onClick={this.onChange}
											/>
											<Dropdown.Item
												key="Delete"
												icon="trash alternate"
												text="Delete"
												value="Delete"
												onClick={this.onChange}
											/>
										</Dropdown.Menu>
									</Dropdown>
								)}
								<EditArticle open={this.state.open} onClose={this.onClose} />
							</Header>
						</Header>
						<div>
							{labels.map(label => (
								<Label size="mini" as="a" color="teal" key={label}>
									{label}
								</Label>
							))}
						</div>
					</Segment>
					<Segment.Group>
						<Segment>
							<Header as="h3">{title}</Header>
							<Label as="a" color="teal" ribbon="right">
								{date}
							</Label>
							<p>{content}</p>
							<Link to="/article">Read Article</Link>
						</Segment>
					</Segment.Group>

					<Segment stacked>
						<Icon name="star" color="yellow" /> {rating} ({NoOfRatings} ratings)
					</Segment>
				</Segment.Group>
			</div>
		);
	}
}

Article.propTypes = {
	fromPage: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
	NoOfRatings: PropTypes.number.isRequired,
	SetRating: PropTypes.func.isRequired,
	id: PropTypes.number.isRequired,
	labels: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Article;
