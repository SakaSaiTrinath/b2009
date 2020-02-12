import React from "react";
import { Form } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import InlineError from "../messages/InlineError";
import FormSuccess from "../messages/FormSuccess";

import { sendUserResponse } from "../../actions/other";

class ContactForm extends React.Component {
	state = {
		data: {
			title: "",
			type: "",
			message: ""
		},
		isFormSuccess: false,
		errors: {},
		loading: false
	};

	componentDidUpdate(prevProps, prevState) {
		if (
			prevState.isFormSuccess !== this.state.isFormSuccess &&
			this.state.isFormSuccess
		) {
			setTimeout(() => {
				this.setIsFormSuccess();
			}, 1000);
		}
	}

	onChange = (e, { name, value }) => {
		this.setState({
			data: { ...this.state.data, [name]: value }
		});
	};

	onSubmit = e => {
		e.preventDefault();
		const errors = this.validate(this.state.data);
		this.setState({
			errors
		});
		const { title, type, message } = this.state.data;
		const { username } = this.props;
		const sendObj = {
			title,
			type,
			message,
			username
		};
		if (Object.keys(errors).length === 0) {
			this.props.sendUserResponse(sendObj).then(() => {
				this.setState({
					data: { title: "", type: "", message: "" },
					isFormSuccess: true
				});
			});
			/* this.setState({
				data: { title: "", type: "", message: "" },
				isFormSuccess: true
			}); */
		}
	};

	setIsFormSuccess = () => {
		this.setState({ isFormSuccess: false });
	};

	validate = data => {
		const errors = [];
		if (!data.title) errors.title = "Please enter title!";
		if (!data.type) errors.type = "Select type!";
		if (!data.message) errors.message = "Message needed!";
		return errors;
	};

	render() {
		const { data, errors, isFormSuccess } = this.state;

		return (
			<Form size="large" onSubmit={this.onSubmit} error={!!errors}>
				{errors.title && <InlineError text={errors.title} />}
				<Form.Input
					fluid
					icon="heading"
					iconPosition="left"
					id="title"
					placeholder="Title"
					name="title"
					onChange={this.onChange}
					value={data.title}
					error={!!errors.title}
				/>

				{errors.type && <InlineError text={errors.type} />}
				<Form.Dropdown
					placeholder="Type"
					fluid
					search
					selection
					id="type"
					name="type"
					onChange={this.onChange}
					options={[
						{
							key: "suggestion",
							value: "suggestion",
							text: "Suggestion"
						},
						{
							key: "complaint",
							value: "complaint",
							text: "Complaint"
						},
						{
							key: "feedback",
							value: "feedback",
							text: "Feedback"
						},
						{
							key: "other",
							value: "other",
							text: "Other"
						}
					]}
					value={data.type}
					error={!!errors.type}
				/>

				{errors.message && <InlineError text={errors.message} />}
				<Form.TextArea
					placeholder="Message"
					name="message"
					id="message"
					value={data.message}
					onChange={this.onChange}
					error={!!errors.message}
				/>

				{// if success from server this should be displayed
				isFormSuccess && (
					<FormSuccess text="You've successfully sent your response!" />
				)}
				<Form.Button color="teal" fluid size="large">
					Send
				</Form.Button>
			</Form>
		);
	}
}

ContactForm.propTypes = {
	username: PropTypes.string.isRequired,
	sendUserResponse: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	return {
		username: state.user.username
	};
}

export default connect(
	mapStateToProps,
	{ sendUserResponse }
)(ContactForm);
