import React from "react";
import {
	Modal,
	Label,
	Icon,
	Button,
	Header,
	Container
} from "semantic-ui-react";
import { connect } from "react-redux";

import AddNewAfterNavodayaForm from "../forms/AddNewAfterNavodayaForm";
import { addNewAN } from "../../actions/afternavodayainfo";

class AddNewAfterNavodaya extends React.Component {
	state = {
		data: {
			title: "",
			duration: "",
			content: ""
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
				.addNewAN(this.state.data)
				.then(() => {
					this.setState({ 
						loading: false, 
						modalOpen: false, 
						data: { docs: [] }
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
		if (!data.title) errors.title = "Can't be empty!";
		if (data.duration === "None") errors.duration = "Can't be empty!";
		if (!data.content) errors.content = "Can't be empty!";
		return errors;
	};

	render() {
		const { errors, loading, modalOpen, data } = this.state;

		return (
			<Modal
				open={modalOpen}
				onClose={() => this.setState({ modalOpen: false })}
				size="small"
				trigger={
					<Container
						fluid
						textAlign="center"
						style={{ marginBottom: "15px" }}
						onClick={() => this.setState({ modalOpen: true })}
					>
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
						<Icon name="wait" />
						<Icon corner name="edit" />
					</Icon.Group>{" "}
					Add New AfterNavodaya Info
				</Header>
				<Modal.Content>
					<Modal.Description>
						<AddNewAfterNavodayaForm 
							loading={loading}
							updateState={this.updateState}
							data={data}
							errors={errors}
						/>
					</Modal.Description>
				</Modal.Content>
				<Modal.Actions>
					<Button
						positive
						icon="checkmark"
						labelPosition="left"
						content="Add"
						onClick={this.onSubmit}
					/>
				</Modal.Actions>
			</Modal>
		);
	}
}

export default connect(null, { addNewAN })(AddNewAfterNavodaya);
