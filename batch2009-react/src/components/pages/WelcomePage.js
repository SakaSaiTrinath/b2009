import React from "react";
import { Button, Grid } from "semantic-ui-react";
import bgImage from "../images/bg-dummy.jpg";
import LoginPage from "./LoginPage";

class WelcomePage extends React.Component {
	state = {
		isClicked: false
	};

	handleClick = () => {
		this.setState({
			isClicked: true
		});
	};

	render() {
		return (
			<div className="welcomepage">
				<style>{`
			      body > div,
			      body > div > div,
			      body > div > div > div.welcomepage {
			        height: 100%;
			      }
			      body {
			      	background-image: url(${bgImage});
			      	background-size: cover;
			      	background-repeat: no-repeat;
			      	background-position: center;
			      }
			    `}</style>

				<Grid
					textAlign="center"
					style={{ height: "100%" }}
					verticalAlign="middle"
				>
					<Grid.Row>
						<Grid.Column width="16">
							{this.state.isClicked ? (
								<LoginPage />
							) : (
								<Button
									inverted
									color="teal"
									content="Enter me!"
									onClick={this.handleClick}
								/>
							)}
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

export default WelcomePage;
