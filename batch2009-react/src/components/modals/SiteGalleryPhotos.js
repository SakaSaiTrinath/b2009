import React from "react";
import { Grid, Header, Card, Modal, Icon, Container, Label } from "semantic-ui-react";
import Lightbox from "react-images";

import AddNewSiteGalleryPhoto from "./AddNewSiteGalleryPhoto";

import _1 from "../images/pics/2.jpg";
import _2 from "../images/pics/1.jpg";
import _3 from "../images/pics/3.jpg";
import _4 from "../images/pics/4.jpg";
import _5 from "../images/pics/5.jpg";
import _6 from "../images/pics/6.jpg";
import _7 from "../images/pics/7.jpg";
import _8 from "../images/pics/8.jpg";
import _9 from "../images/pics/9.jpg";

const photos = [
	{
		id: 1,
		src: _1,
		width: 4,
		height: 3
	},
	{
		id: 2,
		src: _2,
		width: 2,
		height: 2
	},
	{
		id: 3,
		src: _3,
		width: 2,
		height: 2
	},
	{
		id: 4,
		src: _4,
		width: 2,
		height: 2
	},
	{
		id: 5,
		src: _5,
		width: 2,
		height: 2
	},
	{
		id: 6,
		src: _6,
		width: 2,
		height: 2
	},
	{
		id: 7,
		src: _7,
		width: 2,
		height: 2
	},
	{
		id: 8,
		src: _8,
		width: 2,
		height: 2
	},
	{
		id: 9,
		src: _9,
		width: 2,
		height: 2
	}
];

class SiteGalleryPhotos extends React.Component {
	constructor() {
		super();

		this.state = {
			currentImage: 0,
			lightboxIsOpen: false
		};
	}

	openLightbox = (event, obj) => {
		this.setState({
			currentImage: obj.id,
			lightboxIsOpen: true
		});
	};

	closeLightbox = () => {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false
		});
	};

	gotoPrevious = () => {
		this.setState({
			currentImage: this.state.currentImage - 1
		});
	};

	gotoNext = () => {
		this.setState({
			currentImage: this.state.currentImage + 1
		});
	};

	render() {
		return (
			<Modal
				trigger={
					<Container textAlign="center">
						<Icon.Group size="massive">
							<Icon link name="folder" color="teal"/>
							<Icon link corner name="photo"/>
						</Icon.Group>
						<Header as="h5">Get together 2017</Header>
					</Container>
				}
				closeIcon
			>
				<Header color="teal">
					<Icon.Group>
						<Icon name="folder" color="teal"/>
						<Icon corner name="photo"/>
					</Icon.Group>{" "}
					Get together 2017
				</Header>
				<Modal.Content>
					<Modal.Description>
						<Grid
							stackable
							centered
						>
							<Grid.Row columns={4} centered>
								{photos.map(photo => (
									<Grid.Column key={photo.id}>
										<Card
											color="teal"
											image={photo.src}
											as="a"
											id={photo.id - 1}
											onClick={this.openLightbox}
											style={{
												marginTop: "10px",
												marginBottom: "10px"
											}}
										/>
									</Grid.Column>
								))}

								<Lightbox
									images={photos}
									isOpen={this.state.lightboxIsOpen}
									onClickPrev={this.gotoPrevious}
									onClickNext={this.gotoNext}
									currentImage={this.state.currentImage}
									onClose={this.closeLightbox}
								/>
								<Header as="h4">
									Photos uploaded by: 
									<Label as="a" color="teal">
										Saka Sai Trinath
									</Label>
								</Header>
							</Grid.Row>
						</Grid>
					</Modal.Description>
				</Modal.Content>
				<Modal.Actions>
					<AddNewSiteGalleryPhoto />
				</Modal.Actions>
			</Modal>
		);
	}
}

export default SiteGalleryPhotos;
