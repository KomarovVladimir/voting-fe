import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { RootState } from "app/store";
import { Dashboard } from "layouts";
import { LogoutButton } from "features/auth/components";

import { reset } from "../slice/adminPanelSlice";

import { DrawerMenu } from "./DrawerMenu";

export const AdminPanel = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(
        (state: RootState) => state.adminPanel.currentPage
    );

    useEffect(() => {
        dispatch(reset());
    }, [dispatch]);

    return (
        <Dashboard
            title={currentPage}
            drawerMenu={<DrawerMenu />}
            toolbarRight={<LogoutButton variant="outlined" color="secondary" />}
        />
    );
};
