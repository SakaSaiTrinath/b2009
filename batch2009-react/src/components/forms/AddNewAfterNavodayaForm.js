import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class AddNewAfterNavodayaForm extends Component {
	state = {};

	render() {
		return (
			<Form>
				<Form.Input label="Title" />
				<Form.Input label="Duration" />
				<Form.TextArea label="Description" />
			</Form>
		);
	}
}

export default AddNewAfterNavodayaForm;
