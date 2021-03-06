import Layout from "../../components/layout/layout";
import {
    Alert,
    AlertTitle, Box,
    Container,
    Divider,
    Grid,
    LinearProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    ToggleButton,
    ToggleButtonGroup,
    Typography
} from "@mui/material";
import {Delete, Edit, MarkChatRead, MarkChatReadOutlined, MarkChatUnread, Visibility} from "@mui/icons-material";
import AddServiceDialog from "../../components/dialogs/add/add-service-dialog";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectQuotes} from "../../redux/quotes/quote-reducer";
import {brown, green, red} from "@mui/material/colors";
import moment from "moment";
import {selectAuth} from "../../redux/authentication/auth-reducer";
import {SERVICE_ACTION_CREATORS} from "../../redux/services/service-action-creators";
import {QUOTE_ACTION_CREATORS} from "../../redux/quotes/quote-action-creators";

const QuotesPage = () => {

    const [dialogOpen, setDialogOpen] = useState(false);
    const [status, setStatus] = useState('ALL');

    const {quotes, quoteError, quoteLoading} = useSelector(selectQuotes);

    const handleStatusChange = (event, status) => {
        setStatus(status);
    }

    const handleDeleteQuote = () => {
    }

    const handleAddQuoteDialog = () => {

    }

    const {token} = useSelector(selectAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(QUOTE_ACTION_CREATORS.getQuotes(token));
    }, [dispatch, token]);


    return (
        <Layout>
            <Container
                sx={{
                    py: 4
                }}>
                <Grid container={true} justifyContent="space-between">
                    <Grid item={true} md="auto" xs={12}>
                        <Typography variant="h4">Quotes</Typography>
                    </Grid>
                    <Grid item={true} md="auto" xs={12} alignItems="center">
                        <ToggleButtonGroup
                            exclusive={true}
                            size="small"
                            value={status}
                            fullWidth={true}
                            onChange={handleStatusChange}>
                            <ToggleButton value="ALL" selected={status === 'ALL'}>
                                ALL
                            </ToggleButton>
                            <ToggleButton value="READ" selected={status === 'READ'}>
                                {status === 'READ' ? <MarkChatRead/> : <MarkChatReadOutlined/>}
                            </ToggleButton>
                            <ToggleButton value="UNREAD" selected={status === 'UNREAD'}>
                                {status === 'UNREAD' ? <MarkChatUnread/> : <MarkChatReadOutlined/>}
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Grid>
                </Grid>
                <Divider variant="fullWidth" sx={{my: 2}}/>
                {quoteLoading && <LinearProgress variant="query" color="secondary"/>}
                {quoteError && <Alert severity="error"><AlertTitle>{quoteError}</AlertTitle></Alert>}

                {quotes && quotes.length === 0 ? (
                    <Box>
                        <TableContainer component={Paper}>
                            <Table size="medium">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>#</TableCell>
                                        <TableCell>Sender</TableCell>
                                        <TableCell>Budget</TableCell>
                                        <TableCell>Information</TableCell>
                                        <TableCell>Start Date</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                            </Table>
                        </TableContainer>
                        <Box sx={{backgroundColor: 'background.paper'}} py={5}>
                            <Typography variant="body2" align="center">
                                No quotes available
                            </Typography>
                        </Box>
                    </Box>
                ) : (
                    <TableContainer component={Paper}>
                        <Table size="medium">
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell>Sender</TableCell>
                                    <TableCell>Budget</TableCell>
                                    <TableCell>Information</TableCell>
                                    <TableCell>Start Date</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    quotes.map((quote, index) => {
                                            return (
                                                <TableRow hover={true} key={index}>
                                                    <TableCell>{index + 1}</TableCell>
                                                    <TableCell>{`${quote.firstName} ${quote.lastName}`}</TableCell>
                                                    <TableCell>${quote.budget}</TableCell>
                                                    <TableCell>{quote.information}</TableCell>
                                                    <TableCell>{moment(quote.startDate).fromNow()}</TableCell>
                                                    <TableCell>
                                                        <Grid
                                                            container={true}
                                                            justifyContent="space-between"
                                                            alignItems="center">
                                                            <Grid item={true}>
                                                                <Visibility sx={{color: green['400']}}/>
                                                            </Grid>
                                                            <Grid item={true}>
                                                                <Edit sx={{color: brown['400']}}/>
                                                            </Grid>
                                                            <Grid item={true}>
                                                                <Delete sx={{color: red['400']}}/>
                                                            </Grid>
                                                        </Grid>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        }
                                    )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}

                {
                    dialogOpen &&
                    <AddServiceDialog
                        open={dialogOpen}
                        handleClose={() => setDialogOpen(false)}
                    />
                }
            </Container>
        </Layout>
    )
}

export default QuotesPage;
