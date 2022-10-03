import { Paper, Typography, styled } from '@mui/material';
import { theme } from 'theme';

export const StyledPaper = styled(Paper)`
  background-color: ${theme.colors.background};
  padding: ${theme.space[4]}px;
  text-indent: ${theme.space[4]}px;
  font-style: italic ;
  border-radius: ${theme.radii.md};
  max-width: 245px;
`;

export const StyledParagraph = styled(Typography)``;
