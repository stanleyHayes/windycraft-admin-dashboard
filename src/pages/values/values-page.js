import Layout from "../../components/layout/layout";
import {
    Alert,
    AlertTitle,
    Button,
    Container,
    Divider,
    Grid,
    LinearProgress, Paper, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow,
    Typography
} from "@mui/material";
import {Add, Delete, Edit, Visibility} from "@mui/icons-material";
import AddServiceDialog from "../../components/dialogs/add/add-service-dialog";
import {useState} from "react";
import {useSelector} from "react-redux";
import {selectValues} from "../../redux/values/value-reducer";

const ValuesPage = () => {

    const [dialogOpen, setDialogOpen] = useState(false);
    const {values, valueError, valueLoading} = useSelector(selectValues);

    return (
        <Layout>
            <Container
                sx={{
                    py: 4
                }}>
                <Grid container={true} justifyContent="space-between">
                    <Grid item={true} md="auto" xs={12}>
                        <Typography variant="h4">Values</Typography>
                    </Grid>
                    <Grid item={true} md="auto" xs={12}>
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
                            Add Value
                        </Button>
                    </Grid>
                </Grid>
                <Divider variant="fullWidth" sx={{my: 2}}/>

                {valueLoading && <LinearProgress variant="query" color="secondary"/>}
                {valueError && <Alert severity="error"><AlertTitle>{valueError}</AlertTitle></Alert>}

                <TableContainer component={Paper}>
                    <Table size="medium">
                        <TableHead>
                            <TableCell>#</TableCell>
                            <TableCell>Question</TableCell>
                            <TableCell>Answer</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableHead>
                        <TableBody>
                            {values && values.length === 0 ? (
                                <TableRow>
                                    <TableCell align="center">No Values Available</TableCell>
                                </TableRow>
                            ): (
                                values.map((value, index) => {
                                    return (
                                        <TableRow hover={true} key={index}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{value.title}</TableCell>
                                            <TableCell>{value.description}</TableCell>
                                            <TableCell>
                                                <Grid
                                                    container={true}
                                                    justifyContent="space-between"
                                                    alignItems="center">
                                                    <Grid item={true}>
                                                        <Visibility

                                                        />
                                                    </Grid>
                                                    <Grid item={true}>
                                                        <Edit />
                                                    </Grid>
                                                    <Grid item={true}>
                                                        <Delete />
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
                    <AddServiceDialog
                        open={dialogOpen}
                        handleClose={() => setDialogOpen(false)}
                    />
                }
            </Container>
        </Layout>
    )
}

export default ValuesPage;
