import Layout from "../../components/layout/layout";
import {
    Alert,
    AlertTitle, Box,
    Button,
    Container,
    Divider,
    Grid,
    LinearProgress, Paper, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow,
    Typography
} from "@mui/material";
import {Add, Delete, Edit} from "@mui/icons-material";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectValues} from "../../redux/values/value-reducer";
import {brown, red} from "@mui/material/colors";
import AddValueDialog from "../../components/dialogs/add/add-value-dialog";
import UpdateValueDialog from "../../components/dialogs/update/update-value-dialog";
import {selectAuth} from "../../redux/authentication/auth-reducer";
import {VALUES_ACTION_CREATORS} from "../../redux/values/value-action-creators";

const ValuesPage = () => {

    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(false);
    const {values, valueError, valueLoading} = useSelector(selectValues);

    const {token} = useSelector(selectAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(VALUES_ACTION_CREATORS.getValues(token));
    }, [dispatch, token]);

    return (
        <Layout>
            {valueLoading && <LinearProgress variant="query" color="secondary"/>}
            <Container sx={{py: 4}}>
                {valueError && <Alert severity="error"><AlertTitle>{valueError}</AlertTitle></Alert>}
                <Grid container={true} justifyContent="space-between" spacing={2}>
                    <Grid item={true} md="auto" xs={12}>
                        <Typography variant="h4">Values</Typography>
                    </Grid>
                    <Grid item={true} md="auto" xs={12}>
                        <Button
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
                            onClick={() => setDialogOpen(true)}
                            size="medium"
                            startIcon={<Add/>}
                            variant="outlined"
                            fullWidth={true}>
                            Add Value
                        </Button>
                    </Grid>
                </Grid>
                <Divider variant="fullWidth" sx={{my: 2}}/>

                {values && values.length === 0 ? (
                    <Box>
                        <TableContainer elevation={0} component={Paper}>
                            <Table size="medium">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>#</TableCell>
                                        <TableCell>Title</TableCell>
                                        <TableCell>Description</TableCell>
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
                    <TableContainer elevation={0} component={Paper}>
                        <Table size="medium">
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {values && values.map((value, index) => {
                                    return (
                                        <TableRow hover={true} key={index}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{value.title}</TableCell>
                                            <TableCell>{value.description}</TableCell>
                                            <TableCell>
                                                <Grid
                                                    container={true}
                                                    justifyContent="flex-start"
                                                    alignItems="center">
                                                    <Grid item={true}>
                                                        <Edit
                                                            onClick={() => setSelectedValue(value)}
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
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}

                {
                    dialogOpen &&
                    <AddValueDialog
                        open={dialogOpen}
                        handleClose={() => setDialogOpen(false)}
                    />
                }

                {
                    Boolean(selectedValue) &&
                    <UpdateValueDialog
                        selectedValue={selectedValue}
                        open={Boolean(selectedValue)}
                        handleClose={() => setSelectedValue(null)}
                    />
                }
            </Container>
        </Layout>
    )
}

export default ValuesPage;
