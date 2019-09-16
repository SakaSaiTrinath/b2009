import React from 'react';
import { Grid, Header, Icon, Segment } from "semantic-ui-react";
import { connect } from 'react-redux';

import ResetPasswordPage from "./ResetPasswordPage";
import ResetUsernamePage from "./ResetUsernamePage";

const SettingsPage = ({ username }) => {
	return (
		<Grid 
			centered 
			stackable 
			style={{
				minHeight: window.innerHeight,
				marginTop: "10px"
			}}
		>
			<Grid.Row centered columns={3}>
				<Grid.Column textAlign="center">
					<Header as="h1" color="teal">
						<Icon name="setting" />Settings
					</Header>
				</Grid.Column>
			</Grid.Row>

			<Grid.Row centered columns={3}>
				<Grid.Column textAlign="center">
					<Segment color="teal" raised>
						<Header as="h2">
							Username
							<Header.Subheader>{username}</Header.Subheader>
						</Header>
					</Segment>
				</Grid.Column>
			</Grid.Row>

			<Grid.Row centered>
				<Grid.Column width={2} />

				<Grid.Column width={5}>
					<Header as="h2" color="teal">
						<Icon.Group>
							<Icon name="user" />
							<Icon corner name="repeat" />
						</Icon.Group>{" "}
						Reset Username
					</Header>
					<ResetUsernamePage />
				</Grid.Column>

				<Grid.Column width={2} />
			
				<Grid.Column width={5}>
					<Header as="h2" color="teal">
						<Icon.Group>
							<Icon name="lock" />
							<Icon corner name="repeat" />
						</Icon.Group>{" "}
						Reset Password
					</Header>
					<ResetPasswordPage />
				</Grid.Column>

				<Grid.Column width={2} />
			</Grid.Row>
		</Grid>
	);
}

function mapStateToProps(state) {
	return {
		username: state.user.username
	}
}

export default connect(mapStateToProps)(SettingsPage);


