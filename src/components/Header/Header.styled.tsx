import { AppBar, Toolbar, styled } from '@mui/material';

export const StyledAppBar = styled(AppBar)`
  background-color: ${p => p.theme.palette.background.paper};
` as typeof AppBar;

export const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
  color: ${p => p.theme.palette.text.primary};
`;
