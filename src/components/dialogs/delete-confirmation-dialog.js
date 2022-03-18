import {Button, Dialog, DialogActions, DialogContent, Grid, Typography} from "@mui/material";

const DeleteConformationDialog = ({open, handleClose, message}) => {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent>

                <Typography variant="body1">{message}</Typography>
            </DialogContent>
            <DialogActions>
                <Grid container={true} justifyContent="space-between">
                    <Grid item={true} xs={6}>
                        <Button
                            fullWidth={true}
                            onClick={handleClose}
                            size="large"
                            variant="outlined">
                            Cancel
                        </Button>
                    </Grid>
                    <Grid item={true} xs={6}>
                        <Button
                            fullWidth={true}
                            onClick={handleClose}
                            size="large"
                            variant="outlined">
                            Delete
                        </Button>
                    </Grid>
                </Grid>
            </DialogActions>
        </Dialog>
    )
}

export default DeleteConformationDialog;
