import './App.css';
import ScrollToTop from "./components/shared/scroll-to-top";
import {ThemeProvider} from "@mui/material/styles";
import {selectUI} from "./redux/ui/ui-reducer";
import {useSelector} from "react-redux";
import {THEMES} from "./utils/themes/themes";
import {Route, Switch} from "react-router-dom";
import DashboardPage from "./pages/dashboard/dashboard-page";
import ServicesPage from "./pages/services/services-page";
import ForgotPasswordPage from "./pages/authentication/forgot-password-page";
import LoginPage from "./pages/authentication/login-page";
import ResetPasswordPage from "./pages/authentication/reset-password-page";
import FAQPage from "./pages/faqs/faqs-page";
import ProfilePage from "./pages/profile/profile-page";
import TestimonialsPage from "./pages/testimonials/testimonials-page";
import ValuesPage from "./pages/values/values-page";
import SalesPage from "./pages/sales/sales-page";
import QuotesPage from "./pages/quotes/quotes-page";
import MessagesPage from "./pages/messages/messages-page";
import ChangePasswordPage from "./pages/account/change-password-page";
import AccountPage from "./pages/account/account-page";
import TeamPage from "./pages/team/team-page";
import ClientsPage from "./pages/clients/clients-page";
import {CssBaseline} from "@mui/material";

function App() {

    const {themeVariant} = useSelector(selectUI);

    return (
        <ScrollToTop>
            <ThemeProvider theme={themeVariant === 'dark' ? THEMES.darkTheme : THEMES.lightTheme}>
                <CssBaseline/>
                <Switch>
                    <Route exact={true} path="/" component={DashboardPage}/>
                    <Route exact={true} path="/services" component={ServicesPage}/>
                    <Route exact={true} path="/auth/forgot-password" component={ForgotPasswordPage}/>
                    <Route exact={true} path="/auth/login" component={LoginPage}/>
                    <Route exact={true} path="/auth/reset-password" component={ResetPasswordPage}/>
                    <Route exact={true} path="/faqs" component={FAQPage}/>
                    <Route exact={true} path="/profile" component={ProfilePage}/>
                    <Route exact={true} path="/messages" component={MessagesPage}/>
                    <Route exact={true} path="/quotes" component={QuotesPage}/>
                    <Route exact={true} path="/sales" component={SalesPage}/>
                    <Route exact={true} path="/testimonials" component={TestimonialsPage}/>
                    <Route exact={true} path="/values" component={ValuesPage}/>
                    <Route exact={true} path="/account" component={AccountPage}/>
                    <Route exact={true} path="/change-password" component={ChangePasswordPage}/>
                    <Route exact={true} path="/team" component={TeamPage}/>
                    <Route exact={true} path="/clients" component={ClientsPage}/>
                </Switch>
            </ThemeProvider>
        </ScrollToTop>
    );
}

export default App;
