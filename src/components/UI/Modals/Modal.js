import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Backdrop from './Backdrop';
import classes from './Modal.module.css';

const portalDom = document.getElementById('overlays');

const Modal = ({ onClose, isPromt, children }) => ReactDOM.createPortal(
  <>
    <Backdrop onClick={isPromt ? () => {} : onClose} />
    <div className={classes.modal}>{children}</div>
  </>,
  portalDom,
);

Modal.propTypes = {
  onClose: PropTypes.func,
  isPromt: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Modal.defaultProps = {
  onClose: () => {},
  isPromt: false,
};

export default Modal;
