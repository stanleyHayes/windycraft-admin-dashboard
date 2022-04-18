import {Box, SwipeableDrawer} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {selectUI} from "../../redux/ui/ui-reducer";
import {UI_ACTION_CREATORS} from "../../redux/ui/ui-action-creators";
import DesktopDrawerContent from "../drawer-content/desktop-drawer-content";
import Header from "../headers/header/header";
import DrawerContent from "../drawer-content/drawer-content";
import React from "react";

const Layout = ({children}) => {

    const {isToggled} = useSelector(selectUI);

    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: {md: 'row'},
                    minHeight: '93vh',
                    backgroundColor: 'background.default',
                }}>

                <Box
                    sx={{
                        display: {xs: 'none', md: 'block'},
                        minHeight: '100vh',
                    }}>
                    <DesktopDrawerContent/>
                </Box>

                <Box
                    sx={{
                        paddingTop: 8,
                        overflowY: 'scroll',
                        paddingBottom: 4,
                        flexGrow: 1,
                        backgroundColor: 'background.default'
                    }}>
                    <Header/>
                    {children}
                </Box>
            </Box>

            <SwipeableDrawer
                open={isToggled}
                onClose={() => dispatch(UI_ACTION_CREATORS.closeSidebar())}
                onOpen={() => dispatch(UI_ACTION_CREATORS.openSidebar())}>
                <DrawerContent/>
            </SwipeableDrawer>
        </React.Fragment>
    )
}

export default Layout;
