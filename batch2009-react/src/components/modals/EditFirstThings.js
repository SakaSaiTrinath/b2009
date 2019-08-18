import React, { Component } from "react";
import {
	Modal,
	Label,
	Icon,
	Button,
	Header
} from "semantic-ui-react";
import { connect } from "react-redux";

import EditFirstThingsForm from "../forms/EditFirstThingsForm";
import { updateFirstThingsInfo } from "../../actions/firstthingsinfo";

class EditFirstThings extends Component {
	state = {
		data: {},
		errors: {},
		loading: false,
		modalOpen: false
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
				.updateFirstThingsInfo(this.state.data)
				.then(() => {
					this.setState({ loading: false, modalOpen: false });
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

	validate = firstthings => {
		const errors = {};
		for(let i in firstthings){
            if(!firstthings[i].value){
                errors[firstthings[i].field] = "Can't be empty!"; 
            }
        }
		return errors;
	};

	render() {
		const { loading, modalOpen, errors } = this.state;

		return ( 
			<div>
				<Modal
					size="small"
					open={modalOpen}
					onClose={() => this.setState({ modalOpen: false })}
					trigger={
						<Label as="a" onClick={() => this.setState({ modalOpen: true })}>
							<Icon name="edit" />
							Edit
						</Label>
					}
					closeIcon
				>
					<Header color="teal">
						<Icon.Group size="large">
							<Icon name="first order" />
							<Icon corner name="edit" />
						</Icon.Group>{" "}
						Edit First Things
					</Header>
					<Modal.Content>
						<Modal.Description>
							<EditFirstThingsForm 
								loading={loading} 
								updateState={this.updateState} 
								errors={errors}
							/>
						</Modal.Description>
					</Modal.Content>
					<Modal.Actions>
						<Button primary icon labelPosition="left" onClick={this.onSubmit}>
							<Icon name="checkmark" /> Update
						</Button>
					</Modal.Actions>
				</Modal>
			</div>
		);
	}
}

export default connect(null, { updateFirstThingsInfo })(EditFirstThings); 
