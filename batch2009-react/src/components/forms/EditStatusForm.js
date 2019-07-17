import React from "react";
import { Form } from "semantic-ui-react";
import { connect } from "react-redux";

import InlineError from "../messages/InlineError";

class EditStatusForm extends React.Component {
	state = {
		status: this.props.status,
		errors: this.props.errors,
		loading: this.props.loading
	};

	componentDidMount = () => {
		this.props.updateState(this.state.status);
	};

	onChange = (e, { name, value }) => {
		this.setState({ status: value });
	};

	componentDidUpdate = (prevProps, prevState) => {
		if(this.state.status !== prevState.status) {
			this.props.updateState(this.state.status);
		}

		if (this.props.errors !== prevProps.errors) {
			this.setState({ errors: this.props.errors });
		}

		if(this.props.loading !== prevProps.loading) {
			this.setState({ loading: this.props.loading });
		}
	}

	render() {
		const { status } = this.state;
		const { errors, loading } = this.state;

		return (
			<Form loading={loading}>
				<Form.TextArea
					placeholder="Enter Current Status"
					name="status"
					value={status}
					onChange={this.onChange}
					error={!!errors.status}
				/>
				{errors.status && (
					<InlineError text={errors.status} />
				)}
			</Form>
		);
	}
}

function mapStateToProps(state) {
	return {
		status: state.basicinfo.current_status
	}
}

export default connect(mapStateToProps, {})(EditStatusForm);
