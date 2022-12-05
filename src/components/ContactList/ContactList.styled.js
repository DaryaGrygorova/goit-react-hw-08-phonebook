import { List, ListItem, styled } from "@mui/material";

export const StyledList = styled(List)`
display: flex;
 gap: ${p=>p.theme.space[3]}px;
 flex-direction: column;
`;

export const StyledListItem = styled(ListItem)`
          display: flex;
          gap: 16px;
          flex-basis: 49%;
          align-items: center;
          justify-content: space-between;
          padding: ${p=>p.theme.space[3]}px;
          border-radius: ${p=>p.theme.radii.md};
          background-color: ${p=>p.theme.colors.background};
          `;