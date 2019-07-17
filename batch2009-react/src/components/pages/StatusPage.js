import React from "react";
import { Header, Grid, Card, Icon, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import gImg from "../images/my pic.jpg";
import SearchBar from "../utilities/SearchBar";

const usersJoined = [
	{
		id: 1,
		imgurl: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
		name: "Matthew",
		studyperiod: "2009 (6th) - 2016 (12th)",
		currentstatus: "Studying B.Sc at Gitam University, Visakhapatnam",
		key: "Matthew",
		value: "Matthew",
		text: "Matthew"
	},
	{
		id: 2,
		imgurl: gImg,
		name: "Saka Sai Trinath",
		studyperiod: "2009 (6th) - 2016 (12th)",
		currentstatus:
			"Studying B.Tech at Lovely Professional University, Punjab",
		key: "Saka Sai Trinath",
		value: "Saka Sai Trinath",
		text: "Saka Sai Trinath"
	},
	{
		id: 3,
		imgurl: "https://react.semantic-ui.com/images/avatar/large/elliot.jpg",
		name: "Elliot Baker",
		studyperiod: "2009 (6th) - 2016 (12th)",
		currentstatus: "Studying B.Sc at Gitam University, Visakhapatnam",
		key: "Elliot Baker",
		value: "Elliot Baker",
		text: "Elliot Baker"
	},
	{
		id: 4,
		imgurl: "https://react.semantic-ui.com/images/avatar/large/elliot.jpg",
		name: "Steve Sanders",
		studyperiod: "2009 (6th) - 2016 (12th)",
		currentstatus: "Studying B.Sc at Gitam University, Visakhapatnam",
		key: "Steve Sanders",
		value: "Steve Sanders",
		text: "Steve Sanders"
	},
	{
		id: 5,
		imgurl: "https://react.semantic-ui.com/images/avatar/large/molly.png",
		name: "Molly Thomas",
		studyperiod: "2009 (6th) - 2016 (12th)",
		currentstatus: "Studying B.Sc at Gitam University, Visakhapatnam",
		key: "Molly Thomas",
		value: "Molly Thomas",
		text: "Molly Thomas"
	},
	{
		id: 6,
		imgurl: "https://react.semantic-ui.com/images/avatar/large/jenny.jpg",
		name: "Jenny Lawrence",
		studyperiod: "2009 (6th) - 2016 (12th)",
		currentstatus: "Studying B.Sc at Gitam University, Visakhapatnam",
		key: "Jenny Lawrence",
		value: "Jenny Lawrence",
		text: "Jenny Lawrence"
	},
	{
		id: 7,
		imgurl: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
		name: "Daniel",
		studyperiod: "2009 (6th) - 2016 (12th)",
		currentstatus: "Studying B.Sc at Gitam University, Visakhapatnam",
		key: "Daniel s",
		value: "Daniel s",
		text: "Daniel s"
	},
	{
		id: 8,
		imgurl: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
		name: "Anil",
		studyperiod: "2009 (6th) - 2016 (12th)",
		currentstatus: "Studying B.Sc at Gitam University, Visakhapatnam",
		key: "Anil",
		value: "Anil",
		text: "Anil"
	},
	{
		id: 9,
		imgurl: "https://react.semantic-ui.com/images/avatar/large/molly.png",
		name: "Nag",
		studyperiod: "2009 (6th) - 2016 (12th)",
		currentstatus: "Studying B.Sc at Gitam University, Visakhapatnam",
		key: "Nag",
		value: "Nag",
		text: "Nag"
	},
	{
		id: 10,
		imgurl: "https://react.semantic-ui.com/images/avatar/large/jenny.jpg",
		name: "Robert",
		studyperiod: "2009 (6th) - 2016 (12th)",
		currentstatus: "Studying B.Sc at Gitam University, Visakhapatnam",
		key: "Robert",
		value: "Robert",
		text: "Robert"
	},
	{
		id: 11,
		imgurl: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
		name: "Bobby",
		studyperiod: "2009 (6th) - 2016 (12th)",
		currentstatus: "Studying B.Sc at Gitam University, Visakhapatnam",
		key: "Bobby",
		value: "Bobby",
		text: "Bobby"
	},
	{
		id: 12,
		imgurl: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
		name: "Richard Parker",
		studyperiod: "2009 (6th) - 2016 (12th)",
		currentstatus: "Studying B.Sc at Gitam University, Visakhapatnam",
		key: "Richard Parker",
		value: "Richard Parker",
		text: "Richard Parker"
	}
];

const usersYetToJoin = [
	{
		id: 1,
		imgurl: "https://react.semantic-ui.com/images/avatar/large/jenny.jpg",
		name: "Jenny Lawrence",
		studyperiod: "2009 (6th) - 2016 (12th)",
		currentstatus: "Studying B.Sc at Gitam University, Visakhapatnam",
		key: "Jenny Lawrence",
		value: "Jenny Lawrence",
		text: "Jenny Lawrence"
	},
	{
		id: 2,
		imgurl: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
		name: "Vishal",
		studyperiod: "2009 (6th) - 2016 (12th)",
		currentstatus: "Studying B.Sc at Gitam University, Visakhapatnam",
		key: "Vishal",
		value: "Vishal",
		text: "Vishal"
	},
	{
		id: 3,
		imgurl: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
		name: "Daniel",
		studyperiod: "2009 (6th) - 2016 (12th)",
		currentstatus: "Studying B.Sc at Gitam University, Visakhapatnam",
		key: "Daniel",
		value: "Daniel",
		text: "Daniel"
	},
	{
		id: 4,
		imgurl: "https://react.semantic-ui.com/images/avatar/large/elliot.jpg",
		name: "Steve Sanders",
		studyperiod: "2009 (6th) - 2016 (12th)",
		currentstatus: "Studying B.Sc at Gitam University, Visakhapatnam",
		key: "Steve Sanders",
		value: "Steve Sanders",
		text: "Steve Sanders"
	}
];

let users = [];

class StatusPage extends React.Component {
	state = { page: "usersJoined", results: [] };

	getsearchresults = result => {
		this.setState({
			results: result
		});

		if (this.state.results.size > 0) {
			users = this.state.results;
		}
	};

	handlePage = (e, { name }) => {
		this.setState({
			page: name
		});
	};

	render() {
		const { page } = this.state;

		const source = users.map(user => ({
			title: user.name,
			description: user.currentstatus,
			image: user.imgurl
			// price: user.studyperiod
		}));

		if (this.state.results.size > 0) {
			users = this.state.results;
		} else if (this.state.page === "usersJoined") {
			users = usersJoined;
		} else {
			users = usersYetToJoin;
		}

		return (
			<Grid
				textAlign="center"
				stackable
				style={{
					minHeight: window.innerHeight
				}}
			>
				{/* Page Title */}
				<Grid.Row centered>
					<Header as="h1" content="Status Page" color="teal" />
				</Grid.Row>

				<Grid.Row>
					<Grid.Column>
						<Button.Group color="teal" fluid>
							<Button
								name="usersJoined"
								active={page === "usersJoined"}
								onClick={this.handlePage}
							>
								Joined
							</Button>
							<Button
								name="usersYetToJoin"
								active={page === "usersYetToJoin"}
								onClick={this.handlePage}
							>
								Yet To Join
							</Button>
						</Button.Group>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row>
					<Grid.Column width={8}>
						<SearchBar
							getsearchresults={() => this.getsearchresults()}
							source={source}
						/>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row>
					<Grid.Column>
						<Grid stackable centered textAlign="center">
							<Grid.Row align="middle">
								{users.map(user => (
									<Grid.Column width={4} key={user.id}>
										<Card
											color="teal"
											style={{
												marginTop: "10px",
												marginBottom: "10px"
											}}
											as={Link}
											to="/myprofile#"
										>
											<Card.Content>
												<Image
													src={user.imgurl}
													floated="right"
													size="mini"
												/>
												<Card.Header>
													{user.name}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{user.studyperiod}
													</span>
												</Card.Meta>
												<Card.Description>
													{user.currentstatus}
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
								))}
							</Grid.Row>
						</Grid>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

export default StatusPage;
