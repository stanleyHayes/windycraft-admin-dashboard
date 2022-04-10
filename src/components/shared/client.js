import {Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, Typography} from "@mui/material";
import {red} from "@mui/material/colors";

const Client = ({client}) => {
    return (
        <Card elevation={0}>
            <CardMedia
                sx={{height: 250, objectPosition: 'center', objectFit: 'cover'}}
                src={client.image}
                component="img"/>
            <CardContent>
                <Typography align="center" variant="h6">{client.name}</Typography>
            </CardContent>
            <Divider variant="fullWidth" light={true}/>
            <Grid container={true}>
                <Grid item={true} xs={6}>
                    <Button
                        sx={{
                            textTransform: 'capitalize',
                            borderRadius: 0,
                            color: red[600]
                        }}
                        fullWidth={true}
                        size="large"
                        variant="text">
                        Delete
                    </Button>
                </Grid>
                <Grid item={true} xs={6}>
                    <Button
                        sx={{
                            textTransform: 'capitalize',
                            color: "secondary.main",
                        }}
                        color="primary"
                        disableElevation={true}
                        fullWidth={true}
                        size="large"
                        variant="text">
                        Update
                    </Button>
                </Grid>
            </Grid>
        </Card>
    )
}

export default Client;
