import React from "react";
import {
	Form,
	Segment,
	Button
} from "semantic-ui-react";
import InlineError from "../messages/InlineError";
import { connect } from 'react-redux';

import { resetPassword } from "../../actions/auth";

class ResetPasswordForm extends React.Component {
	state = {
		data: {
			current_password: "",
			new_password1: "",
			new_password2: ""
		},
		loading: false,
		errors: {}
	};

	onChange = e => {
		this.setState({
			data: { ...this.state.data, [e.target.name]: e.target.value }
		});
	};

	onSubmit = e => {
		e.preventDefault();
		this.setState({ loading: true });
		const errors = this.validate(this.state.data);
		this.setState({
			errors
		});
		if(Object.keys(errors).length === 0) {
			this.setState({ loading: true });
			const data = {
				current_password: this.state.data.current_password,
				new_password: this.state.data.new_password1
			}

			this.props
				.resetPassword(data)
				.then(() => {
					this.setState({ 
						data: { 
							current_password: "",
							new_password1: "",
							new_password2: ""
						},
						loading: false
					});
					alert(`Password successfully changed.`);
				})
				.catch(err => {
					console.log(err);
					this.setState({
						errors: err.response.data.errors,
						loading: false
					});
				});
		}
	};

	validate = data => {
		const errors = {};
		if (!data.current_password) errors.current_password = "Can't be blank!";
		if (!data.new_password1) errors.new_password1 = "Can't be blank!";
		if (!data.new_password2) errors.new_password2 = "Can't be blank!";
		if(data.new_password1 !== data.new_password2) errors.new_password2 = "Both Password should match!";
		return errors;
	};

	render() {
		const { data, errors, loading } = this.state;

		return (
			<Form
				onSubmit={this.onSubmit}
				error={!!errors}
				loading={loading}
			>
				<Segment stacked>
					<Form.Input
						fluid
						type="password"
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
						type="password"
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
						type="password"
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

export default connect(null, { resetPassword })(ResetPasswordForm);
