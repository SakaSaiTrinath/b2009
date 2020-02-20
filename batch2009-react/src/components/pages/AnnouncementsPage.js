import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
	Grid,
	Header,
	Message,
	Button,
	Container,
	Icon
} from "semantic-ui-react";
import { fetchAnnouncements } from "../../actions/anns";

import AnnArticle from "../utilities/AnnArticle";
import convDate from "../../utils/helperfuncs";

class AnnouncementsPage extends React.Component {
	state = {
		loading: false,
		error: ""
	};

	componentDidMount() {
		this.fetchAnnouncementsData();
	}

	/* scrollToBottom = () => {
		this.messagesEnd.scrollIntoView({ behavior: "smooth" });
	}; */

	fetchAnnouncementsData = max_idx => {
		this.setState({ loading: true, error: false });
		const params = {
			max_id: max_idx || "",
			limit: 2
		};
		this.props
			.fetchAnnouncements({ params })
			.then(() => {
				this.setState({ loading: false });
				// this.scrollToBottom();
			})
			.catch(err => {
				this.setState({
					loading: false,
					error:
						err.response.data.errors || err.response.data || JSON.stringify(err)
				});
			});
	};

	/* SetRating = (id, newRating, newNoOfRatings) => {
		const { anns } = this.props;
		console.log(anns);
		if (anns && anns.length > 0) {
			Object.assign(anns.find(ann => ann._id === id), {
				rating: parseFloat(newRating, 10),
				NoOfRatings: parseInt(newNoOfRatings, 10)
			});
			this.setState({ anns });
		}
	}; */

	render() {
		const { metadata, anns } = this.props;
		const { loading, error } = this.state;

		return (
			<Grid centered textAlign="center" stackable>
				<Grid.Row centered>
					<Header as="h1" content="Announcements" color="teal" />
				</Grid.Row>
				{error && (
					<Message
						error
						header="Something went wrong!!!"
						list={[
							"Please try again!",
							"Check your internet!",
							"Or Report developer with below error through contact section.",
							`Error: ${JSON.stringify(error)}`
						]}
					/>
				)}
				{anns.map(ann => (
					/* eslint-disable-next-line */
					<Grid.Row centered columns={2} key={ann._id}>
						<Grid.Column>
							<AnnArticle
								title={ann.title}
								date={convDate(ann.date)}
								content={ann.content}
								rating={ann.rating}
								id={ann._id} // eslint-disable-line
								NoOfRatings={ann.NoOfRatings}
								SetRating={this.SetRating}
							/>
						</Grid.Column>
					</Grid.Row>
				))}
				<Grid.Row>
					<Grid.Column>
						<Container textAlign="center">
							{!loading && !error && anns.length === 0 && (
								<p>There are no Announcements yet!</p>
							)}
							{!error &&
								anns.length < parseInt(metadata.total, 10) &&
								(!loading ? (
									<Button
										onClick={() =>
											this.fetchAnnouncementsData(
												anns[anns.length - 1]._id // eslint-disable-line
											)
										}
									>
										Load More
									</Button>
								) : (
									"loading..."
								))}
							{!loading &&
								!error &&
								anns.length !== 0 &&
								anns.length === parseInt(metadata.total, 10) && (
									<div
										style={{
											display: "flex",
											flexDirection: "row",
											justifyContent: "center"
										}}
									>
										<Icon name="hand point down" />
										<p>This is the end of Announcements.</p>
									</div>
								)}
							{/* eslint-disable 
							<div
								style={{ float: "left", clear: "both" }}
								ref={el => {
									this.messagesEnd = el;
								}}
							></div>
							eslint-enable */}
						</Container>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

AnnouncementsPage.defaultProps = {
	anns: [],
	metadata: { total: 0 }
};

AnnouncementsPage.propTypes = {
	fetchAnnouncements: PropTypes.func.isRequired,
	anns: PropTypes.arrayOf(PropTypes.shape(PropTypes.any.isRequired)),
	metadata: PropTypes.shape({
		total: PropTypes.number.isRequired
	})
};

function mapStateToProps(state) {
	return {
		anns: state.anns.announcements,
		metadata: state.anns.metadata
	};
}

export default connect(
	mapStateToProps,
	{ fetchAnnouncements }
)(AnnouncementsPage);
