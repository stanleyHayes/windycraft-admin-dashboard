import {Link} from "react-router-dom";
import {makeStyles} from "@mui/styles";
import {useDispatch} from "react-redux";
import {UI_ACTION_CREATORS} from "../../redux/ui/ui-action-creators";
import {Button, Grid} from "@mui/material";

const DesktopSidebarLinkItem = ({activePath, path, icon, label}) => {
    const useStyles = makeStyles(() => {
        return {
            link: {
                textDecoration: 'none'
            }
        }
    });

    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Link
            to={path}
            onClick={() => dispatch(UI_ACTION_CREATORS.changeActivePath(path))}
            className={classes.link}>
            <Grid
                sx={{
                    backgroundColor: activePath === path ? 'rgba(249,163,79,0.25)' : 'primary.main',
                    pt: 1,
                    borderRightWidth: activePath === path ? 5 : 0,
                    borderRightColor: activePath === path && 'secondary.main',
                    borderRightStyle: activePath === path ? 'solid' : 'none',
                }}
                direction="column"
                container={true}
                justifyContent="center"
                alignItems="center">
                <Grid item={true}>
                    {icon}
                </Grid>
                <Grid item={true}>
                    <Button
                        variant="text"
                        sx={{
                            fontSize: 12,
                            textTransform: 'capitalize',
                            color: activePath === path ? 'secondary.main' : 'text.primary',
                            fontWeight: activePath === path ? 700 : 500
                        }}>{label}</Button>
                </Grid>
            </Grid>
        </Link>
    )
}

export default DesktopSidebarLinkItem;
