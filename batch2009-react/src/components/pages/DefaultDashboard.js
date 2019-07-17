import React from "react";
import { NavLink } from "react-router-dom";
import { Grid, Header, Card } from "semantic-ui-react";

class DefaultDashboard extends React.Component {
	state = {};

	render() {
		return (
			<Grid
				centered
				verticalAlign="middle"
				columns={4}
				style={{ height: window.innerHeight }}
				stackable
			>
				<Grid.Row>
					<Header as="h1" color="teal">
						Dashboard
					</Header>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column>
						<Card
							as={NavLink}
							to="/myprofile"
							color="teal"
							header="My Profile"
							description="Visit My Dashboard"
						/>
					</Grid.Column>
					<Grid.Column>
						<Card
							color="teal"
							header="Announcements"
							description="Check Announcements"
							href="#"
						/>
					</Grid.Column>
					<Grid.Column>
						<Card
							color="teal"
							header="Announcements"
							description="Check Announcements"
							href="#"
						/>
					</Grid.Column>
					<Grid.Column>
						<Card
							color="teal"
							header="Announcements"
							description="Check Announcements"
							href="#"
						/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

export default DefaultDashboard;
