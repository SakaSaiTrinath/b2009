import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Grid, Header, Card, Message } from "semantic-ui-react";

class DefaultDashboard extends React.Component {
	state = {};

	render() {
		const { current_username } = this.props;

		return (
			<Grid centered verticalAlign="middle" stackable>
				<Grid.Row style={{ paddingTop: "10px" }}>
					<Header as="h1" color="teal">
						Dashboard
					</Header>
				</Grid.Row>
				<Grid.Row style={{ paddingTop: "10px" }}>
					<Message
						info
						header="Please Note"
						list={[
							"Add your profile details.",
							"Update your current status and profile details always.",
							"New features come soon if you support this website.",
							"Visit contact section for suggestions, complaints and feedbacks."
						]}
					/>
				</Grid.Row>
				<Grid.Row style={{ paddingTop: "10px" }}>
					<Grid.Column>
						<Card.Group itemsPerRow="4" stackable>
							<Card
								as={NavLink}
								to={`/profile/${current_username}`}
								color="teal"
								header="Profile"
								description="Visit Profile. Here you can view and edit your details and set visibility that who can view your details."
							/>
							<Card
								as={NavLink}
								to="/announcements"
								color="teal"
								header="Announcements"
								description="Check Announcements from developer. Announcements can be regarding application's updates."
							/>
							<Card
								as={NavLink}
								to="/status"
								color="teal"
								header="Status"
								description="Check everyone's status and view their details."
							/>
							<Card
								as={NavLink}
								to="/bloodgroups"
								color="teal"
								header="Blood Groups"
								description="Know everyone's bloodgroup."
							/>
							<Card
								as={NavLink}
								to="/contact"
								color="teal"
								header="Contact Developer"
								description="Contact developer for suggestions, complaints or feedbacks."
							/>
						</Card.Group>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

function mapStateToProps(state) {
	return {
		current_username: state.user.username
	};
}

DefaultDashboard.propTypes = {
	current_username: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(DefaultDashboard);
