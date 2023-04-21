import React from 'react';
import PropTypes from 'prop-types';
import './Filter.scss';

const Filter = ({ value, onChange }) => (
  <div className="filter">
    <label className="filter__label" htmlFor="filter">
      Find contact by name
    </label>
    <input
      className="filter__input"
      id="filter"
      type="text"
      value={value}
      onChange={onChange}
    />
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
