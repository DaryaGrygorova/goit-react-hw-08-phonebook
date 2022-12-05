import { List, ListItem, styled } from "@mui/material";

export const StyledList = styled(List)`
display: flex;
 gap: ${p=>p.theme.spacing(3)};
 flex-direction: column;
`;

export const StyledListItem = styled(ListItem)`
          display: flex;
          gap: 16px;
          flex-basis: 49%;
          align-items: center;
          justify-content: space-between;
          padding: ${p=>p.theme.spacing(3)};
          border-radius: ${p=>p.theme.spacing(3)};
          background-color: ${p=>p.theme.palette.background.default};
          `;