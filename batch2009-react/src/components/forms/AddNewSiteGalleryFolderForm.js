import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class AddNewSiteGalleryFolderForm extends Component {
	state = {};

	render() {
		return (
			<Form>
				<Form.Input label="Enter Folder Name" />
				<Form.Input type="file" />
			</Form>
		);
	}
}

export default AddNewSiteGalleryFolderForm;