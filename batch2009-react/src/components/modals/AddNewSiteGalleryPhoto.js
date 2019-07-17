import React, { Component } from "react";
import {
	Modal,
	Icon,
	Button,
	Header
} from "semantic-ui-react";

import AddNewSiteGalleryPhotoForm from "../forms/AddNewSiteGalleryPhotoForm";

class AddNewSiteGalleryPhoto extends Component {
	state = {};

	render() {
		return (
			<div>
				<Modal
					size="small"
					trigger={
						<Button
							positive
							icon="add"
							labelPosition="right"
							content="Add photos"
							onClick={this.close}
						/>
					}
					closeIcon
				>
					<Header color="teal">
						<Icon.Group size="large">
							<Icon name="photo" />
							<Icon corner name="add" />
						</Icon.Group>{" "}
						Add Photos
					</Header>
					<Modal.Content>
						<Modal.Description>
							<AddNewSiteGalleryPhotoForm />
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

export default AddNewSiteGalleryPhoto;
