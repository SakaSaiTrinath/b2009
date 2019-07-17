import React, { Component } from "react";
import { Rating, Form } from "semantic-ui-react";

class RatingCommenting extends Component {
	render() {
		return (
			<div>
				{/* Rating */}
				<br />
				Your Rating:{" "}
				<Rating icon="star" maxRating={5} onRate={this.handleRate} />
				<br />
				<br />
				{/* Comment */}
				<Form>
					<Form.TextArea
						placeholder="Your Comment..."
						autoHeight
						rows={3}
					/>
				</Form>
			</div>
		);
	}
}

export default RatingCommenting;
