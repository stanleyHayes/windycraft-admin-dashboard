import {Button, Dialog, DialogActions, DialogContent, Stack, TextField, Typography} from "@mui/material";
import {useState} from "react";

const AddClientDialog = ({open, handleClose, handleValueAdd}) => {
    const [faq, setFAQ] = useState({});
    const [error, setError] = useState({});

    const {name, image} = faq;

    const handleValueChange = (event) => {
        setFAQ({...faq, [event.target.name]: event.target.value});
    }

    const handleAddClick = () => {
        if (!name) {
            setError({error, question: 'Field Required'});
            return;
        } else {
            setError({error, question: null});
        }

        if (!image) {
            setError({error, answer: 'Field Required'});
            return;
        } else {
            setError({error, answer: null});
        }

        handleValueAdd(faq)

        handleClose();
    }

    return (
        <Dialog open={open} onClose={handleClose} fullWidth={true}>
            <DialogContent>
                <Typography variant="h5" gutterBottom={true}>New Client</Typography>
                <form>
                    <Stack direction="column" spacing={2}>
                        <TextField
                            fullWidth={true}
                            margin="none"
                            label="Name"
                            name="name"
                            variant="outlined"
                            error={Boolean(error.name)}
                            helperText={error.name}
                            onChange={handleValueChange}
                            value={name}
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

export default AddClientDialog;
