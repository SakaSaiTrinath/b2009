import React from "react";
import {
	Modal,
	Label,
	Icon,
	Button,
	Header,
	Container
} from "semantic-ui-react";
import VisibilityForm from "../forms/VisibilityForm";

class Visibility extends React.Component {
	state = {
		visibility: {
			vis_type: this.props.vis_type,
			rej_list: this.props.rej_list || []
		}
	};

	updateState = visibility => {
		// console.log("called!", visibility.vis);
		this.setState({ visibility });
	};

	/*componentDidMount = () => {
		this.props.updateState(this.state.visibility);	
	};*/

	componentDidUpdate = (prevProps, prevState) => {
		if(prevState.visibility !== this.state.visibility) {
			this.props.updateState(this.state.visibility);			
		}

		if(this.props.vis_type !== prevProps.vis_type ||
			this.props.rej_list !== prevProps.rej_list) {
			this.setState({
				visibility: { 
					vis_type: this.props.vis_type,
					rej_list: this.props.rej_list
				} 
			});
		}
	};

	render() {
		const { rej_list, vis_type } = this.state.visibility;

		return (
			<Modal
				open={this.props.modalOpen}
				onClose={this.props.closeModal}
				size="small"
				trigger={
					<Container
						 onClick={this.props.openModal}
						fluid
						textAlign="right"
						style={{ marginBottom: "15px" }}
					>
						<Label as="a">
							<Icon name="eye" />
							Visibility
						</Label>
					</Container>
				}
				closeIcon
			>
				<Header color="teal">
					<Icon.Group size="large">
						<Icon name="eye" />
						<Icon corner name="edit" />
					</Icon.Group>{" "}
					Visibility
				</Header>
				<Modal.Content>
					<Modal.Description>
						<VisibilityForm
							loading={this.props.loading} 
							updateState={this.updateState}
							vis_type={vis_type}
							rej_list={rej_list}
						/>
					</Modal.Description>
				</Modal.Content>
				<Modal.Actions>
					<Button
						positive
						icon="checkmark"
						labelPosition="left"
						content="Set VisibilityForm"
						onClick={this.props.onClickSetVisibility}
					/>
				</Modal.Actions>
			</Modal>
		);
	}
}

export default Visibility;