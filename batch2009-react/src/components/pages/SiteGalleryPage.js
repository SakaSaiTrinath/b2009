import React from "react";
import { Grid, Header, Container } from "semantic-ui-react";

import SiteGalleryPhotos from "../modals/SiteGalleryPhotos";
import AddNewSiteGalleryFolder from "../modals/AddNewSiteGalleryFolder";

class SiteGalleryPage extends React.Component {
	constructor() {
		super();

		this.state = {};
	}

	render() {
		return (
			<Grid
				style={{
					minHeight: window.innerHeight
				}}
				stackable
				centered
			>
				<Grid.Row centered style={{ marginTop: "10px" }}>
					<Container textAlign="center">
						<Header color="teal" as="h2">
							Site Gallery
						</Header>
					</Container>
					<AddNewSiteGalleryFolder />
				</Grid.Row>

				<Grid.Row centered columns="5">
					<Grid.Column>
						<SiteGalleryPhotos />
					</Grid.Column>
					<Grid.Column>
						<SiteGalleryPhotos />
					</Grid.Column>
					<Grid.Column>
						<SiteGalleryPhotos />
					</Grid.Column>
					<Grid.Column>
						<SiteGalleryPhotos />
					</Grid.Column>
				</Grid.Row>

				<Grid.Row centered columns="5">
					<Grid.Column>
						<SiteGalleryPhotos />
					</Grid.Column>
					<Grid.Column>
						<SiteGalleryPhotos />
					</Grid.Column>
					<Grid.Column>
						<SiteGalleryPhotos />
					</Grid.Column>
					<Grid.Column>
						<SiteGalleryPhotos />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

export default SiteGalleryPage;
