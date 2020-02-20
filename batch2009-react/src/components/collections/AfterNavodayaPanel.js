import React from "react";
import PropTypes from "prop-types";
import { Card, Label, Icon, Popup, Container, List } from "semantic-ui-react";
import { connect } from "react-redux";

import AddNewAfterNavodaya from "../modals/AddNewAfterNavodaya";
// import Visibility from "../modals/Visibility";

import {
	fetchAfterNavodayaInfo,
	deleteAN
	// updateANVisibilty
} from "../../actions/afternavodayainfo";

class AfterNavodayaPanel extends React.Component {
	state = {
		after_navodaya: this.props.after_navodaya || [],
		/* visibility: {
			after_navodaya_vis_type: this.props.after_navodaya_vis_type,
			after_navodaya_rejected_list:
				this.props.after_navodaya_rejected_list || []
		}, */
		loading: false,
		modalOpen: false
	};

	componentDidMount = () => {
		const { user_username } = this.props;
		this.props.fetchAfterNavodayaInfo(user_username);
	};

	componentDidUpdate = prevProps => {
		if (this.props.after_navodaya !== prevProps.after_navodaya) {
			/* eslint-disable-next-line */
			this.setState({
				after_navodaya: this.props.after_navodaya
			});
		}

		// if (
		// 	this.props.after_navodaya_vis_type !==
		// 		prevProps.after_navodaya_vis_type ||
		// 	this.props.after_navodaya_rejected_list !==
		// 		prevProps.after_navodaya_rejected_list
		// ) {
		// 	 eslint-disable-next-line
		// 	this.setState({
		// 		visibility: {
		// 			after_navodaya_rejected_list: this.props.after_navodaya_rejected_list,
		// 			after_navodaya_vis_type: this.props.after_navodaya_vis_type
		// 		}
		// 	});
		// }
	};

	/* onClickSetVisibility = e => {
		e.preventDefault();
		this.setState({ loading: true });
		const { visibility } = this.state;
		if (
			visibility.after_navodaya_vis_type === "all" ||
			visibility.after_navodaya_vis_type === "boys" ||
			visibility.after_navodaya_vis_type === "girls"
		) {
			visibility.after_navodaya_rejected_list = [];
		}
		this.props.updateANVisibilty(visibility).then(() => {
			this.setState({ loading: false, modalOpen: false });
		});
	}; */

	/* updateState = visibility => {
		// console.log("called here!", visibility.vis_type);
		this.setState({
			visibility: {
				after_navodaya_vis_type: visibility.vis_type,
				after_navodaya_rejected_list: visibility.rej_list
			}
		});
	}; */

	deleteCard = doc => {
		this.props.deleteAN(doc);
	};

	closeModal = () => this.setState({ modalOpen: false });

	openModal = () => this.setState({ modalOpen: true });

	render() {
		const { after_navodaya /* , modalOpen, loading */ } = this.state;
		/* const {
			after_navodaya_vis_type,
			after_navodaya_rejected_list
		} = this.state.visibility; */
		const { isCurrentUser } = this.props;

		return (
			<div>
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
										vis_type={after_navodaya_vis_type}
										rej_list={after_navodaya_rejected_list}
										onClickSetVisibility={this.onClickSetVisibility}
									/>
								</List.Item> */}
								<List.Item>
									<AddNewAfterNavodaya />
								</List.Item>
							</List>
						</Container>
					</div>
				)}

				{after_navodaya.length > 0 ? (
					after_navodaya.map(doc => (
						/* eslint-disable-next-line */
						<Card.Group centered key={doc._id}>
							<Card color="teal">
								<Card.Content>
									<Card.Header>
										{doc.title}
										{// It should display for the profile user only.
										// Other user viewing another user's profile should not get this.

										isCurrentUser && (
											<Popup
												trigger={
													<Label
														attached="top right"
														as="a"
														onClick={() => this.deleteCard(doc)}
													>
														<Icon name="delete" />
													</Label>
												}
												content="Delete this card"
											/>
										)}
									</Card.Header>
									<Card.Meta>{doc.duration}</Card.Meta>
									<Card.Description>{doc.content}</Card.Description>
								</Card.Content>
							</Card>
						</Card.Group>
					))
				) : (
					<Card centered>
						<Card.Content>
							<Card.Header>{"Nothing found"}</Card.Header>
							<Card.Description>{"No records found..."}</Card.Description>
						</Card.Content>
					</Card>
				)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		after_navodaya: state.afternavodayainfo.after_navodaya,
		after_navodaya_vis_type: state.afternavodayainfo.after_navodaya_vis_type,
		after_navodaya_rejected_list:
			state.afternavodayainfo.after_navodaya_rejected_list
	};
}

AfterNavodayaPanel.defaultProps = {
	after_navodaya: [],
	after_navodaya_vis_type: "",
	after_navodaya_rejected_list: []
};

AfterNavodayaPanel.propTypes = {
	isCurrentUser: PropTypes.bool.isRequired,
	after_navodaya: PropTypes.arrayOf(PropTypes.shape({})),
	// after_navodaya_vis_type: PropTypes.string,
	// after_navodaya_rejected_list: PropTypes.arrayOf(PropTypes.string),
	fetchAfterNavodayaInfo: PropTypes.func.isRequired,
	// updateANVisibilty: PropTypes.func.isRequired,
	deleteAN: PropTypes.func.isRequired,
	user_username: PropTypes.string.isRequired
};

export default connect(
	mapStateToProps,
	{
		fetchAfterNavodayaInfo,
		deleteAN
		// updateANVisibilty
	}
)(AfterNavodayaPanel);
