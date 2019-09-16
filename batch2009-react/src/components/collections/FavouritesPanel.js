import React from "react";
import { Segment, Icon, Label, Container, List } from "semantic-ui-react";
import { connect } from "react-redux";

import EditFavourites from "../modals/EditFavourites";
import Visibility from "../modals/Visibility";

import { fetchFavouritesInfo, deleteFavField, updateFavVisibilty } from "../../actions/favouritesinfo";

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
		favList: this.props.favourites,
		visibility: {
			favourites_vis_type: this.props.favourites_vis_type,
			favourites_rejected_list: this.props.favourites_rejected_list || []
		},
		loading: false,
		modalOpen: false
	};

	componentDidMount = () => {
		this.props.fetchFavouritesInfo();
	};

	componentDidUpdate = (prevProps, prevState) => {
		if(this.props.favourites !== prevProps.favourites) {
			this.setState({ favList: this.props.favourites });
		}

		if(this.props.favourites_vis_type !== prevProps.favourites_vis_type || 
			this.props.favourites_rejected_list !== prevProps.favourites_rejected_list) {
			this.setState({
				visibility: {
					favourites_rejected_list: this.props.favourites_rejected_list,
					favourites_vis_type: this.props.favourites_vis_type
				} 
			});
		}	
	};

	updateState = visibility => {
		// console.log("called here!", visibility.vis_type);
		this.setState({ 
			visibility: { 
				favourites_vis_type: visibility.vis_type, 
				favourites_rejected_list: visibility.rej_list
			}
		});
	};

	onClickSetVisibility = e => {
		e.preventDefault();
		this.setState({ loading: true });
		let { visibility } = this.state;
		if(visibility.favourites_rejected_list === 'all' ||
			visibility.favourites_rejected_list === 'boys' ||
			visibility.favourites_rejected_list === 'girls') 
		{
			visibility.favourites_vis_type = [];
		}
		this.props
			.updateFavVisibilty(visibility)
			.then(() => {
				this.setState({ loading: false, modalOpen: false });
			});
	};

	deleteField = data => {
		this.props.deleteFavField(data);
	};

	closeModal = () => this.setState({ modalOpen: false });

	openModal = () => this.setState({ modalOpen: true });

	render() {
		const { favourites_vis_type, favourites_rejected_list } = this.state.visibility;
		const { favList, modalOpen, loading } = this.state;

		return (
			<div>
				{
					// This should appear if user is viewing his profile in My profile time only.
					// If he come to this page from status cards, then this should not display
					<div>
						<Container fluid textAlign="right">
							<List horizontal>
								<List.Item>
									<Visibility 
										openModal={this.openModal}
										closeModal={this.closeModal}
										loading={loading}
										modalOpen={modalOpen}
										updateState={this.updateState}
										vis_type={favourites_vis_type}
										rej_list={favourites_rejected_list}
										onClickSetVisibility={this.onClickSetVisibility}
									/>
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
		favourites: state.favouritesinfo.favourites,
		favourites_rejected_list: state.favouritesinfo.favourites_rejected_list,
		favourites_vis_type: state.favouritesinfo.favourites_vis_type
	}
}

export default connect(
	mapStateToProps, 
	{ 
		fetchFavouritesInfo, 
		deleteFavField,
		updateFavVisibilty
	}
)(FavouritesPanel);
