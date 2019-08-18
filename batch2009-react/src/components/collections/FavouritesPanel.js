import React from "react";
import { Segment, Icon, Label, Container, List } from "semantic-ui-react";
import { connect } from "react-redux";

import EditFavourites from "../modals/EditFavourites";
import Visibility from "../modals/Visibility";

import { fetchFavouritesInfo, deleteFavField } from "../../actions/favouritesinfo";

/* const favQue = [
	{
		que: "Fav. Color",
		ans: "Green"
	},
	{
		que: "Fav. Dish",
		ans: "My mother's Potato curry"
	},
	{
		que: "Fav. Holiday spot",
		ans: "Vizag"
	},
	{
		que: "Fav. Singer",
		ans: "SP Balasubrahmanyam"
	},
	{
		que: "Fav. Actor",
		ans: "Max admires all. if to say, Nani, Jr.NTR"
	},
	{
		que: "Fav. Actress",
		ans: "Samantha, Pranitha"
	},
	{
		que: "Fav. Car",
		ans: "Benz"
	},
	{
		que: "Fav. Bike",
		ans: "Duke"
	},
	{
		que: "Fav. Celebrities",
		ans: "Jakie chan, Bruce lee"
	},
	{
		que: "Fav. Sportsperson",
		ans: "Sachin"
	},
	{
		que: "Fav. Quote",
		ans: "Do what you love!"
	}
]; */

class FavouritesPanel extends React.Component {
	state = {
		favList: this.props.favourites
	};

	componentDidMount = () => {
		this.props.fetchFavouritesInfo();
	};

	componentDidUpdate = (prevProps, prevState) => {
		if(this.props.favourites !== prevProps.favourites) {
			this.setState({ favList: this.props.favourites });
		}
	};

	deleteField = data => {
		this.props.deleteFavField(data);
	}

	render() {
		const { favList } = this.state;

		return (
			<div>
				{
					// This should appear if user is viewing his profile in My profile time only.
					// If he come to this page from status cards, then this should not display
					<div>
						<Container fluid textAlign="right">
							<List horizontal>
								<List.Item>
									<Visibility />
								</List.Item>
								<List.Item>
									<Label
										as="a"
										href="https://pairedlife.com/friendship/favorite-things-questions"
										target="_blank"
										rel="noreferrer noopener"
									>
										Need Suggestions?
									</Label>
								</List.Item>
								<List.Item>
									<EditFavourites />
								</List.Item>
							</List>
						</Container>
					</div>
				}
				<Segment.Group>
					{favList && favList.length > 0 ? favList.map(fq => (
						<Segment.Group horizontal key={fq.field}>
							<Segment>
								<Icon name="favorite" color="teal" />
								{fq.field}
							</Segment>
							<Segment>{fq.value}</Segment>
							<Label as='a' onClick={() => this.deleteField(fq)}>
								<Icon name="delete" />
					        </Label>
						</Segment.Group>
					)) : (
						<Segment>
							<Icon name="favorite" color="teal" />
							{"No Favourites list."}
						</Segment>
					)}
				</Segment.Group>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		favourites: state.favouritesinfo.favourites
	}
}

export default connect(mapStateToProps, { fetchFavouritesInfo, deleteFavField })(FavouritesPanel);
