import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class AddNewSiteGalleryPhotoForm extends Component {
	state = {};

	render() {
		return (
			<Form>
				<Form.Input type="file" />
			</Form>
		);
	}
}

export default AddNewSiteGalleryPhotoForm;