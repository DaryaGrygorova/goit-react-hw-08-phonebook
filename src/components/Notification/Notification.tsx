import { StyledMessage } from './Notification.styled';

type PropsType = {
  message: string,
  error?: boolean,
};

const Notification: React.FC<PropsType> = ({ message }) => {
  return <StyledMessage as={"p"}>{message}</StyledMessage>;
};

export default Notification;
