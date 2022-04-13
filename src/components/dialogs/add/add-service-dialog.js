import {Button, Dialog, DialogActions, DialogContent, Grid, Stack, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {Grade} from "@mui/icons-material";

const AddServiceDialog = ({open, handleClose, handleServiceAdd}) => {
    const [service, setService] = useState({});
    const [error, setError] = useState({});

    const {title, description} = service;

    const handleServiceChange = (event) => {
        setService({...service, [event.target.name]: event.target.value});
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

        handleServiceAdd(service)

        handleClose();
    }

    return (
        <Dialog open={open} onClose={handleClose} fullWidth={false}>
            <DialogContent>
                <Typography
                    mb={2}
                    sx={{textTransform: 'uppercase'}}
                    align="center"
                    variant="h5"
                    gutterBottom={true}>
                    New Service
                </Typography>
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
                            onChange={handleServiceChange}
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
                            onChange={handleServiceChange}
                            value={description}
                            multiline={true}
                            minRows={4}
                            size="small"
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
                            variant="outlined">Add</Button>
                    </Grid>
                </Grid>
            </DialogActions>
        </Dialog>
    )
}

export default AddServiceDialog;
