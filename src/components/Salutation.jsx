import { Box, styled, Typography } from '@mui/material';

const Salutation = () => {
  return (
    <Box sx={{ width: '55%' }}>
      <StyledTitle variant="h5" component="h1" mb={3}>
        Welcome to <br />
        <Typography component="span" variant="h3" sx={{ fontWeight: '600' }}>
          "My PhoneBook"
        </Typography>
      </StyledTitle>

      <Typography
        paragraph
        variant="h5"
        sx={{ textIndent: '15px', textAlign: 'start' }}
      >
        With{' '}
        <Typography component="span" variant="h5" sx={{ fontWeight: '600' }}>
          "My PhoneBook"
        </Typography>{' '}
        you can store your contacts in a safe and secure place. Now your
        contacts are available to you (and only you) at any time, anywhere, from
        any gadget with Internet access.
      </Typography>
    </Box>
  );
};

const StyledTitle = styled(Typography)`
  text-align: start;
  align-self: center;
  font-weight: 600;
  line-height: 2;
`;

export default Salutation;
