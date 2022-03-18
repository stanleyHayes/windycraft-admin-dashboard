import {Button, Dialog, DialogActions, DialogContent, Divider, Typography} from "@mui/material";

const ViewServiceDialog = ({faq, open, handleClose, index}) => {
    return (
        <Dialog open={open} fullWidth={true} onClose={handleClose}>
            <DialogContent>
                <Typography variant="body2">
                    FAQ Detail ({index + 1})
                </Typography>

                <Divider variant="fullWidth" sx={{my: 2}}/>

                <Typography variant="body2">
                    Question
                </Typography>
                <Typography variant="body2" gutterBottom={true}>
                    {faq.question}
                </Typography>
                <Divider variant="fullWidth" sx={{my: 2}}/>

                <Typography variant="body2">
                    Answer
                </Typography>
                <Typography variant="body2" gutterBottom={true}>
                    {faq.answer}
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
