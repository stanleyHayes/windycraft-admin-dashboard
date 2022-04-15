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
import {Add, Delete, Edit} from "@mui/icons-material";
import {useEffect, useState} from "react";
import AddServiceDialog from "../../components/dialogs/add/add-service-dialog";
import {useDispatch, useSelector} from "react-redux";
import {selectServices} from "../../redux/services/service-reducer";
import moment from "moment";
import {brown,  red} from "@mui/material/colors";
import {SERVICE_ACTION_CREATORS} from "../../redux/services/service-action-creators";
import {selectAuth} from "../../redux/authentication/auth-reducer";
import UpdateServiceDialog from "../../components/dialogs/update/update-service-dialog";

const ServicesPage = () => {

    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const {services, serviceLoading, serviceError} = useSelector(selectServices);

    const {token} = useSelector(selectAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(SERVICE_ACTION_CREATORS.getServices(token));
    }, [dispatch, token]);

    const handleSelectedService = service => {

    }

    return (
        <Layout>
            {serviceLoading && <LinearProgress variant="query" color="secondary"/>}
            <Container sx={{py: 4, mt: {md: 8}}}>
                {serviceError && <Alert severity="error"><AlertTitle>{serviceError}</AlertTitle></Alert>}
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

                {services && services.length === 0 ? (
                    <Box>
                        <TableContainer component={Paper} elevation={0}>
                            <Table size="medium">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>#</TableCell>
                                        <TableCell>Title</TableCell>
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
                    <TableContainer component={Paper}>
                        <Table size="medium">
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell>Title</TableCell>
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
                                                    <TableCell>{moment(service.createdAt).fromNow()}</TableCell>
                                                    <TableCell>
                                                        <Grid
                                                            spacing={1}
                                                            container={true}
                                                            justifyContent="flex-start"
                                                            alignItems="center">
                                                            <Grid item={true}>
                                                                <Edit
                                                                    onClick={() => setSelectedService(service)}
                                                                    sx={{
                                                                        color: brown['400'],
                                                                        fontSize: 20,
                                                                        cursor: 'pointer'
                                                                    }}/>
                                                            </Grid>
                                                            <Grid item={true}>
                                                                <Delete
                                                                    sx={{
                                                                        color: red['400'],
                                                                        fontSize: 20,
                                                                        cursor: 'pointer'
                                                                    }}/>
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

                {
                    Boolean(selectedService) &&
                    <UpdateServiceDialog
                        selectedService={selectedService}
                        open={Boolean(selectedService)}
                        handleClose={() => setSelectedService(null)}
                    />
                }
            </Container>
        </Layout>
    )
}

export default ServicesPage;
