import React from "react";
import PropTypes from "prop-types";
import { Table, Icon } from "semantic-ui-react";
import { connect } from "react-redux";

import EditBasicInfo from "../modals/EditBasicInfo";

class BasicInfoPanel extends React.Component {
	state = {};

	render() {
		const {
			fullname,
			nick_name,
			birthdate,
			birthmonth,
			gender,
			rel_status,
			phone_number,
			home_address,
			blood_group,
			known_lang,
			zodiac,
			hobbies,
			goal
		} = this.props;
		const { isCurrentUser } = this.props;

		return (
			<div>
				{// This should appear if user is viewing his profile in My profile time only.
				// If he come to this page from status cards, then this should not display
				isCurrentUser && <EditBasicInfo />}
				<Table celled striped>
					<Table.Body>
						<Table.Row>
							<Table.Cell>
								<Icon name="address book" color="teal" />
								Full Name
							</Table.Cell>
							<Table.Cell>{fullname}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="talk" color="teal" />
								You can call me
							</Table.Cell>
							<Table.Cell>{nick_name}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="birthday" color="teal" />
								Candles Day
							</Table.Cell>
							<Table.Cell>
								{birthmonth} {birthdate}
							</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="heterosexual" color="teal" />
								Gender
							</Table.Cell>
							<Table.Cell>{gender}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="chess" color="teal" />I am
							</Table.Cell>
							<Table.Cell>{rel_status}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="phone volume" color="teal" />
								Ring me at
							</Table.Cell>
							<Table.Cell>{phone_number}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="home" color="teal" />
								Reside at
							</Table.Cell>
							<Table.Cell>{home_address}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="tint" color="teal" />
								Blood Group
							</Table.Cell>
							<Table.Cell>{blood_group}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="language" color="teal" />I Know
							</Table.Cell>
							<Table.Cell>{known_lang}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="puzzle" color="teal" />
								Zodiac
							</Table.Cell>
							<Table.Cell>{zodiac}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="book" color="teal" />
								Hobbies
							</Table.Cell>
							<Table.Cell>{hobbies}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="grab" color="teal" />
								Goal
							</Table.Cell>
							<Table.Cell>{goal}</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		fullname: state.basicinfo.fullname,
		nick_name: state.basicinfo.nick_name,
		birthmonth: state.basicinfo.birthmonth,
		birthdate: state.basicinfo.birthdate,
		gender: state.basicinfo.gender,
		rel_status: state.basicinfo.rel_status,
		phone_number: state.basicinfo.phone_number,
		home_address: state.basicinfo.home_address,
		blood_group: state.basicinfo.blood_group,
		known_lang: state.basicinfo.known_lang,
		zodiac: state.basicinfo.zodiac,
		hobbies: state.basicinfo.hobbies,
		goal: state.basicinfo.goal
	};
}

BasicInfoPanel.defaultProps = {
	fullname: "",
	nick_name: "",
	birthmonth: "",
	birthdate: "",
	gender: "",
	rel_status: "",
	phone_number: null,
	home_address: "",
	blood_group: "",
	known_lang: "",
	zodiac: "",
	hobbies: "",
	goal: ""
};

BasicInfoPanel.propTypes = {
	isCurrentUser: PropTypes.bool.isRequired,
	fullname: PropTypes.string,
	nick_name: PropTypes.string,
	birthmonth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	birthdate: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	gender: PropTypes.string,
	rel_status: PropTypes.string,
	phone_number: PropTypes.number,
	home_address: PropTypes.string,
	blood_group: PropTypes.string,
	known_lang: PropTypes.string,
	zodiac: PropTypes.string,
	hobbies: PropTypes.string,
	goal: PropTypes.string
};

export default connect(
	mapStateToProps,
	{}
)(BasicInfoPanel);
