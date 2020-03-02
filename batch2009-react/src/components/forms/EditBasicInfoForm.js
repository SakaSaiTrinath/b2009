import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import InlineError from "../messages/InlineError";

const mapNumberToMonth = number => {
	switch (number) {
		case 1:
			return "January";
		case 2:
			return "February";
		case 3:
			return "March";
		case 4:
			return "April";
		case 5:
			return "May";
		case 6:
			return "June";
		case 7:
			return "July";
		case 8:
			return "August";
		case 9:
			return "September";
		case 10:
			return "October";
		case 11:
			return "November";
		case 12:
			return "December";
		default:
			return "";
	}
};

class EditBasicInfoForm extends Component {
	state = {
		data: {
			fullname: this.props.fullname,
			nick_name: this.props.nick_name,
			date: "",
			birthdate: this.props.birthdate || undefined,
			birthmonth: this.props.birthmonth,
			gender: this.props.gender,
			phone_number: this.props.phone_number,
			rel_status: this.props.rel_status,
			home_address: this.props.home_address,
			blood_group: this.props.blood_group,
			known_lang: this.props.known_lang,
			zodiac: this.props.zodiac,
			hobbies: this.props.hobbies,
			goal: this.props.goal
		},
		errors: this.props.errors,
		loading: this.props.loading
	};

	componentDidMount = () => {
		this.props.updateState(this.state.data);
	};

	componentDidUpdate = (prevProps, prevState) => {
		if (this.state.data.date !== prevState.data.date) {
			if (this.state.data.date) {
				let d = this.state.data.date;
				d = d.split("-");
				const month = mapNumberToMonth(parseInt(d[1], 10));
				/* eslint-disable-next-line */
				this.setState({
					data: { ...this.state.data, birthmonth: month, birthdate: d[0] }
				});
			}
		}

		if (this.state.data !== prevState.data) {
			this.props.updateState(this.state.data);
		}

		if (this.props.errors !== prevProps.errors) {
			/* eslint-disable-next-line */
			this.setState({ errors: this.props.errors });
		}

		if (this.props.loading !== prevProps.loading) {
			/* eslint-disable-next-line */
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
			fullname,
			nick_name,
			date,
			gender,
			phone_number,
			rel_status,
			home_address,
			blood_group,
			known_lang,
			zodiac,
			hobbies,
			goal
		} = this.state.data;

		const genderOptions = [
			{ text: "Male", value: "Male", key: "Male" },
			{ text: "Female", value: "Female", key: "Female" }
		];
		const zodiacOptions = [
			{ text: "---", value: "", key: "Not filled" },
			{ text: "Aries", value: "Aries", key: "Aries" },
			{ text: "Leo", value: "Leo", key: "Leo" },
			{ text: "Sagittarius", value: "Sagittarius", key: "Sagittarius" },
			{ text: "Taurus", value: "Taurus", key: "Taurus" },
			{ text: "Virgo", value: "Virgo", key: "Virgo" },
			{ text: "Capricorn", value: "Capricorn", key: "Capricorn" },
			{ text: "Gemini", value: "Gemini", key: "Gemini" },
			{ text: "Libra", value: "Libra", key: "Libra" },
			{ text: "Aquarius", value: "Aquarius", key: "Aquarius" },
			{ text: "Cancer", value: "Cancer", key: "Cancer" },
			{ text: "Scorpio", value: "Scorpio", key: "Scorpio" },
			{ text: "Pisces", value: "Pisces", key: "Pisces" }
		];
		const relationsOptions = [
			{ text: "---", value: "", key: "Not filled" },
			{ text: "Single", value: "Single", key: "Single" },
			{ text: "Married", value: "Married", key: "Married" }
		];
		const bloodtypeOptions = [
			{ text: "---", value: "", key: "Not filled" },
			{ text: "A+", value: "A+", key: "A+" },
			{ text: "O+", value: "O+", key: "O+" },
			{ text: "B+", value: "B+", key: "B+" },
			{ text: "AB+", value: "AB+", key: "AB+" },
			{ text: "A-", value: "A-", key: "A-" },
			{ text: "O-", value: "O-", key: "O-" },
			{ text: "B-", value: "B-", key: "B-" },
			{ text: "AB-", value: "AB-", key: "AB-" }
		];
		const { errors, loading } = this.state;

		return (
			<Form loading={loading}>
				<Form.Input
					label="Full Name"
					value={fullname}
					onChange={this.handleDataChange}
					name="fullname"
					error={!!errors.nick_name}
				/>
				{errors.fullname && <InlineError text={errors.fullname} />}

				<Form.Input
					label="Nick Name"
					value={nick_name}
					onChange={this.handleDataChange}
					name="nick_name"
					error={!!errors.nick_name}
				/>
				{errors.nick_name && <InlineError text={errors.nick_name} />}

				<DateInput
					label="Birth date"
					name="date"
					placeholder="Date"
					value={date}
					closable
					iconPosition="left"
					onChange={this.handleDataChange}
					error={!!errors.date}
				/>
				{errors.date && <InlineError text={errors.date} />}

				<p style={{ color: "green" }}>Note: Only Month and Date are taken!</p>
				<Form.Dropdown
					label="Gender"
					fluid
					scrolling
					search
					selection
					value={gender}
					disabled
					name="gender"
					onChange={this.handleDataChange}
					options={genderOptions}
					error={!!errors.gender}
				/>
				{errors.gender && <InlineError text={errors.gender} />}

				<Form.Input
					label="Phone Number"
					type="number"
					value={phone_number || ""}
					name="phone_number"
					onChange={this.handleDataChange}
					error={!!errors.phone_number}
				/>
				{errors.phone_number && <InlineError text={errors.phone_number} />}

				<Form.Dropdown
					label="Relationship status"
					fluid
					scrolling
					search
					selection
					value={rel_status}
					name="rel_status"
					onChange={this.handleDataChange}
					options={relationsOptions}
					error={!!errors.rel_status}
				/>
				{errors.rel_status && <InlineError text={errors.rel_status} />}

				<Form.Input
					label="Home Address"
					value={home_address}
					name="home_address"
					onChange={this.handleDataChange}
					error={!!errors.home_address}
				/>
				{errors.home_address && <InlineError text={errors.home_address} />}

				<Form.Dropdown
					label="Blood Group"
					fluid
					scrolling
					search
					selection
					value={blood_group}
					name="blood_group"
					onChange={this.handleDataChange}
					options={bloodtypeOptions}
					error={!!errors.blood_group}
				/>
				{errors.blood_group && <InlineError text={errors.blood_group} />}

				<Form.Input
					label="Known Languages"
					value={known_lang}
					name="known_lang"
					onChange={this.handleDataChange}
					error={!!errors.known_lang}
				/>
				{errors.known_lang && <InlineError text={errors.known_lang} />}

				<Form.Dropdown
					label="Zodiac"
					fluid
					scrolling
					search
					selection
					value={zodiac}
					name="zodiac"
					onChange={this.handleDataChange}
					options={zodiacOptions}
					error={!!errors.zodiac}
				/>
				{errors.zodiac && <InlineError text={errors.zodiac} />}

				<Form.Input
					label="Hobbies"
					value={hobbies}
					name="hobbies"
					onChange={this.handleDataChange}
					error={!!errors.hobbies}
				/>
				{errors.hobbies && <InlineError text={errors.hobbies} />}

				<Form.Input
					label="Goal"
					value={goal}
					name="goal"
					onChange={this.handleDataChange}
					error={!!errors.goal}
				/>
				{errors.goal && <InlineError text={errors.goal} />}
			</Form>
		);
	}
}

function mapStateToProps(state) {
	return {
		fullname: state.basicinfo.fullname,
		nick_name: state.basicinfo.nick_name,
		birthmonth: state.basicinfo.birthmonth,
		birthdate: state.basicinfo.birthdate,
		gender: state.basicinfo.gender,
		rel_status: state.basicinfo.rel_status,
		phone_number: state.basicinfo.phone_number,
		home_address: state.basicinfo.home_address,
		blood_group: state.basicinfo.blood_group,
		known_lang: state.basicinfo.known_lang,
		zodiac: state.basicinfo.zodiac,
		hobbies: state.basicinfo.hobbies,
		goal: state.basicinfo.goal
	};
}

EditBasicInfoForm.defaultProps = {
	fullname: "",
	nick_name: "",
	birthmonth: "",
	birthdate: undefined,
	gender: "",
	rel_status: "",
	phone_number: "",
	home_address: "",
	blood_group: "",
	known_lang: "",
	zodiac: "",
	hobbies: "",
	goal: ""
};

EditBasicInfoForm.propTypes = {
	updateState: PropTypes.func.isRequired,
	errors: PropTypes.shape({
		nick_name: PropTypes.string,
		fullname: PropTypes.string,
		gender: PropTypes.string,
		rel_status: PropTypes.string,
		phone_number: PropTypes.number,
		home_address: PropTypes.string,
		blood_group: PropTypes.string,
		known_lang: PropTypes.string,
		zodiac: PropTypes.string,
		hobbies: PropTypes.string,
		goal: PropTypes.string
	}).isRequired,
	fullname: PropTypes.string,
	nick_name: PropTypes.string,
	birthmonth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	birthdate: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	gender: PropTypes.string,
	rel_status: PropTypes.string,
	phone_number: PropTypes.number,
	home_address: PropTypes.string,
	blood_group: PropTypes.string,
	known_lang: PropTypes.string,
	zodiac: PropTypes.string,
	hobbies: PropTypes.string,
	goal: PropTypes.string,
	loading: PropTypes.bool.isRequired
};

export default connect(
	mapStateToProps,
	{}
)(EditBasicInfoForm);
