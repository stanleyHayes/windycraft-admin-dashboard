import { Button, Card, CardContent, Container, Divider, Grid, Stack, TextField, Typography} from "@mui/material";
import {useState} from "react";
import Layout from "../../components/layout/layout";

const ChangePasswordPage = () => {

    const [user, setUser] = useState({});
    const [visiblePassword, setVisiblePassword] = useState(false);
    const [error, setError] = useState({});
    const {confirmPassword, password, currentPassword} = user;

    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
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
                            Update Password
                        </Typography>
                    </Grid>
                </Grid>

                <Divider light={true} variant="fullWidth" sx={{my: 4}}/>

                <Grid container={true}>
                    <Grid item={true} xs={12} md={6} lg={4}>
                        <Card elevation={0} variant="elevation">
                            <CardContent>
                                <Typography gutterBottom={true} align="center" variant="body2">
                                    Set a strong password to protect your data
                                </Typography>

                                <Stack my={3} spacing={2} direction="column">
                                    <TextField
                                        label="Current Password"
                                        fullWidth={true}
                                        name="currentPassword"
                                        required={true}
                                        variant="outlined"
                                        value={currentPassword}
                                        error={Boolean(error.currentPassword)}
                                        helperText={error.currentPassword}
                                        type="password"
                                        size="medium"
                                        defaultValue=""
                                        onChange={handleChange}
                                    />

                                    <TextField
                                        label="Password"
                                        fullWidth={true}
                                        name="password"
                                        required={true}
                                        variant="outlined"
                                        value={password}
                                        error={Boolean(error.password)}
                                        helperText={error.password}
                                        type="password"
                                        size="medium"
                                        defaultValue=""
                                        onChange={handleChange}
                                    />

                                    <TextField
                                        label="Confirm Password"
                                        fullWidth={true}
                                        name="confirmPassword"
                                        required={true}
                                        variant="outlined"
                                        value={confirmPassword}
                                        error={Boolean(error.confirmPassword)}
                                        helperText={error.confirmPassword}
                                        type="password"
                                        size="medium"
                                        defaultValue=""
                                        onChange={handleChange}
                                    />
                                </Stack>

                                <Button
                                    sx={{
                                        backgroundColor: 'primary.main',
                                        color: 'secondary.main',
                                        textTransform: 'capitalize'
                                    }}
                                    size="large"
                                    fullWidth={true}
                                    variant="outlined">
                                    Change Password
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}

export default ChangePasswordPage;
