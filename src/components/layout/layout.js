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
                    maxWidth: '100vw',
                    overflow: "hidden",
                    backgroundColor: 'background.default',
                }}>

                <Box
                    sx={{
                        display: {xs: 'none', md: 'block'},
                        maxHeight: '92.8vh',
                        overflowY: 'scroll',
                        overflowX: 'hidden',
                        mt: 8.3
                    }}>
                    <DesktopDrawerContent/>
                </Box>

                <Box
                    sx={{
                        paddingTop: 8,
                        overflowY: 'scroll',
                        paddingBottom: 4,
                        flexGrow: 1,
                        width: '100%',
                        backgroundColor: 'background.default',
                        overflowX: "hidden",
                        maxHeight: '100vh'
                    }}>
                    <Header/>
                    {children}
                </Box>
            </Box>

            <SwipeableDrawer
                open={isToggled}
                onClose={() => dispatch(UI_ACTION_CREATORS.closeSidebar())}
                onOpen={() => dispatch(UI_ACTION_CREATORS.openSidebar())}>
                <Box sx={{backgroundColor: 'primary.main', minHeight: '100vh'}}>
                    <DrawerContent/>
                </Box>
            </SwipeableDrawer>
        </React.Fragment>
    )
}

export default Layout;
