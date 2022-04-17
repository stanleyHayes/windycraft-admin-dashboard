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
import {useDispatch, useSelector} from "react-redux";
import {selectAuth} from "../../../redux/authentication/auth-reducer";
import {selectTeams} from "../../../redux/team/team-reducer";
import {TEAMS_ACTION_CREATORS} from "../../../redux/team/team-action-creators";

const AddFAQDialog = ({open, handleClose}) => {
    const [teamMember, setTeamMember] = useState({});
    const [error, setError] = useState({});

    const {name, role, facebook, twitter, instagram} = teamMember;

    const handleValueChange = (event) => {
        setTeamMember({...teamMember, [event.target.name]: event.target.value});
    }

    const {teamLoading, teamError} = useSelector(selectTeams);
    const {token} = useSelector(selectAuth);
    const dispatch = useDispatch();

    const handleAddClick = () => {
        if (!name) {
            setError({error, name: 'Field Required'});
            return;
        } else {
            setError({error, name: null});
        }

        if (!role) {
            setError({error, role: 'Field Required'});
            return;
        } else {
            setError({error, role: null});
        }
        dispatch(TEAMS_ACTION_CREATORS.createTeam(teamMember, token, handleClose));

    }


    const handleImageSelect = (files, pictures) => {
        setTeamMember({...teamMember, image: pictures[0]});
    }

    return (
        <Dialog open={open} onClose={handleClose} fullWidth={false}>
            {teamLoading && <LinearProgress variant="query" color="secondary"/>}
            <DialogContent>
                {teamError && <Alert severity="error"><AlertTitle>{teamError}</AlertTitle></Alert>}
                <Typography
                    sx={{textTransform: 'uppercase'}}
                    align="center"
                    variant="h5"
                    gutterBottom={true}>
                    New Team Member
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
                                buttonText="Select image"
                                imgExtension={['.jpg', '.png', '.jpeg']}
                                singleImage={true}
                                name="image"
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
                            required={true}
                        />

                        <TextField
                            fullWidth={true}
                            margin="none"
                            label="Role"
                            name="role"
                            variant="outlined"
                            error={Boolean(error.role)}
                            helperText={error.role}
                            onChange={handleValueChange}
                            value={role}
                            size="small"
                            required={true}
                        />

                        <TextField
                            fullWidth={true}
                            margin="none"
                            label="Facebook"
                            name="facebook"
                            variant="outlined"
                            helperText="Facebook username"
                            onChange={handleValueChange}
                            value={facebook}
                            size="small"
                        />

                        <TextField
                            fullWidth={true}
                            margin="none"
                            label="Twitter"
                            name="twitter"
                            variant="outlined"
                            helperText="Twitter handle"
                            onChange={handleValueChange}
                            value={twitter}
                            size="small"
                        />

                        <TextField
                            fullWidth={true}
                            margin="none"
                            label="Instagram"
                            name="instagram"
                            variant="outlined"
                            helperText="Instagram handle"
                            onChange={handleValueChange}
                            value={instagram}
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

export default AddFAQDialog;
