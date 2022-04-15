import {
    Alert, AlertTitle,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Grid,
    LinearProgress,
    TextField,
    Typography
} from "@mui/material";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {SERVICE_ACTION_CREATORS} from "../../../redux/services/service-action-creators";
import {selectAuth} from "../../../redux/authentication/auth-reducer";
import {selectServices} from "../../../redux/services/service-reducer";

const UpdateServiceDialog = ({open, handleClose, selectedService}) => {
    const [service, setService] = useState({...selectedService});
    const [error, setError] = useState({});

    const {title} = service;

    const dispatch = useDispatch();
    const {token} = useSelector(selectAuth);
    const {serviceLoading, serviceError} = useSelector(selectServices);

    const handleServiceChange = (event) => {
        setService({...service, [event.target.name]: event.target.value});
    }

    const handleAddClick = () => {
        if (!title) {
            setError({error, title: 'Field Required'});
            return;
        } else {
            setError({error, title: null});
        }
        dispatch(SERVICE_ACTION_CREATORS.updateService(service, service._id, token, handleClose));
    }

    return (
        <Dialog open={open} onClose={handleClose} fullWidth={false}>
            {serviceLoading && <LinearProgress variant="query" color="secondary"/>}
            <DialogContent>
                {serviceError && <Alert severity="error"><AlertTitle>{serviceError}</AlertTitle></Alert>}
                <Typography
                    mb={2}
                    sx={{textTransform: 'uppercase'}}
                    align="center"
                    variant="h5"
                    gutterBottom={true}>
                    Update Service
                </Typography>
                <form onSubmit={handleAddClick}>
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
                        size="medium"
                        multiline={true}
                        minRows={3}
                    />
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
                            variant="outlined">Cancel</Button>
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

export default UpdateServiceDialog;
