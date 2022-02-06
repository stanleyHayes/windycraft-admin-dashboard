import React from "react";
import {Link} from "react-router-dom";
import {makeStyles} from "@mui/styles";
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {selectUI} from "../../redux/ui/ui-reducer";
import {grey} from "@mui/material/colors";
import {UI_ACTION_CREATORS} from "../../redux/ui/ui-action-creators";

const LinkItem = ({path, label}) => {

    const useStyles = makeStyles(theme => {
        return {
            link: {
                textDecoration: 'none'
            },
        }
    });

    const classes = useStyles();

    const {activePath} = useSelector(selectUI);
    const dispatch = useDispatch();

    return (
        <Link
            onClick={() => dispatch(UI_ACTION_CREATORS.changeActivePath(path))}
            className={classes.link}
            to={path}>
            <Button
                sx={{
                    color: activePath === path ? '#f9a34f' : grey['100']
                }}
                variant="text">
                {label}
            </Button>
        </Link>
    )
}

export default LinkItem;
