import PropTypes from 'prop-types';
import { StyledMessage } from './Notification.styled';

const Notification = ({ message, error = false }) => {
  return <StyledMessage component="p">{message}</StyledMessage>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  error: PropTypes.bool,
}.isRequired;

export default Notification;
