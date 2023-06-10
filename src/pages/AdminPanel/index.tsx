import { Dashboard } from "layouts";

import { DrawerMenu } from "./DrawerMenu";

export const AdminPanel = () => (
    <Dashboard title="Admin panel" drawerMenu={<DrawerMenu />} />
);
