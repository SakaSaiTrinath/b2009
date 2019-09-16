import _ from "lodash";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Search, Grid } from "semantic-ui-react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.resetComponent();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.results !== this.state.results) {
      this.props.getsearchresults(this.state.results);
    }
  }

  resetComponent = () =>
    this.setState({ isLoading: false, results: [], value: "" });

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.title });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = result => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(this.props.source, isMatch)
      });
    }, 300);
  };

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <div>
        <Grid centered>
          <Grid.Column>
            <Search
              input={{ fluid: true }}
              fluid
              loading={isLoading}
              onResultSelect={this.handleResultSelect}
              onSearchChange={_.debounce(this.handleSearchChange, 500, {
                leading: true
              })}
              results={results}
              value={value}
              placeholder="Search users"
            />
          </Grid.Column>
          {/* <Grid.Column width={10}>
          <Segment>
            <Header>State</Header>
            <pre style={{ overflowX: 'auto' }}>{JSON.stringify(this.state, null, 2)}</pre>
            <Header>Options</Header>
            <pre style={{ overflowX: 'auto' }}>{JSON.stringify(this.props.source, null, 2)}</pre>
          </Segment>
        </Grid.Column> */}
        </Grid>
      </div>
    );
  }
}

SearchBar.propTypes = {
  getsearchresults: PropTypes.func.isRequired,
  // source: PropTypes.object.isRequired // eslint-disable-line
};

export default SearchBar;
