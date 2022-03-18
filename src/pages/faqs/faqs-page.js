import Layout from "../../components/layout/layout";
import {
    Alert, AlertTitle,
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
import {useState} from "react";
import AddFAQDialog from "../../components/dialogs/add/add-faq-dialog";
import {useSelector} from "react-redux";
import {selectFAQs} from "../../redux/faqs/faq-reducer";

const FAQPage = () => {

    const [dialogOpen, setDialogOpen] = useState(false);
    const {faqs, faqLoading, faqError} = useSelector(selectFAQs);

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
                        <Typography variant="h4">FAQ</Typography>
                    </Grid>

                    <Grid item={true} xs={12} md="auto">
                        <Button
                            sx={{
                                backgroundColor: 'secondary.main',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'secondary.dark',
                                    color: 'white'
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

                <TableContainer component={Paper}>
                    <Table size="medium">
                        <TableHead>
                            <TableCell>#</TableCell>
                            <TableCell>Question</TableCell>
                            <TableCell>Answer</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableHead>
                        <TableBody>
                            {faqs && faqs.length === 0 ? (
                                <TableRow>
                                    <TableCell align="center">No FAQs Available</TableCell>
                                </TableRow>
                            ): (
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
                                                        <Edit />
                                                    </Grid>
                                                    <Grid item={true}>
                                                        <Delete
                                                            onClick={() => handleDeleteFAQ(faq)} />
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

export default FAQPage;
