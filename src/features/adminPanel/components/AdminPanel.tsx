import { Dashboard } from "layouts";

import { LogoutButton } from "features/auth/components";
import { DrawerMenu } from "./DrawerMenu";

export const AdminPanel = () => (
    <Dashboard
        title="Admin panel"
        drawerMenu={<DrawerMenu />}
        toolbarRight={<LogoutButton variant="outlined" color="secondary" />}
    />
);
