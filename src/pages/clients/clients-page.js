import Layout from "../../components/layout/layout";
import {Box, Button, Container, Divider, Grid, Typography} from "@mui/material";
import {Add} from "@mui/icons-material";
import {useState} from "react";
import AddClientDialog from "../../components/dialogs/add/add-client-dialog";
import {useSelector} from "react-redux";
import {selectClients} from "../../redux/clients/client-reducer";
import Client from "../../components/shared/client";

const ClientsPage = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const {clients, clientLoading, clientError} = useSelector(selectClients);

    return (<Layout>
            <Container
                sx={{
                    py: 4
                }}>
                <Grid container={true} justifyContent="space-between">
                    <Grid item={true} md="auto" xs={12}>
                        <Typography variant="h4">Clients</Typography>
                    </Grid>
                    <Grid item={true} md="auto" xs={12}>
                        <Button
                            onClick={() => setDialogOpen(true)}
                            sx={{
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

                <Grid container={true} spacing={2}>
                    {clients && clients.length === 0 ? (<Box>
                            <Typography variant="h6" align="center">
                                No Clients Available
                            </Typography>
                        </Box>) : (clients.map((client, index) => {
                            return (<Grid xs={12} md={6} lg={4} item={true} hover={true} key={index}>
                                    <Client client={client}/>
                                </Grid>)
                        }))}
                </Grid>

                {dialogOpen && <AddClientDialog
                    open={dialogOpen}
                    handleClose={() => setDialogOpen(false)}
                />}
            </Container>
        </Layout>)
}

export default ClientsPage;
