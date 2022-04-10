import {Button, Card, CardContent, CardMedia, Divider, Grid, Typography} from "@mui/material";
import SocialLink from "./social-link";
import {grey, red} from "@mui/material/colors";

const Team = ({team}) => {
    return (
        <Card elevation={0}>
            <CardMedia
                sx={{height: 250, objectFit: 'cover', objectPosition: 'center'}}
                component="img"
                src={team.image}
                alt={team.title}/>
            <CardContent
                sx={{
                    padding: 4
                }}>
                <Typography align="center" variant="h5" mb={1}>{team.name}</Typography>
                <Typography
                    sx={{color: grey['500']}}
                    align="center"
                    variant="body2"
                    mb={2}>
                    {team.position}
                </Typography>
                <Grid container={true} justifyContent="center" spacing={1}>
                    {team.accounts.map(account => {
                        return (
                            <Grid key={account.platform} item={true}>
                                <SocialLink account={account}/>
                            </Grid>
                        )
                    })}
                </Grid>
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

export default Team;
