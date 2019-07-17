import React from "react";
import PropTypes from "prop-types";

const FormSuccess = props => <p style={{ color: "#1a531b" }}>{props.text}</p>;

FormSuccess.propTypes = {
	text: PropTypes.string.isRequired
};

export default FormSuccess;
