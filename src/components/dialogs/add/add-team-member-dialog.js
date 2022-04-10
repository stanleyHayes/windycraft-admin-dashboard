import {Box, Button, Dialog, DialogActions, DialogContent, Stack, TextField, Typography} from "@mui/material";
import {useState} from "react";
import ImageUploader from "react-images-upload";
import {orange} from "@mui/material/colors";

const AddFAQDialog = ({open, handleClose, handleValueAdd}) => {
    const [teamMember, setTeamMember] = useState({});
    const [error, setError] = useState({});

    const {name, position, facebook, twitter, instagram} = teamMember;

    const handleValueChange = (event) => {
        setTeamMember({...teamMember, [event.target.name]: event.target.value});
    }

    const handleAddClick = () => {
        if (!name) {
            setError({error, name: 'Field Required'});
            return;
        } else {
            setError({error, name: null});
        }

        if (!position) {
            setError({error, position: 'Field Required'});
            return;
        } else {
            setError({error, position: null});
        }

        handleValueAdd(teamMember)

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
                    New Team Member
                </Typography>
                <form>
                    <Stack direction="column" spacing={2}>

                        <Box>
                            <ImageUploader
                                withIcon={true}
                                withLabel={true}
                                withPreview={true}
                                buttonText="Choose Client Logo"
                                imgExtension={['.jpg', '.png', '.jpeg']}
                                singleImage={true}
                                name="image"
                                buttonStyles={{backgroundColor: orange[400]}}
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
                            label="Position"
                            name="position"
                            variant="outlined"
                            error={Boolean(error.position)}
                            helperText={error.position}
                            onChange={handleValueChange}
                            value={position}
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
