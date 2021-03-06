import Layout from "../../components/layout/layout";
import {
    Alert,
    AlertTitle, Box,
    Button,
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
    TableRow, Tooltip,
    Typography
} from "@mui/material";
import {Add, Delete, Edit} from "@mui/icons-material";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectInvitations} from "../../redux/invitations/invitation-reducer";
import moment from "moment";
import InviteAdminDialog from "../../components/dialogs/add/admin-invitation-dialog";
import {selectAuth} from "../../redux/authentication/auth-reducer";
import {INVITATION_ACTION_CREATORS} from "../../redux/invitations/invitation-action-creators";
import {orange} from "@mui/material/colors";

const InvitationsPage = () => {

    const [dialogOpen, setDialogOpen] = useState(false);
    const {invitations, invitationLoading, invitationError} = useSelector(selectInvitations);

    const {token} = useSelector(selectAuth);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(INVITATION_ACTION_CREATORS.getInvitations(token));
    }, [dispatch, token]);


    return (
        <Layout>
            <Container
                sx={{
                    py: 4
                }}>
                <Grid container={true} justifyContent="space-between" spacing={2}>
                    <Grid item={true} xs={12} md="auto">
                        <Typography variant="h4">Invitations</Typography>
                    </Grid>

                    <Grid item={true} xs={12} md="auto">
                        <Button
                            sx={{
                                textTransform: 'capitalize',
                                backgroundColor: 'secondary.main',
                                color: 'primary.main',
                                fontWeight: 700,
                                '&:hover': {
                                    backgroundColor: 'secondary.dark',
                                    color: 'primary.main'
                                }
                            }}
                            onClick={() => setDialogOpen(true)}
                            size="medium"
                            startIcon={<Add/>}
                            variant="outlined"
                            fullWidth={true}>
                            Invite Admin
                        </Button>
                    </Grid>
                </Grid>
                <Divider variant="fullWidth" sx={{my: 2}}/>

                {invitationLoading && <LinearProgress variant="query" color="secondary"/>}
                {invitationError && <Alert severity="error"><AlertTitle>{invitationError}</AlertTitle></Alert>}

                {invitations && invitations.length === 0 ? (
                    <Box>
                        <TableContainer component={Paper}>
                            <Table size="medium">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>#</TableCell>
                                        <TableCell>Inviter</TableCell>
                                        <TableCell>Invitee</TableCell>
                                        <TableCell>Code</TableCell>
                                        <TableCell>Status</TableCell>
                                        <TableCell>Expiry Created</TableCell>
                                        <TableCell>Date Created</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                            </Table>
                        </TableContainer>
                        <Box sx={{backgroundColor: 'background.paper'}} py={5}>
                            <Typography variant="body2" align="center">
                                No invitations available
                            </Typography>
                        </Box>
                    </Box>
                ) : (
                    <TableContainer component={Paper}>
                        <Table size="medium">
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell>Inviter</TableCell>
                                    <TableCell>Invitee</TableCell>
                                    <TableCell>Code</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Expiry Created</TableCell>
                                    <TableCell>Date Created</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {invitations && invitations.map((invitation, index) => {
                                        return (
                                            <TableRow hover={true} key={index}>
                                                <TableCell>{index + 1}</TableCell>
                                                <TableCell>{invitation.inviter.name}</TableCell>
                                                <TableCell>{invitation.email}</TableCell>
                                                <TableCell>{invitation.code}</TableCell>
                                                <TableCell>{invitation.status}</TableCell>
                                                <TableCell>{moment(invitation.expiryDate).fromNow()}</TableCell>
                                                <TableCell>{moment(invitation.updatedAt).fromNow()}</TableCell>
                                                <TableCell>
                                                    <Grid
                                                        container={true}
                                                        justifyContent="space-between"
                                                        alignItems="center">
                                                        <Grid item={true}>
                                                            <Tooltip title="Edit Invitation">
                                                                <Edit
                                                                    sx={{
                                                                        color: orange['700'],
                                                                        backgroundColor: orange[100],
                                                                        padding: 0.4,
                                                                        borderRadius: 1,
                                                                        fontSize: 20,
                                                                        cursor: 'pointer'
                                                                    }}/>
                                                            </Tooltip>
                                                        </Grid>
                                                        <Grid item={true}>
                                                            <Tooltip title="Revoke Invitation">
                                                                <Delete
                                                                    sx={{
                                                                        color: orange['700'],
                                                                        backgroundColor: orange[100],
                                                                        padding: 0.4,
                                                                        borderRadius: 1,
                                                                        fontSize: 20,
                                                                        cursor: 'pointer'
                                                                    }}
                                                                />
                                                            </Tooltip>
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
                    <InviteAdminDialog
                        open={dialogOpen}
                        handleClose={() => setDialogOpen(false)}
                    />
                }
            </Container>
        </Layout>
    )
}

export default InvitationsPage;
