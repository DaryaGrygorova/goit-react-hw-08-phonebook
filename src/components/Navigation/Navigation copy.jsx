// import { useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Box display="flex" gridGap="15px">
      <Link to="home">Home</Link>
      <Link to="contacts">Contacts</Link>
    </Box>
  );
};

export default Navigation;
