import React, { Component } from "react";
import PropTypes from "prop-types";

import { Container, Responsive } from "semantic-ui-react";

import ArticlePageComputer from "../utilities/ArticlePageComputer";
import ArticlePageMobile from "../utilities/ArticlePageMobile";

class ArticlePage extends Component {
	state = {};

	goBack = () => {
		this.props.history.goBack();
	};

	handleContextRef = contextRef => this.setState({ contextRef });

	render() {
		const { contextRef } = this.state;

		// const { title, date, content, rating, NoOfRatings } = this.props;
		const title = "Lorem Ipsum";
		const date = "Aug 28, 2018";
		const labels = ["Navodaya Dayz", "Memories", "12th class"];
		const content = [
			"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
		];
		const rating = 4.2;
		const NoOfRatings = 15;

		return (
			<div style={{ background: "#f7f7f7" }}>
				<Container
					style={{
						minHeight: "100vh",
						width: "100%"
					}}
				>
					{/* Author data */}
					<Responsive minWidth={Responsive.onlyTablet.minWidth}>
						<ArticlePageComputer
							title={title}
							date={date}
							labels={labels}
							content={content}
							rating={rating}
							NoOfRatings={NoOfRatings}
							goBack={this.goBack}
						/>
					</Responsive>

					{/* Author data */}
					<Responsive {...Responsive.onlyMobile}>
						<ArticlePageMobile
							title={title}
							date={date}
							labels={labels}
							content={content}
							rating={rating}
							NoOfRatings={NoOfRatings}
							goBack={this.goBack}
							contextRef={contextRef}
							handleContextRef={this.handleContextRef}
						/>
					</Responsive>
				</Container>
			</div>
		);
	}
}

ArticlePage.propTypes = {
	history: PropTypes.shape({
		goBack: PropTypes.func.isRequired
	}).isRequired
};

export default ArticlePage;
