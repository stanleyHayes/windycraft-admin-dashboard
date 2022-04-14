import {
    Box,
    Button,
    Checkbox,
    Container, FormControl,
    FormControlLabel, IconButton, InputAdornment, InputLabel, LinearProgress,
    OutlinedInput,
    Stack,
    TextField,
    Typography,
    Alert,
    AlertTitle
} from "@mui/material";
import {useState} from "react";
import {Link} from "react-router-dom";
import {makeStyles} from "@mui/styles";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import validator from "validator";
import {useDispatch, useSelector} from "react-redux";
import {AUTH_ACTION_CREATORS} from "../../redux/authentication/auth-action-creators";
import {selectAuth} from "../../redux/authentication/auth-reducer";
import {red} from "@mui/material/colors";
import {useNavigate} from "react-router";

const SignInPage = () => {
    const [user, setUser] = useState({email: "", password: ""});
    const [rememberPassword, setRememberPassword] = useState(false);
    const [visiblePassword, setVisiblePassword] = useState(false);
    const [error, setError] = useState({});
    const {email, password} = user;

    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const useStyles = makeStyles(theme => {
        return {
            link: {
                textDecoration: 'none'
            },
            auth: {
                objectFit: 'cover',
                objectPosition: 'center',
                width: '100%',
                height: '100%'
            }
        }
    });

    const classes = useStyles();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();

        if (!email) {
            setError({error, email: 'Field required'});
            return;
        } else {
            setError({error, email: null});
        }

        if (!validator.isEmail(email)) {
            setError({error, email: 'Invalid email'});
            return;
        } else {
            setError({error, email: null});
        }

        if (!password) {
            setError({error, password: 'Field required'});
            return;
        } else {
            setError({error, password: null});
        }
        dispatch(AUTH_ACTION_CREATORS.signIn({email, password}, navigate));
    }

    const {authLoading, authError} = useSelector(selectAuth);

    return (
        <Box>
            {authLoading && <LinearProgress variant="query" color="secondary"/>}
            <Box
                sx={{
                    display: 'flex',
                    maxWidth: '100%',
                    minHeight: '100vh',
                    flexDirection: {
                        xs: 'column',
                        md: 'row'
                    }
                }}>
                <Box
                    sx={{
                        minHeight: '100%',
                        flex: 1,
                        backgroundColor: 'background.paper',
                        order: {
                            xs: 1,
                            md: 0
                        },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <Container maxWidth="sm" sx={{my: 3}}>
                        <Typography
                            sx={{
                                color: 'secondary.main',
                                fontWeight: 'bold',
                                textTransform: 'uppercase'
                            }}
                            gutterBottom={true}
                            align="center"
                            variant="h4">
                            Super Craft GH
                        </Typography>
                        {
                            authError && (
                                <Alert sx={{my: 3}} severity="error" color="error" variant="standard">
                                    <AlertTitle>Auth Error</AlertTitle>
                                    <Typography variant="h6" align="center" color={red[600]}>
                                        {authError}
                                    </Typography>
                                </Alert>
                            )
                        }
                        <Typography gutterBottom={true} align="center" variant="h6">Login</Typography>
                        <Typography gutterBottom={true} align="center" variant="body2">Welcome back</Typography>

                        <form onSubmit={handleSubmit}>
                            <Stack my={3} spacing={2} direction="column">
                                <TextField
                                    label="Email"
                                    fullWidth={true}
                                    name="email"
                                    required={true}
                                    variant="outlined"
                                    value={email}
                                    error={Boolean(error.email)}
                                    helperText={error.email}
                                    type="email"
                                    placeholder="Enter email"
                                    size="medium"
                                    onChange={handleChange}
                                />

                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                color="secondary"
                                                onChange={event => setRememberPassword(event.target.checked)}
                                                size="small" value={rememberPassword}/>}
                                        label={
                                            <Typography
                                                sx={{fontSize: 12}}
                                                variant="body2">
                                                Remember Password
                                            </Typography>}
                                    />

                                    <Link className={classes.link} to="/auth/forgot-password">
                                        <Button
                                            color="secondary"
                                            sx={{fontSize: 12, textTransform: 'capitalize'}}
                                            variant="text" size="small">
                                            Forgot Password
                                        </Button>
                                    </Link>
                                </Stack>


                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="password">Password</InputLabel>
                                    <OutlinedInput
                                        id="password"
                                        label="Password"
                                        fullWidth={true}
                                        name="password"
                                        required={true}
                                        placeholder="Enter password"
                                        variant="outlined"
                                        error={Boolean(error.password)}
                                        type={visiblePassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={handleChange}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    sx={{color: 'secondary.main'}}
                                                    aria-label="toggle password visibility"
                                                    onClick={() => setVisiblePassword(!visiblePassword)}
                                                    onMouseDown={() => setVisiblePassword(!visiblePassword)}
                                                    edge="end"
                                                >
                                                    {visiblePassword ? <VisibilityOff/> : <Visibility/>}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </Stack>

                            <Button
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
                                onSubmit={handleSubmit}
                                onClick={handleSubmit}
                                fullWidth={true}
                                disableElevation={true}
                                disabled={authLoading}
                                variant="outlined">
                                Login
                            </Button>

                        </form>
                    </Container>
                </Box>
                <Box
                    sx={{
                        flex: 1,
                        backgroundColor: 'background.default',
                        minHeight: '100%',
                        order: {
                            xs: 0,
                            md: 1
                        }
                    }}>
                    <img className={classes.auth} src="/assets/images/auth.png" alt=""/>
                </Box>
            </Box>
        </Box>
    )
}

export default SignInPage;
