import React from 'react';
import PropTypes from 'prop-types';

import classes from './Backdrop.module.css';

const Backdrop = ({ onClick }) => (
  <div role="presentation" className={classes.backdrop} onClick={onClick} />
);

Backdrop.propTypes = {
  onClick: PropTypes.func,
};

Backdrop.defaultProps = {
  onClick: () => {},
};
export default Backdrop;
