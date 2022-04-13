import Layout from "../../components/layout/layout";
import {Box, Container, Divider, Grid, LinearProgress, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Alert, AlertTitle} from "@mui/lab";
import {useSelector} from "react-redux";
import {selectDashboard} from "../../redux/dashboard/dashboard-reducer";
import Stat from "../../components/shared/stat";
import {Cancel, CheckCircle,  HourglassBottom} from "@mui/icons-material";
import {green, grey,  red} from "@mui/material/colors";
import Feint from "../../components/shared/feint";

const DashboardPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                paddingBottom: 32
            },
            title: {
                color: theme.palette.text.primary
            },
            subtitle: {
                color: theme.palette.text.secondary
            }
        }
    });

    const classes = useStyles();
    const {dashboardLoading, dashboardError, dashboard} = useSelector(selectDashboard);

    return (
        <Layout>
            {dashboardLoading && <LinearProgress color="secondary" variant="query"/>}
            <Container className={classes.container}>
                {
                    dashboardError &&
                    (
                        <Alert severity="error" variant="standard">
                            <AlertTitle>Error</AlertTitle>
                            <Typography variant="h6" align="center">
                                {dashboardError}
                            </Typography>
                        </Alert>
                    )
                }

                <Grid
                    sx={{my: 4}}
                    container={true}
                    justifyContent="space-between"
                    spacing={2}
                    alignItems="center">
                    <Grid item={true} xs={12} md={4}>
                        <Typography className={classes.title} variant="h4">
                            Dashboard
                        </Typography>
                    </Grid>
                </Grid>

                <Divider light={true} variant="fullWidth" sx={{my: 4}}/>

                <Box my={4} spacing={2} direction="column">
                    <Typography className={classes.subtitle} variant="h5">
                        Admins ({dashboard && dashboard.admins.total})
                    </Typography>
                    <Divider
                        variant="fullWidth"
                        orientation="horizontal"
                        light={true}
                        sx={{my: 2}}
                    />
                    <Grid container={true} spacing={2} justifyContent="center">
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    color="green"
                                    title="Active"
                                    value={dashboard.admins.active}
                                    icon={
                                        <Feint
                                            color="green"
                                            children={
                                                <CheckCircle
                                                    sx={{color: 'white'}}
                                                    fontSize="large"
                                                />
                                            }/>
                                    }
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    color="grey"
                                    title="Pending"
                                    value={dashboard.admins.pending}
                                    icon={
                                        <Feint
                                            color="grey"
                                            children={
                                                <HourglassBottom
                                                    sx={{color: 'white'}}
                                                    fontSize="large"
                                                />
                                            }/>}
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    color="red"
                                    title="Suspended"
                                    value={dashboard.admins.suspended}
                                    icon={
                                        <Feint
                                            color="red"
                                            children={
                                                <Cancel
                                                    sx={{color: 'white'}}
                                                    fontSize="large"
                                                />
                                            }/>
                                    }
                                />
                            )}
                        </Grid>
                    </Grid>
                </Box>

                <Box my={4} spacing={2} direction="column">
                    <Typography className={classes.subtitle} variant="h5">
                        Messages ({dashboard.messages.total})
                    </Typography>
                    <Divider
                        variant="fullWidth"
                        orientation="horizontal"
                        light={true}
                        sx={{my: 2}}
                    />
                    <Grid container={true} spacing={2}>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    color="green"
                                    title="Active"
                                    value={dashboard.messages.responded}
                                    icon={
                                        <Feint
                                            color="green"
                                            children={
                                                <CheckCircle
                                                    sx={{color: 'white'}}
                                                    fontSize="large"
                                                />
                                            }/>
                                    }
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    color="grey"
                                    title="Pending"
                                    value={dashboard.messages.read}
                                    icon={
                                        <Feint
                                            color="grey"
                                            children={
                                                <HourglassBottom
                                                    sx={{color: 'white'}}
                                                    fontSize="large"
                                                />
                                            }/>}
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    color="red"
                                    title="Failed"
                                    value={dashboard.messages.pending}
                                    icon={
                                        <Feint
                                            color="red"
                                            children={
                                                <Cancel
                                                    sx={{color: 'white'}}
                                                    fontSize="large"
                                                />
                                            }/>
                                    }
                                />
                            )}
                        </Grid>
                    </Grid>
                </Box>


                <Box my={4} spacing={2} direction="column">
                    <Typography className={classes.subtitle} variant="h5">
                        Quotes ({dashboard && dashboard.quotes.total})
                    </Typography>
                    <Divider
                        variant="fullWidth"
                        orientation="horizontal"
                        light={true}
                        sx={{my: 2}}
                    />
                    <Grid container={true} spacing={2}>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    color="green"
                                    title="Confirmed"
                                    value={dashboard.quotes.responded}
                                    icon={
                                        <Feint
                                            color="green"
                                            children={
                                                <CheckCircle
                                                    sx={{color: 'white'}}
                                                    fontSize="large"
                                                />
                                            }/>
                                    }
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    color="grey"
                                    title="Read"
                                    value={dashboard.quotes.read}
                                    icon={
                                        <Feint
                                            color="grey"
                                            children={
                                                <HourglassBottom
                                                    sx={{color: 'white'}}
                                                    fontSize="large"
                                                />
                                            }/>}
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    color="red"
                                    title="Pending"
                                    value={dashboard.quotes.pending}
                                    icon={
                                        <Feint
                                            color="red"
                                            children={
                                                <Cancel
                                                    sx={{color: 'white'}}
                                                    fontSize="large"
                                                />
                                            }/>
                                    }
                                />
                            )}
                        </Grid>
                    </Grid>
                </Box>

                <Box my={4} spacing={2} direction="column">
                    <Typography className={classes.subtitle} variant="h5">
                        Testimonials ({dashboard && dashboard.testimonials.total})
                    </Typography>
                    <Divider
                        variant="fullWidth"
                        orientation="horizontal"
                        light={true}
                        sx={{my: 2}}
                    />
                    <Grid container={true} spacing={2}>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    color="green"
                                    title="Active"
                                    value={dashboard.testimonials.responded}
                                    icon={
                                        <Feint
                                            color="green"
                                            children={
                                                <CheckCircle
                                                    sx={{color: 'white'}}
                                                    fontSize="large"
                                                />
                                            }/>
                                    }
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    color="grey"
                                    title="Pending"
                                    value={dashboard.testimonials.pending}
                                    icon={
                                        <Feint
                                            color="grey"
                                            children={
                                                <HourglassBottom
                                                    sx={{color: 'white'}}
                                                    fontSize="large"
                                                />
                                            }/>}
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    color="red"
                                    title="Read"
                                    value={dashboard.testimonials.read}
                                    icon={
                                        <Feint
                                            color="red"
                                            children={
                                                <Cancel
                                                    sx={{color: 'white'}}
                                                    fontSize="large"
                                                />
                                            }/>
                                    }
                                />
                            )}
                        </Grid>
                    </Grid>
                </Box>


                <Box my={4} spacing={2} direction="column">
                    <Typography className={classes.subtitle} variant="h5">
                        Invitations ({dashboard && dashboard.invitations.total})
                    </Typography>
                    <Divider
                        variant="fullWidth"
                        orientation="horizontal"
                        light={true}
                        sx={{my: 2}}
                    />
                    <Grid container={true} spacing={2}>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    color="green"
                                    title="Accepted"
                                    value={dashboard.invitations.accepted}
                                    icon={
                                        <Feint
                                            color="green"
                                            children={
                                                <CheckCircle
                                                    sx={{color: 'white'}}
                                                    fontSize="large"
                                                />
                                            }/>
                                    }
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    color="grey"
                                    title="Pending"
                                    value={dashboard.invitations.pending}
                                    icon={
                                        <Feint
                                            color="grey"
                                            children={
                                                <HourglassBottom
                                                    sx={{color: 'white'}}
                                                    fontSize="large"
                                                />
                                            }/>}
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    color="red"
                                    title="Suspended"
                                    value={dashboard.invitations.suspended}
                                    icon={
                                        <Feint
                                            color="red"
                                            children={
                                                <Cancel
                                                    sx={{color: 'white'}}
                                                    fontSize="large"
                                                />
                                            }/>
                                    }
                                />
                            )}
                        </Grid>
                    </Grid>
                </Box>

                <Box my={4} spacing={2} direction="column">
                    <Typography className={classes.subtitle} variant="h5">
                        Others
                    </Typography>
                    <Divider
                        variant="fullWidth"
                        orientation="horizontal"
                        light={true}
                        sx={{my: 2}}
                    />
                    <Grid container={true} spacing={2}>
                        <Grid item={true} xs={12} md={3}>
                            {dashboard && (
                                <Stat
                                    color="green"
                                    title="Clients"
                                    value={dashboard.clients.count}
                                    icon={
                                        <Feint
                                            color="green"
                                            children={
                                                <CheckCircle
                                                    sx={{color: 'white'}}
                                                    fontSize="large"
                                                />
                                            }/>
                                    }
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={3}>
                            {dashboard && (
                                <Stat
                                    color="grey"
                                    title="FAQs"
                                    value={dashboard.faqs.count}
                                    icon={
                                        <Feint
                                            color="grey"
                                            children={
                                                <HourglassBottom
                                                    sx={{color: 'white'}}
                                                    fontSize="large"
                                                />
                                            }/>}
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={3}>
                            {dashboard && (
                                <Stat
                                    color="red"
                                    title="Services"
                                    value={dashboard.services.count}
                                    icon={
                                        <Feint
                                            color="red"
                                            children={
                                                <Cancel
                                                    sx={{color: 'white'}}
                                                    fontSize="large"
                                                />
                                            }/>
                                    }
                                />
                            )}
                        </Grid>

                        <Grid item={true} xs={12} md={3}>
                            {dashboard && (
                                <Stat
                                    color="red"
                                    title="Team"
                                    value={dashboard.teams.count}
                                    icon={
                                        <Feint
                                            color="red"
                                            children={
                                                <Cancel
                                                    sx={{color: 'white'}}
                                                    fontSize="large"
                                                />
                                            }/>
                                    }
                                />
                            )}
                        </Grid>
                    </Grid>
                </Box>

            </Container>
        </Layout>
    )
}

export default DashboardPage;
