import Layout from "../../components/layout/layout";
import {
    Alert, AlertTitle, Box,
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
import {Add, Delete, Edit, Visibility} from "@mui/icons-material";
import {useEffect, useState} from "react";
import AddServiceDialog from "../../components/dialogs/add/add-service-dialog";
import {useDispatch, useSelector} from "react-redux";
import {selectServices} from "../../redux/services/service-reducer";
import moment from "moment";
import {brown, green, red} from "@mui/material/colors";
import {ADMIN_ACTION_CREATORS} from "../../redux/admins/admin-action-creators";
import {SERVICE_ACTION_CREATORS} from "../../redux/services/service-action-creators";
import {selectAuth} from "../../redux/authentication/auth-reducer";

const ServicesPage = () => {

    const [dialogOpen, setDialogOpen] = useState(false);
    const {services, serviceLoading, serviceError} = useSelector(selectServices);

    const handleDeleteService = () => {
    }

    const handleAddServiceDialog = () => {

    }

    const {token} = useSelector(selectAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(SERVICE_ACTION_CREATORS.getServices(token));
    }, [dispatch, token]);

    return (
        <Layout>
            <Container sx={{py: 4, mt: {md: 8}}}>
                <Grid
                    spacing={2}
                    container={true}
                    justifyContent="space-between"
                    alignItems="center">
                    <Grid item={true} md="auto" xs={12}>
                        <Typography variant="h4">Services</Typography>
                    </Grid>
                    <Grid item={true} md="auto" xs={12}>
                        <Button
                            sx={{
                                textTransform: 'capitalize',
                                backgroundColor: 'secondary.main',
                                color: 'primary.main',
                                fontWeight: 600,
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
                            Add Service
                        </Button>
                    </Grid>
                </Grid>
                <Divider variant="fullWidth" sx={{my: 2}}/>
                {serviceLoading && <LinearProgress variant="query" color="secondary"/>}
                {serviceError && <Alert severity="error"><AlertTitle>{serviceError}</AlertTitle></Alert>}

                {services && services.length === 0 ? (
                    <Box>
                        <TableContainer component={Paper} elevation={1}>
                            <Table size="medium">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>#</TableCell>
                                        <TableCell>Title</TableCell>
                                        <TableCell>Description</TableCell>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                            </Table>
                        </TableContainer>
                        <Box sx={{backgroundColor: 'background.paper'}} py={5}>
                            <Typography variant="body2" align="center">
                                No services available
                            </Typography>
                        </Box>
                    </Box>


                ) : (
                    <TableContainer component={Paper} elevation={1}>
                        <Table size="medium">
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    services.map((service, index) => {
                                            return (
                                                <TableRow hover={true} key={index}>
                                                    <TableCell>{index + 1}</TableCell>
                                                    <TableCell>{service.title}</TableCell>
                                                    <TableCell>{service.description}</TableCell>
                                                    <TableCell>{moment().fromNow()}</TableCell>
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

export default ServicesPage;
