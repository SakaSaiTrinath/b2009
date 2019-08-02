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

import EditSocialAccountsForm from "../forms/EditSocialAccountsForm";
import { updateSocialAccInfo } from "../../actions/socialaccinfo";

class EditSocialAccounts extends Component {
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
			this.setState({ loading: true });
			this.props
				.updateSocialAccInfo(this.state.data)
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
		if (!data.facebook.username) errors.facebook_username = "Please provide info or fill ---";
		if (!data.facebook.url) errors.facebook_url = "Please provide info or fill ---";
		if (!data.whatsapp.number) errors.whatsapp_number = "Please provide info or fill 9876543210";
		if (!data.twitter.username) errors.twitter_username = "Please provide info or fill ---";
		if (!data.twitter.url) errors.twitter_url = "Please provide info or fill ---";
		if (!data.email.mail_address) errors.email_mail_address = "Please provide info or fill ---";
		if (!data.instagram.username) errors.instagram_username = "Please provide info or fill ---";
		if (!data.linkedin.username) errors.linkedin_username = "Please provide info or fill ---";
		if (!data.linkedin.url) errors.linkedin_url = "Please provide info or fill ---";
		if (!data.youtube.username) errors.youtube_username = "Please provide info or fill ---";
		if (!data.youtube.url) errors.youtube_url = "Please provide info or fill ---";
		if (!data.pinterest.username) errors.pinterest_username = "Please provide info or fill ---";
		if (!data.pinterest.url) errors.pinterest_url = "Please provide info or fill ---";
		if (!data.github.username) errors.github_username = "Please provide info or fill ---";
		if (!data.github.url) errors.github_url = "Please provide info or fill ---";
		console.log(errors);
		return errors;
	};

	render() {
		const { loading, modalOpen, errors } = this.state;

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
							<Icon name="at" />
							<Icon corner name="edit" />
						</Icon.Group>{" "}
						Edit Social Accounts
					</Header>
					<Modal.Content>
						<Modal.Description>
							<EditSocialAccountsForm 
								loading={loading} 
								updateState={this.updateState} 
								errors={errors}
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

export default connect(null, { updateSocialAccInfo })(EditSocialAccounts);
