import { List, ListItem, styled } from "@mui/material";
import { theme } from "theme";

export const StyledList = styled(List)`
display: flex;
 gap: ${theme.space[3]}px;
 flex-direction: column;
`;

export const StyledListItem = styled(ListItem)`
          display: flex;
          gap: 16px;
          flex-basis: 49%;
          align-items: center;
          justify-content: space-between;
          padding: ${theme.space[3]}px;
          border-radius: ${theme.radii.md};
          background-color: ${theme.colors.background};
          `;