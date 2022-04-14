import {combineReducers} from "redux";
import authReducer from "./authentication/auth-reducer";
import uiReducer from "./ui/ui-reducer";
import serviceReducer from "./services/service-reducer";
import faqReducer from "./faqs/faq-reducer";
import messagesReducer from "./messages/messages-reducer";
import testimonialReducer from "./testimonials/testimonial-reducer";
import clientReducer from "./clients/client-reducer";
import quoteReducer from "./quotes/quote-reducer";
import invitationReducer from "./invitations/invitation-reducer";
import valueReducer from "./values/value-reducer";
import teamReducer from "./team/team-reducer";
import dashboardReducer from "./dashboard/dashboard-reducer";
import adminReducer from "./admins/admin-reducer";


const rootReducer = combineReducers({
    ui: uiReducer,
    auth: authReducer,
    services: serviceReducer,
    faqs: faqReducer,
    messages: messagesReducer,
    testimonials: testimonialReducer,
    clients: clientReducer,
    quotes: quoteReducer,
    invitations: invitationReducer,
    values: valueReducer,
    teams: teamReducer,
    dashboard: dashboardReducer,
    admins: adminReducer
});

export default rootReducer;
