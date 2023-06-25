import { Dashboard } from "shared/layouts";
import { DrawerMenu } from "features/adminPanel/DrawerMenu";

export const AdminPanel = () => (
    <Dashboard title="Admin panel" drawerMenu={<DrawerMenu />} />
);
