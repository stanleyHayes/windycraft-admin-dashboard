import {
    Alert, AlertTitle,
    Box,
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
import ImageUploader from "react-images-upload";
import {CLIENTS_ACTION_CREATORS} from "../../../redux/clients/client-action-creators";
import {useDispatch, useSelector} from "react-redux";
import {selectClients} from "../../../redux/clients/client-reducer";
import {selectAuth} from "../../../redux/authentication/auth-reducer";

const UpdateClientDialog = ({open, handleClose, client}) => {
    const [updateClient, setUpdateClient] = useState({...client});
    const [error, setError] = useState({});

    const {name, logo} = updateClient;

    const handleValueChange = (event) => {
        setUpdateClient({...updateClient, [event.target.name]: event.target.value});
    }
    const {clientLoading, clientError} = useSelector(selectClients);
    const {token} = useSelector(selectAuth);
    const dispatch = useDispatch();

    const handleAddClick = () => {
        if (!name) {
            setError({error, name: 'Field Required'});
            return;
        } else {
            setError({error, name: null});
        }

        if (!logo) {
            setError({error, logo: 'Field Required'});
            return;
        } else {
            setError({error, logo: null});
        }
        dispatch(CLIENTS_ACTION_CREATORS.createClient(updateClient, token, handleClose));
    }

    const handleImageSelect = (files, pictures) => {
        setUpdateClient({...updateClient, logo: pictures[0]});
    }

    return (
        <Dialog open={open} onClose={handleClose} fullWidth={false}>
            {clientLoading && <LinearProgress variant="query" color="secondary"/>}
            <DialogContent>
                {clientError && <Alert severity="error"><AlertTitle>{clientError}</AlertTitle></Alert>}
                <Typography
                    sx={{textTransform: 'uppercase'}}
                    align="center"
                    variant="h5"
                    gutterBottom={true}>
                    Update Client
                </Typography>
                <form>
                    <Stack direction="column" spacing={2}>

                        <Box>
                            <ImageUploader
                                onChange={handleImageSelect}
                                fileContainerStyle={{
                                    backgroundColor: '#222222'
                                }}
                                labelStyles={{color: '#f9a34f'}}
                                withIcon={true}
                                label="Accepted jpg|png|jpeg"
                                withLabel={true}
                                withPreview={true}
                                buttonText="Choose Client Logo"
                                imgExtension={['.jpg', '.png', '.jpeg']}
                                singleImage={true}
                                name="logo"
                                defaultImage={client.logo}
                                buttonStyles={{
                                    backgroundColor: '#000000',
                                    color: '#f9a34f',
                                    borderRadius: 8
                                }}
                            />
                        </Box>

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
                            color="secondary"
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
                                fontWeight: 'bold',
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

export default UpdateClientDialog;
