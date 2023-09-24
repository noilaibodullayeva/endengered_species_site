import { Box, Button, Container, IconButton, TextField, Typography } from "@mui/material"
import { FacebookSharp, Instagram, Twitter, YouTube } from "@mui/icons-material"

function Footer() {
    return (
        <Box sx={styles.BigBoxFooter}>
            <Container sx={styles.BigBoxFooterOne}>
                <Typography sx={styles.footertypo}>
                    Contact Us
                </Typography>
                <Typography sx={styles.footerlorem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, perferendis! Similique quo eveniet saepe ratione. Quas accusamus repellendus provident minima sapiente facilis sint nulla eius.</Typography>
                <TextField id="standard-basic" placeholder="Name" variant="standard" sx={styles.textField} />
                <TextField id="standard-basic" placeholder="Email" variant="standard" sx={styles.textField} />
                <TextField id="standard-basic" placeholder="Phone" variant="standard" sx={styles.textField} />
                <Button variant="text" sx={styles.buttonFooter}>Submit</Button>
            </Container>
            <Container sx={styles.BigBoxFooterSecond}>
                <Box sx={styles.typoss}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={styles.footerbigText}>ADDRESS</Typography>
                        <Typography sx={styles.footersmallText}>500 Oxford St</Typography>
                        <Typography sx={styles.footersmallText1}>San Fransisco 29908</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={styles.footerbigText}>Phone</Typography>
                        <Typography sx={styles.footersmallText}>123 456 789</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={styles.footerbigText}>Email</Typography>
                        <Typography sx={styles.footersmallText}>info@gmail.com</Typography>
                    </Box>
                </Box>
                <Box sx={styles.icons}>
                    <Box sx={styles.icon1}>
                        <Box sx={{ mt: '10px' }}>
                            <FacebookSharp color='#000000' paddingTop="10px" />
                            <Typography >Facebook</Typography>
                        </Box>
                    </Box>
                    <Box sx={styles.icon1}>
                        <Box sx={{ mt: '10px' }}>
                            <Instagram color='#000' />
                            <Typography>Instagram</Typography>
                        </Box>
                    </Box>
                    <Box sx={styles.icon1}>
                        <Box sx={{ mt: '10px' }}>
                            <Twitter color='#000' />
                            <Typography>Twitter</Typography>
                        </Box>
                    </Box>
                    <Box sx={styles.icon1}>
                        <Box sx={{ mt: '10px' }}>
                            <YouTube color='#000' />
                            <Typography>YouTube</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={styles.lastwords}>
                    <Typography sx={{ fontSize: '13px', color: '#000' }}>2023 Last Chance. Powered and Secured by Wix</Typography>
                    <Typography variant="link" href="/" component='a' sx={{ fontSize: '13px', color: '#000', mr: '100px' }}>Back to Top</Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer

const styles = {
    BigBoxFooter: {
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
        alignItems: 'center',
        justifyContent: 'space-between',
        mt: '100px',
        mb: '90px'
    },
    BigBoxFooterOne: {
        width: { md: '50%', xs: '100%' },
        display: 'flex',
        flexDirection: 'column',
        textAlign: { xs: 'center' }
    },
    BigBoxFooterSecond: {
        width: { md: '50%', xs: '100%' },
        flexDirection: 'column',
        display: 'flex',
    },
    typoss: {
        flexDirection: 'row',
        textAlign: { xs: 'center' },
        display: 'flex',
        ml:{xs:'50px'}
    },
    footertypo: {
        fontSize: '35px',
        fontFamily: 'roboto',
        fontWeight: 500,
        color: '#000',
        m: { md: '30px 0 15px 200px', xs: '30px 0 15px 30px' },
    },
    footerlorem: {
        fontSize: '16px',
        fontFamily: 'lucida grande',
        fontWeight: 300,
        color: '#AAA',
        m: { md: '10px 0 15px 200px', xs: '10px 0 15px 30px' },
        width: { md: '50%', xs: '90%' }
    },
    textField: {
        m: { md: '5px 0 15px 200px', xs: '5px 0 15px 30px' },
        color: '#AAA',
        width: '50%',
        textAlign: { xs: 'center' }
    },
    buttonFooter: {
        m: { md: '10px 0 15px 450px', xs: '10px 0 15px 100px' },
        width: '120px'
    },
    footersmallText: {
        fontSize: '13px',
        fontFamily: 'roboto',
        fontWeight: 300,
        color: '#000',
        m: { md: '10px 0 10px 50px', xs: '10px 0 10px 30px' },
    },
    footersmallText1: {
        fontSize: '13px',
        fontFamily: 'roboto',
        fontWeight: 300,
        color: '#000',
        m: { md: '0 0 15px 50px', xs: '0px 0 10px 30px' },
    },
    footerbigText: {
        fontSize: '16px',
        fontFamily: 'roboto',
        fontWeight: 300,
        color: '#000',
        m: { md: '30px 0 15px 50px', xs: '30px 0 15px 30px' },
    },
    icons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        gap: 5,
        ml: {md: '55px', xs: '10px'},
        mt: '40px'
    },
    icon1: {
        width: '90px',
        height: '90px',
        border: '2px solid #000',
        color: '#000',
        alignItems: 'center'
    },
    lastwords: {
        display: 'flex',
        flexDirection: 'row',
        mt: '80px',
        justifyContent: 'space-between',
        ml: {md:'57px', xs: '10px'}
    }
}