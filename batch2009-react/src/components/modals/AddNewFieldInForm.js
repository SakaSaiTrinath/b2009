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

import AddNewFieldInFormForm from "../forms/AddNewFieldInFormForm";
import { addNewFieldInFavourites } from "../../actions/favouritesinfo";

class AddNewFieldInForm extends Component {
	state = {
		data: {
			field: "",
			value: ""
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
			// alert(`${this.state.data.field}, ${this.state.data.value}`);
			this.props.addNewFieldInFavourites(this.state.data)
				.then(() => {
					this.setState({ 
						loading: false, 
						modalOpen: false, 
						data: { field: "", value: "" }
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
		if (!data.field) errors.field = "Can't be empty!";
		if (!data.value) errors.value = "Can't be empty!";
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
						<Container fluid textAlign="left" onClick={() => this.setState({ modalOpen: true })}>
							<Label as="a">
								<Icon name="pencil" />
								Add new Field
							</Label>
						</Container>
					}
					closeIcon
				>
					<Header>
						<Icon.Group size="large">
							<Icon name="wpforms" />
							<Icon corner name="pencil" />
						</Icon.Group>{" "}
						Add new Field
					</Header>
					<Modal.Content>
						<Modal.Description>
							<AddNewFieldInFormForm 
								loading={loading}
								updateState={this.updateState}
								data={data}
								errors={errors}
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

export default connect(null, { addNewFieldInFavourites })(AddNewFieldInForm); 
