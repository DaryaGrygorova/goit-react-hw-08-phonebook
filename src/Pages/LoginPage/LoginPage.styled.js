import { Paper, styled } from '@mui/material';

import { theme } from 'theme';

export const StyledPaper = styled(Paper)`
  display: flex;
  gap: ${theme.space[5]}px;
  justify-content: space-between;
  color: ${theme.colors.text};
  background-color: transparent;
`;