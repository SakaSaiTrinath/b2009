import React from "react";
import { Table, Button, Responsive, Divider, Container, List } from "semantic-ui-react";
import { connect } from "react-redux";

import EditSocialAccounts from "../modals/EditSocialAccounts";
import Visibility from "../modals/Visibility";

import { fetchSocialAccInfo } from "../../actions/socialaccinfo";

class SocialAccountsPanel extends React.Component {
	state = {
		social_accounts: {}
	};

	componentDidMount = () => {
		this.props.fetchSocialAccInfo();
	};

	componentDidUpdate = (prevProps, prevState) => {
		if(this.props.social_accounts !== prevProps.social_accounts) {
			this.setState({ social_accounts: this.props.social_accounts });
		}
	}

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
			<div>
				<Responsive minWidth={Responsive.onlyTablet.minWidth}>
					{
						// This should appear if user is viewing his profile in My profile time only.
						// If he come to this page from status cards, then this should not display
						<div>
							<Container fluid textAlign="right">
								<List horizontal>
									<List.Item>
										<Visibility />
									</List.Item>
									<List.Item>
										<EditSocialAccounts />
									</List.Item>
								</List>
							</Container>
						</div>
					}
					<Table striped celled>
						<Table.Body>
							<Table.Row>
								<Table.Cell>
									<Button
										color="facebook"
										icon="facebook"
										content="Facebook"
									/>
								</Table.Cell>
								<Table.Cell>{/*saitrinath.saka*/facebook&&facebook.username}</Table.Cell>
								<Table.Cell selectable>
									<a
										// href="https://www.facebook.com/saitrinath.saka"
										href={facebook&&facebook.url}
										target="_blank"
										rel="noopener noreferrer"
									>
										{/*https://www.facebook.com/saitrinath.saka*/facebook&&facebook.url}
									</a>
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Button
										color="green"
										icon="whatsapp"
										content="WhatsApp"
									/>
								</Table.Cell>
								<Table.Cell>{/*9866153176*/whatsapp&&whatsapp.number}</Table.Cell>
								<Table.Cell>{/*9866153176*/whatsapp&&whatsapp.number}</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Button
										color="twitter"
										icon="twitter"
										content="Twitter"
									/>
								</Table.Cell>
								<Table.Cell>{/*sst_trinath*/twitter&&twitter.username}</Table.Cell>
								<Table.Cell selectable>
									<a
										// href="https://twitter.com/sst_trinath"
										href={twitter&&twitter.url}
										target="_blank"
										rel="noreferrer noopener"
									>
										{/*https://twitter.com/sst_trinath*/twitter&&twitter.url}
									</a>
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Button
										color="yellow"
										icon="mail"
										content="Gmail"
									/>
								</Table.Cell>
								<Table.Cell>{/*sst.trinath@gmail.com*/email&&email.mail_address}</Table.Cell>
								<Table.Cell>{/*sst.trinath@gmail.com*/email&&email.mail_address}</Table.Cell>
							</Table.Row>

							<Table.Row>
								<Table.Cell>
									<Button
										color="google plus"
										icon="google plus"
										content="Google Plus"
									/>
								</Table.Cell>
								<Table.Cell>{/*Sai Trinath Saka*/google_plus&&google_plus.username}</Table.Cell>
								<Table.Cell selectable>
									<a
										// href="https://plus.google.com/101044252818501620910"
										href={google_plus&&google_plus.url}
										target="_blank"
										rel="noreferrer noopener"
									>
										{/*https://plus.google.com/101044252818501620910*/google_plus&&google_plus.url}
									</a>
								</Table.Cell>
							</Table.Row>

							<Table.Row>
								<Table.Cell>
									<Button
										color="instagram"
										icon="instagram"
										content="Instagram"
									/>
								</Table.Cell>
								<Table.Cell>{/*saitrinathsaka*/instagram&&instagram.username}</Table.Cell>
								<Table.Cell>{/*saitrinathsaka*/instagram&&instagram.username}</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Button
										color="linkedin"
										icon="linkedin"
										content="Linkedin"
									/>
								</Table.Cell>
								<Table.Cell>{/*saitrinathsaka*/linkedin&&linkedin.username}</Table.Cell>
								<Table.Cell selectable>
									<a
										// href="https://www.linkedin.com/in/saitrinathsaka/"
										href={linkedin&&linkedin.url}
										target="_blank"
										rel="noreferrer noopener"
									>
										{/*https://www.linkedin.com/in/saitrinathsaka/*/linkedin&&linkedin.url}
									</a>
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Button
										color="youtube"
										icon="youtube"
										content="YouTube"
									/>
								</Table.Cell>
								<Table.Cell>{/*No account*/youtube&&youtube.username}</Table.Cell>
								<Table.Cell selectable>
									<a
										href={youtube&&youtube.url}
										target="_blank"
										rel="noreferrer noopener"
									>
										{youtube&&youtube.url}
									</a>
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Button
										color="google plus"
										icon="pinterest"
										content="Pinterest"
									/>
								</Table.Cell>
								<Table.Cell>{/*saitrinathsaka*/pinterest&&pinterest.username}</Table.Cell>
								<Table.Cell selectable>
									<a
										// href="https://in.pinterest.com/saitrinaths/"
										href={pinterest&&pinterest.url}
										target="_blank"
										rel="noreferrer noopener"
									>
										{/*https://in.pinterest.com/saitrinaths/*/pinterest&&pinterest.url}
									</a>
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Button
										color="black"
										icon="github"
										content="Github"
									/>
								</Table.Cell>
								<Table.Cell>{/*SakaSaiTrinath*/github&&github.username}</Table.Cell>
								<Table.Cell selectable>
									<a
										// href="https://github.com/SakaSaiTrinath"
										href={github&&github.url}
										target="_blank"
										rel="noreferrer noopener"
									>
										{/*https://github.com/SakaSaiTrinath*/github&&github.url}
									</a>
								</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table>
				</Responsive>

				<Responsive {...Responsive.onlyMobile}>
					<Visibility />
					<EditSocialAccounts />
					<Divider />
					<Button circular color="facebook" icon="facebook" />
					<a
						// href="https://www.facebook.com/saitrinath.saka"
						href={facebook&&facebook.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						{" "}
						{/*Saka Sai Trinath*/facebook&&facebook.username}
					</a>
					<Divider />
					<Button color="green" icon="whatsapp" circular />
					<a>{/*9866153176*/whatsapp&&whatsapp.number}</a>
					<Divider />
					<Button circular color="twitter" icon="twitter" />
					<a
						// href="https://twitter.com/sst_trinath"
						href={twitter&&twitter.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						{" "}
						{/*sst_trinath*/twitter&&twitter.username}
					</a>
					<Divider />
					<Button color="yellow" icon="mail" circular />
					<a> {/*sst.trinath@gmail.com*/email&&email.mail_address}</a>
					<Divider />
					<Button circular color="google plus" icon="google plus" />
					<a
						// href="https://plus.google.com/101044252818501620910"
						href={google_plus&&google_plus.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						{" "}
						{/*Sai Trinath Saka*/google_plus&&google_plus.username}
					</a>
					<Divider />
					<Button color="instagram" icon="instagram" circular />
					<a> {/*saitrinathsaka*/instagram&&instagram.username} </a>
					<Divider />
					<Button color="linkedin" icon="linkedin" circular />
					<a
						// href="https://www.linkedin.com/in/saitrinathsaka/"
						href={linkedin&&linkedin.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						{" "}
						{/*saitrinathsaka*/linkedin&&linkedin.username}
					</a>
					<Divider />
					<Button color="youtube" icon="youtube" circular />
					<a>{youtube&&youtube.url}</a>
					<Divider />
					<Button
						color="google plus"
						icon="pinterest"
						circular
					/>{" "}
					<a
						// href="https://in.pinterest.com/saitrinaths/"
						href={pinterest&&pinterest.url}
						rel="noopener noreferrer"
					>
						{/*saitrinaths*/pinterest&&pinterest.username}
					</a>
					<Divider />
					<Button color="black" icon="github" circular />{" "}
					<a
						// href="https://github.com/SakaSaiTrinath"
						href={github&&github.url}
						rel="noopener noreferrer"
					>
						{/*SakaSaiTrinath*/github&&github.username}
					</a>
				</Responsive>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		social_accounts: state.socialaccinfo.social_accounts
	}
}

export default connect(mapStateToProps, { fetchSocialAccInfo })(SocialAccountsPanel);
