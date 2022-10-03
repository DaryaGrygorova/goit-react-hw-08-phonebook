import { Paper, Typography, styled } from '@mui/material';
import { theme } from 'theme';


export const StyledPaper = styled(Paper)`
  background-color: ${theme.colors.background};
  padding: ${theme.space[4]}px;
  border-radius: ${theme.radii.md};
  flex-grow: 1;
  width: 50%;
  align-self: center;
`;

export const StyledSpan = styled(Typography)`
  font-weight: 600;
`;

export const StyledParagraph = styled(Typography)`
  text-align: center;
`;
