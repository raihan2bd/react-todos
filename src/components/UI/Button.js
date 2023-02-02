import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.module.css';

const Button = ({
  onClick, type, extraClass, children,
}) => {
  const btnClasses = extraClass
    ? `${classes.button} ${extraClass}`
    : classes.button;

  return (
    // eslint-disable-next-line react/button-has-type
    <button className={btnClasses} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  extraClass: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'button',
  extraClass: null,
};

export default Button;
