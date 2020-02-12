import React from "react";
import { withRouter, Switch, BrowserRouter as Router } from "react-router-dom";
import { Header, Segment, Image, Grid, Icon, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import Compress from "compress.js";
import PropTypes from "prop-types";

import profileDummyPic from "../images/profile-dummy.jpg";
import InfoPanels from "../collections/InfoPanels";
import EditStatus from "../modals/EditStatus";

// import WriteArticle from "../modals/WriteArticle";
import { fetchBasicInfo, uploadProfilePic } from "../../actions/basicinfo";

class ProfilePage extends React.Component {
	state = {
		loading: false,
		imageHash: Date.now()
	};

	componentDidMount = () => {
		this.props.fetchBasicInfo();
	};

	onFileChange = e => {
		let file = e.target.files[0];
		if (!file) return;
		if (!file.type.includes("image")) {
			alert("Please choose image"); // eslint-disable-line
		} else if (file.size / (1024 * 1024) > 5) {
			alert("Please choose image of smaller size"); // eslint-disable-line
		} else {
			const compress = new Compress();
			const files = [];
			files.push(file);
			compress
				.compress(files, {
					size: 4,
					quality: 0.75,
					maxWidth: 1920,
					maxHeight: 1920,
					resize: true
				})
				.then(modFiles => {
					const uploadableFiles = [];

					for (let i = modFiles.length - 1; i >= 0; i -= 1) {
						file = Compress.convertBase64ToFile(
							modFiles[i].data,
							modFiles[i].ext
						);
						const filename = `${this.props.fullname} 
							"-profile-pic." 
							${modFiles[i].ext.split("/")[1]}`;
						const filetype = modFiles[i].ext;
						const filelastMod = files[i].lastModified;
						uploadableFiles.push(
							new File([file], filename, {
								type: filetype,
								lastModified: filelastMod
							})
						);
					}

					const formData = new FormData();
					formData.append("profile_pic", uploadableFiles[0]);
					this.setState({
						loading: true
					});
					this.props
						.uploadProfilePic(formData)
						.then(() => {
							alert("Image uploaded successfully"); // eslint-disable-line
							this.setState({
								loading: false,
								imageHash: Date.now()
							});
						})
						.catch(error => {
							const errMsg = `Image upload failed with error: 
								${error} 
								. Please try again.`;
							alert(errMsg); // eslint-disable-line
							this.setState({
								loading: false
							});
						});
				});
		}
	};

	render() {
		const {
			fullname,
			current_status,
			profile_pic,
			current_location
		} = this.props;
		const { loading, imageHash } = this.state;

		return (
			<Router>
				<Grid centered textAlign="center" stackable verticalAlign="middle">
					<Grid.Row centered>
						<Header as="h1" content="My Profile" color="teal" />
					</Grid.Row>
					<Grid.Row centered>
						<Grid.Column width={3}>
							<Segment textAlign="center" stacked raised loading={loading}>
								{profile_pic ? (
									<Image
										src={`/${profile_pic}?${imageHash}`}
										// src={`http://localhost:8080/${profile_pic}?${imageHash}`}
										size="medium"
										centered
									/>
								) : (
									<Image src={profileDummyPic} size="medium" centered />
								)}
								{
									// This should appear if user is viewing his profile in My profile time only.
									// If he come to this page from status cards, then this should not display
									<div style={{ marginTop: "5px" }}>
										<Button as="label" htmlFor="file" color="teal">
											<Icon name="upload" />
											Upload Pic
										</Button>
										<input
											type="file"
											id="file"
											hidden
											onChange={this.onFileChange}
										/>
									</div>
								}
							</Segment>
						</Grid.Column>

						<Grid.Column width={8}>
							<Segment.Group>
								<Segment color="teal" textAlign="center">
									<Header as="h3" content={fullname} />
								</Segment>
								<Segment.Group horizontal>
									<Segment as="h5">
										<Icon name="bullseye" />
										Current Status
									</Segment>
									<Segment>{current_status}</Segment>
								</Segment.Group>
								<Segment.Group horizontal>
									<Segment as="h5">
										<Icon name="map marker alternate" />
										Current Location
									</Segment>
									<Segment>
										{current_location && current_location.city}
										{", "}
										{current_location && current_location.state}
										{", "}
										{current_location && current_location.country}
									</Segment>
								</Segment.Group>

								{
									// This should appear if user is viewing his profile in My profile time only.
									// If he come to this page from status cards, then this should not display
									<EditStatus />
								}
							</Segment.Group>
							{/* <Segment.Group horizontal>
								<Segment as="h5" color="teal">
									Articles
								</Segment>
								<Segment color="teal">{articles_count}</Segment>
								<Segment as="h5" color="teal">
									Gallery
								</Segment>
								<Segment color="teal">{gallery_count}</Segment>
							</Segment.Group> */}
						</Grid.Column>
					</Grid.Row>

					{/* It should be displayed only for the own user. Not to the other */}
					{/* <Grid.Row centered>
						<Grid.Column width={6}>
							<Button.Group widths="2">
								<WriteArticle />

								<Button animated="fade" size="big" color="teal" basic>
									<Button.Content visible>Upload to Gallery</Button.Content>
									<Button.Content hidden>
										<Icon name="photo" />
									</Button.Content>
								</Button>
							</Button.Group>
						</Grid.Column>
					</Grid.Row> */}

					<Grid.Row>
						<Grid.Column>
							<Switch>
								<InfoPanels />
							</Switch>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Router>
		);
	}
}

function mapStateToProps(state) {
	return {
		fullname: state.basicinfo.fullname,
		profile_pic: state.basicinfo.profile_pic,
		current_status: state.basicinfo.current_status,
		current_location: state.basicinfo.current_location
	};
}

ProfilePage.defaultProps = {
	fullname: "---",
	profile_pic: "",
	current_status: "---",
	current_location: {}
};

ProfilePage.propTypes = {
	fetchBasicInfo: PropTypes.func.isRequired,
	uploadProfilePic: PropTypes.func.isRequired,
	fullname: PropTypes.string,
	profile_pic: PropTypes.string,
	current_status: PropTypes.string,
	current_location: PropTypes.shape({
		city: PropTypes.string,
		country: PropTypes.string,
		state: PropTypes.string
	})
};

export default withRouter(
	connect(
		mapStateToProps,
		{ fetchBasicInfo, uploadProfilePic }
	)(ProfilePage)
);
