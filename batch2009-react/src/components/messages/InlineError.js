import React from "react";
import PropTypes from "prop-types";

const InlineError = props => <p style={{ color: "#ae5856" }}>{props.text}</p>;

InlineError.propTypes = {
	text: PropTypes.string.isRequired
};

export default InlineError;
