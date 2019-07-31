import React, { Component } from "react";
import { Form } from "semantic-ui-react";

import InlineError from "../messages/InlineError";

class AddNewGamesForm extends Component {
	state = {
		data: {
			game_name: this.props.data.game_name,
			level_reached: this.props.data.level_reached,
			no_of_reached: this.props.data.no_of_reached
		},
		errors: this.props.errors,
		loading: this.props.loading
	};

	componentDidMount = () => {
		this.props.updateState(this.state.data);
	};

	componentDidUpdate = (prevProps, prevState) => {
		if(this.state.data !== prevState.data) {
			this.props.updateState(this.state.data);
		};

		if (this.props.errors !== prevProps.errors) {
			this.setState({ errors: this.props.errors });
		}

		if(this.props.loading !== prevProps.loading) {
			this.setState({ loading: this.props.loading });
		}
	};

	handleDataChange = (e, { name, value }) => {
		this.setState({
			data: { ...this.state.data, [name]: value }
		});
	};

	render() {
		const { game_name, level_reached, no_of_reached } = this.state.data;
		const { errors, loading } = this.state;
		const GameOptions = [
			{ text: "None", value: "None", key: "None" }, 
			{ text: "Athletics", value: "Athletics", key: "Athletics" },
			{ text: "Chess", value: "Chess", key: "Chess" },
			{ text: "Football", value: "Football", key: "Football" },
			{ text: "Kabaddi", value: "Kabaddi", key: "Kabaddi" },
			{ text: "Kho Kho", value: "Kho Kho", key: "Kho Kho" },
			{ text: "Shuttle", value: "Shuttle", key: "Shuttle" },
			{ text: "Table Tennis", value: "Table Tennis", key: "Table Tennis" },
			{ text: "Volleyball", value: "Volleyball", key: "Volleyball" },
			{ text: "Yoga", value: "Yoga", key: "Yoga" }
		];
		const LevelOptions = [
			{ text: "None", value: "None", key: "None" }, 
			{ text: "Clusters", value: "Clusters", key: "Clusters" },
			{ text: "Regionals", value: "Regionals", key: "Regionals" },
			{ text: "Nationals", value: "Nationals", key: "Nationals" },
			{ text: "SGFI", value: "SGFI", key: "SGFI" }
		];

		return (
			<Form loading={loading}>
				<Form.Dropdown
					label="Game and Sport"
					fluid
					scrolling
					selection
					value={game_name}
					name="game_name"
					onChange={this.handleDataChange}
					options={GameOptions}
					error={!!errors.game_name}
				/>
				{errors.game_name && (
					<InlineError text={errors.game_name} />
				)}

				<Form.Dropdown
					label="Level Reached"
					fluid
					scrolling
					selection
					value={level_reached}
					name="level_reached"
					onChange={this.handleDataChange}
					options={LevelOptions}
					error={!!errors.level_reached}
				/>
				{errors.level_reached && (
					<InlineError text={errors.level_reached} />
				)}

				<Form.Input 
					label="No of times reached" 
					type="number"
					value={no_of_reached} 
					onChange={this.handleDataChange} 
					name="no_of_reached"
					error={!!errors.no_of_reached}
				/>
				{errors.no_of_reached && (
					<InlineError text={errors.no_of_reached} />
				)}
			</Form>
		);
	}
}

export default AddNewGamesForm;
