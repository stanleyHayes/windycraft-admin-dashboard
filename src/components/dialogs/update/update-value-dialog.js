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
import {selectValues} from "../../../redux/values/value-reducer";
import {selectAuth} from "../../../redux/authentication/auth-reducer";
import {VALUES_ACTION_CREATORS} from "../../../redux/values/value-action-creators";

const UpdateValueDialog = ({open, handleClose, selectedValue}) => {
    const [value, setValue] = useState({...selectedValue});
    const [error, setError] = useState({});

    const {title} = value;

    const handleValueChange = (event) => {
        setValue({...value, [event.target.name]: event.target.value});
    }

    const dispatch = useDispatch();
    const {token} = useSelector(selectAuth);

    const handleAddClick = () => {
        if (!title) {
            setError({error, title: 'Field Required'});
            return;
        } else {
            setError({error, title: null});
        }
        dispatch(VALUES_ACTION_CREATORS.createValue(value, token, handleClose));
    }

    const {valueError, valueLoading} = useSelector(selectValues);

    return (
        <Dialog open={open} onClose={handleClose} fullWidth={false}>
            {valueLoading && <LinearProgress variant="query" color="secondary"/>}
            <DialogContent>
                {valueError && <Alert severity="error"><AlertTitle>{valueError}</AlertTitle></Alert>}
                <Typography
                    sx={{textTransform: 'uppercase'}}
                    align="center"
                    variant="h5"
                    gutterBottom={true}>
                    Update Value
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
                            onChange={handleValueChange}
                            value={title}
                            size="medium"
                            minRows={3}
                            multiline={true}
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

export default UpdateValueDialog;
