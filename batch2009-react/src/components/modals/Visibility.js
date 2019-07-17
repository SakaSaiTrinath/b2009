import React from "react";
import {
	Modal,
	Label,
	Icon,
	Button,
	Header,
	Container
} from "semantic-ui-react";
import VisibilityForm from "../forms/VisibilityForm";

class Visibility extends React.Component {
	state = {};

	render() {
		return (
			<Modal
				size="small"
				trigger={
					<Container
						fluid
						textAlign="right"
						style={{ marginBottom: "15px" }}
					>
						<Label as="a">
							<Icon name="eye" />
							Visibility
						</Label>
					</Container>
				}
				closeIcon
			>
				<Header color="teal">
					<Icon.Group size="large">
						<Icon name="eye" />
						<Icon corner name="edit" />
					</Icon.Group>{" "}
					Visibility
				</Header>
				<Modal.Content>
					<Modal.Description>
						<VisibilityForm />
					</Modal.Description>
				</Modal.Content>
				<Modal.Actions>
					<Button
						positive
						icon="checkmark"
						labelPosition="left"
						content="Set VisibilityForm"
						onClick={this.close}
					/>
				</Modal.Actions>
			</Modal>
		);
	}
}

export default Visibility;
