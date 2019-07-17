import React, { Component } from "react";
import {
	Modal,
	Label,
	Icon,
	Button,
	Header,
	Container
} from "semantic-ui-react";

import EditSocialAccountsForm from "../forms/EditSocialAccountsForm";

class EditSocialAccounts extends Component {
	state = {};

	render() {
		return (
			<div>
				<Modal
					size="small"
					trigger={
						<Container fluid textAlign="right">
							<Label as="a">
								<Icon name="edit" />
								Edit
							</Label>
						</Container>
					}
					closeIcon
				>
					<Header color="teal">
						<Icon.Group size="large">
							<Icon name="at" />
							<Icon corner name="edit" />
						</Icon.Group>{" "}
						Edit Social Accounts
					</Header>
					<Modal.Content>
						<Modal.Description>
							<EditSocialAccountsForm />
						</Modal.Description>
					</Modal.Content>
					<Modal.Actions>
						<Button primary icon labelPosition="left">
							<Icon name="checkmark" /> Update
						</Button>
					</Modal.Actions>
				</Modal>
			</div>
		);
	}
}

export default EditSocialAccounts;
