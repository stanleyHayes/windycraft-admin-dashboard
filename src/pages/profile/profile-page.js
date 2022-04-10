import Layout from "../../components/layout/layout";
import {Avatar, Button, Card, CardContent, Container, Divider, Grid, Stack, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import Feint from "../../components/shared/feint";
import {Call, Edit, Mail, Person} from "@mui/icons-material";
import {grey, orange} from "@mui/material/colors";
import Info from "../../components/shared/info";

const ProfilePage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                paddingTop: 32,
                paddingBottom: 32
            }
        }
    });

    const classes = useStyles();

    return (
        <Layout>
            <Container className={classes.container}>
                <Grid alignItems="center" justifyContent="space-between" container={true}>
                    <Grid item={true} xs={12} md="auto">
                        <Typography variant="h4">Profile</Typography>
                    </Grid>
                    <Grid item={true} xs={12} md="auto">
                        <Button
                            sx={{
                                textTransform: 'capitalize',
                                color: "primary.main",
                                backgroundColor: "secondary.main"
                            }}
                            startIcon={<Edit fontSize="small" sx={{color: "primary.main"}}/>}
                            variant="outlined"
                            fullWidth={true}
                            disableElevation={true}
                            size="large">
                            Update Profile
                        </Button>
                    </Grid>
                </Grid>

                <Divider light={true} sx={{my: 4}}/>

                <Grid spacing={2} container={true}>
                    <Grid item={true} xs={12} md={4}>
                        <Card elevation={0} sx={{mb: 2}}>
                            <CardContent>
                                <Stack mb={2} direction="row" justifyContent="center">
                                    <Avatar
                                        sx={{width: 110, height: 110}}
                                        src="/assets/images/profile.jpg"
                                    />
                                </Stack>
                                <Typography
                                    mb={2}
                                    variant="body1"
                                    align="center">
                                    Stanley Hayford
                                </Typography>
                                <Typography
                                    mb={2}
                                    variant="body2"
                                    align="center">
                                    hayfordstanley@gmail.com
                                </Typography>
                                <Typography
                                    variant="body2"
                                    align="center">
                                    Active
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item={true} xs={12} md={8}>
                        <Grid item={true} xs={12}>
                            <Card elevation={0}>
                                <CardContent>
                                    <Stack
                                        mb={1}
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center">
                                        <Button
                                            color="secondary"
                                            disableRipple={true}
                                            variant="text"
                                            size="small"
                                            startIcon={<Person/>}>
                                            Contact Details
                                        </Button>
                                        <Button
                                            color="secondary"
                                            variant="outlined"
                                            size="small"
                                            startIcon={<Edit/>}>
                                            Edit
                                        </Button>
                                    </Stack>

                                    <Divider light={true} sx={{my: 1}} variant="middle"/>

                                    <Grid spacing={2} container={true}>
                                        <Grid item={true} xs={12} md={6}>
                                            <Info
                                                icon={<Mail sx={{color: "primary.main"}}/>}
                                                title="Email"
                                                value="dev.stanley.hayford@gmail.com"

                                            />
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <Info
                                                icon={<Call sx={{color:"primary.main"}}/>}
                                                title="Phone"
                                                value="+2332 7004 8319"

                                            />
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <Info
                                                icon={<Call sx={{color: "primary.main"}}/>}
                                                title="Emergency Phone"
                                                value="+2335 5518 0048"
                                            />
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <Info
                                                icon={<Person sx={{color: "primary.main"}}/>}
                                                title="Username"
                                                value="sahayford"

                                            />
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}

export default ProfilePage;
