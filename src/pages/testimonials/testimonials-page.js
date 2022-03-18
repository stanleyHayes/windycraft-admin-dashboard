import Layout from "../../components/layout/layout";
import {
    Alert, AlertTitle,
    Container,
    Divider,
    Grid, LinearProgress,
    Paper,
    Rating,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    ToggleButton,
    ToggleButtonGroup,
    Typography
} from "@mui/material";
import {
    CancelOutlined,
    CancelRounded,
    CheckCircle,
    CheckCircleOutline,
    Delete,
    Edit,
    Visibility
} from "@mui/icons-material";
import {useState} from "react";
import moment from "moment";
import {brown, green, red} from "@mui/material/colors";
import {useSelector} from "react-redux";
import {selectTestimonials} from "../../redux/testimonials/testimonial-reducer";

const TestimonialsPage = () => {

    const handleDeleteService = () => {
    }

    const handleAddServiceDialog = () => {

    }

    const [status, setStatus] = useState('ALL');
    const {testimonials, testimonialLoading, testimonialError} = useSelector(selectTestimonials);

    const handleStatusChange = (event, value) => {
        setStatus(value);
    }

    return (
        <Layout>
            <Container
                sx={{
                    py: 4
                }}>
                <Grid container={true} justifyContent="space-between">
                    <Grid item={true} md="auto" xs={12}>
                        <Typography variant="h4">Testimonials</Typography>
                    </Grid>
                    <Grid item={true} md="auto" xs={12}>
                        <ToggleButtonGroup
                            exclusive={true}
                            size="small"
                            value={status}
                            fullWidth={true}
                            onChange={handleStatusChange}>
                            <ToggleButton value="ALL" selected={status === 'ALL'}>
                                ALL
                            </ToggleButton>
                            <ToggleButton value="APPROVED" selected={status === 'APPROVED'}>
                                {status === 'APPROVED' ? <CheckCircle/> : <CheckCircleOutline/>}
                            </ToggleButton>
                            <ToggleButton value="UNAPPROVED" selected={status === 'UNAPPROVED'}>
                                {status === 'UNAPPROVED' ? <CancelRounded/> : <CancelOutlined/>}
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Grid>
                </Grid>
                <Divider variant="fullWidth" sx={{my: 2}}/>
                {testimonialLoading && <LinearProgress variant="query" color="secondary"/>}
                {testimonialError && <Alert severity="error"><AlertTitle>{testimonialError}</AlertTitle></Alert>}

                <TableContainer component={Paper} elevation={0}>
                    <Table size="medium">
                        <TableHead>
                            <TableCell>#</TableCell>
                            <TableCell>Sender</TableCell>
                            <TableCell>Rating</TableCell>
                            <TableCell>Review</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableHead>
                        <TableBody>
                            {testimonials && testimonials.length === 0 ? (
                                <TableRow>
                                    <TableCell align="center">No Testimonials Available</TableCell>
                                </TableRow>
                            ) : (
                                testimonials.map((testimonial, index) => {
                                    return (
                                        <TableRow hover={true} key={index}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{`${testimonial.firstName} ${testimonial.lastName}`}</TableCell>
                                            <TableCell>
                                                <Rating
                                                    value={testimonial.rating}
                                                    size="small"
                                                    precision={0.1}
                                                    readOnly={true}/>
                                            </TableCell>
                                            <TableCell>{testimonial.review}</TableCell>
                                            <TableCell>
                                                <Grid
                                                    container={true}
                                                    justifyContent="space-between"
                                                    alignItems="center">
                                                    <Grid item={true}>
                                                        <Visibility sx={{color: green['400']}}/>
                                                    </Grid>
                                                    <Grid item={true}>
                                                        <Edit sx={{color: brown['400']}}/>
                                                    </Grid>
                                                    <Grid item={true}>
                                                        <Delete sx={{color: red['400']}}/>
                                                    </Grid>
                                                </Grid>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Container>
        </Layout>
    )
}

export default TestimonialsPage;
