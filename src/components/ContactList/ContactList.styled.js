import { Box, styled as styledMui } from "@mui/system";
import styled from "styled-components"
import { theme } from "theme";

export const StyledBox = styledMui(Box)`
display: flex;
 gap: ${theme.space[3]}px;
 flex-direction: column;
`;

export const StyledWrap = styled.li`
          display: flex;
          gap: 16px;
          flex-basis: 49%;
          align-items: center;
          justify-content: space-between;
          padding: ${theme.space[3]}px;
          border-radius: ${theme.radii.md};
          background-color: ${theme.colors.background};
          `;