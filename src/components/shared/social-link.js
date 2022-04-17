import {Link} from "@mui/material";
import {Facebook, Instagram, Twitter} from "@mui/icons-material";

const SocialLink = ({account}) => {

    console.log(account)
    return (
        <Link
            href={account.facebook ? account.facebook : account.twitter ? account.twitter : account.instagram ? account.instagram : ''}>
            {account.facebook && (
                <Facebook
                    sx={{
                        fontSize: 36,
                        borderRadius: '50%',
                        backgroundColor: 'secondary.main',
                        color: 'primary.main',
                        padding: .8
                    }}
                />
            )}

            {account.twitter && (
                <Twitter
                    sx={{
                        fontSize: 36,
                        borderRadius: '50%',
                        backgroundColor: 'secondary.main',
                        color: 'primary.main',
                        padding: .8
                    }}
                />
            )}
            {account.instagram && (
                <Instagram
                    sx={{
                        fontSize: 36,
                        borderRadius: '50%',
                        backgroundColor: 'secondary.main',
                        color: 'primary.main',
                        padding: .8
                    }}
                />)}
        </Link>
    )
}

export default SocialLink;
