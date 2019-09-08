import React from "react";
import { Form } from "semantic-ui-react";
import { connect } from "react-redux";

import { fetchCountries, fetchStates, fetchCities, clearCities } from "../../actions/locations";
import { 
	allCountriesSelector, 
	allStatesSelector, 
	allCitiesSelector
} from "../../reducers/locations";

import InlineError from "../messages/InlineError";

class EditStatusForm extends React.Component {
	state = {
		data: {
			status: this.props.status,
			current_location: this.props.current_location
		},
		errors: this.props.errors,
		loading: this.props.loading
	};

	componentDidMount = () => {
		this.props.updateState(this.state.data);
		this.props.fetchCountries(this.props);
		this.state.data.current_location.state && this.props.fetchStates(this.state.data.current_location.country);
		this.state.data.current_location.city && this.props.fetchCities(this.state.data.current_location.country, this.state.data.current_location.state);
	};


	componentDidUpdate = (prevProps, prevState) => {
		if(this.state.data !== prevState.data) {
			this.props.updateState(this.state.data);
		}

		if(prevState.data.current_location.country !== this.state.data.current_location.country) {
			this.props.fetchStates(this.state.data.current_location.country);
			this.props.clearCities();
			this.setState({
				data: { ...this.state.data, 
						current_location: { 
							...this.state.data.current_location, state: "", city: ""
						} 
					}
			});
		}

		if(prevState.data.current_location.state !== this.state.data.current_location.state) {
			this.props.fetchCities(this.state.data.current_location.country, this.state.data.current_location.state);
		}

		if (this.props.errors !== prevProps.errors) {
			this.setState({ errors: this.props.errors });
		}

		if(this.props.loading !== prevProps.loading) {
			this.setState({ loading: this.props.loading });
		}
	};

	handleStatusChange = (e, { name, value }) => {
		this.setState({
			data: {...this.state.data, status: value }
		})
	};

	handleLocationChange = (e, { name, value }) => 
		this.setState({
			errors: {},
			data: { ...this.state.data, current_location: { ...this.state.data.current_location, [name]: value } }
		});

	render() {
		const { status } = this.state.data;
		const { errors, loading } = this.state;
		const { CountryOptions, StateOptions, CityOptions } = this.props;
		const { country, state, city } = this.state.data.current_location;

		return (
			<Form loading={loading}>
				<Form.TextArea
					placeholder="Enter Current Status"
					name="status"
					label="Status"
					value={status}
					onChange={this.handleStatusChange}
					error={!!errors.status}
				/>
				{errors.status && (
					<InlineError text={errors.status} />
				)}
				<Form.Group widths="equal">
					<Form.Dropdown 
						placeholder="Country" 
						fluid
						search
						selection 
						label="Country"
						value={country}
						onChange={this.handleLocationChange}
						name="country"
						options={CountryOptions}
						error={!!errors.current_location_country}
					/>
					{errors.current_location_country && (
						<InlineError text={errors.current_location_country} />
					)}
					<Form.Dropdown 
						placeholder="State" 
						fluid 
						search
						label="State"
						onChange={this.handleLocationChange}
						value={state}
						name="state"
						selection 
						options={StateOptions}
						error={!!errors.current_location_state}
					/>
					{errors.current_location_state && (
						<InlineError text={errors.current_location_state} />
					)}
					<Form.Dropdown 
						placeholder="Location" 
						fluid
						search 
						label="City"
						onChange={this.handleLocationChange}
						value={city}
						name="city"
						selection 
						options={CityOptions}
						error={!!errors.current_location_city}
					/>
					{errors.current_location_city && (
						<InlineError text={errors.current_location_city} />
					)}
				</Form.Group>
			</Form>
		);
	}
}

function mapStateToProps(state) {
	return {
		status: state.basicinfo.current_status,
		current_location: state.basicinfo.current_location,
		CountryOptions: allCountriesSelector(state),
		StateOptions: allStatesSelector(state),
		CityOptions: allCitiesSelector(state)
	}
}

export default connect(mapStateToProps, { fetchCountries, fetchStates, fetchCities, clearCities })(EditStatusForm);
