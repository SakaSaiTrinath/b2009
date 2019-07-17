import React from 'react';
import { Grid, Header, Icon } from "semantic-ui-react";

import ResetPasswordPage from "./ResetPasswordPage";
import ResetUsernamePage from "./ResetUsernamePage";

function SettingsPage() {
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
				<Grid.Column>
					<Header as="h2" color="teal">
						<Icon.Group>
							<Icon name="user" />
							<Icon corner name="repeat" />
						</Icon.Group>{" "}
						Reset Username
					</Header>
					<ResetUsernamePage />
				</Grid.Column>
			
				<Grid.Column>
					<Header as="h2" color="teal">
						<Icon.Group>
							<Icon name="lock" />
							<Icon corner name="repeat" />
						</Icon.Group>{" "}
						Reset Password
					</Header>
					<ResetPasswordPage />
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
}

export default SettingsPage;


