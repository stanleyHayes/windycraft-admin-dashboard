import {Button, Dialog, DialogActions, DialogContent, Divider, Typography} from "@mui/material";

const ViewServiceDialog = ({service, open, handleClose, index}) => {
    return (
        <Dialog open={open} fullWidth={true} onClose={handleClose}>
            <DialogContent>
                <Typography variant="body2">
                    Service Detail ({index + 1})
                </Typography>

                <Divider variant="fullWidth" sx={{my: 2}}/>

                <Typography variant="body2">
                    Title
                </Typography>
                <Typography variant="body2" gutterBottom={true}>
                    {service.title}
                </Typography>
                <Divider variant="fullWidth" sx={{my: 2}}/>

                <Typography variant="body2">
                    Description
                </Typography>
                <Typography variant="body2" gutterBottom={true}>
                    {service.description}
                </Typography>
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

export default ViewServiceDialog;
