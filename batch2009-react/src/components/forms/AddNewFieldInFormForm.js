import React, { Component } from "react";
import { Form } from "semantic-ui-react";

import InlineError from "../messages/InlineError";

class AddNewFieldInFormForm extends Component {
	state = {
		data: {
			field: this.props.data.field,
			value: this.props.data.value
		},
		loading: this.props.loading,
		errors: this.props.errors
	};

	componentDidMount = () => {
		this.props.updateState(this.state.data);
	};

	componentDidUpdate = (prevProps, prevState) => {
		if(this.state.data !== prevState.data) {
			this.props.updateState(this.state.data);
		};

		if (this.props.errors !== prevProps.errors) {
			this.setState({ errors: this.props.errors });
		}

		if(this.props.loading !== prevProps.loading) {
			this.setState({ loading: this.props.loading });
		}
	};

	handleDataChange = (e, { name, value }) => {
		this.setState({
			data: { ...this.state.data, [name]: value }
		});
	};

	render() {
		const { errors, loading } = this.state;
		const { field, value } = this.state.data;

		return (
			<Form loading={loading}>
				<Form.Group widths="equal">
					<Form.Input 
						label="Field Name" 
						value={field} 
						onChange={this.handleDataChange} 
						name="field"
						error={!!errors.field}
					/>
					{errors.field && (
						<InlineError text={errors.field} />
					)}

					<Form.Input 
						label="Field Name" 
						value={value} 
						onChange={this.handleDataChange} 
						name="value"
						error={!!errors.value}
					/>
					{errors.value && (
						<InlineError text={errors.value} />
					)}
				</Form.Group>
			</Form>
		);
	}
}

export default AddNewFieldInFormForm;
