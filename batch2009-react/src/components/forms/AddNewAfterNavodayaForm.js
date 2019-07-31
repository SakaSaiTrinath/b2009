import React, { Component } from "react";
import { Form } from "semantic-ui-react";

import InlineError from "../messages/InlineError";

class AddNewAfterNavodayaForm extends Component {
	state = {
		data: {
			title: this.props.data.title,
			duration: this.props.data.duration,
			content: this.props.data.content
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
		const { title, duration, content } = this.state.data;

		return (
			<Form
				loading={loading}
			>
				<Form.Input 
					label="Title" 
					value={title} 
					onChange={this.handleDataChange} 
					name="title"
					error={!!errors.title}
				/>
				{errors.title && (
					<InlineError text={errors.title} />
				)}

				<Form.Input 
					label="Duration" 
					value={duration} 
					onChange={this.handleDataChange} 
					name="duration"
					error={!!errors.duration}
				/>
				{errors.duration && (
					<InlineError text={errors.duration} />
				)}

				<Form.Input 
					label="Description" 
					value={content} 
					onChange={this.handleDataChange} 
					name="content"
					error={!!errors.content}
				/>
				{errors.content && (
					<InlineError text={errors.content} />
				)}
			</Form>
		);
	}
}

export default AddNewAfterNavodayaForm;
