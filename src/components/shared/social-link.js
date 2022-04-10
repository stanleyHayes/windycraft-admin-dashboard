import {Link} from "@mui/material";
import {Facebook, Instagram, LinkedIn, Twitter} from "@mui/icons-material";

const SocialLink = ({account}) => {

    return (
        <Link href={account.link}>
            {account.platform === 'facebook' ? (
                <Facebook
                    sx={{
                        fontSize: 36,
                        borderRadius: '50%',
                        backgroundColor: 'secondary.main',
                        color: 'primary.main',
                        padding: .8
                    }}
                />
            ) : account.platform === 'linkedin' ? (
                <LinkedIn
                    sx={{
                        fontSize: 36,
                        borderRadius: '50%',
                        backgroundColor: 'secondary.main',
                        color: 'primary.main',
                        padding: .8
                    }}/>
            ) : account.platform === 'twitter' ? (
                <Twitter
                    sx={{
                        fontSize: 36,
                        borderRadius: '50%',
                        backgroundColor: 'secondary.main',
                        color: 'primary.main',
                        padding: .8
                    }}
                />
            ) : <Instagram
                sx={{
                    fontSize: 36,
                    borderRadius: '50%',
                    backgroundColor: 'secondary.main',
                    color: 'primary.main',
                    padding: .8
                }}
            />}
        </Link>
    )
}

export default SocialLink;
