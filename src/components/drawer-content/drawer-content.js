import {Button, Container, Divider, Grid, Stack} from "@mui/material";
import {
    Close,
    Dashboard,
    DashboardOutlined

} from "@mui/icons-material";
import {UI_ACTION_CREATORS} from "../../redux/ui/ui-action-creators";
import {useDispatch, useSelector} from "react-redux";
import SideBarLinkItem from "../shared/side-bar-link-item";
import {selectUI} from "../../redux/ui/ui-reducer";

const DrawerContent = () => {

    const dispatch = useDispatch();

    const {activePath} = useSelector(selectUI);

    return (
        <Container
            sx={{
                width: '90vw',
                height: '100vh',
                paddingTop: 2,
                paddingBottom: 8,
                backgroundColor: 'primary.main'
            }}>
            <Grid container={true} justifyContent="flex-end">
                <Grid item={true}>
                    <Button
                        onClick={() => dispatch(UI_ACTION_CREATORS.closeSidebar())}
                        variant="outlined"
                        color="secondary"
                        endIcon={<Close color="secondary"/>}>
                        Close
                    </Button>
                </Grid>
            </Grid>
            <Stack
                mt={2}
                direction="column"
                divider={<Divider/>}
                spacing={1}>
                <SideBarLinkItem
                    activePath={activePath}
                    icon={
                        activePath === '/' ?
                            <Dashboard sx={{
                                color: "text.primary",
                                borderRadius: 1,
                                padding: 0.4,
                                width: 24,
                                height: 24,
                                backgroundColor: '#F9A34F40'
                            }}/> :
                            <DashboardOutlined sx={{color: 'white'}}/>
                    }
                    label="Dashboard"
                    path="/"
                />
                <SideBarLinkItem
                    activePath={activePath}
                    icon={
                        activePath === '/' ?
                            <Dashboard sx={{
                                color: "text.primary",
                                borderRadius: 1,
                                padding: 0.4,
                                width: 24,
                                height: 24,
                                backgroundColor: '#F9A34F40'
                            }}/> :
                            <DashboardOutlined sx={{color: 'white'}}/>
                    }
                    label="Services"
                    path="/services"
                />
                <SideBarLinkItem
                    icon={
                        activePath === '/' ?
                            <Dashboard sx={{
                                color: "text.primary",
                                borderRadius: 1,
                                padding: 0.4,
                                width: 24,
                                height: 24,
                                backgroundColor: '#F9A34F40'
                            }}/> :
                            <DashboardOutlined sx={{color: 'white'}}/>
                    }
                    label="FAQs"
                    path="/faqs"
                    activePath={activePath}
                />
                <SideBarLinkItem
                    icon={
                        activePath === '/' ?
                            <Dashboard sx={{
                                color: "text.primary",
                                borderRadius: 1,
                                padding: 0.4,
                                width: 24,
                                height: 24,
                                backgroundColor: '#F9A34F40'
                            }}/> :
                            <DashboardOutlined sx={{color: 'white'}}/>
                    }
                    label="Messages"
                    path="/messages"
                    activePath={activePath}
                />
                <SideBarLinkItem
                    icon={
                        activePath === '/' ?
                            <Dashboard sx={{
                                color: "text.primary",
                                borderRadius: 1,
                                padding: 0.4,
                                width: 24,
                                height: 24,
                                backgroundColor: '#F9A34F40'
                            }}/> :
                            <DashboardOutlined sx={{color: 'white'}}/>
                    }
                    label="Testimonials"
                    path="/testimonials"
                    activePath={activePath}
                />
                <SideBarLinkItem
                    icon={
                        activePath === '/' ?
                            <Dashboard sx={{
                                color: "text.primary",
                                borderRadius: 1,
                                padding: 0.4,
                                width: 24,
                                height: 24,
                                backgroundColor: '#F9A34F40'
                            }}/> :
                            <DashboardOutlined sx={{color: 'white'}}/>
                    }
                    label="Profile"
                    path="/profile"
                    activePath={activePath}
                />

                <SideBarLinkItem
                    icon={
                        activePath === '/' ?
                            <Dashboard sx={{
                                color: "text.primary",
                                borderRadius: 1,
                                padding: 0.4,
                                width: 24,
                                height: 24,
                                backgroundColor: '#F9A34F40'
                            }}/> :
                            <DashboardOutlined sx={{color: 'white'}}/>
                    }
                    label="Team"
                    path="/team"
                    activePath={activePath}
                />

                <SideBarLinkItem
                    icon={
                        activePath === '/' ?
                            <Dashboard sx={{
                                color: "text.primary",
                                borderRadius: 1,
                                padding: 0.4,
                                width: 24,
                                height: 24,
                                backgroundColor: '#F9A34F40'
                            }}/> :
                            <DashboardOutlined sx={{color: 'white'}}/>
                    }
                    label="Clients"
                    path="/clients"
                    activePath={activePath}
                />
            </Stack>
        </Container>
    )
}

export default DrawerContent;
