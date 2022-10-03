import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Box
      margin="0 auto 25px"
      maxWidth="1440px"
      as="section"
      position="fixed"
      maxHeight="max-content"
    >
      {title && <Title>{title}</Title>}
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
