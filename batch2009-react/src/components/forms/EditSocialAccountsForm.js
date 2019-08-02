import React, { Component } from "react";
import { Form, Divider } from "semantic-ui-react"; 
import { connect } from "react-redux";

import InlineError from "../messages/InlineError";

class EditSocialAccountsForm extends Component {
	state = {
		data: {
			email: this.props.social_accounts.email, 
			facebook: this.props.social_accounts.facebook, 
			whatsapp: this.props.social_accounts.whatsapp, 
			twitter: this.props.social_accounts.twitter, 
			instagram: this.props.social_accounts.instagram,
			linkedin: this.props.social_accounts.linkedin,
			youtube: this.props.social_accounts.youtube,
			pinterest: this.props.social_accounts.pinterest,
			github: this.props.social_accounts.github
		},
		errors: this.props.errors,
		loading: this.props.loading
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

	handleFacebookChange = (e, { name, value }) => {
		this.setState({
			data: { ...this.state.data, facebook: { ...this.state.data.facebook, [name]: value } }
		});
	};

	handleEmailChange = (e, { name, value }) => {
		this.setState({
			data: { ...this.state.data, email: { ...this.state.data.email, [name]: value } }
		});
	};

	handleWhatsappChange = (e, { name, value }) => {
		this.setState({
			data: { ...this.state.data, whatsapp: { ...this.state.data.whatsapp, [name]: value } }
		});
	};

	handleTwitterChange = (e, { name, value }) => {
		this.setState({
			data: { ...this.state.data, twitter: { ...this.state.data.twitter, [name]: value } }
		});
	};

	handleInstagramChange = (e, { name, value }) => {
		this.setState({
			data: { ...this.state.data, instagram: { ...this.state.data.instagram, [name]: value } }
		});
	};

	handleLinkedInChange = (e, { name, value }) => {
		this.setState({
			data: { ...this.state.data, linkedin: { ...this.state.data.linkedin, [name]: value } }
		});
	};

	handleYoutubeChange = (e, { name, value }) => {
		this.setState({
			data: { ...this.state.data, youtube: { ...this.state.data.youtube, [name]: value } }
		});
	};

	handlePinterestChange = (e, { name, value }) => {
		this.setState({
			data: { ...this.state.data, pinterest: { ...this.state.data.pinterest, [name]: value } }
		});
	};

	handleGithubChange = (e, { name, value }) => {
		this.setState({
			data: { ...this.state.data, github: { ...this.state.data.github, [name]: value } }
		});
	};

	render() {
		const { 
			email, 
			facebook, 
			whatsapp, 
			twitter, 
			instagram,
			linkedin,
			youtube,
			pinterest,
			github
		} = this.state.data;
		const { errors, loading } = this.state;

		return (
			<Form loading={loading}>
				<Form.Group widths="equal">
					<Form.Input 
						label="Facebook" 
						value={facebook.username} 
						onChange={this.handleFacebookChange} 
						name="username"
						error={!!errors.facebook_username}
					/>
					{errors.facebook_username && (
						<InlineError text={errors.facebook_username} />
					)}

					<Form.Input 
						label="Profile Link" 
						value={facebook.url} 
						onChange={this.handleFacebookChange} 
						name="url"
						error={!!errors.facebook_url}
					/>
					{errors.facebook_url && (
						<InlineError text={errors.facebook_url} />
					)}
				</Form.Group>
				<Divider section />
				<Form.Input 
					label="WhatsApp" 
					value={whatsapp.number} 
					onChange={this.handleWhatsappChange} 
					type="number"
					name="number"
					error={!!errors.whatsapp_number}
				/>
				{errors.whatsapp_number && (
					<InlineError text={errors.whatsapp_number} />
				)}
				<Divider section />
				<Form.Group widths="equal">
					<Form.Input 
						label="Twitter" 
						value={twitter.username} 
						onChange={this.handleTwitterChange} 
						name="username"
						error={!!errors.twitter_username}
					/>
					{errors.twitter_username && (
						<InlineError text={errors.twitter_username} />
					)}

					<Form.Input 
						label="Profile Link" 
						value={twitter.url} 
						onChange={this.handleTwitterChange} 
						name="url"
						error={!!errors.twitter_url}
					/>
					{errors.twitter_url && (
						<InlineError text={errors.twitter_url} />
					)}
				</Form.Group>
				<Divider section />
				<Form.Input 
					label="Email" 
					value={email.mail_address} 
					onChange={this.handleEmailChange} 
					name="mail_address"
					error={!!errors.email_mail_address}
				/>
				{errors.email_mail_address && (
					<InlineError text={errors.email_mail_address} />
				)}
				<Divider section />
				<Form.Input 
					label="Instagram" 
					value={instagram.username} 
					onChange={this.handleInstagramChange} 
					name="username"
					error={!!errors.instagram_username}
				/>
				{errors.instagram_username && (
					<InlineError text={errors.instagram_username} />
				)}
				<Divider section />
				<Form.Group widths="equal">
					<Form.Input 
						label="LinkedIn" 
						value={linkedin.username} 
						onChange={this.handleLinkedInChange} 
						name="username"
						error={!!errors.linkedin_username}
					/>
					{errors.linkedin_username && (
						<InlineError text={errors.linkedin_username} />
					)}

					<Form.Input 
						label="Profile Link" 
						value={linkedin.url} 
						onChange={this.handleLinkedInChange} 
						name="url"
						error={!!errors.linkedin_url}
					/>
					{errors.linkedin_url && (
						<InlineError text={errors.linkedin_url} />
					)}
				</Form.Group>
				<Divider section />
				<Form.Group widths="equal">
					<Form.Input 
						label="YouTube" 
						value={youtube.username} 
						onChange={this.handleYoutubeChange} 
						name="username"
						error={!!errors.youtube_username}
					/>
					{errors.youtube_username && (
						<InlineError text={errors.youtube_username} />
					)}

					<Form.Input 
						label="Profile Link" 
						value={youtube.url} 
						onChange={this.handleYoutubeChange} 
						name="url"
						error={!!errors.youtube_url}
					/>
					{errors.youtube_url && (
						<InlineError text={errors.youtube_url} />
					)}
				</Form.Group>
				<Divider section />
				<Form.Group widths="equal">
					<Form.Input 
						label="Pinterest" 
						value={pinterest.username} 
						onChange={this.handlePinterestChange} 
						name="username"
						error={!!errors.pinterest_username}
					/>
					{errors.pinterest_username && (
						<InlineError text={errors.pinterest_username} />
					)}

					<Form.Input 
						label="Profile Link" 
						value={pinterest.url} 
						onChange={this.handlePinterestChange} 
						name="url"
						error={!!errors.pinterest_url}
					/>
					{errors.pinterest_url && (
						<InlineError text={errors.pinterest_url} />
					)}
				</Form.Group>
				<Divider section />
				<Form.Group widths="equal">
					<Form.Input 
						label="Github" 
						value={github.username} 
						onChange={this.handleGithubChange} 
						name="username"
						error={!!errors.github_username}
					/>
					{errors.github_username && (
						<InlineError text={errors.github_username} />
					)}

					<Form.Input 
						label="Profile Link" 
						value={github.url} 
						onChange={this.handleGithubChange} 
						name="url"
						error={!!errors.github_url}
					/>
					{errors.github_url && (
						<InlineError text={errors.github_url} />
					)}
				</Form.Group>
			</Form>
		);
	}
}

function mapStateToProps(state) {
	return {
		social_accounts: state.socialaccinfo.social_accounts
	}
}

export default connect(mapStateToProps)(EditSocialAccountsForm);
