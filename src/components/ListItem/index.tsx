import { SvgIconComponent } from "@mui/icons-material";
import {
    ListItem as MuiListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListItemProps
} from "@mui/material";
import { ReactElement } from "react";

import { AvatarProps } from "components";

type IconTypes = ReactElement<AvatarProps> | ReactElement<SvgIconComponent>;

type ListProps = {
    icon?: IconTypes;
    text?: string;
};

export const ListItem = ({
    icon,
    text,
    ...props
}: ListProps & ListItemProps) => (
    <MuiListItem disablePadding {...props}>
        <ListItemButton>
            {icon && <ListItemIcon>{icon}</ListItemIcon>}
            {text && <ListItemText primary={text} />}
        </ListItemButton>
    </MuiListItem>
);
