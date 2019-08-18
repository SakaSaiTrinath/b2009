import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Sidebar, Segment, Responsive } from "semantic-ui-react";

import NavBar from "../utilities/NavBar";
import SideBar from "../utilities/SideBar";

import AnnouncementsPage from "./AnnouncementsPage";
import StatusPage from "./StatusPage";
import FeedPage from "./FeedPage";
import ProfilePage from "./ProfilePage";
import SiteGalleryPage from "./SiteGalleryPage";
import ContactPage from "./ContactPage";
import SettingsPage from "./SettingsPage";
import DefaultDashboard from "./DefaultDashboard";

class DashboardPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = { activeItem: this.props.subcomponent, visible: false };
	}

	handleItemClick = (e, { name }) => {
		this.setState({
			activeItem: name,
			visible: false
		});
	};

	handleButtonClick = () => {
		this.setState({
			visible: !this.state.visible
		});
	};

	handleSideBarHide = () => {
		this.setState({
			visible: false
		});
	};

	toDashboard = () => {
		this.setState({
			activeItem: "dashboard"
		});
	};

	returnSwitch = param => {
		switch (param) {
			case "announcements":
				return [
					<div key={this.state.activeItem}>
						<AnnouncementsPage />
					</div>
				];
			case "status":
				return [
					<div key={this.state.activeItem}>
						<StatusPage />
					</div>
				];
			case "feed":
				return [
					<div key={this.state.activeItem}>
						<FeedPage />
					</div>
				];
			case "profile":
				return [
					<div key={this.state.activeItem}>
						<ProfilePage />
					</div>
				];
			case "sitegallery":
				return [
					<div key={this.state.activeItem}>
						<SiteGalleryPage />
					</div>
				];
			case "contact":
				return [
					<div key={this.state.activeItem}>
						<ContactPage />
					</div>
				];
			case "settings":
				return [
					<div key={this.state.activeItem}>
						<SettingsPage />
					</div>
				];
			case "dashboard":
				return [
					<div key={this.state.activeItem}>
						<DefaultDashboard />
					</div>
				];
			default:
				return [
					<div key={this.state.activeItem}>
						<DefaultDashboard />
					</div>
				];
		}
	};

	render() {
		const { activeItem } = this.state || {};
		const { visible } = this.state;

		return (
			<div>
				<Sidebar.Pushable as={Segment} style={{ minHeight: "100vh" }}>
					<SideBar
						visible={visible}
						activeItem={activeItem}
						handleSideBarHide={this.handleSideBarHide}
						handleItemClick={this.handleItemClick}
					/>

					<Sidebar.Pusher>
						<Segment basic>
							<Responsive
								minWidth={Responsive.onlyTablet.minWidth}
							>
								<NavBar
									activeItem={activeItem}
									handleButtonClick={this.handleButtonClick}
									mode="computer"
									toDashboard={this.toDashboard}
								/>

								{/* Page Content */}
								<div>
									<Segment
										style={{
											marginTop: "10px",
											minHeight: window.innerHeight
										}}
									>
										{this.returnSwitch(
											this.state.activeItem
										)}
										{/* this.props.children */}
									</Segment>
								</div>
							</Responsive>

							<Responsive {...Responsive.onlyMobile}>
								<NavBar
									activeItem={activeItem}
									handleButtonClick={this.handleButtonClick}
									mode="mobile"
									toDashboard={this.toDashboard}
								/>

								{/* Page Content */}
								<Segment
									style={{
										marginTop: "10px",
										marginLeft: "-10px",
										marginRight: "-10px",
										marginBottom: "-10px"
									}}
								>
									{this.returnSwitch(this.state.activeItem)}
									{/* this.props.children */}
								</Segment>
							</Responsive>
						</Segment>
					</Sidebar.Pusher>
				</Sidebar.Pushable>
			</div>
		);
	}
}

DashboardPage.propTypes = {
	subcomponent: PropTypes.string.isRequired
};

function mapStateToProps(state) {
	return {
		isConfirmend: !!state.user
	};
}

export default withRouter(connect(mapStateToProps)(DashboardPage));
