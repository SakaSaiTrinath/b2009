import React from "react";
import {
	withRouter,
	Switch,
	BrowserRouter as Router
} from "react-router-dom";
import {
	Header,
	Segment,
	Image,
	Grid,
	Label,
	Icon,
	Button
} from "semantic-ui-react";
import { connect } from "react-redux";

import profileDummyPic from "../images/my pic.jpg";
import InfoPanels from "../collections/InfoPanels";
import EditStatus from "../modals/EditStatus";

import WriteArticle from "../modals/WriteArticle";
import { fetchBasicInfo } from "../../actions/basicinfo";

class MyProfilePage extends React.Component {
	state = {};

	componentDidMount = () => {
		this.props.fetchBasicInfo();
	};

	render() {
		const { fullname, current_status, articles_count, gallery_count } = this.props;

		return (
			<Router>
				<Grid
					centered
					textAlign="center"
					stackable
					verticalAlign="middle"
				>
					<Grid.Row centered>
						<Header as="h1" content="My Profile" color="teal" />
					</Grid.Row>
					<Grid.Row centered>
						<Grid.Column width={3}>
							<Segment textAlign="center" stacked raised>
								<Image
									src={profileDummyPic}
									size="medium"
									centered
								/>
								{
									// This should appear if user is viewing his profile in My profile time only.
									// If he come to this page from status cards, then this should not display
									<Label attached="top right" as="a">
										<Icon name="upload" />
										Upload
									</Label>
								}
							</Segment>
						</Grid.Column>

						<Grid.Column width={8}>
							<Segment.Group>
								<Segment color="teal" textAlign="center">
									<Header
										as="h3"
										content={fullname}
									/>
								</Segment>
								<Segment.Group horizontal>
									<Segment as="h5">
										<Icon name="bullseye" />
										Current Status
									</Segment>
									<Segment>
										{/*Studying B.Tech CSE at Lovely
										Professional University*/ current_status}
									</Segment>
								</Segment.Group>

								{
									// This should appear if user is viewing his profile in My profile time only.
									// If he come to this page from status cards, then this should not display
									<EditStatus />
								}
							</Segment.Group>
							<Segment.Group horizontal>
								<Segment as="h5" color="teal">
									Articles
								</Segment>
								<Segment color="teal">{articles_count}</Segment>
								<Segment as="h5" color="teal">
									Gallery
								</Segment>
								<Segment color="teal">{gallery_count}</Segment>
							</Segment.Group>
						</Grid.Column>
					</Grid.Row>

					{/* It should be displayed only for the own user. Not to the other */}
					<Grid.Row centered>
						<Grid.Column width={6}>
							<Button.Group widths="2">
								<WriteArticle />

								<Button
									animated="fade"
									size="big"
									color="teal"
									basic
								>
									<Button.Content visible>
										Upload to Gallery
									</Button.Content>
									<Button.Content hidden>
										<Icon name="photo" />
									</Button.Content>
								</Button>
							</Button.Group>
						</Grid.Column>
					</Grid.Row>

					<Grid.Row>
						<Grid.Column>
			 				<Switch>
								{/* subroutes.map(route => (
									<Route
										key={route.id}
										location={location}
										path={`${match.path}${route.path}`}
										exact={route.exact}
										component={() => (
											<InfoPanels
												subcomponent={route.id}
											/>
										)}
									/>
								)) */}
								<InfoPanels />
							</Switch>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Router>
		);
	}
}

function mapStateToProps(state) {
	return {
		fullname: state.basicinfo.fullname,
		current_status: state.basicinfo.current_status,
		articles_count: state.basicinfo.articles_count,
		gallery_count: state.basicinfo.gallery_count
	}
}

export default withRouter(connect(mapStateToProps, { fetchBasicInfo })(MyProfilePage));
