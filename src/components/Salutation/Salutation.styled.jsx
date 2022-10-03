import { Box, styled, Typography } from '@mui/material';
import { theme } from 'theme';

export const StyledBox = styled(Box)`
  width: 55%;
`;

export const StyledTitle = styled(Typography)`
  text-align: start;
  align-self: center;
  font-weight: 600;
  line-height: 2;
`;
export const StyledSpan = styled(Typography)`
  font-weight: 600;
`;

export const StyledParagraph = styled(Typography)`
  text-indent: ${theme.space[4]}px;
  text-align: start;
`;
