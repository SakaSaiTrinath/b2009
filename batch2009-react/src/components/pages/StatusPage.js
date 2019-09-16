import React from "react";
import { Header, Grid, Card, Icon, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import dImg from "../images/profile-dummy.jpg";
import SearchBar from "../utilities/SearchBar";
import { fetchAllUsersFull } from '../../actions/other';

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

	componentDidUpdate(prevProps, prevState) {
		if(this.props.all_users !== prevProps.all_users && this.props.all_users) {
			const { usersYetToJoin, usersJoined } = this.state;
			this.props.all_users.map(user => {
				if(user.isJoined) {
					usersJoined.push(user);
				} else {
					usersYetToJoin.push(user);
				}
				return null;
			});
			this.setState({ usersJoined, usersYetToJoin });
		}
	}

	handlePage = (e, { name }) => {
		this.setState({
			page: name
		});
	};

	getsearchresults = results => {
		this.setState({ results });
	}

	render() {
		const { page, usersJoined, usersYetToJoin, results } = this.state;

		let source = [];
		if(this.props.all_users) {
			source = this.props.all_users.map(user => ({
				title: user.fullname,
				description: user.current_status,
				image: user.profile_pic || dImg,
				price: `${user.studied_from_year} - ${user.studied_to_year}`
			}));
		}

		if(results.length > 0 && this.props.all_users) {
			users = [];
			for (var i = results.length - 1; i >= 0; i--) {
				for (var j = this.props.all_users.length - 1; j >= 0; j--) {
					if(this.props.all_users[j].fullname === results[i].title) {
						users.push(this.props.all_users[j]);
					}
				}
			}
		} else if(page === "usersJoined") {
			users = usersJoined;
		} else {
			users = usersYetToJoin;
		}

		return (
			<Grid
				textAlign="center"
				stackable
			>
				{/* Page Title */}
				<Grid.Row centered>
					<Grid.Column width={8}>
						<Header as="h1" content="Status Page" color="teal" />
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
					style={{
						minHeight: window.innerHeight - 350
					}}
				>
					<Grid.Column>
						<Grid stackable centered textAlign="center">
							<Grid.Row align="middle">
								{users && users.length > 0 ? users.map(user => (
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
												<Card.Header>
													{user.fullname}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{user.studied_from_year} {" - "} {user.studied_to_year}
													</span>
												</Card.Meta>
												<Card.Description>
													{user.current_status}
												</Card.Description>
											</Card.Content>
											<Card.Content extra>
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
											</Card.Content>
										</Card>
									</Grid.Column>
								)) : (
									"No users!"
								)}
							</Grid.Row>
						</Grid>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

function mapStateToProps(state) {
	return {
		all_users: state.other.all_users
	}
}

export default connect(mapStateToProps, { fetchAllUsersFull })(StatusPage);
