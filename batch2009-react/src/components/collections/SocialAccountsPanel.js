import React from "react";
import PropTypes from "prop-types";
import {
	Table,
	Button,
	Responsive,
	Divider,
	Container,
	List
} from "semantic-ui-react";
import { connect } from "react-redux";

import EditSocialAccounts from "../modals/EditSocialAccounts";
// import Visibility from "../modals/Visibility";

import {
	fetchSocialAccInfo
	// updateSocialVisibilty
} from "../../actions/socialaccinfo";

class SocialAccountsPanel extends React.Component {
	state = {
		social_accounts: {},
		/* visibility: {
			social_accounts_vis_type: this.props.social_accounts_vis_type,
			social_accounts_rejected_list:
				this.props.social_accounts_rejected_list || []
		}, */
		loading: false,
		modalOpen: false
	};

	componentDidMount = () => {
		const { user_username } = this.props;
		this.props.fetchSocialAccInfo(user_username);
	};

	componentDidUpdate = prevProps => {
		if (this.props.social_accounts !== prevProps.social_accounts) {
			/* eslint-disable-next-line */
			this.setState({ social_accounts: this.props.social_accounts });
		}

		/* if (
			this.props.social_accounts_vis_type !==
				prevProps.social_accounts_vis_type ||
			this.props.social_accounts_rejected_list !==
				prevProps.social_accounts_rejected_list
		) {
			 eslint-disable-next-line 
			this.setState({
				visibility: {
					social_accounts_rejected_list: this.props
						.social_accounts_rejected_list,
					social_accounts_vis_type: this.props.social_accounts_vis_type
				}
			});
		} */
	};

	/* onClickSetVisibility = e => {
		e.preventDefault();
		this.setState({ loading: true });
		const { visibility } = this.state;
		if (
			visibility.social_accounts_vis_type === "all" ||
			visibility.social_accounts_vis_type === "boys" ||
			visibility.social_accounts_vis_type === "girls"
		) {
			visibility.social_accounts_rejected_list = [];
		}
		this.props.updateSocialVisibilty(visibility).then(() => {
			this.setState({ loading: false, modalOpen: false });
		});
	}; */

	updateState = visibility => {
		// console.log("called here!", visibility.vis_type);
		this.setState({
			visibility: {
				social_accounts_vis_type: visibility.vis_type,
				social_accounts_rejected_list: visibility.rej_list
			}
		});
	};

	closeModal = () => this.setState({ modalOpen: false });

	openModal = () => this.setState({ modalOpen: true });

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
		} = this.state.social_accounts;
		// const { modalOpen, loading } = this.state;
		/* const {
			social_accounts_vis_type,
			social_accounts_rejected_list
		} = this.state.visibility; */
		const { isCurrentUser } = this.props;

		return (
			<div>
				<Responsive minWidth={Responsive.onlyTablet.minWidth}>
					{// This should appear if user is viewing his profile in My profile time only.
					// If he come to this page from status cards, then this should not display
					isCurrentUser && (
						<div>
							<Container fluid textAlign="right">
								<List horizontal>
									{/* <List.Item>
										<Visibility
											openModal={this.openModal}
											closeModal={this.closeModal}
											loading={loading}
											modalOpen={modalOpen}
											updateState={this.updateState}
											vis_type={social_accounts_vis_type}
											rej_list={social_accounts_rejected_list}
											onClickSetVisibility={this.onClickSetVisibility}
										/>
									</List.Item> */}
									<List.Item>
										<EditSocialAccounts />
									</List.Item>
								</List>
							</Container>
						</div>
					)}
					<Table striped celled>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>Account</Table.HeaderCell>
								<Table.HeaderCell>Username/Id</Table.HeaderCell>
								<Table.HeaderCell>Link</Table.HeaderCell>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							<Table.Row>
								<Table.Cell>
									<Button color="facebook" icon="facebook" content="Facebook" />
								</Table.Cell>
								<Table.Cell>
									{/* saitrinath.saka */ facebook && facebook.username}
								</Table.Cell>
								<Table.Cell selectable>
									<a
										// href="https://www.facebook.com/saitrinath.saka"
										href={facebook && facebook.url}
										target="_blank"
										rel="noopener noreferrer"
									>
										{/* https://www.facebook.com/saitrinath.saka */ facebook &&
											facebook.url}
									</a>
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Button color="green" icon="whatsapp" content="WhatsApp" />
								</Table.Cell>
								<Table.Cell colSpan="2">
									{/* 9815188987 */ whatsapp && whatsapp.number}
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Button color="twitter" icon="twitter" content="Twitter" />
								</Table.Cell>
								<Table.Cell>
									{/* sst_trinath */ twitter && twitter.username}
								</Table.Cell>
								<Table.Cell selectable>
									<a
										// href="https://twitter.com/sst_trinath"
										href={twitter && twitter.url}
										target="_blank"
										rel="noreferrer noopener"
									>
										{/* https://twitter.com/sst_trinath */ twitter &&
											twitter.url}
									</a>
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Button color="yellow" icon="mail" content="Email" />
								</Table.Cell>
								<Table.Cell colSpan="2">
									{/* sst.trinath@gmail.com */ email && email.mail_address}
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
								<Table.Cell>
									{/* saitrinathsaka */ instagram && instagram.username}
								</Table.Cell>
								<Table.Cell>
									{/* saitrinathsaka */ instagram && instagram.username}
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Button color="linkedin" icon="linkedin" content="Linkedin" />
								</Table.Cell>
								<Table.Cell>
									{/* saitrinathsaka */ linkedin && linkedin.username}
								</Table.Cell>
								<Table.Cell selectable>
									<a
										// href="https://www.linkedin.com/in/saitrinathsaka/"
										href={linkedin && linkedin.url}
										target="_blank"
										rel="noreferrer noopener"
									>
										{/* https://www.linkedin.com/in/saitrinathsaka/ */ linkedin &&
											linkedin.url}
									</a>
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Button color="youtube" icon="youtube" content="YouTube" />
								</Table.Cell>
								<Table.Cell>
									{/* No account */ youtube && youtube.username}
								</Table.Cell>
								<Table.Cell selectable>
									<a
										href={youtube && youtube.url}
										target="_blank"
										rel="noreferrer noopener"
									>
										{youtube && youtube.url}
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
								<Table.Cell>
									{/* saitrinathsaka */ pinterest && pinterest.username}
								</Table.Cell>
								<Table.Cell selectable>
									<a
										// href="https://in.pinterest.com/saitrinaths/"
										href={pinterest && pinterest.url}
										target="_blank"
										rel="noreferrer noopener"
									>
										{/* https://in.pinterest.com/saitrinaths/ */ pinterest &&
											pinterest.url}
									</a>
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Button color="black" icon="github" content="Github" />
								</Table.Cell>
								<Table.Cell>
									{/* SakaSaiTrinath */ github && github.username}
								</Table.Cell>
								<Table.Cell selectable>
									<a
										// href="https://github.com/SakaSaiTrinath"
										href={github && github.url}
										target="_blank"
										rel="noreferrer noopener"
									>
										{/* https://github.com/SakaSaiTrinath */ github &&
											github.url}
									</a>
								</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table>
				</Responsive>

				<Responsive {...Responsive.onlyMobile}>
					{/* isCurrentUser && (
						<Visibility
							openModal={this.openModal}
							closeModal={this.closeModal}
							loading={loading}
							modalOpen={modalOpen}
							updateState={this.updateState}
							vis_type={social_accounts_vis_type}
							rej_list={social_accounts_rejected_list}
							onClickSetVisibility={this.onClickSetVisibility}
						/>
					)}
					{isCurrentUser && <EditSocialAccounts />}
					<Divider /> */}
					<Button circular color="facebook" icon="facebook" />
					<a
						// href="https://www.facebook.com/saitrinath.saka"
						href={facebook && facebook.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						{" "}
						{/* Saka Sai Trinath */ facebook && facebook.username}
					</a>
					<Divider />
					<Button color="green" icon="whatsapp" circular />
					<a>{/* 9866153176 */ whatsapp && whatsapp.number}</a>
					<Divider />
					<Button circular color="twitter" icon="twitter" />
					<a
						// href="https://twitter.com/sst_trinath"
						href={twitter && twitter.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						{" "}
						{/* sst_trinath */ twitter && twitter.username}
					</a>
					<Divider />
					<Button color="yellow" icon="mail" circular />
					<a> {/* sst.trinath@gmail.com */ email && email.mail_address}</a>
					<Divider />
					<Button color="instagram" icon="instagram" circular />
					<a> {/* saitrinathsaka */ instagram && instagram.username} </a>
					<Divider />
					<Button color="linkedin" icon="linkedin" circular />
					<a
						// href="https://www.linkedin.com/in/saitrinathsaka/"
						href={linkedin && linkedin.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						{" "}
						{/* saitrinathsaka */ linkedin && linkedin.username}
					</a>
					<Divider />
					<Button color="youtube" icon="youtube" circular />
					<a>{youtube && youtube.url}</a>
					<Divider />
					<Button color="google plus" icon="pinterest" circular />{" "}
					<a
						// href="https://in.pinterest.com/saitrinaths/"
						href={pinterest && pinterest.url}
						rel="noopener noreferrer"
					>
						{/* saitrinaths */ pinterest && pinterest.username}
					</a>
					<Divider />
					<Button color="black" icon="github" circular />{" "}
					<a
						// href="https://github.com/SakaSaiTrinath"
						href={github && github.url}
						rel="noopener noreferrer"
					>
						{/* SakaSaiTrinath */ github && github.username}
					</a>
				</Responsive>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		social_accounts: state.socialaccinfo.social_accounts
		// social_accounts_vis_type: state.socialaccinfo.social_accounts_vis_type,
		// social_accounts_rejected_list:
		// state.socialaccinfo.social_accounts_rejected_list
	};
}

SocialAccountsPanel.defaultProps = {
	// social_accounts_vis_type: "",
	// social_accounts_rejected_list: [],
	social_accounts: {}
};

SocialAccountsPanel.propTypes = {
	isCurrentUser: PropTypes.bool.isRequired,
	// social_accounts_vis_type: PropTypes.string,
	// social_accounts_rejected_list: PropTypes.arrayOf(PropTypes.string),
	fetchSocialAccInfo: PropTypes.func.isRequired,
	social_accounts: PropTypes.shape({}),
	updateSocialVisibilty: PropTypes.func.isRequired,
	user_username: PropTypes.string.isRequired
};

export default connect(
	mapStateToProps,
	{
		fetchSocialAccInfo
		// updateSocialVisibilty
	}
)(SocialAccountsPanel);
