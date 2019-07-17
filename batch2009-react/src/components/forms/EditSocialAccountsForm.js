import React, { Component } from "react";
import { Form, Divider } from "semantic-ui-react";
import { connect } from "react-redux";

class EditSocialAccountsForm extends Component {
	state = {
		social_accounts: this.props.social_accounts
	};

	render() {
		const { 
			email, 
			facebook, 
			whatsapp, 
			twitter, 
			google_plus, 
			instagram,
			linkedin,
			youtube,
			pinterest,
			github
		} = this.state.social_accounts;

		return (
			<Form>
				<Form.Group widths="equal">
					<Form.Input 
						label="Facebook" 
						placeholder="Profile Name" 
						value={facebook.username}
					/>
					<Form.Input
						label="Profile Link"
						placeholder="Profile Link"
						value={facebook.url}
					/>
				</Form.Group>
				<Divider section />
				<Form.Input
					label="WhatsApp"
					placeholder="WhatsApp Number"
					type="number"
					value={whatsapp.number}
				/>
				<Divider section />
				<Form.Group widths="equal">
					<Form.Input 
						label="Twitter" 
						placeholder="Profile Name" 
						value={twitter.username}
					/>
					<Form.Input
						label="Profile Link"
						placeholder="Profile Link"
						value={twitter.url}
					/>
				</Form.Group>
				<Divider section />
				<Form.Input 
					label="Email" 
					placeholder="Email address" 
					value={email.mail_address}
				/>
				<Divider section />
				<Form.Group widths="equal">
					<Form.Input
						label="Google Plus"
						placeholder="Profile Name"
						value={google_plus.username}
					/>
					<Form.Input
						label="Profile Link"
						placeholder="Profile Link"
						value={google_plus.url}
					/>
				</Form.Group>
				<Divider section />
				<Form.Input 
					label="Instagram" 
					placeholder="Profile Name" 
					value={instagram.username}
				/>
				<Divider section />
				<Form.Group widths="equal">
					<Form.Input 
						label="LinkedIn" 
						placeholder="Profile Name" 
						value={linkedin.username}
					/>
					<Form.Input
						label="Profile Link"
						placeholder="Profile Link"
						value={linkedin.url}
					/>
				</Form.Group>
				<Divider section />
				<Form.Group widths="equal">
					<Form.Input 
						label="YouTube" 
						placeholder="Channel Name" 
						value={youtube.username}
					/>
					<Form.Input
						label="Profile Link"
						placeholder="Profile Link"
						value={youtube.url}
					/>
				</Form.Group>
				<Divider section />
				<Form.Group widths="equal">
					<Form.Input 
						label="Pinterest" 
						placeholder="Profile Name" 
						value={pinterest.username}
					/>
					<Form.Input
						label="Profile Link"
						placeholder="Profile Link"
						value={pinterest.url}
					/>
				</Form.Group>
				<Divider section />
				<Form.Group widths="equal">
					<Form.Input 
						label="Github" 
						placeholder="Profile Name" 
						value={github.username}
					/>
					<Form.Input
						label="Profile Link"
						placeholder="Profile Link"
						value={github.url}
					/>
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
