import { Dashboard } from "shared/layouts";

import { DrawerMenu } from "./DrawerMenu";

export const AdminPanel = () => (
    <Dashboard title="Admin panel" drawerMenu={<DrawerMenu />} />
);
