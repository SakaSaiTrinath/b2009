import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { connect } from "react-redux";

import AddNewFieldInForm from "../modals/AddNewFieldInForm";

class EditFavouritesForm extends Component {
	state = {
		favList: this.props.favourites
	};

	render() {
		// const favList = [
		// 	"Color",
		// 	"Dish",
		// 	"Holiday Spot",
		// 	"Singer",
		// 	"Actor",
		// 	"Actress",
		// 	"Car",
		// 	"Bike",
		// 	"Celebrities",
		// 	"Sportsperson",
		// 	"Quote"
		// ];
		const { favList } = this.state;

		return (
			<Form>
				{favList.map(favItem => (
					<Form.Input key={favItem} label={`Fav. ${favItem}`} />
				))}
				<AddNewFieldInForm />
			</Form>
		);
	}
}

function mapStateToProps(state) {
	return {
		favourites: state.favouritesinfo.favourites
	}
}

export default connect(mapStateToProps, {})(EditFavouritesForm);
