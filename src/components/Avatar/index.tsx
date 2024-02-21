import { Avatar as MuiAvatar } from "@mui/material";

export type AvatarProps = {
    avatarSrc?: string;
    avatarText?: string;
};

export const Avatar = ({
    avatarSrc,
    avatarText
}: AvatarProps & AvatarProps) => (
    <>
        {avatarSrc ? (
            <MuiAvatar src={avatarSrc} />
        ) : (
            <MuiAvatar>{avatarText}</MuiAvatar>
        )}
    </>
);
