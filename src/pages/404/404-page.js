import React from "react";
import Layout from "../../components/layout/layout";
import {makeStyles} from "@mui/styles";
import {Box, Button, Container, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {UI_ACTION_CREATORS} from "../../redux/ui/ui-action-creators";
import {useDispatch} from "react-redux";

const NotFoundPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {},
            link: {
                textDecoration: 'none'
            }
        }
    });

    const classes = useStyles();

    const dispatch = useDispatch();

    return (
        <Layout>
            <Box
                sx={{
                    pt: 8,
                    pb: 8,
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    minHeight: '86vh'
                }}>
                <Container className={classes.container}>
                    <Typography fontWeight={800} mb={4} variant="h1" align="center">404</Typography>
                    <Typography fontWeight={700} mb={2} variant="h4" align="center">
                        Oops! Page Not Found
                    </Typography>
                    <Typography mb={2} fontWeight={500} variant="body1" align="center">
                        The page you are looking for does not exist. Go back to the home page or stay, it is quiet out
                        here.
                    </Typography>
                    <Grid container={true} justifyContent="center">
                        <Grid item={true}>
                            <Link
                                to="/"
                                className={classes.link}
                                onClick={() => dispatch(UI_ACTION_CREATORS.changeActivePath('/'))}>
                                <Button
                                    disableElevation={true}
                                    sx={{pt: 1, pb: 1}}
                                    variant="contained"
                                    size="large">
                                    BACK TO HOME
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default NotFoundPage;
