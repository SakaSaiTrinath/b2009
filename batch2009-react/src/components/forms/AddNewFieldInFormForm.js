import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class AddNewFieldInFormForm extends Component {
	state = {};

	render() {
		return (
			<Form>
				<Form.Group widths="equal">
					<Form.Input label="Field Name" />
					<Form.Input label="Field value" />
				</Form.Group>
			</Form>
		);
	}
}

export default AddNewFieldInFormForm;
