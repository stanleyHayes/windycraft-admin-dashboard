import {Button, CardMedia, Dialog, DialogActions, DialogContent, Divider, Typography} from "@mui/material";

const ViewClientDialog = ({client, open, handleClose, index}) => {
    return (
        <Dialog open={open} fullWidth={true} onClose={handleClose}>
            <DialogContent>
                <Typography variant="body2">
                    Client Detail ({index + 1})
                </Typography>

                <Divider variant="fullWidth" sx={{my: 2}}/>

                <CardMedia component="img" src={client.image} />

                <Typography variant="body2">
                    Name
                </Typography>
                <Typography variant="body2" gutterBottom={true}>
                    {client.name}
                </Typography>
                <Divider variant="fullWidth" sx={{my: 2}}/>

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

export default ViewClientDialog;
