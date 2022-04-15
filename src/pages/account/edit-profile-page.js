import Layout from "../../components/layout/layout";
import {
    Button,
    Card,
    CardContent,
    Container,
    Divider,
    Grid,
    Stack, TextField,
    Typography
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {selectAuth} from "../../redux/authentication/auth-reducer";

const EditProfile = () => {

    const {authData} = useSelector(selectAuth);

    useEffect(() => {
        if (authData) setUser(authData);
    }, [authData]);

    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const {
        name,
        email,
        username,
        phone,
        emergencyPhoneNumber,
    } = user;


    const handleUserChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (!name) {
            setError({error, [name]: 'Field required'});
            return;
        } else {
            setError({error, [name]: 'Field required'});
        }

        console.log(user);
    }
    return (
        <Layout>
            <Container>
                <Grid
                    sx={{my: 4}}
                    container={true}
                    justifyContent="space-between"
                    spacing={2}>
                    <Grid item={true} xs={12} md="auto">
                        <Typography variant="h4">
                            Update Profile
                        </Typography>
                    </Grid>
                </Grid>

                <Divider light={true} variant="fullWidth" sx={{my: 4}}/>

                <Grid
                    spacing={2}
                    container={true}
                    justifyContent="flex-start">
                    <Grid item={true} xs={12} md={6}>
                        <Card elevation={0}>
                            <CardContent>
                                <Stack my={3} spacing={2} direction="column">
                                    <TextField
                                        label="Name"
                                        fullWidth={true}
                                        name="name"
                                        required={true}
                                        variant="outlined"
                                        value={authData && name}
                                        error={Boolean(error.name)}
                                        helperText={error.name}
                                        type="person"
                                        size="medium"
                                        placeholder="Enter name"
                                        onChange={handleUserChange}
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
                                        placeholder="Enter email"
                                        onChange={handleUserChange}
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
                                        placeholder="Enter username"
                                        onChange={handleUserChange}
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
                                        placeholder="Enter phone number"
                                        onChange={handleUserChange}
                                    />

                                    <TextField
                                        label="Emergency Phone"
                                        fullWidth={true}
                                        name="emergencyPhone"
                                        required={true}
                                        variant="outlined"
                                        value={emergencyPhoneNumber}
                                        error={Boolean(error.emergencyPhoneNumber)}
                                        helperText={error.emergencyPhoneNumber}
                                        type="tel"
                                        size="medium"
                                        onChange={handleUserChange}
                                    />

                                </Stack>

                                <Button
                                    onClick={handleSubmit}
                                    sx={{
                                        backgroundColor: 'primary.main',
                                        color: 'secondary.main',
                                        textTransform: 'capitalize'
                                    }}
                                    size="large"
                                    fullWidth={true}
                                    variant="outlined">
                                    Update Profile
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}

export default EditProfile;
