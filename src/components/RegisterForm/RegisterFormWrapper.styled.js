import { Paper, Typography, styled } from '@mui/material';

export const StyledPaper = styled(Paper)`
  background-color: ${p=>p.theme.colors.background};
  padding: ${p=>p.theme.space[4]}px;
  border-radius: ${p=>p.theme.radii.md};
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
