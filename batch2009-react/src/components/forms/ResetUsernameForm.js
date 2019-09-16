import React from "react";
import {
	Form,
	Segment,
	Button
} from "semantic-ui-react";
import InlineError from "../messages/InlineError";
import { connect } from 'react-redux';

import { resetUsername } from "../../actions/auth";

class ResetUsernameForm extends React.Component {
	state = {
		data: {
			username: ""
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
			// alert(`Username: ${this.state.data.username}, Password: ${this.state.data.password}`);
			this.setState({ loading: true });
			this.props
				.resetUsername(this.state.data)
				.then(() => {
					this.setState({ data: { username: "" }, loading: false });
					alert(`Username successfully changed.`);
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
		if (!data.username) errors.username = "Can't be blank!";
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

export default connect(null, { resetUsername })(ResetUsernameForm);
