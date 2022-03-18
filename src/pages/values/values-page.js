import Layout from "../../components/layout/layout";
import {Button, Container, Divider, Grid, Typography} from "@mui/material";
import {Add} from "@mui/icons-material";
import AddServiceDialog from "../../components/dialogs/add/add-service-dialog";
import {useState} from "react";

const ValuesPage = () => {

    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <Layout>
            <Container
                sx={{
                    py: 4
                }}>
                <Grid container={true} justifyContent="space-between">
                    <Grid item={true} md="auto" xs={12}>
                        <Typography variant="h4">Values</Typography>
                    </Grid>
                    <Grid item={true} md="auto" xs={12}>
                        <Button
                            sx={{
                                backgroundColor: 'secondary.main',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'secondary.dark',
                                    color: 'white'
                                }
                            }}
                            onClick={() => setDialogOpen(true)}
                            size="medium"
                            startIcon={<Add/>}
                            variant="outlined"
                            fullWidth={true}>
                            Add Value
                        </Button>
                    </Grid>
                </Grid>
                <Divider variant="fullWidth" sx={{my: 2}}/>

                {
                    dialogOpen &&
                    <AddServiceDialog
                        open={dialogOpen}
                        handleClose={() => setDialogOpen(false)}
                    />
                }
            </Container>
        </Layout>
    )
}

export default ValuesPage;
