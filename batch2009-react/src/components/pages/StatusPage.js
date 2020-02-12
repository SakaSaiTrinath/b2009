import React from "react";
import { Header, Grid, Card, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import dImg from "../images/profile-dummy.jpg";
import SearchBar from "../utilities/SearchBar";
import { fetchAllUsersFull } from "../../actions/other";

let users = [];

class StatusPage extends React.Component {
	state = {
		page: "usersJoined",
		results: [],
		usersJoined: [],
		usersYetToJoin: []
	};

	componentDidMount() {
		this.props.fetchAllUsersFull();
	}

	componentDidUpdate(prevProps) {
		if (this.props.all_users !== prevProps.all_users && this.props.all_users) {
			const { usersYetToJoin, usersJoined } = this.state;
			this.props.all_users.map(user => {
				if (user.isJoined) {
					usersJoined.push(user);
				} else {
					usersYetToJoin.push(user);
				}
				return null;
			});
			this.setState({ usersJoined, usersYetToJoin }); // eslint-disable-line
		}
	}

	getsearchresults = results => {
		this.setState({ results });
	};

	handlePage = (e, { name }) => {
		this.setState({
			page: name
		});
	};

	render() {
		const { page, usersJoined, usersYetToJoin, results } = this.state;

		let source = [];
		if (page === "usersJoined") {
			source = usersJoined.map(user => ({
				title: user.fullname,
				description: user.current_status,
				image: user.profile_pic || dImg,
				price: `${user.studied_from_year} - ${user.studied_to_year}`
			}));
		} else {
			source = usersYetToJoin.map(user => ({
				title: user.fullname,
				description: user.current_status,
				image: user.profile_pic || dImg,
				price: `${user.studied_from_year} - ${user.studied_to_year}`
			}));
		}

		if (results.length > 0 && this.props.all_users) {
			users = [];
			for (let i = results.length - 1; i >= 0; i -= 1) {
				for (let j = this.props.all_users.length - 1; j >= 0; j -= 1) {
					if (this.props.all_users[j].fullname === results[i].title) {
						users.push(this.props.all_users[j]);
					}
				}
			}
		} else if (page === "usersJoined") {
			users = usersJoined;
		} else {
			users = usersYetToJoin;
		}

		return (
			<Grid stackable>
				{/* Page Title */}
				<Grid.Row centered>
					<Grid.Column textAlign="left" width={10}>
						<Header as="h1" content="Status Page" color="teal" />
					</Grid.Column>
					<Grid.Column width={4}>
						<SearchBar
							getsearchresults={this.getsearchresults}
							source={source}
						/>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row>
					<Grid.Column>
						<Button.Group color="teal" fluid>
							<Button
								name="usersJoined"
								active={page === "usersJoined"}
								onClick={this.handlePage}
							>
								Joined ({usersJoined.length})
							</Button>
							<Button
								name="usersYetToJoin"
								active={page === "usersYetToJoin"}
								onClick={this.handlePage}
							>
								Yet To Join ({usersYetToJoin.length})
							</Button>
						</Button.Group>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row
					textAlign="center"
					style={{
						minHeight: window.innerHeight - 350
					}}
				>
					<Grid.Column>
						<Grid stackable centered textAlign="center">
							<Grid.Row align="middle">
								{users && users.length > 0
									? users.map(user => (
											// eslint-disable-next-line
											<Grid.Column width={4} key={user._id}>
												<Card
													color="teal"
													style={{
														marginTop: "10px",
														marginBottom: "10px"
													}}
													as={Link}
													to="/profile#"
												>
													<Card.Content>
														<Image
															src={user.profile_pic || dImg}
															floated="right"
															size="mini"
														/>
														<Card.Header>{user.fullname}</Card.Header>
														<Card.Meta>
															<span className="date">
																{user.studied_from_year} {" - "}{" "}
																{user.studied_to_year}
															</span>
														</Card.Meta>
														<Card.Description>
															{user.current_status}
														</Card.Description>
													</Card.Content>
													{/* <Card.Content extra>
														<div className="ui two buttons">
															<Button basic color="teal">
																<Icon name="newspaper" />
																Articles
																{"	"} 16
															</Button>

															<Button basic color="teal">
																<Icon name="images" />
																Gallery
																{"	"} 25
															</Button>
														</div>
													</Card.Content> */}
												</Card>
											</Grid.Column>
									  ))
									: "No users!"}
							</Grid.Row>
						</Grid>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

StatusPage.propTypes = {
	all_users: PropTypes.arrayOf(PropTypes.object).isRequired,
	fetchAllUsersFull: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	return {
		all_users: state.other.all_users
	};
}

export default connect(
	mapStateToProps,
	{ fetchAllUsersFull }
)(StatusPage);
