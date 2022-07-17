import {
    Box, Button, Dialog, DialogActions, DialogContent, Grid, Stack, Typography
} from "@mui/material";

const ViewValueDialog = ({open, handleClose, value}) => {

    return (<Dialog open={open} onClose={handleClose} fullWidth={false}>
        <DialogContent>
            <Typography
                sx={{textTransform: 'uppercase'}}
                align="center"
                variant="h5"
                gutterBottom={true}>
                New Value
            </Typography>
            <Stack direction="column" spacing={2}>
                <Box>
                    <Typography variant="body2">
                        Title
                    </Typography>
                    <Typography variant="body1" gutterBottom={true}>
                        {value.title}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="body2">
                        Description
                    </Typography>
                    <Typography variant="body1" gutterBottom={true}>
                        {value.description}
                    </Typography>
                </Box>
            </Stack>
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
                                borderColor: 'secondary.light', backgroundColor: 'secondary.dark',
                            }
                        }}
                        fullWidth={true}
                        onClick={handleClose}
                        size="large"
                        variant="outlined">Close</Button>
                </Grid>
            </Grid>
        </DialogActions>
    </Dialog>)
}

export default ViewValueDialog;
