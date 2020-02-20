import React from "react";
import PropTypes from "prop-types";
import { Table, Icon, Container, List, Label } from "semantic-ui-react";
import { connect } from "react-redux";

import EditFirstThings from "../modals/EditFirstThings";
// import Visibility from "../modals/Visibility";

import {
	fetchFirstThingsInfo,
	deleteFTField
	// updateFTVisibilty
} from "../../actions/firstthingsinfo";

class FirstThingsPanel extends React.Component {
	state = {
		firstthings: this.props.firstthings,
		/* visibility: {
			first_things_vis_type: this.props.first_things_vis_type,
			first_things_rejected_list: this.props.first_things_rejected_list || []
		}, */
		loading: false,
		modalOpen: false
	};

	componentDidMount = () => {
		const { user_username } = this.props;
		this.props.fetchFirstThingsInfo(user_username);
	};

	componentDidUpdate = prevProps => {
		if (this.props.firstthings !== prevProps.firstthings) {
			/* eslint-disable-next-line */
			this.setState({ firstthings: this.props.firstthings });
		}

		/* if (
			this.props.first_things_vis_type !== prevProps.first_things_vis_type ||
			this.props.first_things_rejected_list !==
				prevProps.first_things_rejected_list
		) {
			 eslint-disable-next-line 
			this.setState({
				visibility: {
					first_things_rejected_list: this.props.first_things_rejected_list,
					first_things_vis_type: this.props.first_things_vis_type
				}
			});
		} */
	};

	/* onClickSetVisibility = e => {
		e.preventDefault();
		this.setState({ loading: true });
		const { visibility } = this.state;
		if (
			visibility.first_things_vis_type === "all" ||
			visibility.first_things_vis_type === "boys" ||
			visibility.first_things_vis_type === "girls"
		) {
			visibility.first_things_rejected_list = [];
		}
		this.props.updateFTVisibilty(visibility).then(() => {
			this.setState({ loading: false, modalOpen: false });
		});
	}; */

	/* updateState = visibility => {
		// console.log("called here!", visibility.vis_type);
		this.setState({
			visibility: {
				first_things_vis_type: visibility.vis_type,
				first_things_rejected_list: visibility.rej_list
			}
		});
	}; */

	deleteField = data => {
		this.props.deleteFTField(data);
	};

	closeModal = () => this.setState({ modalOpen: false });

	openModal = () => this.setState({ modalOpen: true });

	render() {
		const { firstthings /* , modalOpen, loading */ } = this.state;
		/* const {
			first_things_vis_type,
			first_things_rejected_list
		} = this.state.visibility; */
		const { isCurrentUser } = this.props;

		return (
			<div>
				{// This should appear if user is viewing his profile in My profile time only.
				// If he come to this page from status cards, then this should not display
				isCurrentUser && (
					<Container fluid textAlign="right">
						<List horizontal>
							{/* <List.Item>
								<Visibility
									openModal={this.openModal}
									closeModal={this.closeModal}
									loading={loading}
									modalOpen={modalOpen}
									updateState={this.updateState}
									vis_type={first_things_vis_type}
									rej_list={first_things_rejected_list}
									onClickSetVisibility={this.onClickSetVisibility}
								/>
							</List.Item> */}
							<List.Item>
								<Label
									as="a"
									href="http://www.tagquestionss.com/first-time-tag-questions/"
									target="_blank"
									rel="noreferrer noopener"
								>
									Need Suggestions?
								</Label>
							</List.Item>
							<List.Item>
								<EditFirstThings />
							</List.Item>
						</List>
					</Container>
				)}
				<Table celled striped>
					<Table.Body>
						{firstthings && firstthings.length > 0 ? (
							firstthings.map(ft => (
								/* eslint-disable-next-line */
								<Table.Row key={ft._id}>
									<Table.Cell>
										<Icon name="first order" color="teal" />
										{ft.field}
									</Table.Cell>
									<Table.Cell>{ft.value}</Table.Cell>
									{isCurrentUser && (
										<Table.Cell onClick={() => this.deleteField(ft)}>
											<Icon link name="delete" />
										</Table.Cell>
									)}
								</Table.Row>
							))
						) : (
							<Table.Row>
								<Table.Cell>
									<Icon name="first order" color="teal" />
									{"No FirstThings."}
								</Table.Cell>
							</Table.Row>
						)}
						{/*
						<Table.Row>
							<Table.Cell>
								<Icon name="first order" color="teal" />
								First app you check when you wake up in the
								morning?
							</Table.Cell>
							<Table.Cell>WhatsApp</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="first order" color="teal" />
								First broken bone?
							</Table.Cell>
							<Table.Cell>None</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="first order" color="teal" />
								First foreign country you ever visited?
							</Table.Cell>
							<Table.Cell>None</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="first order" color="teal" />
								First Instagram, twitter or Facebook post?
							</Table.Cell>
							<Table.Cell>My pic in Instagram</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="first order" color="teal" />
								First make-up item
							</Table.Cell>
							<Table.Cell>Powder</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="first order" color="teal" />
								First plane ride you ever went on?
							</Table.Cell>
							<Table.Cell>None</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="first order" color="teal" />
								First time I ever got into trouble at home and
								school?
							</Table.Cell>
							<Table.Cell>With PT Sir in 6th class.</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="first order" color="teal" />
								First time you were allowed to put on make-up
							</Table.Cell>
							<Table.Cell>{"I don't do make-up"}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="first order" color="teal" />
								First YouTuber you subscribed to?
							</Table.Cell>
							<Table.Cell>Jabardast</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="first order" color="teal" />
								First time you went shopping on your own?
							</Table.Cell>
							<Table.Cell>In Btech 1st year</Table.Cell>
						</Table.Row> */}
					</Table.Body>
				</Table>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		firstthings: state.firstthingsinfo.firstthings
		// first_things_vis_type: state.firstthingsinfo.first_things_vis_type,
		// first_things_rejected_list: state.firstthingsinfo.first_things_rejected_list
	};
}

FirstThingsPanel.defaultProps = {
	firstthings: []
	// first_things_vis_type: "",
	// first_things_rejected_list: []
};

FirstThingsPanel.propTypes = {
	isCurrentUser: PropTypes.bool.isRequired,
	firstthings: PropTypes.arrayOf(PropTypes.shape({})),
	// first_things_rejected_list: PropTypes.arrayOf(PropTypes.string),
	// first_things_vis_type: PropTypes.string.isRequired,
	fetchFirstThingsInfo: PropTypes.func.isRequired,
	// updateFTVisibilty: PropTypes.func.isRequired,
	deleteFTField: PropTypes.func.isRequired,
	user_username: PropTypes.string.isRequired
};

export default connect(
	mapStateToProps,
	{
		fetchFirstThingsInfo,
		deleteFTField
		// updateFTVisibilty
	}
)(FirstThingsPanel);
