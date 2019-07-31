import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { connect } from "react-redux";

import InlineError from "../messages/InlineError";

class EditSchoolInfoForm extends Component {
	state = {
		data: {
			studied_from_year: this.props.studied_from_year,
			studied_to_year: this.props.studied_to_year,
			junior_house: this.props.junior_house,
			senior_house: this.props.senior_house
		},
		errors: this.props.errors,
		loading: this.props.loading
	}; 

	componentDidMount = () => {
		this.props.updateState(this.state.data);
	};

	componentDidUpdate = (prevProps, prevState) => {
		if(this.state.data !== prevState.data) {
			this.props.updateState(this.state.data);
		};

		if (this.props.errors !== prevProps.errors) {
			this.setState({ errors: this.props.errors });
		}

		if(this.props.loading !== prevProps.loading) {
			this.setState({ loading: this.props.loading });
		}
	};

	handleDataChange = (e, { name, value }) => {
		this.setState({
			data: { ...this.state.data, [name]: value }
		});
	};

	render() {
		const {
			studied_from_year,
			studied_to_year,
			junior_house,
			senior_house
		} = this.state.data;
		const { errors, loading } = this.state;
		const FromYearOptions = [
			{ text: "2009 (6th)", value: "2009", key: "2009" }, 
			{ text: "2010 (7th)", value: "2010", key: "2010" },
			{ text: "2011 (8th)", value: "2011", key: "2011" },
			{ text: "2012 (9th)", value: "2012", key: "2012" },
			{ text: "2013 (10th)", value: "2013", key: "2013" },
			{ text: "2014 (11th)", value: "2014", key: "2014" },
			{ text: "2015 (12th)", value: "2015", key: "2015" }
		];

		const ToYearOptions = [
			{ text: "2010 (6th)", value: "2010", key: "2010" },
			{ text: "2011 (7th)", value: "2011", key: "2011" },
			{ text: "2012 (8th)", value: "2012", key: "2012" },
			{ text: "2013 (9th)", value: "2013", key: "2013" },
			{ text: "2014 (10th)", value: "2014", key: "2014" },
			{ text: "2015 (11th)", value: "2015", key: "2015" },
			{ text: "2016 (12th)", value: "2016", key: "2016" },
		];

		const houseOptions = [
			{ text: "Aravali", value: "Aravali", key: "Aravali" },
			{ text: "Nilagiri", value: "Nilagiri", key: "Nilagiri" },
			{ text: "Shivalik", value: "Shivalik", key: "Shivalik" },
			{ text: "Udayagiri", value: "Udayagiri", key: "Udayagiri" },
			{ text: "NotApply", value: "NotApply", key: "NotApply" }
		];

		return (
			<Form loading={loading}>
				<Form.Group widths="equal">
					<Form.Dropdown
						label="School Joining Year"
						fluid
						scrolling
						selection
						value={studied_from_year}
						name="studied_from_year"
						onChange={this.handleDataChange}
						options={FromYearOptions}
						error={!!errors.studied_from_year}
					/>
					{errors.studied_from_year && (
						<InlineError text={errors.studied_from_year} />
					)}

					<Form.Dropdown
						label="School Ending Year"
						fluid
						scrolling
						selection
						value={studied_to_year}
						name="studied_to_year"
						onChange={this.handleDataChange}
						options={ToYearOptions}
						error={!!errors.studied_to_year}
					/>
					{errors.studied_to_year && (
						<InlineError text={errors.studied_to_year} />
					)}

					{/*<Form.Input label="School Joining Year" control="select">
						<option value="6th">2009 (6th)</option>
						<option value="6th">2010 (7th)</option>
						<option value="6th">2011 (8th)</option>
						<option value="6th">2012 (9th)</option>
						<option value="6th">2013 (10th)</option>
						<option value="6th">2014 (11th)</option>
						<option value="6th">2015 (12th)</option>
					</Form.Input>
					<Form.Input label="School Ending Year" control="select">
						<option value="6th">2010 (6th)</option>
						<option value="6th">2011 (7th)</option>
						<option value="6th">2012 (8th)</option>
						<option value="6th">2013 (9th)</option>
						<option value="6th">2014 (10th)</option>
						<option value="6th">2015 (11th)</option>
						<option value="6th">2016 (12th)</option>
					</Form.Input>*/}
				</Form.Group>
				<Form.Group widths="equal">
					<Form.Dropdown
						label="Junior House"
						fluid
						scrolling
						selection
						value={junior_house}
						name="junior_house"
						onChange={this.handleDataChange}
						options={houseOptions}
						error={!!errors.junior_house}
					/>
					{errors.junior_house && (
						<InlineError text={errors.junior_house} />
					)}

					<Form.Dropdown
						label="Senior House"
						fluid
						scrolling
						selection
						value={senior_house}
						name="senior_house"
						onChange={this.handleDataChange}
						options={houseOptions}
						error={!!errors.senior_house}
					/>
					{errors.senior_house && (
						<InlineError text={errors.senior_house} />
					)}

					{/*<Form.Input label="Junior House" control="select">
						<option value="Aravali">Aravali</option>
						<option value="Nilagiri">Nilagiri</option>
						<option value="Shivalik">Shivalik</option>
						<option value="Udayagiri">Aravali</option>
						<option value="NotApply">NotApply</option>
					</Form.Input>
					<Form.Input label="Senior House" control="select">
						<option value="Aravali">Aravali</option>
						<option value="Nilagiri">Nilagiri</option>
						<option value="Shivalik">Shivalik</option>
						<option value="Udayagiri">Aravali</option>
						<option value="NotApply">NotApply</option>
					</Form.Input>*/}
				</Form.Group>
			</Form>
		);
	}
}

function mapStateToProps(state) {
	return {
		studied_from_year: state.schoolinfo.studied_from_year,
		studied_to_year: state.schoolinfo.studied_to_year,
		junior_house: state.schoolinfo.junior_house,
		senior_house: state.schoolinfo.senior_house
	}
}

export default connect(mapStateToProps)(EditSchoolInfoForm);
