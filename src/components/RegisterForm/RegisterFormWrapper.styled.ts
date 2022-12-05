import { Paper, Typography, styled } from '@mui/material';

export const StyledPaper = styled(Paper)`
  background-color: ${p=>p.theme.palette.background.default};
  padding: ${p=>p.theme.spacing(4)};
  border-radius: ${p=>p.theme.spacing(3)};
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
