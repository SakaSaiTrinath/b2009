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
			current_password: "",
			new_password1: "",
			new_password2: ""
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
		if (!data.current_password) errors.current_password = "Can't be blank!";
		if (!data.new_password1) errors.new_password1 = "Can't be blank!";
		if (!data.new_password2) errors.new_password2 = "Can't be blank!";
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
						icon="history"
						iconPosition="left"
						id="current_password"
						placeholder="Current Password"
						name="current_password"
						onChange={this.onChange}
						value={data.current_password}
						error={!!errors.current_password}
					/>
					{errors.current_password && (
						<InlineError text={errors.current_password} />
					)}

					<Form.Input
						fluid
						icon="certificate"
						iconPosition="left"
						name="new_password1"
						id="new_password1"
						placeholder="New Password"
						onChange={this.onChange}
						value={data.new_password1}
						error={!!errors.new_password1}
					/>
					{errors.new_password1 && (
						<InlineError text={errors.new_password1} />
					)}

					<Form.Input
						fluid
						icon="certificate"
						iconPosition="left"
						name="new_password2"
						id="new_password2"
						placeholder="Repeat Password"
						onChange={this.onChange}
						value={data.new_password2}
						error={!!errors.new_password2}
					/>
					{errors.new_password2 && (
						<InlineError text={errors.new_password2} />
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
