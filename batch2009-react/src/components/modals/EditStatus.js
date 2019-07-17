import React from "react";
import { Modal, Label, Icon, Button, Header } from "semantic-ui-react";
import EditStatusForm from "../forms/EditStatusForm";
import { connect } from "react-redux";

import { updateStatus } from "../../actions/basicinfo";

class EditStatus extends React.Component {
	state = {
		status: "",
		errors: "",
		modalOpen: false
	};

	updateState = status => {
		this.setState({ status });
	};

	onSubmit = e => {
		e.preventDefault();
		const errors = this.validate(this.state.status);
		this.setState({
			errors
		});
		if(Object.keys(errors).length === 0) {
			// alert(`Username: ${this.state.data.username}, Password: ${this.state.data.password}`);
			this.setState({ loading: true });
			this.props
				.updateStatus(this.state.status)
				.then(() => {
					this.setState({ loading: false, modalOpen: false });
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

	validate = status => {
		const errors = {};
		if (!status) errors.status = "Please provide status or fill ---";
		return errors;
	};

	render() {
		const { loading, errors, modalOpen } = this.state;

		return (
			<Modal
				size="small"
				open={modalOpen}
				onClose={() => this.setState({ modalOpen: false })}
				trigger={
					<Label attached="top right" as="a" onClick={() => this.setState({ modalOpen: true })}>
						<Icon name="edit" />
						Edit
					</Label>
				}
				closeIcon
			>
				<Header color="teal">
					<Icon.Group size="large">
						<Icon name="bullseye" />
						<Icon corner name="edit" />
					</Icon.Group>{" "}
					Edit Status
				</Header>
				<Modal.Content>
					<Modal.Description>
						<EditStatusForm 
							loading={loading} 
							updateState={this.updateState} 
							errors={errors}
						/>
					</Modal.Description>
				</Modal.Content>
				<Modal.Actions>
					<Button
						positive
						icon="checkmark"
						labelPosition="left"
						content="Update"
						onClick={this.onSubmit}
					/>
				</Modal.Actions>
			</Modal>
		);
	}
}

export default connect(null, { updateStatus })(EditStatus);
