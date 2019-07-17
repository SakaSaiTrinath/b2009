import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { login } from "../../actions/auth";
import LoginForm from "../forms/LoginForm";

class LoginPage extends React.Component {
	submit = data => 
		this.props
			.login(data)
			.then(() => this.props.history.push("/dashboard"));

	render() {
		return (
			<div>
				<LoginForm submit={this.submit} /> 
			</div>
		);
	}
}

LoginPage.propTypes = {
	login : PropTypes.func.isRequired,
	history : PropTypes.shape({
	  push : PropTypes.func.isRequired
	}).isRequired
}

export default withRouter(connect(null, { login })(LoginPage));
