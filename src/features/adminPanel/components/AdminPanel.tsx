import { useSelector } from "react-redux";

import { RootState } from "app/store";
import { Dashboard } from "layouts";
import { LogoutButton } from "features/auth/components";

import { DrawerMenu } from "./DrawerMenu";

export const AdminPanel = () => {
    const currentPage = useSelector(
        (state: RootState) => state.adminPanel.currentPage
    );

    return (
        <Dashboard
            title={currentPage}
            drawerMenu={<DrawerMenu />}
            toolbarRight={<LogoutButton variant="outlined" color="secondary" />}
        />
    );
};
