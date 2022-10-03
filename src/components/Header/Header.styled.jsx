import { AppBar, Toolbar, styled } from '@mui/material';

import { theme } from '../../theme';

export const StyledAppBar = styled(AppBar)`
  background-color: ${theme.colors.header};
`;
export const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
  color: ${theme.colors.text};
`;
