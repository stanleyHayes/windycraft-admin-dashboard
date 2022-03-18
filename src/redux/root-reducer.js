import {combineReducers} from "redux";
import authReducer from "./authentication/auth-reducer";
import uiReducer from "./ui/ui-reducer";
import serviceReducer from "./services/service-reducer";
import faqReducer from "./faqs/faq-reducer";
import messagesReducer from "./messages/messages-reducer";
import testimonialReducer from "./testimonials/testimonial-reducer";
import clientReducer from "./clients/client-reducer";
import quoteReducer from "./quotes/quote-reducer";


const rootReducer = combineReducers({
    ui: uiReducer,
    auth: authReducer,
    services: serviceReducer,
    faqs: faqReducer,
    messages: messagesReducer,
    testimonials: testimonialReducer,
    clients: clientReducer,
    quotes: quoteReducer
});

export default rootReducer;
