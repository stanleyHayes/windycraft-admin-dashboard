import './App.css';
import {ThemeProvider} from "@mui/material/styles";
import {selectUI} from "./redux/ui/ui-reducer";
import {useSelector} from "react-redux";
import {THEMES} from "./utils/themes/themes";
import {Route, Routes} from "react-router";
import DashboardPage from "./pages/dashboard/dashboard-page";
import ServicesPage from "./pages/services/services-page";
import ForgotPasswordPage from "./pages/authentication/forgot-password-page";
import LoginPage from "./pages/authentication/login-page";
import ResetPasswordPage from "./pages/authentication/reset-password-page";
import FAQPage from "./pages/faqs/faqs-page";
import ProfilePage from "./pages/profile/profile-page";
import TestimonialsPage from "./pages/testimonials/testimonials-page";
import ValuesPage from "./pages/values/values-page";
import QuotesPage from "./pages/quotes/quotes-page";
import MessagesPage from "./pages/messages/messages-page";
import ChangePasswordPage from "./pages/account/change-password-page";
import AccountPage from "./pages/account/account-page";
import TeamPage from "./pages/team/team-page";
import ClientsPage from "./pages/clients/clients-page";
import {CssBaseline} from "@mui/material";
import InvitationsPage from "./pages/invitations/invitations-page";
import NotFoundPage from "./pages/404/404-page";
import AdminsPage from "./pages/admins/admins-page";
import CreateAdminPage from "./pages/admins/create-admin-page";
import AdminDetailPage from "./pages/admins/admin-detail-page";
import UpdateAdminPage from "./pages/admins/update-admin-page";

function App() {

    const {themeVariant} = useSelector(selectUI);

    return (
        <ThemeProvider theme={themeVariant === 'dark' ? THEMES.darkTheme : THEMES.lightTheme}>
            <CssBaseline/>
            <Routes>
                <Route exact={true} path="/" element={<DashboardPage/>}/>
                <Route exact={true} path="/services" element={<ServicesPage/>}/>
                <Route exact={true} path="/auth/forgot-password" element={<ForgotPasswordPage/>}/>
                <Route exact={true} path="/auth/login" element={<LoginPage/>}/>
                <Route exact={true} path="/auth/reset-password" element={<ResetPasswordPage/>}/>
                <Route exact={true} path="/faqs" element={<FAQPage/>}/>
                <Route exact={true} path="/profile" element={<ProfilePage/>}/>
                <Route exact={true} path="/messages" element={<MessagesPage/>}/>
                <Route exact={true} path="/quotes" element={<QuotesPage/>}/>
                <Route exact={true} path="/testimonials" element={<TestimonialsPage/>}/>
                <Route exact={true} path="/values" element={<ValuesPage/>}/>
                <Route exact={true} path="/account" element={<AccountPage/>}/>
                <Route exact={true} path="/change-password" element={<ChangePasswordPage/>}/>
                <Route exact={true} path="/team" element={<TeamPage/>}/>
                <Route exact={true} path="/clients" element={<ClientsPage/>}/>
                <Route exact={true} path="/invitations" element={<InvitationsPage/>}/>
                <Route exact={true} path="/admins" element={<AdminsPage/>}/>
                <Route exact={true} path="/admin/new" element={<CreateAdminPage/>}/>
                <Route exact={true} path="/admins/:adminID" element={<AdminDetailPage/>}/>
                <Route exact={true} path="/admins/:adminID/update" element={<UpdateAdminPage/>}/>
                <Route exact={true} path="*" element={<NotFoundPage/>}/>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
