import './App.css';
import {ThemeProvider} from "@mui/material/styles";
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
import EditProfilePage from "./pages/account/edit-profile-page";
import InvitationResponsePage from "./pages/invitations/invitation-response-page";
import RequireAuth from "./components/shared/require-auth";

function App() {

    return (
        <ThemeProvider theme={THEMES.darkTheme}>
            <CssBaseline/>
            <Routes>
                <Route exact={true} path="/" element={
                    <RequireAuth>
                        <DashboardPage/>
                    </RequireAuth>}/>
                <Route exact={true} path="/services" element={
                    <RequireAuth>
                        <ServicesPage/>
                    </RequireAuth>}/>
                <Route exact={true} path="/auth/forgot-password" element={<ForgotPasswordPage/>}/>
                <Route exact={true} path="/auth/login" element={<LoginPage/>}/>
                <Route exact={true} path="/auth/reset-password" element={<RequireAuth>
                    <ResetPasswordPage/>
                </RequireAuth>}/>
                <Route exact={true} path="/faqs" element={<RequireAuth>
                    <FAQPage/>
                </RequireAuth>}/>
                <Route exact={true} path="/profile" element={<RequireAuth>
                    <ProfilePage/>
                </RequireAuth>}/>
                <Route exact={true} path="/edit-profile" element={<RequireAuth>
                    <EditProfilePage/>
                </RequireAuth>}/>
                <Route exact={true} path="/messages" element={<RequireAuth>
                    <MessagesPage/>
                </RequireAuth>}/>
                <Route exact={true} path="/quotes" element={<RequireAuth>
                    <QuotesPage/>
                </RequireAuth>}/>
                <Route exact={true} path="/testimonials" element={<RequireAuth>
                    <TestimonialsPage/>
                </RequireAuth>}/>
                <Route exact={true} path="/values" element={<RequireAuth>
                    <ValuesPage/>
                </RequireAuth>}/>
                <Route exact={true} path="/account" element={<RequireAuth>
                    <AccountPage/>
                </RequireAuth>}/>
                <Route exact={true} path="/change-password" element={<RequireAuth>
                    <ChangePasswordPage/>
                </RequireAuth>}/>
                <Route exact={true} path="/team" element={<RequireAuth>
                    <TeamPage/>
                </RequireAuth>}/>
                <Route exact={true} path="/clients" element={<RequireAuth>
                    <ClientsPage/>
                </RequireAuth>}/>
                <Route exact={true} path="/invitations" element={<RequireAuth>
                    <InvitationsPage/>
                </RequireAuth>}/>
                <Route exact={true} path="/invitations/:invitationID/:code" element={<InvitationResponsePage/>}/>
                <Route exact={true} path="/admins" element={
                    <RequireAuth>
                        <AdminsPage/>
                    </RequireAuth>
                }/>
                <Route exact={true} path="/admin/new" element={
                    <RequireAuth>
                        <CreateAdminPage/>
                    </RequireAuth>
                }/>
                <Route exact={true} path="/admins/:adminID" element={
                    <RequireAuth>
                        <AdminDetailPage/>
                    </RequireAuth>
                }/>
                <Route exact={true} path="/admins/:adminID/update" element={
                    <RequireAuth>
                        <UpdateAdminPage/>
                    </RequireAuth>
                }/>
                <Route exact={true} path="*" element={
                    <RequireAuth>
                        <NotFoundPage/>
                    </RequireAuth>
                }/>
            </Routes>
        </ThemeProvider>);
}

export default App;
