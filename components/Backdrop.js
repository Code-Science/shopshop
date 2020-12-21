import PropTypes from 'prop-types';
import styles from '../styles/components/Backdrop.module.css';

const Backdrop = ({ show, click }) =>
  show ? <div className={styles.Backdrop} onClick={click}></div> : null;

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  click: PropTypes.func,
};

export default Backdrop;
