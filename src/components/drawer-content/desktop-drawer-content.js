import {Box, Divider, Stack} from "@mui/material";
import DesktopSidebarLinkItem from "../shared/desktop-sidebar-link-item";
import {useSelector} from "react-redux";
import {selectUI} from "../../redux/ui/ui-reducer";
import {
    Assessment, AssessmentOutlined,
    Contacts,
    ContactsOutlined,
    Dashboard,
    DashboardOutlined,
    Face,
    FaceOutlined, Group, GroupOutlined, MultipleStop, MultipleStopOutlined, Payment, PaymentOutlined,
    Send,
    SendOutlined
} from "@mui/icons-material";

const DesktopSidebarContent = () => {

    const {activePath} = useSelector(selectUI);

    return (
        <Box sx={{backgroundColor: 'primary.main'}}>
            <Stack
                direction="column"
                divider={
                    <Divider
                        variant="fullWidth"
                        sx={{}}/>
                }>
                <DesktopSidebarLinkItem
                    icon={
                        activePath === '/' ?
                            <Dashboard sx={{color: 'secondary.main'}} />:
                            <DashboardOutlined sx={{color: 'text.primary'}} />
                    }
                    label="Dashboard"
                    path="/"
                    activePath={activePath} />

                <DesktopSidebarLinkItem
                    icon={
                        activePath === '/services' ?
                            <Send sx={{color: 'secondary.main'}} />:
                            <SendOutlined sx={{color: 'text.primary'}} />
                    }
                    label="Services"
                    path="/services"
                    activePath={activePath} />

                <DesktopSidebarLinkItem
                    icon={
                        activePath === '/faqs' ?
                            <Contacts sx={{color: 'secondary.main'}} />:
                            <ContactsOutlined sx={{color: 'text.primary'}} />
                    }
                    label="FAQs"
                    path="/faqs"
                    activePath={activePath} />

                <DesktopSidebarLinkItem
                    icon={
                        activePath === '/messages' ?
                            <Group sx={{color: 'secondary.main'}} />:
                            <GroupOutlined sx={{color: 'text.primary'}} />
                    }
                    label="Messages"
                    path="/messages"
                    activePath={activePath} />

                <DesktopSidebarLinkItem
                    icon={
                        activePath === '/sales' ?
                            <Assessment sx={{color: 'secondary.main'}} />:
                            <AssessmentOutlined sx={{color: 'text.primary'}} />
                    }
                    label="Sales"
                    path="/sales"
                    activePath={activePath} />
                <DesktopSidebarLinkItem
                    icon={
                        activePath === '/testimonials' ?
                            <Payment sx={{color: 'secondary.main'}} />:
                            <PaymentOutlined sx={{color: 'text.primary'}} />
                    }
                    label="Testimonials"
                    path="/testimonials"
                    activePath={activePath} />

                <DesktopSidebarLinkItem
                    icon={
                        activePath === '/profile' ?
                            <Face sx={{color: 'secondary.main'}} />:
                            <FaceOutlined sx={{color: 'text.primary'}} />
                    }
                    label="Profile"
                    path="/profile"
                    activePath={activePath} />

                <DesktopSidebarLinkItem
                    icon={
                        activePath === '/team' ?
                            <MultipleStop sx={{color: 'secondary.main'}} />:
                            <MultipleStopOutlined sx={{color: 'text.primary'}} />
                    }
                    label="Team"
                    path="/team"
                    activePath={activePath} />

                <DesktopSidebarLinkItem
                    icon={
                        activePath === '/quotes' ?
                            <MultipleStop sx={{color: 'secondary.main'}} />:
                            <MultipleStopOutlined sx={{color: 'text.primary'}} />
                    }
                    label="Quotes"
                    path="/quotes"
                    activePath={activePath} />

                <DesktopSidebarLinkItem
                    icon={
                        activePath === '/clients' ?
                            <MultipleStop sx={{color: 'secondary.main'}} />:
                            <MultipleStopOutlined sx={{color: 'text.primary'}} />
                    }
                    label="Clients"
                    path="/clients"
                    activePath={activePath} />
            </Stack>
        </Box>
    )
}

export default DesktopSidebarContent;
