import Layout from "../../components/layout/layout";
import {
    Alert, AlertTitle,
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
import {useState} from "react";
import {useSelector} from "react-redux";
import {selectMessages} from "../../redux/messages/messages-reducer";
import {brown, green, red} from "@mui/material/colors";

const PermissionsPage = () => {

    const [status, setStatus] = useState("ALL");
    const {messages, messageLoading, messageError} = useSelector(selectMessages);
    const handleStatusChange = (event, status) => {
        setStatus(status);
    }

    const handleDeleteMessage = () => {
    }

    const handleAddServiceMessage = () => {

    }

    return (
        <Layout>
            <Container
                sx={{
                    py: 4
                }}>
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

                <TableContainer component={Paper}>
                    <Table size="medium">
                        <TableHead>
                            <TableCell>#</TableCell>
                            <TableCell>Sender</TableCell>
                            <TableCell>Message</TableCell>
                            <TableCell>Subject</TableCell>
                            <TableCell>Has Responded</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableHead>
                        <TableBody>
                            {messages && messages.length === 0 ? (
                                <TableRow>
                                    <TableCell align="center">No Messages Available</TableCell>
                                </TableRow>
                            ) : (
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
                                })
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Container>
        </Layout>
    )
}

export default PermissionsPage;
