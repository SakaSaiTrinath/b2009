import React from "react";
import { Card, Label, Icon, Popup, Container, List } from "semantic-ui-react";
import { connect } from "react-redux";

import AddNewAfterNavodaya from "../modals/AddNewAfterNavodaya";
import Visibility from "../modals/Visibility";

import { fetchAfterNavodayaInfo } from "../../actions/afternavodayainfo";

class AfterNavodayaPanel extends React.Component {
	state = {
		after_navodaya: this.props.after_navodaya || []
	};

	componentDidMount = () => {
		this.props.fetchAfterNavodayaInfo();
	}

	render() {
		const { after_navodaya } = this.state;

		return (
			<div>
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
									<AddNewAfterNavodaya />
								</List.Item>
							</List>
						</Container>
					</div>
				}
				
				{/* <Card.Group centered>
					<Card color="teal">
						<Card.Content>
							<Card.Header>
								B.Tech Computer Science
								{
									// It should display for the profile user only.
									// Other user viewing another user's profile should not get this.
									<Popup
										trigger={
											<Label attached="top right" as="a">
												<Icon name="delete" />
											</Label>
										}
										content="Delete this card"
									/>
								}
							</Card.Header>
							<Card.Meta>2016 - Present</Card.Meta>
							<Card.Description>
								Lovely Professional University, Punjab, India.
							</Card.Description>
						</Card.Content>
					</Card>
				</Card.Group> */}
				
				{ after_navodaya.length > 0 ? 
					after_navodaya.map(doc => (
						<Card.Group centered>
							<Card color="teal">
								<Card.Content>
									<Card.Header>
										{doc.title}
										{
											// It should display for the profile user only.
											// Other user viewing another user's profile should not get this.

											<Popup
												trigger={
													<Label attached="top right" as="a">
														<Icon name="delete" />
													</Label>
												}
												content="Delete this card"
											/>
										}
									</Card.Header>
									<Card.Meta>{doc.sub_title}</Card.Meta>
									<Card.Description>
										{doc.content}
									</Card.Description>
								</Card.Content>
							</Card>
						</Card.Group>
					)
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
		after_navodaya: state.afternavodayainfo.after_navodaya
	}
}

export default connect(mapStateToProps, { fetchAfterNavodayaInfo })(AfterNavodayaPanel);
