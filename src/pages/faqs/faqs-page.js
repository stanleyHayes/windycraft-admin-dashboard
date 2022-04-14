import Layout from "../../components/layout/layout";
import {
    Alert, AlertTitle, Box,
    Button,
    Container,
    Divider,
    Grid, LinearProgress,
    Paper,
    Table,
    TableBody,
    TableCell, TableContainer,
    TableHead, TableRow,
    Typography
} from "@mui/material";
import {Add, Delete, Edit, Visibility} from "@mui/icons-material";
import {useEffect, useState} from "react";
import AddFAQDialog from "../../components/dialogs/add/add-faq-dialog";
import {useDispatch, useSelector} from "react-redux";
import {selectFAQs} from "../../redux/faqs/faq-reducer";
import {FAQ_ACTION_CREATORS} from "../../redux/faqs/faq-action-creators";
import {selectAuth} from "../../redux/authentication/auth-reducer";

const FAQPage = () => {

    const [dialogOpen, setDialogOpen] = useState(false);
    const {faqs, faqLoading, faqError} = useSelector(selectFAQs);

    const handleDeleteFAQ = () => {
    }

    const handleAddFAQ = faq => {

    }

    const {token} = useSelector(selectAuth);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FAQ_ACTION_CREATORS.getFAQs(token));
    }, [dispatch, token]);


    return (
        <Layout>
            {faqLoading && <LinearProgress color="secondary" variant="query"/>}
            <Container sx={{py: 4, mt: {md: 8}}}>
                {
                    faqError &&
                    (
                        <Alert severity="error" variant="standard">
                            <AlertTitle>Error</AlertTitle>
                            <Typography variant="h6" align="center">
                                {faqError}
                            </Typography>
                        </Alert>
                    )
                }
                <Grid container={true} justifyContent="space-between" spacing={2}>
                    <Grid item={true} xs={12} md="auto">
                        <Typography variant="h4">FAQ</Typography>
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
                            Add FAQ
                        </Button>
                    </Grid>
                </Grid>
                <Divider variant="fullWidth" sx={{my: 2}}/>

                {faqLoading && <LinearProgress variant="query" color="secondary"/>}
                {faqError && <Alert severity="error"><AlertTitle>{faqError}</AlertTitle></Alert>}

                {faqs && faqs.length === 0 ? (
                    <Box>
                        <TableContainer component={Paper}>
                            <Table size="medium">
                                <TableHead>
                                    <TableCell>#</TableCell>
                                    <TableCell>Question</TableCell>
                                    <TableCell>Answer</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableHead>
                            </Table>
                        </TableContainer>
                        <Box sx={{backgroundColor: 'background.paper'}} py={5}>
                            <Typography variant="body2" align="center">
                                No FAQs available
                            </Typography>
                        </Box>
                    </Box>
                ) : (
                    <TableContainer component={Paper}>
                        <Table size="medium">
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell>Question</TableCell>
                                    <TableCell>Answer</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    faqs.map((faq, index) => {
                                            return (
                                                <TableRow hover={true} key={index}>
                                                    <TableCell>{index + 1}</TableCell>
                                                    <TableCell>{faq.question}</TableCell>
                                                    <TableCell>{faq.answer}</TableCell>
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
                                                                <Edit/>
                                                            </Grid>
                                                            <Grid item={true}>
                                                                <Delete
                                                                    onClick={() => handleDeleteFAQ(faq)}/>
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

export default FAQPage;
