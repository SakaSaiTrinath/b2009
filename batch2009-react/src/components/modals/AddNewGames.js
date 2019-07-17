import React, { Component } from "react";
import {
	Modal,
	Label,
	Icon,
	Button,
	Header,
	Container
} from "semantic-ui-react";

import AddNewGamesForm from "../forms/AddNewGamesForm";

class AddNewGames extends Component {
	state = {};

	render() {
		return (
			<div>
				<Modal
					size="small"
					trigger={
						<Container fluid textAlign="right">
							<Label as="a">
								<Icon name="pencil" />
								Add new
							</Label>
						</Container>
					}
					closeIcon
				>
					<Header>
						<Icon.Group size="large">
							<Icon name="game" />
							<Icon corner name="edit" />
						</Icon.Group>{" "}
						Add new Games Info
					</Header>
					<Modal.Content>
						<Modal.Description>
							<AddNewGamesForm />
						</Modal.Description>
					</Modal.Content>
					<Modal.Actions>
						<Button positive icon labelPosition="left">
							<Icon name="checkmark" /> Add
						</Button>
					</Modal.Actions>
				</Modal>
			</div>
		);
	}
}

export default AddNewGames;
