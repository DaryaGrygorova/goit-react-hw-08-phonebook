import { Box, styled } from '@mui/material';

export const StyledSideBar = styled(Box)`
  position: relative;
  width: 260px;
  box-shadow: 26px -2px 10px -30px rgba(0, 0, 0, 0.66);
  min-height: 88vh;
`;

export const StyledSidebarThumb = styled(Box)`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const StyledContentWrap = styled(Box)`
  padding: ${p => p.theme.space[4]}px;
  flex-grow: 1;
`;
