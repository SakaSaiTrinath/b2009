import React, { Component } from "react";
import {
	Form,
	Dropdown,
	Header,
	Radio,
	Message,
	Segment,
	Label,
	Button,
	Divider
} from "semantic-ui-react";
import { connect } from "react-redux";
import profileDummyPic from "../images/profile-dummy.jpg";

// import myImg from "../images/my pic.jpg";

class VisibilityForm extends Component {
	state = {
		visibility: {
			vis_type: this.props.vis_type,
			rej_list: this.props.rej_list || []
		},
		allUserOptions: [],
		select_options: [],
		select_except_options: []
	};

	componentDidMount = () => {
		if (
			this.state.visibility.rej_list &&
			this.state.visibility.rej_list.length > 0
		) {
			const { vis_type, rej_list } = this.state.visibility;
			const { all_users } = this.props;
			const list = [];

			if (vis_type === "select") {
				all_users.map(ele => {
					const check = rej_list.find(rj => rj === ele.fullname);
					if (!check) {
						let prf_pic = profileDummyPic;
						if (ele.profile_pic) prf_pic = ele.profile_pic;
						/* eslint-disable-next-line */
						const obj = {
							key: ele._id,
							text: ele.fullname,
							value: ele.fullname,
							image: { avatar: true, src: prf_pic }
						};
						list.push(obj);
					}
					return null;
				});
				/* eslint-disable-next-line */
				this.setState({ select_options: list });
			} else if (vis_type === "select_except") {
				const select_except_options = this.makeDropdownList(
					this.state.visibility.rej_list
				);
				/* eslint-disable-next-line */
				this.setState({ select_except_options });
			}
		} else if (
			this.state.visibility.rej_list &&
			this.state.visibility.rej_list.length === 0
		) {
			const allUserOptions = this.makeDropdownList(this.props.all_users);
			/* eslint-disable-next-line */
			this.setState({
				select_options: allUserOptions,
				select_except_options: allUserOptions
			});
		}
	};

	componentDidUpdate = (prevProps, prevState) => {
		if (prevState.visibility !== this.state.visibility) {
			this.props.updateState(this.state.visibility);
		}

		if (
			this.props.vis_type !== prevProps.vis_type ||
			this.props.rej_list !== prevProps.rej_list
		) {
			/* eslint-disable-next-line */
			this.setState({
				visibility: {
					vis_type: this.props.vis_type,
					rej_list: this.props.rej_list
				}
			});
		}

		if (this.state.select_options !== prevState.select_options) {
			const { select_options } = this.state;
			const { all_users } = this.props;
			const rej_list = [];
			all_users.map(ele => {
				const check = select_options.find(se => se === ele.fullname);
				if (!check) rej_list.push(ele.fullname);
				return null;
			});
			/* eslint-disable-next-line */
			this.setState({ visibility: { ...this.state.visibility, rej_list } });
		}

		if (this.state.select_except_options !== prevState.select_except_options) {
			const { select_except_options } = this.state;
			const { all_users } = this.props;
			const rej_list = [];
			all_users.map(ele => {
				const check = select_except_options.find(se => se === ele.fullname);
				if (check) rej_list.push(ele.fullname);
				return null;
			});
			/* eslint-disable-next-line */
			this.setState({ visibility: { ...this.state.visibility, rej_list } });
		}
	};

	makeDropdownList = list => {
		if (!list && list.length === 0) return;
		const res_list = [];
		list.map(li => {
			let prf_pic = profileDummyPic;
			if (li.profile_pic) prf_pic = li.profile_pic;
			const obj = {
				/* eslint-disable-next-line */
				key: li._id,
				text: li.fullname,
				value: li.fullname,
				image: { avatar: true, src: prf_pic }
			};
			res_list.push(obj);
			return null;
		});
		return res_list;
	};

	handleChange = (e, { value }) => {
		this.setState({
			visibility: { ...this.state.visibility, vis_type: value }
		});
	};

	handleListChange = (e, { name, value }) => {
		this.setState({ [name]: value });
	};

	resetToDefault = () => {
		this.setState({
			visibility: { vis_type: "all", rej_list: [] }
		});
	};

	render() {
		const { vis_type, rej_list } = this.state.visibility;
		const { select_options, select_except_options } = this.state;

		return (
			<Form loading={this.props.loading}>
				<Message
					header="Please Note:"
					content="If you want nobody should see, Check 'Select who can see' and don't select anyone from the list."
				/>
				<Header as="h4">Who can see?</Header>
				<Form.Group grouped>
					<Form.Field
						control={Radio}
						label="All"
						value="all"
						checked={vis_type === "all"}
						onChange={this.handleChange}
					/>

					<Form.Field
						control={Radio}
						label="Boys"
						value="boys"
						checked={vis_type === "boys"}
						onChange={this.handleChange}
					/>

					<Form.Field
						control={Radio}
						label="Girls"
						value="girls"
						checked={vis_type === "girls"}
						onChange={this.handleChange}
					/>

					<Form.Group inline>
						<Form.Field
							control={Radio}
							value="select"
							label="Select who can see"
							checked={vis_type === "select"}
							onChange={this.handleChange}
						/>
						<Dropdown
							fluid
							multiple
							disabled={vis_type !== "select"}
							search
							selection
							name="select_options"
							value={select_options}
							onChange={this.handleListChange}
							// options={[{ text: "Saka Sai Trinath", value: "Saka Sai Trinath", image: { avatar: true, src:  myImg} }]}
							options={select_options}
							placeholder="Select who can see"
						/>
					</Form.Group>

					<Form.Group inline>
						<Form.Field
							control={Radio}
							value="select_except"
							label="All can see except"
							checked={vis_type === "select_except"}
							onChange={this.handleChange}
						/>
						<Dropdown
							fluid
							multiple
							disabled={vis_type !== "select_except"}
							search
							selection
							name="select_except_options"
							value={select_except_options}
							onChange={this.handleListChange}
							options={select_except_options}
							// options={[{ text: "Saka Sai Trinath", value: "Saka Sai Trinath", image: { avatar: true, src:  myImg} }]}
							placeholder="All can see except"
						/>
					</Form.Group>
				</Form.Group>
				<Segment stacked>
					<p>
						<span style={{ fontWeight: "bold" }}>Option:</span>{" "}
						{vis_type === "select"
							? "Select who can see"
							: vis_type === "select_except"
							? "All can see except"
							: vis_type}
					</p>
					<span style={{ fontWeight: "bold" }}>
						Rejected List (These cannot see):
					</span>
					<div>
						{vis_type === "boys"
							? "All girls"
							: vis_type === "girls"
							? "All boys"
							: rej_list && rej_list.length > 0
							? rej_list.map(rj => <Label>{rj}</Label>)
							: "None."}
					</div>
					<Divider />
					<Button
						size="small"
						icon="undo"
						content="Reset"
						onClick={this.resetToDefault}
					/>
				</Segment>
			</Form>
		);
	}
}

function mapStateToProps(state) {
	return {
		all_users: state.other.all_users
	};
}

export default connect(mapStateToProps)(VisibilityForm);
