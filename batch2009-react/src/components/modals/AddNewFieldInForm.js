import React, { Component } from "react";
import {
	Modal,
	Label,
	Icon,
	Button,
	Header,
	Container
} from "semantic-ui-react";

import AddNewFieldInFormForm from "../forms/AddNewFieldInFormForm";

class AddNewFieldInForm extends Component {
	state = {};

	render() {
		return (
			<div>
				<Modal
					size="small"
					trigger={
						<Container fluid textAlign="left">
							<Label as="a">
								<Icon name="pencil" />
								Add new Field
							</Label>
						</Container>
					}
					closeIcon
				>
					<Header>
						<Icon.Group size="large">
							<Icon name="wpforms" />
							<Icon corner name="pencil" />
						</Icon.Group>{" "}
						Add new Field
					</Header>
					<Modal.Content>
						<Modal.Description>
							<AddNewFieldInFormForm />
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

export default AddNewFieldInForm;
