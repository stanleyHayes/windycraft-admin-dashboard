import {
    Alert,
    AlertTitle,
    Box,
    Button,
    Card,
    CardContent,
    CircularProgress,
    Container,
    Grid,
    LinearProgress,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {useState} from "react";
import {ChevronLeft} from "@mui/icons-material";
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import validator from "validator";
import {AUTH_ACTION_CREATORS} from "../../redux/authentication/auth-action-creators";
import {LoadingButton} from "@mui/lab";
import {selectAuth} from "../../redux/authentication/auth-reducer";

const ForgotPasswordPage = () => {

    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);

    const {authLoading, authError} = useSelector(selectAuth);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        if (!email) {
            setError('Email required');
            return;
        } else {
            setError(null);
        }

        if (!validator.isEmail(email)) {
            setError('Invalid email');
            return;
        } else {
            setError(null);
        }

        dispatch(AUTH_ACTION_CREATORS.forgotPassword({email}));
        setEmail(null);
    }

    return (<Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: ' center',
                backgroundColor: 'background.default'
            }}>
            <Container>
                <Grid container={true} justifyContent="center">
                    <Grid item={true} xs={12} md={6} lg={4}>
                        <Card elevation={1} variant="elevation">
                            {authLoading && <LinearProgress variant="query" color="secondary"/>}
                            <CardContent>
                                {authError && (<Alert sx={{my: 3}} severity="error" color="error" variant="standard">
                                        <AlertTitle>{authError}</AlertTitle>
                                    </Alert>)}
                                <Button
                                    onClick={() => navigate(-1)}
                                    sx={{
                                        fontWeight: 'bold', textTransform: 'capitalize', color: 'white'
                                    }}
                                    color="secondary"
                                    mb={4}
                                    startIcon={<ChevronLeft sx={{color: 'white'}} fontSize="medium"/>} variant="text">
                                    Back
                                </Button>

                                <Typography
                                    sx={{color: 'secondary.main', fontWeight: 'bold'}}
                                    gutterBottom={true}
                                    align="center"
                                    variant="h4">
                                    Super Craft GH
                                </Typography>
                                <Typography mb={1} gutterBottom={true} align="center" variant="body1">
                                    Forgot Password
                                </Typography>
                                <Typography
                                    gutterBottom={true} align="center" variant="body2">
                                    Enter your email to get a password link
                                </Typography>

                                <Stack my={3} spacing={2} direction="column">
                                    <TextField
                                        label="Email"
                                        fullWidth={true}
                                        name="email"
                                        required={true}
                                        color="secondary"
                                        variant="outlined"
                                        value={email}
                                        error={Boolean(error)}
                                        helperText={error}
                                        type="email"
                                        size="medium"
                                        onChange={event => setEmail(event.target.value)}
                                    />
                                </Stack>

                                <LoadingButton
                                    sx={{
                                        fontWeight: 'bold',
                                        textTransform: 'capitalize',
                                        backgroundColor: 'primary.main',
                                        color: 'secondary.main',
                                        '&:hover': {
                                            color: 'secondary.main'
                                        },
                                        '&:focus': {
                                            color: 'secondary.main'
                                        },
                                        '&:active': {
                                            color: 'secondary.main'
                                        },
                                        py: 1.5
                                    }}
                                    size="large"
                                    startIcon={authLoading && <CircularProgress color="secondary" size="small"/>}
                                    loadingPosition="start"
                                    loading={authLoading}
                                    loadingIndicator={<CircularProgress size="small" color="secondary"/>}
                                    onSubmit={handleSubmit}
                                    onClick={handleSubmit}
                                    fullWidth={true}
                                    disableElevation={true}
                                    disabled={authLoading}
                                    variant="outlined">
                                    Get Reset Link
                                </LoadingButton>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

        </Box>)
}

export default ForgotPasswordPage;
