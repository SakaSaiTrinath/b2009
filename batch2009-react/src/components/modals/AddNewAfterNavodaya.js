import React from "react";
import {
	Modal,
	Label,
	Icon,
	Button,
	Header,
	Container
} from "semantic-ui-react";
import AddNewAfterNavodayaForm from "../forms/AddNewAfterNavodayaForm";

class AddNewAfterNavodaya extends React.Component {
	state = {};

	render() {
		return (
			<Modal
				size="small"
				trigger={
					<Container
						fluid
						textAlign="center"
						style={{ marginBottom: "15px" }}
					>
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
						<Icon name="wait" />
						<Icon corner name="edit" />
					</Icon.Group>{" "}
					Add New AfterNavodaya Info
				</Header>
				<Modal.Content>
					<Modal.Description>
						<AddNewAfterNavodayaForm />
					</Modal.Description>
				</Modal.Content>
				<Modal.Actions>
					<Button
						positive
						icon="checkmark"
						labelPosition="left"
						content="Add"
						onClick={this.close}
					/>
				</Modal.Actions>
			</Modal>
		);
	}
}

export default AddNewAfterNavodaya;
