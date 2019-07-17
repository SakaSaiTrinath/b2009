import React, { Component } from "react";
import {
	Modal,
	Icon,
	Button,
	Header,
	Container
} from "semantic-ui-react";

import AddNewSiteGalleryFolderForm from "../forms/AddNewSiteGalleryFolderForm";

class AddNewSiteGalleryFolder extends Component {
	state = {};

	render() {
		return (
			<div>
				<Modal
					size="small"
					trigger={
						<Container textAlign="right">
							<Button icon size="medium" color="teal" labelPosition="left">
								<Icon name="add" />
								Add new folder
							</Button>
						</Container>
					}
					closeIcon
				>
					<Header color="teal">
						<Icon.Group size="large">
							<Icon name="folder" />
							<Icon corner name="add" />
						</Icon.Group>{" "}
						Add New Folder
					</Header>
					<Modal.Content>
						<Modal.Description>
							<AddNewSiteGalleryFolderForm />
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

export default AddNewSiteGalleryFolder;
