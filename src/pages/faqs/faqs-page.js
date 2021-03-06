import Layout from "../../components/layout/layout";
import {
    Alert,
    AlertTitle,
    Box,
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
import AddFAQDialog from "../../components/dialogs/add/add-faq-dialog";
import {useDispatch, useSelector} from "react-redux";
import {selectFAQs} from "../../redux/faqs/faq-reducer";
import {FAQ_ACTION_CREATORS} from "../../redux/faqs/faq-action-creators";
import {selectAuth} from "../../redux/authentication/auth-reducer";
import {orange, red} from "@mui/material/colors";
import UpdateFAQDialog from "../../components/dialogs/update/update-faq-dialog";

const FAQPage = () => {

    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedFAQ, setSelectedFAQ] = useState(false);
    const {faqs, faqsLoading, faqError} = useSelector(selectFAQs);


    const {token} = useSelector(selectAuth);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FAQ_ACTION_CREATORS.getFAQs(token));
    }, [dispatch, token]);


    return (
        <Layout>
            {faqsLoading && <LinearProgress color="secondary" variant="query"/>}
            <Container sx={{py: 4, mt: {md: 8}}}>
                {faqError && (<Alert severity="error" variant="standard">
                    <AlertTitle>{faqError}</AlertTitle>
                </Alert>)}
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
                                    backgroundColor: 'secondary.dark', color: 'primary.main'
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

                {faqs && faqs.length === 0 ? (<Box>
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
                        </Table>
                    </TableContainer>
                    <Box sx={{backgroundColor: 'background.paper'}} py={5}>
                        <Typography variant="body2" align="center">
                            No FAQs available
                        </Typography>
                    </Box>
                </Box>) : (<TableContainer component={Paper}>
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
                            {faqs && faqs.map((faq, index) => {
                                return (<TableRow hover={true} key={index}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{faq.question}</TableCell>
                                    <TableCell>{faq.answer}</TableCell>
                                    <TableCell>
                                        <Grid
                                            container={true}
                                            justifyContent="space-between"
                                            alignItems="center">
                                            <Grid item={true}>
                                                <Tooltip title="Edit FAQ">
                                                <Edit
                                                    onClick={() => setSelectedFAQ(faq)}
                                                    sx={{
                                                        fontSize: 20,
                                                        cursor: 'pointer',
                                                        backgroundColor: orange[100],
                                                        padding: 0.4,
                                                        borderRadius: 1,
                                                        color: orange[700]
                                                    }}/>
                                                </Tooltip>
                                            </Grid>
                                            <Grid item={true}>
                                                <Tooltip title="Delete FAQ">
                                                <Delete
                                                    sx={{
                                                        fontSize: 20,
                                                        cursor: 'pointer',
                                                        backgroundColor: red[100],
                                                        padding: 0.4,
                                                        borderRadius: 1,
                                                        color: red[700]
                                                    }}/>
                                                </Tooltip>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                </TableRow>)
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>)}

                {dialogOpen && <AddFAQDialog
                    open={dialogOpen}
                    handleClose={() => setDialogOpen(false)}
                />}

                {Boolean(selectedFAQ) && <UpdateFAQDialog
                    selectedFAQ={selectedFAQ}
                    open={Boolean(selectedFAQ)}
                    handleClose={() => setSelectedFAQ(null)}
                />}
            </Container>
        </Layout>)
}

export default FAQPage;
