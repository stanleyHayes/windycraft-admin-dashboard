import Layout from "../../components/layout/layout";
import {Button, Container, Divider, Grid, LinearProgress, Typography} from "@mui/material";
import {Alert, AlertTitle} from "@mui/lab";
import {ChevronLeft} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {selectAdmin} from "../../redux/admins/admin-reducer";
import {useNavigate, useParams} from "react-router";
import {useEffect} from "react";
import {ADMIN_ACTION_CREATORS} from "../../redux/admins/admin-action-creators";
import {selectAuth} from "../../redux/authentication/auth-reducer";

const AdminDetailPage = () => {

    const {adminLoading, adminError, adminDetail} = useSelector(selectAdmin);
    const {token} = useSelector(selectAuth);

    const {adminID} = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(ADMIN_ACTION_CREATORS.getAdmin(adminID, token));
    }, [adminID, dispatch, token]);

    return (
        <Layout>
            {adminLoading && <LinearProgress color="secondary" variant="query"/>}
            <Container sx={{my: 4}}>
                {
                    adminError &&
                    (
                        <Alert severity="error" variant="standard">
                            <AlertTitle>{adminError}</AlertTitle>
                        </Alert>
                    )
                }

                <Grid
                    sx={{my: 4}}
                    container={true}
                    alignItems="center"
                    justifyContent="space-between" spacing={2}>
                    <Grid item={true} xs={12} md="auto">
                        <Button
                            onClick={() => navigate(-1)}
                            sx={{
                                fontWeight: 'bold',
                                textTransform: 'capitalize',
                                fontSize: 16
                            }}
                            color="secondary"
                            size="large"
                            startIcon={<ChevronLeft fontSize="medium"/>} variant="text">
                            Back
                        </Button>
                    </Grid>
                    <Grid item={true} xs={12} md="auto">
                        <Typography gutterBottom={true}  variant="h4">
                            Admin Detail
                        </Typography>
                    </Grid>
                </Grid>

                <Divider light={true} variant="fullWidth" sx={{my: 2}}/>

            </Container>
        </Layout>
    )
}

export default AdminDetailPage;
