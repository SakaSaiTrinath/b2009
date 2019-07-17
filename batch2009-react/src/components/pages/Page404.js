import React from "react";
import {
	Header,
	Grid,
	Segment,
	Image,
	Container,
	Button
} from "semantic-ui-react";
import PropTypes from "prop-types";
import IconPic from "../images/icon.png";

const Page404 = props => {
	const h1 = "h1";

	const onClick = () => {
		props.history.push("/dashboard");
	};

	return (
		<Grid
			centered
			verticalAlign="middle"
			style={{ height: window.innerHeight }}
		>
			<Grid.Row columns={2}>
				<Grid.Column textAlign="center">
					<Segment raised textAlign="center" color="teal">
						<Container align="center">
							<Image src={IconPic} size="small" />
						</Container>
						<Header color="red" as={h1}>
							Error 404
						</Header>
						<Header as="h3">
							This is not the page you are looking for!
						</Header>
					</Segment>
					<Button
						color="teal"
						content="Go to Home"
						size="medium"
						onClick={onClick}
					/>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

Page404.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired
};

export default Page404;
