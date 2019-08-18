import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { connect } from "react-redux";

import AddNewFieldInForm from "../modals/AddNewFieldInForm";

class EditFavouritesForm extends Component {
	state = {
		firstthings: this.props.firstthings,
		errors: this.props.errors,
		loading: this.props.loading
	};

	componentDidMount = () => {
		this.props.updateState(this.state.firstthings);
	};

	componentDidUpdate = (prevProps, prevState) => {
		if(this.props.firstthings !== prevProps.firstthings) {
			this.setState({
				firstthings: this.props.firstthings
			});
		}

		if(this.state.firstthings !== prevState.firstthings) {
			this.props.updateState(this.state.firstthings);
		};

		if (this.props.errors !== prevProps.errors) {
			this.setState({ errors: this.props.errors });
		}

		if(this.props.loading !== prevProps.loading) {
			this.setState({ loading: this.props.loading });
		}
	};

	handleDataChange = (e, { name, value }) => {
		let firstthings = this.state.firstthings.slice();
        for(let i in firstthings){
            if(firstthings[i].field === e.target.name){
                firstthings[i].value = e.target.value;
                this.setState ({firstthings});
                break;
            }
        }
	};

	render() {
		/* const firstthingslist = [
			"First app you check when you wake up in the morning?",
			"First broken bone?",
			"First foreign country you ever visited?",
			"First Instagram, twitter or Facebook post?",
			"First make-up item?",
			"First plane ride you ever went on?",
			"First time I ever got into trouble at home and school?",
			"First time you were allowed to put on make-up?",
			"First YouTuber you subscribed to?",
			"First time you went shopping on your own?"
		]; */
		const { errors, loading, firstthings } = this.state;
		return (
			<Form loading={loading}>
				{firstthings && firstthings.map(firstItem => (
					<Form.Input 
						key={firstItem._id}
						name={firstItem.field}
						onChange={this.handleDataChange} 
						label={`${firstItem.field}`} 
						value={firstItem.value}
						error={!!errors[`${firstItem.field}`]} 
					/>
				))}
				<AddNewFieldInForm tab="firstthings" />
			</Form>
		);
	}
}

function mapStateToProps(state) {
	return {
		firstthings: state.firstthingsinfo.firstthings
	}
}

export default connect(mapStateToProps)(EditFavouritesForm);
