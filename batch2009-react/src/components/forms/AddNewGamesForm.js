import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class AddNewGamesForm extends Component {
	state = {};

	render() {
		return (
			<Form>
				<Form.Input label="Game or Sport" control="select">
					<option value="None">None</option>
					<option value="Volleyball">Volleyball</option>
					<option value="Kabaddi">Kabaddi</option>
					<option value="Kho Kho">Kho Kho</option>
					<option value="Shuttle">Shuttle</option>
					<option value="Chess">Chess</option>
					<option value="Football">Football</option>
					<option value="Table Tennis">Table Tennis</option>
					<option value="Yoga">Yoga</option>
				</Form.Input>
				<Form.Input label="Level Reached" control="select">
					<option value="None">None</option>
					<option value="Clusters">Clusters</option>
					<option value="Regionals">Regionals</option>
					<option value="Nationals">Nationals</option>
					<option value="SGFI">SGFI</option>
				</Form.Input>
				<Form.Input label="No of times reached" type="number" />
			</Form>
		);
	}
}

export default AddNewGamesForm;
