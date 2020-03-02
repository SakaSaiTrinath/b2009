import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Menu, Segment, Responsive, Dropdown } from "semantic-ui-react";
import BasicInfoPanel from "./BasicInfoPanel";
import SchoolInfoPanel from "./SchoolInfoPanel";
import AfterNavodayaPanel from "./AfterNavodayaPanel";
import SocialAccountsPanel from "./SocialAccountsPanel";
import FavouritesPanel from "./FavouritesPanel";
import FirstThingsPanel from "./FirstThingsPanel";
// import ArticlesPanel from "./ArticlesPanel";
// import GalleryPanel from "./GalleryPanel";

import { fetchAllUsers } from "../../actions/other";

const routes = [
	{
		// id: BasicInfoPanel,
		// path: "/myprofile/basic",
		// exact: true,
		// component: BasicInfoPanel,
		key: "BasicInfo",
		icon: "info",
		text: "Basic Info",
		value: "basic"
	},
	{
		// id: SchoolInfoPanel,
		// path: "/myprofile/school",
		// exact: true,
		// component: SchoolInfoPanel,
		key: "SchoolInfo",
		icon: "university",
		text: "School Info",
		value: "school"
	},
	{
		// id: AfterNavodayaPanel,
		// path: "/myprofile/afternavodaya",
		// exact: true,
		// component: AfterNavodayaPanel,
		key: "AfterNavodaya",
		icon: "wait",
		text: "After Navodaya",
		value: "afternavodaya"
	},
	{
		// id: SocialAccountsPanel,
		// path: "/myprofile/social",
		// exact: true,
		// component: SocialAccountsPanel,
		key: "SocialAccounts",
		icon: "at",
		text: "Social Accounts",
		value: "social"
	},
	{
		// id: FavouritesPanel,
		// path: "/myprofile/favorites",
		// exact: true,
		// component: FavouritesPanel,
		key: "Favourites",
		icon: "favorite",
		text: "Favourites",
		value: "favourites"
	},
	{
		// id: FirstThingsPanel,
		// path: "/myprofile/firstthings",
		// exact: true,
		// component: FirstThingsPanel,
		key: "FirstThings",
		icon: "first order",
		text: "First Things",
		value: "firstthings"
	} /* ,
	{
		id: ArticlesPanel,
		path: "/myprofile/articles",
		exact: true,
		component: ArticlesPanel,
		key: "Articles",
		icon: "newspaper",
		text: "Articles",
		value: "articles"
	},
	{
		id: GalleryPanel,
		path: "/myprofile/gallery",
		exact: true,
		component: GalleryPanel,
		key: "Gallery",
		icon: "photo",
		text: "Gallery",
		value: "gallery"
	} */
];

class InfoPanels extends Component {
	constructor(props) {
		super(props);

		this.state = { activeItem: "basic" };
	}

	componentDidMount() {
		this.props.fetchAllUsers();
	}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	handleChange = (e, { value }) => this.setState({ activeItem: value });
	/* handleChange = (e, data) => {alert(`${data.value}`)} */

	returnSwitch = param => {
		switch (param) {
			case "default":
				return [
					<div key={this.state.activeItem}>
						<BasicInfoPanel
							isCurrentUser={this.props.isCurrentUser}
							user_username={this.props.user_username}
						/>
					</div>
				];
			case "basic":
				return [
					<div key={this.state.activeItem}>
						<BasicInfoPanel
							isCurrentUser={this.props.isCurrentUser}
							user_username={this.props.user_username}
						/>
					</div>
				];
			case "school":
				return [
					<div key={this.state.activeItem}>
						<SchoolInfoPanel
							isCurrentUser={this.props.isCurrentUser}
							user_username={this.props.user_username}
						/>
					</div>
				];
			case "afternavodaya":
				return [
					<div key={this.state.activeItem}>
						<AfterNavodayaPanel
							isCurrentUser={this.props.isCurrentUser}
							user_username={this.props.user_username}
						/>
					</div>
				];
			case "social":
				return [
					<div key={this.state.activeItem}>
						<SocialAccountsPanel
							isCurrentUser={this.props.isCurrentUser}
							user_username={this.props.user_username}
						/>
					</div>
				];
			case "favourites":
				return [
					<div key={this.state.activeItem}>
						<FavouritesPanel
							isCurrentUser={this.props.isCurrentUser}
							user_username={this.props.user_username}
						/>
					</div>
				];
			case "firstthings":
				return [
					<div key={this.state.activeItem}>
						<FirstThingsPanel
							isCurrentUser={this.props.isCurrentUser}
							user_username={this.props.user_username}
						/>
					</div>
				];
			default:
				return [
					<div key={this.state.activeItem}>
						<BasicInfoPanel
							isCurrentUser={this.props.isCurrentUser}
							user_username={this.props.user_username}
						/>
					</div>
				];
		}
	};

	render() {
		const { activeItem } = this.state;

		return (
			<div>
				<Responsive minWidth={Responsive.onlyTablet.minWidth}>
					<Segment color="teal">
						<Menu attached="top" tabular stackable color="teal">
							<Menu.Item
								icon="info"
								name="basic"
								active={activeItem === "basic" || activeItem === "default"}
								onClick={this.handleItemClick}
							/>
							<Menu.Item
								icon="university"
								name="school"
								active={activeItem === "school"}
								onClick={this.handleItemClick}
							/>
							<Menu.Item
								icon="wait"
								name="afternavodaya"
								active={activeItem === "afternavodaya"}
								onClick={this.handleItemClick}
							/>
							<Menu.Item
								icon="at"
								name="social"
								active={activeItem === "social"}
								onClick={this.handleItemClick}
							/>
							<Menu.Item
								icon="favorite"
								name="favourites"
								active={activeItem === "favourites"}
								onClick={this.handleItemClick}
							/>
							<Menu.Item
								icon="first order"
								name="firstthings"
								active={activeItem === "firstthings"}
								onClick={this.handleItemClick}
							/>

							{/* Menu right side */}
							{/* <Menu.Menu position="right">
								<Menu.Item
									icon="newspaper"
									name="articles"
									active={activeItem === "articles"}
									onClick={this.handleItemClick}
								/>
								<Menu.Item
									icon="photo"
									name="gallery"
									active={activeItem === "gallery"}
									onClick={this.handleItemClick}
								/>
							</Menu.Menu> */}
						</Menu>

						<Segment attached="bottom" style={{ minHeight: "10rem" }}>
							{this.returnSwitch(activeItem)}
						</Segment>
					</Segment>
				</Responsive>

				<Responsive {...Responsive.onlyMobile}>
					{/* <Menu compact>
						<Dropdown
							fluid
							selection
							className="icon"
							defaultValue="basic"
							value={this.state.activeItem}
						>
							<Dropdown.Menu>
								{routes.map(route => (
									<Dropdown.Item
										key={route.key}
										value={route.value}
										text={route.text}
										icon={route.icon}
										onClick={this.handleChange}
									/>
								))}
							</Dropdown.Menu>
						</Dropdown>
					</Menu> */}
					<Menu>
						<Dropdown
							fluid
							selection
							className="icon"
							value={this.state.activeItem}
							onChange={this.handleChange}
							options={routes}
						/>
					</Menu>
					<div style={{ marginTop: "10px" }}>
						{this.returnSwitch(activeItem)}
					</div>
				</Responsive>
			</div>
		);
	}
}

InfoPanels.propTypes = {
	isCurrentUser: PropTypes.bool.isRequired,
	user_username: PropTypes.string.isRequired,
	fetchAllUsers: PropTypes.func.isRequired
};

export default withRouter(
	connect(
		null,
		{ fetchAllUsers }
	)(InfoPanels)
);
