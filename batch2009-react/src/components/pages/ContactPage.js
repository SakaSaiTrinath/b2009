import React from "react";
import { Header, Grid } from "semantic-ui-react";
import ContactForm from "../forms/ContactForm";

class ContactPage extends React.Component {
	state = {};

	render() {
		return (
			<Grid
				centered
				verticalAlign="middle"
				style={{
					marginTop: "50px",
					marginBottom: "80px"
				}}
			>
				<Grid.Row>
					<Grid.Column>
						<Header textAlign="center" color="teal" size="huge">
							Contact
						</Header>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column textAlign="center">
						<Header as="h4">
							<span style={{ color: "blue" }}>Drop</span>{" "}
							Suggestions or Complaints or Feedback.{" "}
							<span style={{ color: "red" }}>Love</span> to hear
							from you!
						</Header>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row style={{ marginTop: "20px", maxWidth: "600px" }}>
					<Grid.Column textAlign="center">
						<ContactForm />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

export default ContactPage;
