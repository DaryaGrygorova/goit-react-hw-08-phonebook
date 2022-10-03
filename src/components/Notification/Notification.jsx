import PropTypes from 'prop-types';
import { StyledMessage } from './Notification.styled';

const Notification = ({ message }) => {
  return <StyledMessage component="p">{message}</StyledMessage>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}.isRequired;

export default Notification;
