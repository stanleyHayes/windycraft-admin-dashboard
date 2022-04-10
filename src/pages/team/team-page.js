import Layout from "../../components/layout/layout";
import {Alert, AlertTitle, Box, Button, Container, Divider, Grid, LinearProgress, Typography} from "@mui/material";
import {Add} from "@mui/icons-material";
import {useState} from "react";
import AddTeamMemberDialog from "../../components/dialogs/add/add-team-member-dialog";
import Team from "../../components/shared/team";
import {useSelector} from "react-redux";
import {selectTeams} from "../../redux/team/team-reducer";

const TeamPage = () => {

    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDeleteTeamMember = () => {
    }

    const handleAddTeamMember = () => {

    }

    const {teams, teamLoading, teamError} = useSelector(selectTeams);


    return (
        <Layout>
            {teamLoading && <LinearProgress color="secondary" variant="query"/>}
            <Container sx={{py: 4}}>
                {
                    teamError &&
                    (
                        <Alert severity="error" variant="standard">
                            <AlertTitle>Error</AlertTitle>
                            <Typography variant="h6" align="center">
                                {teamError}
                            </Typography>
                        </Alert>
                    )
                }
                <Grid container={true} justifyContent="space-between">
                    <Grid item={true} md="auto" xs={12}>
                        <Typography variant="h4">Team</Typography>
                    </Grid>
                    <Grid item={true} md="auto" xs={12}>
                        <Button
                            sx={{
                                textTransform: 'capitalize',
                                backgroundColor: 'secondary.main',
                                color: 'primary.main',
                                '&:hover': {
                                    backgroundColor: 'secondary.dark',
                                    color: 'primary.main'
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

                <Box>
                    <Grid container={true} spacing={2}>
                        {teams.map((team, index) => {
                            return (
                                <Grid key={index} item={true} xs={12} md={4}>
                                    <Team team={team}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>
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
