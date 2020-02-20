import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { logout } from "../../actions/auth";

class NavBar extends React.Component {
	state = {};

	render() {
		const { activeItem, mode } = this.props;
		const { props } = this;

		return (
			<div>
				{mode === "computer" && (
					<div>
						<Button
							labelPosition="left"
							content="Sidebar"
							icon="bars"
							onClick={props.handleButtonClick}
							color="teal"
							size="tiny"
						/>

						{/* <NavBar /> */}
						{[
							"announcements",
							"status",
							"feed",
							"contact",
							"settings",
							"profile",
							"sitegallery",
							"bloodgroups"
						].includes(activeItem) ? (
							<Button.Group floated="right" size="tiny">
								<Button
									icon
									labelPosition="right"
									color="blue"
									onClick={() => props.history.push("/dashboard")}
								>
									Dashboard
									<Icon name="dashboard" />
								</Button>
								<Button
									icon
									labelPosition="right"
									color="grey"
									onClick={() => this.props.history.push("/settings")}
								>
									Settings
									<Icon name="setting" />
								</Button>
								<Button
									icon
									labelPosition="right"
									color="red"
									onClick={() => props.logout()}
								>
									logout
									<Icon name="sign out alternate" />
								</Button>
							</Button.Group>
						) : (
							<Button.Group floated="right" size="tiny">
								{/* <Button to="/settings" as={NavLink} icon labelPosition="right" color="grey">
									Settings
									<Icon name="setting" />
								</Button> */}
								<Button
									icon
									labelPosition="right"
									color="grey"
									onClick={() => props.history.push("/settings")}
								>
									Settings
									<Icon name="setting" />
								</Button>
								<Button
									icon
									labelPosition="right"
									color="red"
									onClick={() => props.logout()}
								>
									logout
									<Icon name="sign out alternate" />
								</Button>
							</Button.Group>
						)}
					</div>
				)}
				{mode === "mobile" && (
					<div>
						<Button
							icon="bars"
							onClick={props.handleButtonClick}
							color="teal"
							size="tiny"
						/>

						{[
							"announcements",
							"status",
							"feed",
							"contact",
							"settings",
							"profile",
							"sitegallery",
							"bloodgroups"
						].includes(activeItem) ? (
							<Button.Group floated="right">
								<Button
									icon="dashboard"
									color="blue"
									size="tiny"
									onClick={() => props.history.push("/dashboard")}
								/>
								<Button
									icon="setting"
									color="grey"
									size="tiny"
									onClick={() => props.history.push("/settings")}
								/>
								<Button
									icon="sign out alternate"
									color="red"
									size="tiny"
									onClick={() => props.logout()}
								/>
							</Button.Group>
						) : (
							<Button.Group floated="right">
								<Button
									icon="setting"
									color="grey"
									size="tiny"
									onClick={() => props.history.push("/settings")}
								/>
								<Button
									icon="sign out alternate"
									color="red"
									size="tiny"
									onClick={() => props.logout()}
								/>
							</Button.Group>
						)}
					</div>
				)}
			</div>
		);
	}
}

NavBar.propTypes = {
	activeItem: PropTypes.string.isRequired,
	handleButtonClick: PropTypes.func.isRequired,
	mode: PropTypes.string.isRequired,
	logout: PropTypes.func.isRequired,
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired
};

export default withRouter(
	connect(
		null,
		{ logout }
	)(NavBar)
);
