import { Bars } from 'react-loader-spinner';
import { Box } from '@mui/material';

const Loader: React.FC = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      height="50vw"
      justifyContent="center"
    >
      <Bars
        visible={true}
        height="100px"
        width="100px"
        ariaLabel="MagnifyingGlass-loading"
        color="#3f51b5"
      />
    </Box>
  );
};

export default Loader;
