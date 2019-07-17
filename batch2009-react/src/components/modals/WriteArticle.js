import React from "react";
import { Modal, Icon, Button, Header } from "semantic-ui-react";
import WriteArticleForm from "../forms/WriteArticleForm";

class WriteArticle extends React.Component {
	state = {};

	render() {
		return (
			<Modal
				size="fullscreen"
				trigger={
					<Button animated="fade" size="big" color="teal" basic>
						<Button.Content visible>Write Article</Button.Content>
						<Button.Content hidden>
							<Icon name="pencil" />
						</Button.Content>
					</Button>
				}
				closeIcon
			>
				<Header color="teal">
					<Icon.Group size="large">
						<Icon name="newspaper" />
						<Icon corner name="pencil" />
					</Icon.Group>{" "}
					Article
				</Header>
				<Modal.Content>
					<Modal.Description>
						<WriteArticleForm />
					</Modal.Description>
				</Modal.Content>
				<Modal.Actions>
					<Button
						positive
						icon="save"
						labelPosition="left"
						content="Save and Publish"
						onClick={this.close}
					/>
				</Modal.Actions>
			</Modal>
		);
	}
}

export default WriteArticle;
