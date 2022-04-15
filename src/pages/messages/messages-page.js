import Layout from "../../components/layout/layout";
import {
    Alert, AlertTitle, Box,
    Container,
    Divider,
    Grid, LinearProgress,
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
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectMessages} from "../../redux/messages/messages-reducer";
import {brown, green, red} from "@mui/material/colors";
import {selectAuth} from "../../redux/authentication/auth-reducer";
import {FAQ_ACTION_CREATORS} from "../../redux/faqs/faq-action-creators";
import {MESSAGE_ACTION_CREATORS} from "../../redux/messages/messages-action-creators";

const MessagesPage = () => {

    const [status, setStatus] = useState("ALL");
    const {messages, messageLoading, messageError} = useSelector(selectMessages);
    const handleStatusChange = (event, status) => {
        setStatus(status);
    }

    const handleDeleteMessage = () => {
    }

    const handleAddServiceMessage = () => {

    }

    const {token} = useSelector(selectAuth);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(MESSAGE_ACTION_CREATORS.getMessages(token));
    }, [dispatch, token]);


    return (
        <Layout>
            <Container
                sx={{py: 4}}>
                <Grid
                    container={true}
                    justifyContent="space-between"
                    spacing={2}
                    alignItems="center">
                    <Grid item={true} md="auto" xs={12}>
                        <Typography variant="h4">Messages</Typography>
                    </Grid>
                    <Grid item={true} md="auto" xs={12}>
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
                {messageLoading && <LinearProgress variant="query" color="secondary"/>}
                {messageError && <Alert severity="error"><AlertTitle>{messageError}</AlertTitle></Alert>}

                {messages && messages.length === 0 ? (
                    <Box>
                        <TableContainer elevation={0} component={Paper}>
                            <Table size="medium">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>#</TableCell>
                                        <TableCell>Sender</TableCell>
                                        <TableCell>Message</TableCell>
                                        <TableCell>Subject</TableCell>
                                        <TableCell>Responded</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                            </Table>
                        </TableContainer>
                        <Box sx={{backgroundColor: 'background.paper'}} py={5}>
                            <Typography variant="body2" align="center">
                                No messages available
                            </Typography>
                        </Box>
                    </Box>
                ) : (
                    <TableContainer component={Paper} elevation={0}>
                        <Table size="medium">
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell>Sender</TableCell>
                                    <TableCell>Message</TableCell>
                                    <TableCell>Subject</TableCell>
                                    <TableCell>Has Responded</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    messages.map((message, index) => {
                                        return (
                                            <TableRow hover={true} key={index}>
                                                <TableCell>{index + 1}</TableCell>
                                                <TableCell>{`${message.firstName} ${message.lastName}`}</TableCell>
                                                <TableCell>{message.message}</TableCell>
                                                <TableCell>{message.subject}</TableCell>
                                                <TableCell>{message.responded ? 'Yes' : 'No'}</TableCell>
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
            </Container>
        </Layout>
    )
}

export default MessagesPage;
