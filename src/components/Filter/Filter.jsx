import { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledFilter, FilterLabel, FilterInput } from './Filter.styled';

class Filter extends Component {
  state = {
    name: '',
  };

  onFilterInput = e => {
    this.setState({ name: e.currentTarget.value });
  };

  returnFilterData = () => {
    this.props.onFilterInput(this.state);
  };

  render() {
    return (
      <StyledFilter onInput={this.returnFilterData}>
        <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
        <FilterInput
          type="text"
          name="filter"
          value={this.state.number}
          onChange={this.onFilterInput}
          placeholder="Enter name"
          required
        />
      </StyledFilter>
    );
  }
}

export default Filter;

Filter.propTypes = {
  onFilterInput: PropTypes.func.isRequired,
};
