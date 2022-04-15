import {
    Alert, AlertTitle,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Grid,
    LinearProgress,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FAQ_ACTION_CREATORS} from "../../../redux/faqs/faq-action-creators";
import {selectAuth} from "../../../redux/authentication/auth-reducer";
import {selectFAQs} from "../../../redux/faqs/faq-reducer";

const UpdateFAQDialog = ({open, handleClose, selectedFAQ}) => {
    const [faq, setFAQ] = useState({...selectedFAQ});
    const [error, setError] = useState({});

    const {question, answer} = faq;

    const handleValueChange = (event) => {
        setFAQ({...faq, [event.target.name]: event.target.value});
    }

    const dispatch = useDispatch();
    const {token} = useSelector(selectAuth);
    const handleAddClick = () => {
        if (!question) {
            setError({error, question: 'Field Required'});
            return;
        } else {
            setError({error, question: null});
        }

        if (!answer) {
            setError({error, answer: 'Field Required'});
            return;
        } else {
            setError({error, answer: null});
        }
        dispatch(FAQ_ACTION_CREATORS.updateFAQ(faq, faq._id, token, handleClose))
    }

    const {faqLoading, faqError} = useSelector(selectFAQs);

    return (
        <Dialog open={open} onClose={handleClose} fullWidth={false}>
            {faqLoading && <LinearProgress variant="query" color="secondary"/>}

            <DialogContent>
                {faqError && <Alert severity="error"><AlertTitle>{faqError}</AlertTitle></Alert>}
                <Typography
                    sx={{textTransform: 'uppercase'}}
                    align="center"
                    variant="h5"
                    gutterBottom={true}>
                    New FAQ
                </Typography>
                <form>
                    <Stack direction="column" spacing={2}>
                        <TextField
                            fullWidth={true}
                            margin="none"
                            label="Question"
                            name="question"
                            variant="outlined"
                            error={Boolean(error.question)}
                            helperText={error.question}
                            onChange={handleValueChange}
                            value={question}
                            minRows={2}
                            multiline={true}
                            size="medium"
                        />

                        <TextField
                            fullWidth={true}
                            margin="none"
                            label="Answer"
                            name="answer"
                            variant="outlined"
                            error={Boolean(error.answer)}
                            helperText={error.answer}
                            onChange={handleValueChange}
                            value={answer}
                            multiline={true}
                            minRows={4}
                            size="medium"
                        />
                    </Stack>
                </form>
            </DialogContent>
            <DialogActions>
                <Grid container={true} spacing={1} alignItems="center">
                    <Grid item={true} xs={12} md={6}>
                        <Button
                            sx={{
                                textTransform: 'capitalize',
                                color: 'secondary.main',
                                borderWidth: 2,
                                borderColor: 'secondary.main',
                                backgroundColor: 'primary.main',
                                '&:hover': {
                                    borderColor: 'secondary.light',
                                    backgroundColor: 'secondary.dark',
                                }
                            }}
                            fullWidth={true}
                            onClick={handleClose}
                            size="large"
                            variant="outlined">Close</Button>
                    </Grid>
                    <Grid item={true} xs={12} md={6}>
                        <Button
                            onSubmit={handleAddClick}
                            fullWidth={true}
                            onClick={handleAddClick}
                            size="large"
                            sx={{
                                textTransform: 'capitalize',
                                color: 'black',
                                backgroundColor: 'secondary.main',
                                '&:hover': {
                                    borderColor: 'secondary.light',
                                    backgroundColor: 'secondary.dark',
                                }
                            }}
                            variant="outlined">Update</Button>
                    </Grid>
                </Grid>
            </DialogActions>
        </Dialog>
    )
}

export default UpdateFAQDialog;
