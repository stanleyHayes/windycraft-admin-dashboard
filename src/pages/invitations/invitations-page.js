import Layout from "../../components/layout/layout";
import {
    Alert,
    AlertTitle,
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
    TableRow,
    Typography
} from "@mui/material";
import {Add, Delete, Edit} from "@mui/icons-material";
import {useState} from "react";
import AddFAQDialog from "../../components/dialogs/add/add-faq-dialog";
import {useSelector} from "react-redux";
import {selectInvitations} from "../../redux/invitations/invitation-reducer";
import moment from "moment";

const InvitationsPage = () => {

    const [dialogOpen, setDialogOpen] = useState(false);
    const {invitations, invitationLoading, invitationError} = useSelector(selectInvitations);

    const handleDeleteFAQ = () => {
    }

    const handleAddFAQ = faq => {

    }

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

                <TableContainer component={Paper}>
                    <Table size="medium">
                        <TableHead>
                            <TableCell>#</TableCell>
                            <TableCell>Inviter</TableCell>
                            <TableCell>Invitee</TableCell>
                            <TableCell>Code</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Expiry Created</TableCell>
                            <TableCell>Date Created</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableHead>
                        <TableBody>
                            {invitations && invitations.length === 0 ? (
                                <TableRow>
                                    <TableCell align="center">No Invitations Available</TableCell>
                                </TableRow>
                            ) : (
                                invitations.map((invitation, index) => {
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
                                                    justifyContent="flex-end"
                                                    alignItems="center">
                                                    <Grid item={true}>
                                                        <Edit/>
                                                    </Grid>
                                                    <Grid item={true}>
                                                        <Delete
                                                            onClick={() => handleDeleteFAQ(invitation)}/>
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

                {
                    dialogOpen &&
                    <AddFAQDialog
                        handleValueAdd={handleAddFAQ}
                        open={dialogOpen}
                        handleClose={() => setDialogOpen(false)}
                    />
                }
            </Container>
        </Layout>
    )
}

export default InvitationsPage;
