import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal, Icon, Header, Button } from "semantic-ui-react";

import WriteArticleForm from "../forms/WriteArticleForm";

class EditArticle extends Component {
	state = {};

	render() {
		return (
			<div>
				<Modal
					open={this.props.open}
					onClose={this.props.onClose}
					size="small"
					closeIcon
				>
					<Header color="teal">
						<Icon.Group size="large">
							<Icon name="newspaper" />
							<Icon corner name="edit" />
						</Icon.Group>{" "}
						Edit Article Info
					</Header>
					<Modal.Content>
						<Modal.Description>
							<WriteArticleForm />
						</Modal.Description>
					</Modal.Content>
					<Modal.Actions>
						<Button primary icon labelPosition="left">
							<Icon name="checkmark" /> Update
						</Button>
					</Modal.Actions>
				</Modal>
			</div>
		);
	}
}

EditArticle.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired
};

export default EditArticle;
