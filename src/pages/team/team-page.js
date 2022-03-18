import Layout from "../../components/layout/layout";
import {Button, Container, Divider, Grid, Typography} from "@mui/material";
import {Add} from "@mui/icons-material";
import {useState} from "react";
import AddTeamMemberDialog from "../../components/dialogs/add/add-team-member-dialog";

const TeamPage = () => {

    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDeleteTeamMember = () => {
    }

    const handleAddTeamMember = () => {

    }

    return (
        <Layout>
            <Container
                sx={{
                    py: 4
                }}>
                <Grid container={true} justifyContent="space-between">
                    <Grid item={true} md="auto" xs={12}>
                        <Typography variant="h4">Team</Typography>
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
                            size="medium"
                            onClick={() => setDialogOpen(true)}
                            startIcon={<Add/>}
                            variant="outlined"
                            fullWidth={true}>
                            Add Team Member
                        </Button>
                    </Grid>
                </Grid>
                <Divider variant="fullWidth" sx={{my: 2}}/>

                {
                    dialogOpen &&
                    <AddTeamMemberDialog
                        open={dialogOpen}
                        handleClose={() => setDialogOpen(false)}
                    />
                }
            </Container>
        </Layout>
    )
}

export default TeamPage;
