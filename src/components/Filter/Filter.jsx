import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { StyledFilter, FilterLabel, FilterInput } from './Filter.styled';

class Filter extends Component {
  state = {
    name: '',
  };

  filterId = nanoid();

  onFilterInput = e => {
    this.setState({ name: e.currentTarget.value });
  };

  returnFilterData = () => {
    const { name } = this.state;
    this.props.onFilterInput(name);
  };

  render() {
    const { name } = this.state;

    return (
      <StyledFilter onInput={this.returnFilterData}>
        <FilterLabel htmlFor={this.filterId}>Find contacts by name</FilterLabel>
        <FilterInput
          type="text"
          name="filter"
          id={this.filterId}
          value={name}
          onInput={this.onFilterInput}
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
