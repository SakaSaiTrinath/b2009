import React, { Component } from "react";
import PropTypes from "prop-types";
import {
	Grid,
	Item,
	Image,
	Icon,
	Menu,
	Header,
	Label,
	Container,
	List
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";

import RatingCommenting from "./RatingCommenting";
import Dev from "../images/my pic.jpg";
import LOGO from "../images/icon.png";

class ArticlePageComputer extends Component {
	state = {};

	render() {
		const {
			title,
			date,
			labels,
			content,
			rating,
			NoOfRatings
		} = this.props;

		const menuStyle = {
			border: "none",
			borderRadius: 0,
			boxShadow: "none",
			marginBottom: "1em",
			marginTop: "1em",
			transition: "box-shadow 0.5s ease, padding 0.5s ease"
		};

		return (
			<Grid stackable style={{ paddingTop: "2em" }}>
				<Grid.Row centered columns={2}>
					<Grid.Column>
						<Item.Group>
							<Item>
								<Item.Image src={Dev} size="tiny" />

								<Item.Content>
									<Item.Header>
										{"Saka Sai Trinath"}
									</Item.Header>
									<Item.Meta>
										{
											"Studying BTech Computer Science at LPU in Punjab"
										}
									</Item.Meta>
									<Item.Extra>
										<Label>
											Articles{" "}
											<Label.Detail>10</Label.Detail>
										</Label>
									</Item.Extra>
								</Item.Content>
							</Item>
						</Item.Group>
					</Grid.Column>
				</Grid.Row>

				{/* NavBar */}
				<Grid.Row>
					<Grid.Column>
						<Menu borderless style={menuStyle} stackable>
							<Container text>
								<Menu.Item>
									<Image size="mini" src={LOGO} />
								</Menu.Item>
								<Menu.Item header>Batch 2009</Menu.Item>
								<Menu.Item as={NavLink} to="/dashboard">
									Dashboard
								</Menu.Item>
								<Menu.Item as={NavLink} to="/myprofile">
									My Profile
								</Menu.Item>
								<Menu.Menu position="right">
									<Menu.Item onClick={this.props.goBack}>
										<Icon name="chevron left" />
										Back
									</Menu.Item>
								</Menu.Menu>
							</Container>
						</Menu>
					</Grid.Column>
				</Grid.Row>

				{/* Article */}
				<Grid.Row centered columns={2}>
					<Grid.Column>
						<Header as="h1" color="teal">
							{title}
						</Header>

						<List horizontal floated="right">
							<List.Item>
								<Label.Group>
									{labels.map(label => (
										<Label key={label}>{label}</Label>
									))}
								</Label.Group>
							</List.Item>
						</List>

						<List horizontal>
							<List.Item>
								<Label>
									<Icon name="calendar" />
									{date}
								</Label>
							</List.Item>
							<List.Item>
								<Label>
									<Icon name="star" color="yellow" />
									{rating} ({NoOfRatings} Ratings)
								</Label>
							</List.Item>
						</List>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row centered columns={2}>
					<Grid.Column>
						<Container text>
							<p>{content}</p>
						</Container>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row centered columns={2}>
					<Grid.Column>
						<RatingCommenting />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

ArticlePageComputer.propTypes = {
	title: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	content: PropTypes.arrayOf(PropTypes.string).isRequired,
	labels: PropTypes.arrayOf(PropTypes.string).isRequired,
	rating: PropTypes.number.isRequired,
	NoOfRatings: PropTypes.number.isRequired,
	goBack: PropTypes.func.isRequired
};

export default ArticlePageComputer;
