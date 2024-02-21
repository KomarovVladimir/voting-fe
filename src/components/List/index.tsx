import { SvgIconComponent } from "@mui/icons-material";
import {
    List as MuiList,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import { ReactElement } from "react";

import { AvatarProps } from "components";

type IconTypes = ReactElement<AvatarProps> | ReactElement<SvgIconComponent>;

type ListProps = {
    icon: IconTypes;
    text: string;
};

export const List = ({ icon, text }: ListProps) => (
    <MuiList>
        <ListItem disablePadding>
            <ListItemButton>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                {text && <ListItemText primary={text} />}
            </ListItemButton>
        </ListItem>
    </MuiList>
);
