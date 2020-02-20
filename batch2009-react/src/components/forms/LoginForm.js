import React from "react";
import {
	Grid,
	Header,
	Image,
	Form,
	Segment,
	Button,
	Message
} from "semantic-ui-react";

import PropTypes from "prop-types";
import logoImage from "../images/icon.png";
import InlineError from "../messages/InlineError";

class LoginForm extends React.Component {
	state = {
		data: {
			username: "",
			password: ""
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
		const errors = this.validate(this.state.data);
		this.setState({
			errors
		});
		if (Object.keys(errors).length === 0) {
			this.setState({ loading: true });
			this.props.submit(this.state.data).catch(err => {
				this.setState({
					errors: err.response.data.errors || {},
					loading: false
				});
			});
		}
	};

	validate = data => {
		const errors = {};
		if (!data.username) errors.username = "Username needed!";
		if (!data.password) errors.password = "Can't be blank!";
		return errors;
	};

	render() {
		const { data, errors, loading } = this.state;

		return (
			<div className="login-form">
				<Grid
					textAlign="center"
					style={{ height: "100%" }}
					verticalAlign="middle"
				>
					<Grid.Column style={{ maxWidth: 450 }}>
						<Header as="h2" color="teal" textAlign="center">
							<Image src={logoImage} /> Log-in to your account
						</Header>
						<Form
							size="large"
							onSubmit={this.onSubmit}
							error={!!errors}
							loading={loading}
						>
							{errors && errors.global && (
								<Message negative>
									<Message.Header>Something went wrong</Message.Header>
									<p>{errors.global}</p>
								</Message>
							)}
							<Segment stacked>
								<Form.Input
									fluid
									icon="user"
									iconPosition="left"
									id="username"
									placeholder="Username"
									name="username"
									onChange={this.onChange}
									value={data.username}
									error={!!errors.username}
								/>
								{errors.username && <InlineError text={errors.username} />}

								<Form.Input
									fluid
									icon="lock"
									iconPosition="left"
									name="password"
									id="password"
									placeholder="Password"
									type="password"
									onChange={this.onChange}
									value={data.password}
									error={!!errors.password}
								/>
								{errors.password && <InlineError text={errors.password} />}
								<Button color="teal" fluid size="large">
									Login
								</Button>
							</Segment>
						</Form>
						<Message>
							{"Haven't"} got login details? &nbsp; Contact &nbsp;
							<a
								href="https://www.facebook.com/saitrinath.saka"
								target="_blank"
								rel="noopener noreferrer"
							>
								Saka Sai Trinath
							</a>
						</Message>
					</Grid.Column>
				</Grid>
			</div>
		);
	}
}

LoginForm.propTypes = {
	submit: PropTypes.func.isRequired
};
export default LoginForm;
