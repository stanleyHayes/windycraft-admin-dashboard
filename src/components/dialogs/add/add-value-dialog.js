import {Button, Dialog, DialogActions, DialogContent, Stack, TextField, Typography} from "@mui/material";
import {useState} from "react";

const AddValueDialog = ({open, handleClose, handleValueAdd}) => {
    const [value, setValue] = useState({});
    const [error, setError] = useState({});

    const {title, description} = value;

    const handleValueChange = (event) => {
        setValue({...value, [event.target.name]: event.target.value});
    }

    const handleAddClick = () => {
        if(!title){
            setError({error, title: 'Field Required'});
            return;
        }else {
            setError({error, title: null});
        }

        if(!description){
            setError({error, description: 'Field Required'});
            return;
        }else {
            setError({error, description: null});
        }

        handleValueAdd(value)

        handleClose();
    }

    return (
        <Dialog open={open} onClose={handleClose} fullWidth={true}>
            <DialogContent>
                <Typography variant="h5" gutterBottom={true}>New Value</Typography>
                <form>
                    <Stack direction="column" spacing={2}>
                        <TextField
                            fullWidth={true}
                            margin="none"
                            label="Title"
                            name="title"
                            variant="outlined"
                            error={Boolean(error.title)}
                            helperText={error.title}
                            onChange={handleValueChange}
                            value={title}
                            size="small"
                        />

                        <TextField
                            fullWidth={true}
                            margin="none"
                            label="Description"
                            name="description"
                            variant="outlined"
                            error={Boolean(error.description)}
                            helperText={error.description}
                            onChange={handleValueChange}
                            value={description}
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

export default AddValueDialog;
