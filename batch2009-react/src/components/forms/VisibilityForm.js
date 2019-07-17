import React, { Component } from "react";
import { Form, Dropdown, Header, Radio } from "semantic-ui-react";

import myImg from "../images/my pic.jpg";

class VisibilityForm extends Component {
	state = { value: "all" };

	handleChange = (e, { value }) => this.setState({ value });

	render() {
		const { value } = this.state;

		return (
			<Form>
				<Header as="h4">Who can see?</Header>
				<Form.Group grouped>
					<Form.Field
						control={Radio} 
						label="All"
						value="all"
						checked={value === "all"}
						onChange={this.handleChange}
					/>

					<Form.Field
						control={Radio} 
						label="Boys"
						value="boys"
						checked={value === "boys"}
						onChange={this.handleChange}
					/>

					<Form.Field
						control={Radio} 
						label="Girls"
						value="girls"
						checked={value === "girls"}
						onChange={this.handleChange}
					/>

					<Form.Group inline>
						<Form.Field
							control={Radio}
							value="select"
							checked={value === "select"}
							onChange={this.handleChange}
						/>
						<Dropdown
							fluid
							multiple
							disabled={value !== "select"}
							search
							selection
							options={[{ text: "Saka Sai Trinath", value: "Saka Sai Trinath", image: { avatar: true, src:  myImg} }]}
							placeholder="Select who can see"
						/>
					</Form.Group>

					<Form.Group inline>
						<Form.Field
							control={Radio}
							value="select_except"
							checked={value === "select_except"}
							onChange={this.handleChange}
						/>
						<Dropdown 
							fluid
							multiple
							disabled={value !== "select_except"}
							search
							selection
							options={[{ text: "Saka Sai Trinath", value: "Saka Sai Trinath", image: { avatar: true, src:  myImg} }]}
							placeholder="All can see except"
						/>
					</Form.Group>
				</Form.Group>
			</Form>
		);
	}
}

export default VisibilityForm;
