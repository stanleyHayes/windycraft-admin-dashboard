import {Link} from "react-router-dom";
import {Box, Grid, Stack, Typography} from "@mui/material";
import {ChevronRight} from "@mui/icons-material";
import {makeStyles} from "@mui/styles";
import {useDispatch} from "react-redux";
import {UI_ACTION_CREATORS} from "../../redux/ui/ui-action-creators";

const SideBarLinkItem = ({path, icon, label}) => {
    const useStyles = makeStyles(theme => {
        return {
            link: {
                textDecoration: 'none',
                display: 'block',
                paddingTop: 4,
                paddingBottom: 4
            }
        }
    });

    const classes = useStyles();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(UI_ACTION_CREATORS.changeActivePath(path));
        dispatch(UI_ACTION_CREATORS.closeSidebar())
    }

    return (
        <Link onClick={handleClick} to={path} className={classes.link}>
            <Grid container={true} justifyContent="space-between" alignItems="center">
                <Grid item={true} xs={10}>
                    <Stack direction="row" spacing={2}>
                        <Box>
                            {icon}
                        </Box>
                        <Typography sx={{color: 'secondary.main'}} fontWeight="bold" variant="body1">{label}</Typography>
                    </Stack>
                </Grid>
                <Grid item={true} xs={2}>
                    <ChevronRight color="secondary" />
                </Grid>
            </Grid>
        </Link>
    )
}

export default SideBarLinkItem;
