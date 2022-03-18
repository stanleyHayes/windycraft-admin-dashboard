import Layout from "../../components/layout/layout";
import {
    Avatar,
    Button,
    Container,
    Divider,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {Add, Delete, Edit, Visibility} from "@mui/icons-material";
import {useState} from "react";
import AddClientDialog from "../../components/dialogs/add/add-client-dialog";
import {brown, green, red} from "@mui/material/colors";
import {useSelector} from "react-redux";
import {selectClients} from "../../redux/clients/client-reducer";

const ClientsPage = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const {clients, clientLoading, clientError} = useSelector(selectClients);

    return (
        <Layout>
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
                                backgroundColor: 'secondary.main',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'secondary.dark',
                                    color: 'white'
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

                <TableContainer component={Paper}>
                    <Table size="medium">
                        <TableHead>
                            <TableCell>#</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableHead>
                        <TableBody>
                            {clients && clients.length === 0 ? (
                                <TableRow>
                                    <TableCell align="center">No Clients Available</TableCell>
                                </TableRow>
                            ) : (
                                clients.map((client, index) => {
                                    return (
                                        <TableRow hover={true} key={index}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>
                                                <Avatar
                                                    sx={{objectFit: 'cover'}}/>
                                            </TableCell>
                                            <TableCell scope="row">{client.name}</TableCell>
                                            <TableCell>
                                                <Grid
                                                    container={true}
                                                    justifyContent="flex-end"
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

                {
                    dialogOpen &&
                    <AddClientDialog
                        open={dialogOpen}
                        handleClose={() => setDialogOpen(false)}
                    />
                }
            </Container>
        </Layout>
    )
}

export default ClientsPage;
