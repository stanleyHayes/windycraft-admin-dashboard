import {Avatar, Button, Grid, MenuItem, Toolbar, Typography, Menu} from "@mui/material";
import {ExitToApp, Face, KeyboardArrowDown, LockOutlined, Menu as MUIIcon} from "@mui/icons-material";
import {UI_ACTION_CREATORS} from "../../../redux/ui/ui-action-creators";
import {Link} from "react-router-dom";
import {makeStyles} from "@mui/styles";
import {useDispatch, useSelector} from "react-redux";
import {selectAuth} from "../../../redux/authentication/auth-reducer";
import {useState} from "react";
import Feint from "../../shared/feint";

const MobileHeader = () => {

    const useStyles = makeStyles(() => {
        return {
            link: {
                textDecoration: 'none'
            },
            dropDownLink: {
                textDecoration: 'none',
                display: 'block',
                width: '100%'
            }
        }
    });

    const classes = useStyles();
    const dispatch = useDispatch();

    const [menuOpen, setMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = event => {
        setMenuOpen(true);
        setAnchorEl(event.currentTarget);
    }

    const handleMenuClose = () => {
        setMenuOpen(false);
        setAnchorEl(null);
    }


    return (
        <Toolbar variant="regular">
            <Grid container={true} alignItems="center" justifyContent="space-between">
                <Grid item={true}>
                    <MUIIcon
                        sx={{
                            borderRadius: 1,
                            padding: 0.4,
                            color: 'secondary.main',
                            fontSize: 32,
                            backgroundColor: '#F9A34F40'
                        }}
                        onClick={() => dispatch(UI_ACTION_CREATORS.openSidebar())}/>
                </Grid>
                <Grid item={true}>
                    <Link to="/" className={classes.link}>
                        <Typography sx={{color: 'secondary.main'}} variant="h6">
                            Super Craft GH
                        </Typography>
                    </Link>
                </Grid>
                <Grid item={true}>
                    <KeyboardArrowDown
                        sx={{
                            borderRadius: 1,
                            padding: 0.4,
                            color: 'secondary.main',
                            fontSize: 32,
                            backgroundColor: '#F9A34F40'
                        }}
                        onClick={handleMenuClick}
                    />
                    <Menu elevation={1} open={menuOpen} onClose={handleMenuClose} anchorEl={anchorEl}>
                        <MenuItem>
                            <Link to="/profile" className={classes.dropDownLink}>
                                <Button
                                    sx={{textTransform: 'capitalize'}}
                                    startIcon={<Face/>}
                                    color="secondary"
                                    variant="text"
                                    size="large">
                                    Profile
                                </Button>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/change-password" className={classes.dropDownLink}>
                                <Button
                                    sx={{textTransform: 'capitalize'}}
                                    startIcon={<LockOutlined/>}
                                    color="secondary"
                                    variant="text"
                                    size="large">
                                    Change Password
                                </Button>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Button
                                sx={{textTransform: 'capitalize'}}
                                startIcon={<ExitToApp/>}
                                color="secondary"
                                variant="text"
                                size="large">
                                Logout
                            </Button>
                        </MenuItem>
                    </Menu>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default MobileHeader
