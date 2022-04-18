import {Link} from "react-router-dom";
import {Box, Grid, Stack, Typography} from "@mui/material";
import {ChevronRight} from "@mui/icons-material";
import {makeStyles} from "@mui/styles";
import {useDispatch} from "react-redux";
import {UI_ACTION_CREATORS} from "../../redux/ui/ui-action-creators";

const SideBarLinkItem = ({path, icon, label, activePath}) => {
    const useStyles = makeStyles(theme => {
        return {
            link: {
                textDecoration: 'none',
                display: 'block',
                paddingTop: 4,
                paddingBottom: 4,
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
            <Grid
                sx={{
                    backgroundColor: activePath === path ? 'rgba(249,163,79,0.25)' : 'primary.main',
                    borderRightWidth: activePath === path ? 5 : 0,
                    borderRightColor: activePath === path ? 'secondary.main': false,
                    borderRightStyle: activePath === path ? 'solid' : false,
                    borderRadius: 2,
                    padding: 0.5
                }}
                container={true} justifyContent="space-between" alignItems="center">
                <Grid item={true} xs={10}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Box
                            sx={{
                                fontSize: 20,
                                borderRadius: 2,
                                color: activePath === path ? 'secondary.main' : 'white',
                                padding: .4,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            {icon}
                        </Box>
                        <Typography
                            sx={{color: 'secondary.main'}}
                            variant="body2">
                            {label}
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item={true} xs={2}>
                    <Stack justifyContent="flex-end" direction="row" alignItems="center">
                        <ChevronRight color="secondary"/>
                    </Stack>
                </Grid>
            </Grid>
        </Link>
    )
}

export default SideBarLinkItem;
