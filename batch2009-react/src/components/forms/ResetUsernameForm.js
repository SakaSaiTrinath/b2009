import React from "react";
import {
	Form,
	Segment,
	Button
} from "semantic-ui-react";
import InlineError from "../messages/InlineError";

class ResetPasswordForm extends React.Component {
	state = {
		data: {
			username: ""
		},
		errors: {}
	};

	onChange = e => {
		this.setState({
			data: { ...this.state.data, [e.target.name]: e.target.value }
		});
	};

	onSubmit = e => {
		e.preventDefault();
		const errors = this.validate(this.state.data);
		this.setState({
			errors
		});
	};

	validate = data => {
		const errors = {};
		if (!data.username) errors.username = "Can't be blank!";
		return errors;
	};

	render() {
		const { data, errors } = this.state;

		return (
			<Form
				onSubmit={this.onSubmit}
				error={!!errors}
			>
				<Segment stacked>
					<Form.Input
						fluid
						icon="user"
						iconPosition="left"
						id="username"
						placeholder="Enter new username"
						name="username"
						onChange={this.onChange}
						value={data.username}
						error={!!errors.username}
					/>
					{errors.username && (
						<InlineError text={errors.username} />
					)}

					<Button color="teal" fluid size="large">
						Reset
					</Button>
				</Segment>
			</Form>
		);
	}
}

export default ResetPasswordForm;
