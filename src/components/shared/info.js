import {Card, CardContent, Stack, Typography} from "@mui/material";
import Feint from "./feint";

const Info = ({title, value, icon}) => {

    return (
        <Card elevation={0}>
            <CardContent>
                <Stack spacing={2} direction="row" justifyContent="flex-start" alignItems="center">
                    <Feint
                        padding={0.2}
                        borderRadius={4}
                        children={icon}
                    />

                    <Stack direction="column">
                        <Typography
                            mb={1}
                            sx={{fontSize: 10}}
                            variant="body2">
                            {title}
                        </Typography>

                        <Typography
                            sx={{fontSize: 12}}
                            variant="body2">
                            {value}
                        </Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Info;
