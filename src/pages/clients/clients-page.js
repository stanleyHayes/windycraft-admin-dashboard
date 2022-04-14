import Layout from "../../components/layout/layout";
import {Alert, AlertTitle, Box, Button, Container, Divider, Grid, LinearProgress, Typography} from "@mui/material";
import {Add} from "@mui/icons-material";
import {useEffect, useState} from "react";
import AddClientDialog from "../../components/dialogs/add/add-client-dialog";
import {useDispatch, useSelector} from "react-redux";
import {selectClients} from "../../redux/clients/client-reducer";
import Client from "../../components/shared/client";
import {selectAuth} from "../../redux/authentication/auth-reducer";
import {CLIENTS_ACTION_CREATORS} from "../../redux/clients/client-action-creators";

const ClientsPage = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const {clients, clientLoading, clientError} = useSelector(selectClients);

    const {token} = useSelector(selectAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(CLIENTS_ACTION_CREATORS.getClients(token));
    }, [dispatch, token]);

    return (
        <Layout>
            {clientLoading && <LinearProgress color="secondary" variant="query"/>}
            <Container sx={{py: 4}}>
                {
                    clientError &&
                    (
                        <Alert severity="error" variant="standard">
                            <AlertTitle>Error</AlertTitle>
                            <Typography variant="h6" align="center">
                                {clientError}
                            </Typography>
                        </Alert>
                    )
                }
                <Grid spacing={2} container={true} justifyContent="space-between">
                    <Grid item={true} md="auto" xs={12}>
                        <Typography variant="h4">Clients</Typography>
                    </Grid>
                    <Grid item={true} md="auto" xs={12}>
                        <Button
                            onClick={() => setDialogOpen(true)}
                            sx={{
                                fontWeight: 700,
                                textTransform: 'capitalize',
                                backgroundColor: 'secondary.main',
                                color: 'primary.main',
                                '&:hover': {
                                    backgroundColor: 'secondary.dark',
                                    color: 'primary.main'
                                }
                            }}
                            size="medium"
                            startIcon={<Add/>}
                            variant="outlined"
                            fullWidth={true}>
                            Add Client
                        </Button>
                    </Grid>
                </Grid>

                <Divider variant="fullWidth" sx={{my: 2}}/>

                {clients && clients.length === 0 ? (
                        <Box sx={{backgroundColor: 'background.paper'}} py={5}>
                            <Typography variant="body2" align="center">
                                No clients available
                            </Typography>
                        </Box>
                    ) :
                    (
                        <Grid container={true} spacing={2}>
                            {clients && clients.map((client, index) => {
                                return (
                                    <Grid xs={12} md={6} lg={4} item={true} key={index}>
                                        <Client client={client}/>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    )}
                {dialogOpen && <AddClientDialog
                    open={dialogOpen}
                    handleClose={() => setDialogOpen(false)}
                />}
            </Container>
        </Layout>)
}

export default ClientsPage;
