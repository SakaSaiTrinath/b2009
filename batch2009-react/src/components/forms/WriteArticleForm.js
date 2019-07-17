import React from "react";
import { Form } from "semantic-ui-react";

import PageContainer from "../utilities/PageContainer";

const options = [
	{ key: "Navodaya Dayz", text: "Navodaya Dayz", value: "Navodaya Dayz" },
	{ key: "Memories", text: "Memories", value: "Memories" },
	{ key: "6thClass", text: "6thClass", value: "6thClass" },
	{ key: "7thClass", text: "7thClass", value: "7thClass" },
	{ key: "8thClass", text: "8thClass", value: "8thClass" },
	{ key: "9thClass", text: "9thClass", value: "9thClass" },
	{ key: "10thClass", text: "10thClass", value: "10thClass" },
	{ key: "11thClass", text: "11thClass", value: "11thClass" },
	{ key: "12thClass", text: "12thClass", value: "12thClass" }
];

class EditStatusForm extends React.Component {
	state = { options, currentValues: "" };

	handleAddition = (e, { value }) => {
		this.setState({
			options: [{ text: value, value }, ...this.state.options]
		});
	};

	handleChange = (e, { value }) => this.setState({ currentValues: value });

	render() {
		const { currentValues } = this.state;

		return (
			<Form>
				<Form.Group>
					<Form.Input label="Title" icon="heading" width={12} />
					<Form.Dropdown
						options={this.state.options}
						plcaeholder="Enter labels"
						search
						selection
						multiple
						allowAdditions
						value={currentValues}
						onAddItem={this.handleAddition}
						onChange={this.handleChange}
						fluid
						label="Tags"
						width={4}
					/>
				</Form.Group>
				<PageContainer /> 
			</Form>
		);
	}
}

export default EditStatusForm;
