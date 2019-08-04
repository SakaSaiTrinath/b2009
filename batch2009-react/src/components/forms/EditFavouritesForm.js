import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { connect } from "react-redux";

import AddNewFieldInForm from "../modals/AddNewFieldInForm";

class EditFavouritesForm extends Component {
	state = {
		favList: this.props.favourites,
		errors: this.props.errors,
		loading: this.props.loading
	};

	componentDidMount = () => {
		this.props.updateState(this.state.favList);
	};

	componentDidUpdate = (prevProps, prevState) => {
		if(this.props.favourites !== prevProps.favourites) {
			this.setState({
				favList: this.props.favourites
			});
		}

		if(this.state.favList !== prevState.favList) {
			this.props.updateState(this.state.favList);
		};

		if (this.props.errors !== prevProps.errors) {
			this.setState({ errors: this.props.errors });
		}

		if(this.props.loading !== prevProps.loading) {
			this.setState({ loading: this.props.loading });
		}
	};

	handleDataChange = (e, { name, value }) => {
		let favList = this.state.favList.slice();
        for(let i in favList){
            if(favList[i].field === e.target.name){
                favList[i].value = e.target.value;
                this.setState ({favList});
                break;
            }
        }
	};

	render() {
		const { errors, loading, favList } = this.state;
		return (
			<Form loading={loading}>
				{favList.map(favItem => (
					<Form.Input 
						key={favItem._id}
						name={favItem.field}
						onChange={this.handleDataChange} 
						label={`Fav. ${favItem.field}`} 
						value={favItem.value}
						error={!!errors[`${favItem.field}`]} 
					/>
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
