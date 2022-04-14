import {Avatar, CardHeader, Typography} from "@mui/material";
import {UTILS} from "../../utils/constants/utils";

const User = ({name}) => {
    return (
        <CardHeader
            avatar={
                    <Avatar>
                        <Typography variant="h6">{UTILS.getInitials(name)}</Typography>
                    </Avatar>
            }
            title={<Typography variant="body2">{name}</Typography>}/>
    )
}

export default User;
