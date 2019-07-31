import React from "react";
import { Table, Button, Icon, Popup } from "semantic-ui-react";
import { connect } from "react-redux";

import EditSchoolInfo from "../modals/EditSchoolInfo";
import AddNewGames from "../modals/AddNewGames";

import { fetchSchoolInfo, deleteGame } from "../../actions/schoolinfo";

class SchoolInfoPanel extends React.Component {
	state = { 
		gameData: this.props.games || []
	};

	componentDidMount = () => {
		this.props.fetchSchoolInfo();	
	};

	componentDidUpdate = (prevProps, prevState) => {
		if(this.props.games !== prevProps.games) {
			this.setState({
				gameData: this.props.games
			});
		}	
	}

	deleteItem = id => {
		this.props.deleteGame(id);
	};

	GameIconFinder = game => {
		switch (game) {
			case "Athletics":
				return "flag checkered";
			case "Volleyball":
				return "volleyball ball";
			case "Kabaddi":
				return "kickstarter k";
			case "Kho Kho":
				return "gg";
			case "Shuttle":
				return "strikethrough";
			case "Chess":
				return "chess knight";
			case "Football":
				return "futbol";
			case "Table Tennis":
				return "table tennis";
			default:
				return null;
		}
	};

	render() {
		const { studied_from_year, studied_to_year, junior_house, senior_house } = this.props;

		return (
			<div>
				{
					// This should appear if user is viewing his profile in My profile time only.
					// If he come to this page from status cards, then this should not display
					<EditSchoolInfo />
				}
				<Table celled striped>
					<Table.Body>
						<Table.Row>
							<Table.Cell>
								<Icon name="calendar" color="teal" />
								Studied from
							</Table.Cell>
							<Table.Cell>{studied_from_year}</Table.Cell>
							<Table.Cell>to</Table.Cell>
							<Table.Cell>{studied_to_year}</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>

				{/* House */}
				<Table>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell colSpan="2">
								House
							</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						<Table.Row>
							<Table.Cell>
								<Icon name="home" color="teal" />
								Junior House
							</Table.Cell>
							<Table.Cell>{junior_house}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="home" color="teal" />
								Senior House
							</Table.Cell>
							<Table.Cell>{senior_house}</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>

				{
					/* Games and Sports */
					/* This should appear if user is viewing his profile in My profile time only.
					If he come to this page from status cards, then this should not display */
					<AddNewGames />
				}
				<Table celled>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell colSpan="4">
								Games and Sports
							</Table.HeaderCell>
						</Table.Row>
						<Table.Row>
							<Table.HeaderCell>Game</Table.HeaderCell>
							<Table.HeaderCell>Level reached</Table.HeaderCell>
							<Table.HeaderCell colSpan="2">
								Number of times
							</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{
							this.state.gameData.length > 0 ? 
								this.state.gameData.map((game, i) => {
									const name = game.game_name;
									return (
										<Table.Row key={game._id}>
											<Table.Cell>
												<Icon
													name={this.GameIconFinder(name)}
													color="teal"
												/>
												{game.game_name}
											</Table.Cell>
											<Table.Cell>{game.level_reached}</Table.Cell>
											<Table.Cell>
												{game.no_of_reached}
											</Table.Cell>
											<Table.Cell collapsing textAlign="right">
												<Popup 
													inverted
													content='Delete cell' 
													trigger={
														<Button
															size="mini"
															icon="close"
															onClick={() => this.deleteItem(game)}
														/>
													} />
											</Table.Cell>
										</Table.Row>
									);
								}) 
							:
								<Table.Row>
									<Table.Cell>No records found...</Table.Cell>
								</Table.Row>
						}
					</Table.Body>
				</Table>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		studied_from_year: state.schoolinfo.studied_from_year,
		studied_to_year: state.schoolinfo.studied_to_year,
		junior_house: state.schoolinfo.junior_house,
		senior_house: state.schoolinfo.senior_house,
		games: state.schoolinfo.games
	}
}

export default connect(mapStateToProps, { fetchSchoolInfo, deleteGame })(SchoolInfoPanel);
