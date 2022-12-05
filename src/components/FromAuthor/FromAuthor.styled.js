import { Paper, Typography, styled } from '@mui/material';

export const StyledPaper = styled(Paper)`
  background-color: ${p=>p.theme.colors.background};
  padding: ${p=>p.theme.space[4]}px;
  text-indent: ${p=>p.theme.space[4]}px;
  font-style: italic ;
  border-radius: ${p=>p.theme.radii.md};
  max-width: 245px;
`;

export const StyledParagraph = styled(Typography)``;
