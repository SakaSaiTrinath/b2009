import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Sidebar, Menu, Header, Segment, Icon, Image } from "semantic-ui-react";
import logoImage from "../images/icon.png";

/* <Menu.Item
	name="sitegallery"
	as={NavLink}
	to="/sitegallery"
	active={activeItem === "sitegallery"}
	onClick={this.props.handleItemClick}
>
	<Icon name="images" />
	Site Gallery
</Menu.Item> */

/* <Menu.Item
		name="feed"
		as={NavLink}
		to="/feed"
		active={activeItem === "feed"}
		onClick={this.props.handleItemClick}
	>
		<Icon name="feed" />
		Feed
	</Menu.Item> */

class SideBar extends React.Component {
	state = {};

	render() {
		const { visible, activeItem } = this.props;
		return (
			<Sidebar
				as={Menu}
				visible={visible}
				vertical
				width="wide"
				onHide={this.props.handleSideBarHide}
				animation="overlay"
				mobile="true"
			>
				<div onClick={this.props.handleSideBarHide} role="presentation">
					{/* Brand position */}
					<Menu.Item>
						<Segment
							raised
							role="presentation"
							onClick={this.props.handleSideBarHide}
						>
							<Header as="h3">
								<Image
									src={logoImage}
									style={{
										height: "50px",
										width: "50px"
									}}
								/>{" "}
								Batch 2009
							</Header>
						</Segment>
					</Menu.Item>

					<Menu.Item
						as={NavLink}
						to="/announcements"
						name="announcements"
						active={activeItem === "announcements"}
						onClick={this.props.handleItemClick}
					>
						<Icon name="bullhorn" />
						Announcements
					</Menu.Item>

					<Menu.Item
						name="status"
						as={NavLink}
						to="/status"
						active={activeItem === "status"}
						onClick={this.props.handleItemClick}
					>
						<Icon name="address card" />
						Status
					</Menu.Item>

					{/* <Divider /> */}

					<Menu.Item
						name="bloodgroups"
						as={NavLink}
						to="/bloodgroups"
						active={activeItem === "bloodgroups"}
						onClick={this.props.handleItemClick}
					>
						<Icon name="theme" />
						Blood groups
					</Menu.Item>

					{/* <Divider /> */}
					<Menu.Item
						name="profile"
						as={NavLink}
						to="/profile"
						active={activeItem === "profile"}
						onClick={this.props.handleItemClick}
					>
						<Icon name="user circle outline" />
						MyProfile
					</Menu.Item>

					<Menu.Item
						name="contact"
						as={NavLink}
						to="/contact"
						active={activeItem === "contact"}
						onClick={this.props.handleItemClick}
					>
						<Icon name="alarm" />
						Contact Developer
					</Menu.Item>
				</div>
			</Sidebar>
		);
	}
}

SideBar.propTypes = {
	activeItem: PropTypes.string.isRequired,
	visible: PropTypes.bool.isRequired,
	handleSideBarHide: PropTypes.func.isRequired,
	handleItemClick: PropTypes.func.isRequired
};

export default withRouter(SideBar);
