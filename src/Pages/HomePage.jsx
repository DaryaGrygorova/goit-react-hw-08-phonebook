import { Typography } from '@mui/material';

import useAuth from 'hooks/useAuth';

const HomePage = () => {
  const {
    profile: { name },
  } = useAuth();

  return (
    <>
      <Typography component="h2" variant="h4" mb={4}>
        Welcome to the best PhoneBook!
      </Typography>
      <Typography paragraph variant="body1">
        Hello, {name}, on this page we will tell you about the new features of
        the "My phoneBook". Soon...
      </Typography>
    </>
  );
};

export default HomePage;
