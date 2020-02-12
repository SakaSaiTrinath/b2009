import React from "react";
import {
  Header,
  Grid,
  Dropdown,
  // Button,
  Card,
  Image
  // Icon
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchAllUsersFull } from "../../actions/other";

import dImg from "../images/profile-dummy.jpg";

class BloodGroupsPage extends React.Component {
  state = {
    bloodtype: "O+",
    users: []
  };

  componentDidMount() {
    this.props.fetchAllUsersFull().then(() => {
      this.setUsers();
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.bloodtype !== this.state.bloodtype) {
      this.setUsers();
    }
  }

  setUsers = () => {
    let users = [];
    if (this.state.bloodtype === "other") {
      users = this.props.all_users.filter(user => user.blood_group === "---");
    } else {
      users = this.props.all_users.filter(
        user => user.blood_group === this.state.bloodtype
      );
    }
    this.setState({ users });
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { bloodtype, users } = this.state;

    const bloodtypeOptions = [
      { text: "A+", value: "A+", key: "A+" },
      { text: "O+", value: "O+", key: "O+" },
      { text: "B+", value: "B+", key: "B+" },
      { text: "AB+", value: "AB+", key: "AB+" },
      { text: "A-", value: "A-", key: "A-" },
      { text: "O-", value: "O-", key: "O-" },
      { text: "B-", value: "B-", key: "B-" },
      { text: "AB-", value: "AB-", key: "AB-" },
      { text: "other", value: "other", key: "other" }
    ];

    return (
      <Grid centered verticalAlign="middle">
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Header color="teal" size="huge">
              Blood Groups
            </Header>
            <Dropdown
              search
              selection
              name="bloodtype"
              value={bloodtype}
              onChange={this.handleChange}
              options={bloodtypeOptions}
              placeholder="Choose bloodtype"
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row
          textAlign="center"
          style={{
            minHeight: window.innerHeight - 350
          }}
        >
          <Grid.Column>
            <Grid stackable centered textAlign="center">
              <Grid.Row align="middle">
                {users && users.length > 0
                  ? users.map(user => (
                      // eslint-disable-next-line
                      <Grid.Column width={4} key={user._id}>
                        <Card
                          color="teal"
                          style={{
                            marginTop: "10px",
                            marginBottom: "10px"
                          }}
                          as={Link}
                          to="/profile#"
                        >
                          <Card.Content>
                            <Image
                              src={user.profile_pic || dImg}
                              floated="right"
                              size="mini"
                            />
                            <Card.Header>{user.fullname}</Card.Header>
                            <Card.Meta>
                              <span className="date">
                                {user.studied_from_year} {" - "}{" "}
                                {user.studied_to_year}
                              </span>
                            </Card.Meta>
                            <Card.Description>
                              {user.current_status}
                            </Card.Description>
                          </Card.Content>
                          {/* <Card.Content extra>
                            <div className="ui two buttons">
                              <Button basic color="teal">
                                <Icon name="newspaper" />
                                Articles
                                {"  "} 16
                              </Button>

                              <Button basic color="teal">
                                <Icon name="images" />
                                Gallery
                                {"  "} 25
                              </Button>
                            </div>
                          </Card.Content> */}
                        </Card>
                      </Grid.Column>
                    ))
                  : "No users!"}
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

BloodGroupsPage.propTypes = {
  fetchAllUsersFull: PropTypes.func.isRequired,
  all_users: PropTypes.arrayOf(PropTypes.object).isRequired
};

function mapStateToProps(state) {
  return {
    all_users: state.other.all_users
  };
}

export default connect(
  mapStateToProps,
  { fetchAllUsersFull }
)(BloodGroupsPage);
