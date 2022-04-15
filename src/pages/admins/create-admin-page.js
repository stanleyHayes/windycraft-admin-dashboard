import Layout from "../../components/layout/layout";
import {
    Button,
    Card,
    CardContent,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormControlLabel,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    LinearProgress,
    OutlinedInput,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useState} from "react";
import {useSelector} from "react-redux";
import {Alert, AlertTitle} from "@mui/lab";
import {ChevronLeft, Visibility, VisibilityOff} from "@mui/icons-material";
import {useNavigate} from "react-router";
import {selectAdmin} from "../../redux/admins/admin-reducer";

const CreateAdminPage = () => {

    const [admin, setAdmin] = useState({});
    const [error, setError] = useState({});

    const [visiblePassword, setVisiblePassword] = useState(false);

    const [faqPermission, setFAQPermission] = useState({
        faqCreate: true,
        faqRead: true,
        faqUpdate: false,
        faqDelete: false
    });

    const [clientPermission, setClientPermission] = useState({
        clientCreate: true,
        clientRead: true,
        clientUpdate: false,
        clientDelete: false
    });

    const [invitationPermission, setInvitationPermission] = useState({
        invitationCreate: true,
        invitationRead: true,
        invitationUpdate: false,
        invitationDelete: false
    });

    const [adminPermission, setAdminPermission] = useState({
        adminCreate: true,
        adminRead: true,
        adminUpdate: false,
        adminDelete: false
    });

    const [messagePermission, setMessagePermission] = useState({
        messageCreate: true,
        messageRead: true,
        messageUpdate: false,
        messageDelete: false
    });

    const [quotePermission, setQuotePermission] = useState({
        quoteCreate: true,
        quoteRead: true,
        quoteUpdate: false,
        quoteDelete: false
    });

    const [valuePermission, setValuePermission] = useState({
        valueCreate: true,
        valueRead: true,
        valueUpdate: false,
        valueDelete: false
    });

    const [servicePermission, setServicePermission] = useState({
        serviceCreate: true,
        serviceRead: true,
        serviceUpdate: false,
        serviceDelete: false
    });

    const [teamPermission, setTeamPermission] = useState({
        teamCreate: true,
        teamRead: true,
        teamUpdate: false,
        teamDelete: false
    });

    const [testimonialPermission, setTestimonialPermission] = useState({
        testimonialCreate: true,
        testimonialRead: true,
        testimonialUpdate: false,
        testimonialDelete: false
    });

    const [permissionPermission, setPermissionPermission] = useState({
        permissionCreate: true,
        permissionRead: true,
        permissionUpdate: false,
        permissionDelete: false
    });

    const {faqCreate, faqRead, faqUpdate, faqDelete} = faqPermission;
    const {clientCreate, clientRead, clientUpdate, clientDelete} = clientPermission;
    const {invitationCreate, invitationRead, invitationUpdate, invitationDelete} = invitationPermission;
    const {adminCreate, adminRead, adminUpdate, adminDelete} = adminPermission;
    const {messageCreate, messageRead, messageUpdate, messageDelete} = messagePermission;
    const {quoteCreate, quoteRead, quoteUpdate, quoteDelete} = quotePermission;
    const {valueCreate, valueRead, valueUpdate, valueDelete} = valuePermission;
    const {serviceCreate, serviceRead, serviceUpdate, serviceDelete} = servicePermission;
    const {teamCreate, teamRead, teamUpdate, teamDelete} = teamPermission;
    const {testimonialCreate, testimonialRead, testimonialUpdate, testimonialDelete} = testimonialPermission;
    const {permissionCreate, permissionRead, permissionUpdate, permissionDelete} = permissionPermission;
    const {
        name,
        email,
        username,
        password,
        phoneNumber,
        emergencyPhoneNumber,
    } = admin;

    const handleChange = event => {
        setAdmin({...admin, [event.target.name]: event.target.value});
    }

    const handleFAQPermissionChange = event => {
        setFAQPermission({...faqPermission, [event.target.name]: event.target.checked})
    }

    const handleClientPermissionChange = event => {
        setClientPermission({...clientPermission, [event.target.name]: event.target.checked})
    }


    const handleInvitationPermissionChange = event => {
        setInvitationPermission({...invitationPermission, [event.target.name]: event.target.checked})
    }


    const handleAdminPermissionChange = event => {
        setAdminPermission({...adminPermission, [event.target.name]: event.target.checked})
    }

    const handleMessagePermissionChange = event => {
        setMessagePermission({...messagePermission, [event.target.name]: event.target.checked})
    }

    const handleQuotePermissionChange = event => {
        setQuotePermission({...quotePermission, [event.target.name]: event.target.checked})
    }


    const handleValuePermissionChange = event => {
        setValuePermission({...valuePermission, [event.target.name]: event.target.checked})
    }


    const handleServicePermissionChange = event => {
        setServicePermission({...servicePermission, [event.target.name]: event.target.checked})
    }

    const handleTeamPermissionChange = event => {
        setTeamPermission({...teamPermission, [event.target.name]: event.target.checked})
    }


    const handleTestimonialPermissionChange = event => {
        setTestimonialPermission({...testimonialPermission, [event.target.name]: event.target.checked})
    }


    const handlePermissionPermissionChange = event => {
        setPermissionPermission({...permissionPermission, [event.target.name]: event.target.checked})
    }


    const useStyles = makeStyles(theme => {
        return {
            container: {
                marginTop: 16,
                marginBottom: 16
            }
        }
    });

    const {userError, userLoading} = useSelector(selectAdmin);
    const classes = useStyles();

    const navigate = useNavigate();

    return (
        <Layout>
            {userLoading && <LinearProgress color="secondary" variant="query"/>}
            <Container className={classes.container}>
                {
                    userError &&
                    (
                        <Alert severity="error" variant="standard">
                            <AlertTitle>Error</AlertTitle>
                            <Typography variant="h6" align="center">
                                {userError}
                            </Typography>
                        </Alert>
                    )
                }

                <Grid
                    sx={{my: 4, mt: {xs: 8, md: 4}}}
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
                            mb={4}
                            size="large"
                            startIcon={<ChevronLeft fontSize="medium"/>} variant="text">
                            Back
                        </Button>
                    </Grid>
                    <Grid item={true} xs={12} md="auto">
                        <Typography gutterBottom={true} align="center" variant="h4">
                            New Admin
                        </Typography>
                    </Grid>
                </Grid>

                <Divider light={true} variant="fullWidth" sx={{my: 4}}/>

                <Grid container={true} spacing={4}>
                    <Grid item={true} xs={12} md={6}>
                        <Card elevation={0}>
                            <CardContent>
                                <Typography gutterBottom={true} align="center" variant="h6">
                                    Admin Information
                                </Typography>
                                <Stack direction="column" spacing={2}>
                                    <TextField
                                        label="Name"
                                        fullWidth={true}
                                        name="firstName"
                                        required={true}
                                        variant="outlined"
                                        value={name}
                                        error={Boolean(error.name)}
                                        helperText={error.name}
                                        type="text"
                                        size="medium"
                                        onChange={handleChange}
                                    />


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
                                        size="medium"
                                        onChange={handleChange}
                                    />

                                    <TextField
                                        label="Username"
                                        fullWidth={true}
                                        name="username"
                                        required={true}
                                        variant="outlined"
                                        value={username}
                                        error={Boolean(error.username)}
                                        helperText={error.username}
                                        type="text"
                                        size="medium"
                                        onChange={handleChange}
                                    />


                                    <TextField
                                        label="Phone"
                                        fullWidth={true}
                                        name="phone"
                                        required={true}
                                        variant="outlined"
                                        value={phoneNumber}
                                        error={Boolean(error.phone)}
                                        helperText={error.phone}
                                        type="tel"
                                        size="medium"
                                        onChange={handleChange}
                                    />

                                    <TextField
                                        label="Emergency Phone"
                                        fullWidth={true}
                                        name="emergencyPhone"
                                        required={true}
                                        variant="outlined"
                                        value={emergencyPhoneNumber}
                                        error={Boolean(error.emergencyPhone)}
                                        helperText={error.emergencyPhone}
                                        type="tel"
                                        size="medium"
                                        onChange={handleChange}
                                    />


                                    <FormControl variant="outlined">
                                        <InputLabel htmlFor="password">Password</InputLabel>
                                        <OutlinedInput
                                            id="password"
                                            label="Password"
                                            fullWidth={true}
                                            name="password"
                                            required={true}
                                            variant="outlined"
                                            error={Boolean(error.password)}
                                            helperText={error.password}
                                            type={visiblePassword ? 'text' : 'password'}
                                            value={password}
                                            onChange={handleChange}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={() => setVisiblePassword(!visiblePassword)}
                                                        onMouseDown={() => setVisiblePassword(!visiblePassword)}
                                                        edge="end">
                                                        {visiblePassword ? <VisibilityOff/> : <Visibility/>}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>

                                    <Button
                                        sx={{
                                            color: 'secondary.main',
                                            textTransform: 'capitalize'
                                        }}
                                        size="large" variant="contained">
                                        Create Admin</Button>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item={true} xs={12} md={6}>
                        <Card elevation={0}>
                            <CardContent>
                                <Typography gutterBottom={true} align="center" variant="h6">
                                    Admin Permissions
                                </Typography>

                                <Stack
                                    spacing={0.5}
                                    direction="column"
                                    divider={<Divider light={true} variant="fullWidth"/>}>

                                    <Grid
                                        spacing={1}
                                        container={true}
                                        justifyContent="flex-start"
                                        alignItems="center">
                                        <Grid xs={12} item={true}>
                                            <Typography variant="body1">FAQ</Typography>
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="faqCreate"
                                                        onChange={handleFAQPermissionChange}
                                                        checked={faqCreate}
                                                    />
                                                }
                                                label={<Typography variant="body2">Create</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="faqRead"
                                                        onChange={handleFAQPermissionChange}
                                                        checked={faqRead}
                                                    />
                                                }
                                                label={<Typography variant="body2">Read</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="faqUpdate"
                                                        onChange={handleFAQPermissionChange}
                                                        checked={faqUpdate}
                                                    />
                                                }
                                                label={<Typography variant="body2">Update</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="faqDelete"
                                                        onChange={handleFAQPermissionChange}
                                                        checked={faqDelete}
                                                    />
                                                }
                                                label={<Typography variant="body2">Delete</Typography>}
                                            />
                                        </Grid>
                                    </Grid>


                                    <Grid
                                        spacing={1}
                                        container={true}
                                        justifyContent="flex-start"
                                        alignItems="center">
                                        <Grid xs={12} item={true}>
                                            <Typography variant="body1">Client</Typography>
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="clientCreate"
                                                        onChange={handleClientPermissionChange}
                                                        checked={clientCreate}
                                                    />
                                                }
                                                label={<Typography variant="body2">Create</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="clientRead"
                                                        onChange={handleClientPermissionChange}
                                                        checked={clientRead}
                                                    />
                                                }
                                                label={<Typography variant="body2">Read</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="clientUpdate"
                                                        onChange={handleClientPermissionChange}
                                                        checked={clientUpdate}
                                                    />
                                                }
                                                label={<Typography variant="body2">Update</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="clientDelete"
                                                        onChange={handleClientPermissionChange}
                                                        checked={clientDelete}
                                                    />
                                                }
                                                label={<Typography variant="body2">Delete</Typography>}
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid
                                        spacing={1}
                                        container={true}
                                        justifyContent="flex-start"
                                        alignItems="center">
                                        <Grid xs={12} item={true}>
                                            <Typography variant="body1">Admin</Typography>
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="adminCreate"
                                                        onChange={handleAdminPermissionChange}
                                                        checked={adminCreate}
                                                    />
                                                }
                                                label={<Typography variant="body2">Create</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="adminRead"
                                                        onChange={handleClientPermissionChange}
                                                        checked={adminRead}
                                                    />
                                                }
                                                label={<Typography variant="body2">Read</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="adminUpdate"
                                                        onChange={handleClientPermissionChange}
                                                        checked={adminUpdate}
                                                    />
                                                }
                                                label={<Typography variant="body2">Update</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="adminDelete"
                                                        onChange={handleClientPermissionChange}
                                                        checked={adminDelete}
                                                    />
                                                }
                                                label={<Typography variant="body2">Delete</Typography>}
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid
                                        spacing={1}
                                        container={true}
                                        justifyContent="flex-start"
                                        alignItems="center">
                                        <Grid xs={12} item={true}>
                                            <Typography variant="body1">Message</Typography>
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="messageCreate"
                                                        onChange={handleMessagePermissionChange}
                                                        checked={messageCreate}
                                                    />
                                                }
                                                label={<Typography variant="body2">Create</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="messageRead"
                                                        onChange={handleMessagePermissionChange}
                                                        checked={messageRead}
                                                    />
                                                }
                                                label={<Typography variant="body2">Read</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="messageUpdate"
                                                        onChange={handleMessagePermissionChange}
                                                        checked={messageUpdate}
                                                    />
                                                }
                                                label={<Typography variant="body2">Update</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="messageDelete"
                                                        onChange={handleMessagePermissionChange}
                                                        checked={messageDelete}
                                                    />
                                                }
                                                label={<Typography variant="body2">Delete</Typography>}
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid
                                        spacing={1}
                                        container={true}
                                        justifyContent="flex-start"
                                        alignItems="center">
                                        <Grid xs={12} item={true}>
                                            <Typography variant="body1">Invitation</Typography>
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="invitationCreate"
                                                        onChange={handleInvitationPermissionChange}
                                                        checked={invitationCreate}
                                                    />
                                                }
                                                label={<Typography variant="body2">Create</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="invitationRead"
                                                        onChange={handleInvitationPermissionChange}
                                                        checked={invitationRead}
                                                    />
                                                }
                                                label={<Typography variant="body2">Read</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="invitationUpdate"
                                                        onChange={handleInvitationPermissionChange}
                                                        checked={invitationUpdate}
                                                    />
                                                }
                                                label={<Typography variant="body2">Update</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="invitationDelete"
                                                        onChange={handleInvitationPermissionChange}
                                                        checked={invitationDelete}
                                                    />
                                                }
                                                label={<Typography variant="body2">Delete</Typography>}
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid
                                        spacing={1}
                                        container={true}
                                        justifyContent="flex-start"
                                        alignItems="center">
                                        <Grid xs={12} item={true}>
                                            <Typography variant="body1">Permission</Typography>
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="permissionCreate"
                                                        onChange={handlePermissionPermissionChange}
                                                        checked={permissionCreate}
                                                    />
                                                }
                                                label={<Typography variant="body2">Create</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="permissionRead"
                                                        onChange={handlePermissionPermissionChange}
                                                        checked={permissionRead}
                                                    />
                                                }
                                                label={<Typography variant="body2">Read</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="permissionUpdate"
                                                        onChange={handlePermissionPermissionChange}
                                                        checked={permissionUpdate}
                                                    />
                                                }
                                                label={<Typography variant="body2">Update</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="permissionDelete"
                                                        onChange={handlePermissionPermissionChange}
                                                        checked={permissionDelete}
                                                    />
                                                }
                                                label={<Typography variant="body2">Delete</Typography>}
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid
                                        spacing={1}
                                        container={true}
                                        justifyContent="flex-start"
                                        alignItems="center">
                                        <Grid xs={12} item={true}>
                                            <Typography variant="body1">Quote</Typography>
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="quoteCreate"
                                                        onChange={handleQuotePermissionChange}
                                                        checked={quoteCreate}
                                                    />
                                                }
                                                label={<Typography variant="body2">Create</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="quoteRead"
                                                        onChange={handleQuotePermissionChange}
                                                        checked={quoteRead}
                                                    />
                                                }
                                                label={<Typography variant="body2">Read</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="quoteUpdate"
                                                        onChange={handleQuotePermissionChange}
                                                        checked={quoteUpdate}
                                                    />
                                                }
                                                label={<Typography variant="body2">Update</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="quoteDelete"
                                                        onChange={handleQuotePermissionChange}
                                                        checked={quoteDelete}
                                                    />
                                                }
                                                label={<Typography variant="body2">Delete</Typography>}
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid
                                        spacing={1}
                                        container={true}
                                        justifyContent="flex-start"
                                        alignItems="center">
                                        <Grid xs={12} item={true}>
                                            <Typography variant="body1">Value</Typography>
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="valueCreate"
                                                        onChange={handleValuePermissionChange}
                                                        checked={valueCreate}
                                                    />
                                                }
                                                label={<Typography variant="body2">Create</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="valueRead"
                                                        onChange={handleValuePermissionChange}
                                                        checked={valueRead}
                                                    />
                                                }
                                                label={<Typography variant="body2">Read</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="valueUpdate"
                                                        onChange={handleValuePermissionChange}
                                                        checked={valueUpdate}
                                                    />
                                                }
                                                label={<Typography variant="body2">Update</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="valueDelete"
                                                        onChange={handleValuePermissionChange}
                                                        checked={valueDelete}
                                                    />
                                                }
                                                label={<Typography variant="body2">Delete</Typography>}
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid
                                        spacing={1}
                                        container={true}
                                        justifyContent="flex-start"
                                        alignItems="center">
                                        <Grid xs={12} item={true}>
                                            <Typography variant="body1">Service</Typography>
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="serviceCreate"
                                                        onChange={handleServicePermissionChange}
                                                        checked={serviceCreate}
                                                    />
                                                }
                                                label={<Typography variant="body2">Create</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="serviceRead"
                                                        onChange={handleServicePermissionChange}
                                                        checked={serviceRead}
                                                    />
                                                }
                                                label={<Typography variant="body2">Read</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="serviceUpdate"
                                                        onChange={handleServicePermissionChange}
                                                        checked={serviceUpdate}
                                                    />
                                                }
                                                label={<Typography variant="body2">Update</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="serviceDelete"
                                                        onChange={handleServicePermissionChange}
                                                        checked={serviceDelete}
                                                    />
                                                }
                                                label={<Typography variant="body2">Delete</Typography>}
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid
                                        spacing={1}
                                        container={true}
                                        justifyContent="flex-start"
                                        alignItems="center">
                                        <Grid xs={12} item={true}>
                                            <Typography variant="body1">Team</Typography>
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="teamCreate"
                                                        onChange={handleTeamPermissionChange}
                                                        checked={teamCreate}
                                                    />
                                                }
                                                label={<Typography variant="body2">Create</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="teamRead"
                                                        onChange={handleTeamPermissionChange}
                                                        checked={teamRead}
                                                    />
                                                }
                                                label={<Typography variant="body2">Read</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="teamUpdate"
                                                        onChange={handleTeamPermissionChange}
                                                        checked={teamUpdate}
                                                    />
                                                }
                                                label={<Typography variant="body2">Update</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="teamDelete"
                                                        onChange={handleTeamPermissionChange}
                                                        checked={teamDelete}
                                                    />
                                                }
                                                label={<Typography variant="body2">Delete</Typography>}
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid
                                        spacing={1}
                                        container={true}
                                        justifyContent="flex-start"
                                        alignItems="center">
                                        <Grid xs={12} item={true}>
                                            <Typography variant="body1">Testimonial</Typography>
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="testimonialCreate"
                                                        onChange={handleTestimonialPermissionChange}
                                                        checked={testimonialCreate}
                                                    />
                                                }
                                                label={<Typography variant="body2">Create</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="testimonialRead"
                                                        onChange={handleTestimonialPermissionChange}
                                                        checked={testimonialRead}
                                                    />
                                                }
                                                label={<Typography variant="body2">Read</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="testimonialUpdate"
                                                        onChange={handleTestimonialPermissionChange}
                                                        checked={testimonialUpdate}
                                                    />
                                                }
                                                label={<Typography variant="body2">Update</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="testimonialDelete"
                                                        onChange={handleTestimonialPermissionChange}
                                                        checked={quoteDelete}
                                                    />
                                                }
                                                label={<Typography variant="body2">Delete</Typography>}
                                            />
                                        </Grid>
                                    </Grid>

                                </Stack>

                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </Container>
        </Layout>
    )
}

export default CreateAdminPage;
