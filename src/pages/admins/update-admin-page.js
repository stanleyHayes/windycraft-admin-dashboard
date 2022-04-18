import Layout from "../../components/layout/layout";
import {
    Button,
    Container,
    Divider,
    Grid,
    LinearProgress,
    Typography,
    Alert,
    AlertTitle,
    Card,
    CardContent,
    Stack,
    TextField,
    FormControlLabel,
    Checkbox
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {selectAdmin} from "../../redux/admins/admin-reducer";
import {selectAuth} from "../../redux/authentication/auth-reducer";
import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import {ADMIN_ACTION_CREATORS} from "../../redux/admins/admin-action-creators";
import {ChevronLeft} from "@mui/icons-material";

const UpdateAdminPage = () => {

    const {adminLoading, adminError, adminDetail} = useSelector(selectAdmin);
    const [admin, setAdmin] = useState({});
    const [error, setError] = useState({});

    const {name, email, username, phone, emergencyPhoneNumber} = admin;

    const {token} = useSelector(selectAuth);

    const {adminID} = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = event => {
        setAdmin({...admin, [event.target.name]: event.target.value});
    }

    useEffect(() => {
        if(adminDetail){
            setAdmin({...adminDetail});
        }
    }, [adminDetail]);

    useEffect(() => {
        dispatch(ADMIN_ACTION_CREATORS.getAdmin(adminID, token));
    }, [adminID, dispatch, token]);

    const handleSubmit = event => {
        event.preventDefault();

        if(!name){
            setError({error, name: 'Field name'});
            return;
        }else {
            setError({error, name: null});
        }

        console.log(admin);
    }

    const [faqPermission, setFAQPermission] = useState({});

    const [clientPermission, setClientPermission] = useState({});

    const [invitationPermission, setInvitationPermission] = useState({});

    const [adminPermission, setAdminPermission] = useState({});

    const [messagePermission, setMessagePermission] = useState({});

    const [quotePermission, setQuotePermission] = useState({});

    const [valuePermission, setValuePermission] = useState({});

    const [servicePermission, setServicePermission] = useState({});

    const [teamPermission, setTeamPermission] = useState({});

    const [testimonialPermission, setTestimonialPermission] = useState({});

    const [permissionPermission, setPermissionPermission] = useState({});

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

    useEffect(() => {
        if(adminDetail){
            setAdmin({...adminDetail});
            setFAQPermission({...adminDetail.permissions.faqs});
            setClientPermission({...adminDetail.permissions.clients});
            setInvitationPermission({...adminDetail.permissions.invitations});
            setAdminPermission({...adminDetail.permissions.admins});
            setMessagePermission({...adminDetail.permissions.messages})
            setQuotePermission({...adminDetail.permissions.quotes})
            setValuePermission({...adminDetail.permissions.values})
            setServicePermission({...adminDetail.permissions.services})
            setTeamPermission({...adminDetail.permissions.teams})
            setTestimonialPermission({...adminDetail.permissions.testimonials})
            setPermissionPermission({...adminDetail.permissions.permissions})

        }
    }, [adminDetail]);

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
                        <Typography gutterBottom={true}  variant="h4">
                            Admin Detail
                        </Typography>
                    </Grid>
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
                            startIcon={<ChevronLeft fontSize="medium"/>} variant="outlined">
                            Update Profile
                        </Button>
                    </Grid>
                </Grid>

                <Divider light={true} variant="fullWidth" sx={{my: 2}}/>

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
                                        value={phone}
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


                                    <Button
                                        onClick={handleSubmit}
                                        sx={{
                                            color: 'secondary.main',
                                            textTransform: 'capitalize'
                                        }}
                                        size="large" variant="contained">
                                        Update Admin
                                    </Button>
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
                                                        checked={testimonialDelete}
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

export default UpdateAdminPage;
