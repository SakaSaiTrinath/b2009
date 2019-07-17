import React, { Component } from "react";
import {
	Modal,
	Label,
	Icon,
	Button,
	Header,
	Container
} from "semantic-ui-react";
import { connect } from "react-redux";

import EditSchoolInfoForm from "../forms/EditSchoolInfoForm";
import { updateSchoolInfo } from "../../actions/schoolinfo";

class EditSchoolInfo extends Component {
	state = {
		data: {},
		errors: {},
		loading: false,
		modalOpen: false
	};

	updateState = data => {
		this.setState({ data });
	};

	onSubmit = e => {
		e.preventDefault();
		const errors = this.validate(this.state.data);
		this.setState({
			errors
		});
		if(Object.keys(errors).length === 0) {
			// alert(`Username: ${this.state.data.username}, Password: ${this.state.data.password}`);
			this.setState({ loading: true });
			this.props
				.updateSchoolInfo(this.state.data)
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

	validate = data => {
		const errors = {};
		if (!data.studied_from_year) errors.studied_from_year = "Please select an option!";
		if (!data.studied_to_year) errors.studied_to_year = "Please select an option!";
		if (!data.junior_house) errors.junior_house = "Please select an option!";
		if (!data.senior_house) errors.senior_house = "Please select an option!";
		return errors;
	};

	render() {
		const { loading, modalOpen } = this.state;

		return (
			<div>
				<Modal
					size="small"
					open={modalOpen}
					onClose={() => this.setState({ modalOpen: false })}
					trigger={
						<Container fluid textAlign="right" onClick={() => this.setState({ modalOpen: true })}>
							<Label as="a">
								<Icon name="edit" />
								Edit
							</Label>
						</Container>
					}
					closeIcon
				>
					<Header color="teal">
						<Icon.Group size="large">
							<Icon name="university" />
							<Icon corner name="edit" />
						</Icon.Group>{" "}
						Edit School Info
					</Header>
					<Modal.Content>
						<Modal.Description>
							<EditSchoolInfoForm 
								loading={loading} 
								updateState={this.updateState} 
								errors={this.state.errors}
							/>
						</Modal.Description>
					</Modal.Content>
					<Modal.Actions>
						<Button primary icon labelPosition="left" onClick={this.onSubmit}>
							<Icon name="checkmark" /> Update
						</Button>
					</Modal.Actions>
				</Modal>
			</div>
		);
	}
}

export default connect(null, { updateSchoolInfo })(EditSchoolInfo);
