import {Box} from "@mui/material";

const Feint = ({
                   color,
                   children,
                   padding = 0.2,
                   borderRadius = 0.6,
                   ...props
               }) => {

    return (
        <Box
            {...props}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 36,
                borderRadius: 1,
                backgroundColor: 'secondary.main',
                color: 'primary.main',
                padding: .8
            }}>
            {children}
        </Box>
    )
}
export default Feint;
