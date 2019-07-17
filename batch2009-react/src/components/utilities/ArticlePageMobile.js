import React, { Component } from "react";
import PropTypes from "prop-types";
import {
	Grid,
	Sticky,
	Label,
	Segment,
	Header,
	List,
	Icon,
	Image,
	Item,
	Container
} from "semantic-ui-react";

import RatingCommenting from "./RatingCommenting";
import Dev from "../images/my pic.jpg";
import LOGO from "../images/icon.png";

class ArticlePageMobile extends Component {
	state = {};

	render() {
		const {
			title,
			date,
			labels,
			content,
			rating,
			NoOfRatings,
			contextRef // eslint-disable-line
		} = this.props;

		return (
			<div ref={this.props.handleContextRef}>
				<Grid stackable>
					{/* NavBar */}

					<Grid.Row>
						<Grid.Column>
							<Sticky
								context={contextRef} // eslint-disable-line no-use-before-define
								pushing
								offset={window.innerHeight - 50}
							>
								<Label
									color="teal"
									onClick={this.props.goBack}
									size="big"
								>
									<Icon name="chevron left" />
									Back
								</Label>
							</Sticky>

							<Segment basic>
								<Header as="h2">
									<Image size="big" src={LOGO} /> Batch 2009
								</Header>
							</Segment>
						</Grid.Column>
					</Grid.Row>

					{/* Article */}
					<Grid.Row centered columns={2}>
						<Grid.Column>
							<Header as="h1" color="teal">
								{title}
							</Header>

							<List horizontal>
								<List.Item>
									<Label.Group>
										{labels.map(label => (
											<Label basic key={label}>
												{label}
											</Label>
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
							<br />
							<RatingCommenting />
						</Grid.Column>
					</Grid.Row>

					<Grid.Row centered columns={2}>
						<Grid.Column>
							<Segment textAlign="center">
								<Item.Group>
									<Item>
										<Item.Content>
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
														<Label.Detail>
															10
														</Label.Detail>
													</Label>
												</Item.Extra>
											</Item.Content>
										</Item.Content>
									</Item>
								</Item.Group>
							</Segment>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

ArticlePageMobile.propTypes = {
	title: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	content: PropTypes.arrayOf(PropTypes.string).isRequired,
	labels: PropTypes.arrayOf(PropTypes.string).isRequired,
	rating: PropTypes.number.isRequired,
	NoOfRatings: PropTypes.number.isRequired,
	goBack: PropTypes.func.isRequired,
	handleContextRef: PropTypes.func.isRequired
};

export default ArticlePageMobile;
