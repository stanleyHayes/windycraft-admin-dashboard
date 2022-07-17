import {Button, Card, CardContent, CardMedia, Divider, Grid, Link, Typography} from "@mui/material";
import {grey, red} from "@mui/material/colors";
import {Facebook, Instagram, Twitter} from "@mui/icons-material";
import {useState} from "react";
import UpdateTeamMemberDialog from "../dialogs/update/update-team-member-dialog";

const Team = ({team}) => {

    const [open, setOpen] = useState(false);

    return (
        <Card elevation={0}>
            <CardMedia
                sx={{height: 250, objectFit: 'cover', objectPosition: 'top'}}
                component="img"
                src={team.image}
                alt={team.role}/>
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
                    {team.role}
                </Typography>
                <Grid container={true} justifyContent="center" spacing={1}>
                    {team?.socialMediaAccounts?.facebook && (
                        <Grid item={true}>
                            <Link
                                target="_parent"
                                href={team?.socialMediaAccounts?.facebook}>
                                <Facebook
                                    sx={{
                                        fontSize: 36,
                                        borderRadius: '50%',
                                        backgroundColor: 'secondary.main',
                                        color: 'primary.main',
                                        padding: .8
                                    }}
                                />
                            </Link>
                        </Grid>
                    )}
                    {team?.socialMediaAccounts?.twitter && (
                        <Grid item={true}>
                            <Link
                                target="_parent"
                                href={team?.socialMediaAccounts?.twitter}>
                                <Twitter
                                    sx={{
                                        fontSize: 36,
                                        borderRadius: '50%',
                                        backgroundColor: 'secondary.main',
                                        color: 'primary.main',
                                        padding: .8
                                    }}
                                />
                            </Link>
                        </Grid>
                    )}
                    {team?.socialMediaAccounts?.instagram && (
                        <Grid item={true}>
                            <Link
                                target="_parent"
                                href={team?.socialMediaAccounts?.instagram}>
                                <Instagram
                                    sx={{
                                        fontSize: 36,
                                        borderRadius: '50%',
                                        backgroundColor: 'secondary.main',
                                        color: 'primary.main',
                                        padding: .8
                                    }}
                                />
                            </Link>
                        </Grid>
                    )}
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
                        onClick={() => setOpen(true)}
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

            {
                open &&
                <UpdateTeamMemberDialog
                    open={open}
                    handleClose={() => setOpen(false)}
                    teamMember={team}
                />
            }
        </Card>
    )
}

export default Team;
