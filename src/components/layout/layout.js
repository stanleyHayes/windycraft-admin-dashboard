import {Box, SwipeableDrawer} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useDispatch, useSelector} from "react-redux";
import {selectUI} from "../../redux/ui/ui-reducer";
import {UI_ACTION_CREATORS} from "../../redux/ui/ui-action-creators";
import DesktopDrawerContent from "../drawer-content/desktop-drawer-content";
import Header from "../headers/header/header";
import DrawerContent from "../drawer-content/drawer-content";


const Layout = ({children}) => {

    const useStyles = makeStyles(theme => {
        return {
            root: {
                display: 'flex',
                minHeight: '100vh',
                flexDirection: 'column'
            },
            header: {},
            footer: {},
            content: {
                flex: 1,
                paddingTop: 96,
                backgroundColor: theme.palette.background.default
            }
        }
    });

    const classes = useStyles();

    const {isToggled} = useSelector(selectUI);

    const dispatch = useDispatch();

    return (
        <Box className={classes.root}>
            <Box sx={{marginTop: {lg: 8}}}>
                <Header/>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: {xs: 'column', md: 'row'},
                    minHeight: '93vh',
                    backgroundColor: 'background.default',
                    paddingTop: {xs: 6.5, md: 0.1}
                }}>
                <Box
                    sx={{
                        display: {xs: 'none', md: 'block'}
                    }}>
                    <DesktopDrawerContent/>
                </Box>
                <Box
                    sx={{
                        flexGrow: 1
                    }}>
                    {children}
                </Box>
            </Box>

            <SwipeableDrawer
                open={isToggled}
                onClose={() => dispatch(UI_ACTION_CREATORS.closeSidebar())}
                onOpen={() => dispatch(UI_ACTION_CREATORS.openSidebar())}>
                <DrawerContent/>
            </SwipeableDrawer>
        </Box>
    )
}

export default Layout;
