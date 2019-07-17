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

import EditBasicInfoForm from "../forms/EditBasicInfoForm";
import { updateBasicInfo } from "../../actions/basicinfo";

class EditBasicInfo extends Component {
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
				.updateBasicInfo(this.state.data)
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
		if (!data.nick_name) errors.nick_name = "Please provide nick name or fill ---";
		if (!data.gender) errors.gender = "Gender needed!";
		if (!data.rel_status) errors.rel_status = "Please provide this info or fill ---";
		if (!data.phone_number) errors.phone_number = "Phone number needed.";
		if (!data.home_address) errors.home_address = "Please provide address or fill ---";
		if (!data.blood_group) errors.blood_group = "Please provide blood group or fill ---";
		if (!data.known_lang) errors.known_lang = "Please provide this info or fill ---";
		if (!data.zodiac) errors.zodiac = "Please provide zodiac or fill ---";
		if (!data.hobbies) errors.hobbies = "Please provide hobbies or fill ---";
		if (!data.goal) errors.goal = "Please provide goal or fill ---";
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
							<Icon name="info" />
							<Icon corner name="edit" />
						</Icon.Group>{" "}
						Edit Basic Info
					</Header>
					<Modal.Content>
						<Modal.Description>
							<EditBasicInfoForm
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

export default connect(null, { updateBasicInfo })(EditBasicInfo);
