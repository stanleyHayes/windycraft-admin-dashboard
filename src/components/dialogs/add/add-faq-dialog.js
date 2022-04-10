import {Button, Dialog, DialogActions, DialogContent, Stack, TextField, Typography} from "@mui/material";
import {useState} from "react";

const AddFAQDialog = ({open, handleClose, handleValueAdd}) => {
    const [faq, setFAQ] = useState({});
    const [error, setError] = useState({});

    const {question, answer} = faq;

    const handleValueChange = (event) => {
        setFAQ({...faq, [event.target.name]: event.target.value});
    }

    const handleAddClick = () => {
        if(!question){
            setError({error, question: 'Field Required'});
            return;
        }else {
            setError({error, question: null});
        }

        if(!answer){
            setError({error, answer: 'Field Required'});
            return;
        }else {
            setError({error, answer: null});
        }

        handleValueAdd(faq);

        handleClose();
    }

    return (
        <Dialog open={open} onClose={handleClose} fullWidth={true}>
            <DialogContent>
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
                            size="small"
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
                            size="small"
                        />

                        <Button
                            fullWidth={true}
                            onClick={handleAddClick}
                            size="large"
                            sx={{
                                color: 'white',
                                backgroundColor: 'secondary.main',
                                '&:hover': {
                                    borderColor: 'secondary.light',
                                    backgroundColor: 'secondary.dark',
                                }
                            }}
                            variant="outlined">Add</Button>
                    </Stack>
                </form>
            </DialogContent>
            <DialogActions>
                <Button
                    sx={{
                        color: 'text.primary',
                        borderWidth: 1,
                        borderColor: 'secondary.main',
                        backgroundColor: 'primary.main',
                        '&:hover': {
                            borderColor: 'secondary.light',
                            backgroundColor: 'secondary.dark',
                        }
                    }}
                    onClick={handleClose}
                    size="small"
                    variant="outlined">Close</Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddFAQDialog;
