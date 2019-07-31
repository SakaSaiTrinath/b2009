import React, { Component } from "react";
import {
	Modal,
	Label,
	Icon,
	Button,
	Header,
	Container
} from "semantic-ui-react";
import { connect } from "react-redux";

import AddNewGamesForm from "../forms/AddNewGamesForm";
import { addNewGame } from "../../actions/schoolinfo";

class AddNewGames extends Component {
	state = {
		data: {
			game_name: "None",
			level_reached: "None",
			no_of_reached: ""
		},
		errors: {},
		loading: false,
		modalOpen: false
	};

	componentDidUpdate = (prevProps, prevState) => {
		if(prevState.data !== this.state.data) {
			this.setState({
				errors: {} 
			});
		}		
	};

	updateState = data => {
		this.setState({ data });
	};

	onSubmit = e => {
		e.preventDefault();
		const errors = this.validate(this.state.data);
		this.setState({
			errors
		});
		if(Object.keys(errors).length === 0) {
			this.setState({ loading: true });
			this.props
				.addNewGame(this.state.data)
				.then(() => {
					this.setState({ 
						loading: false, 
						modalOpen: false, 
						data: { 
							game_name: "None",
							level_reached: "None",
							no_of_reached: ""
						}
					});
				})
				.catch(err => {
					console.log(err);
					this.setState({
						errors: err.response.data.errors,
						loading: false
					});
				});
		}
	};

	validate = data => {
		const errors = {};
		if (!data.game_name) errors.game_name = "Please select an option!";
		if (data.game_name === "None") errors.game_name = "Field cannot be None!";
		if (!data.level_reached) errors.level_reached = "Please select an option!";
		if (data.level_reached === "None") errors.level_reached = "Field cannot be None!";
		if (!data.no_of_reached) errors.no_of_reached = "Input required!";
		if (data.no_of_reached > 4) errors.no_of_reached = "Bad value!";
		return errors;
	};

	render() {
		const { errors, loading, modalOpen, data } = this.state;

		return (
			<div>
				<Modal
					size="small"
					open={modalOpen}
					onClose={() => this.setState({ modalOpen: false })}
					trigger={
						<Container fluid textAlign="right" onClick={() => this.setState({ modalOpen: true })}>
							<Label as="a">
								<Icon name="pencil" />
								Add new
							</Label>
						</Container>
					}
					closeIcon
				>
					<Header>
						<Icon.Group size="large">
							<Icon name="game" />
							<Icon corner name="edit" />
						</Icon.Group>{" "}
						Add new Games Info
					</Header>
					<Modal.Content>
						<Modal.Description>
							<AddNewGamesForm 
								updateState={this.updateState}
								loading = {loading}
								data = {data}
								errors = {errors}
							/>
						</Modal.Description>
					</Modal.Content>
					<Modal.Actions>
						<Button positive icon labelPosition="left" onClick={this.onSubmit}>
							<Icon name="checkmark" /> Add
						</Button>
					</Modal.Actions>
				</Modal>
			</div>
		);
	}
}

export default connect(null, { addNewGame })(AddNewGames);
