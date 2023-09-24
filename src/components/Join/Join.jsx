import { Box, Button, TextField, Typography } from "@mui/material"

function Join() {
    return (
        <Box sx={styles.fullBox}>
            <Box sx={styles.wordsJoin}>
                <Typography sx={styles.joinWord}>
                    JOIN THE MOVEMENT
                </Typography>
                <Typography sx={styles.smallWord}>
                    Get the Latest News & Updates
                </Typography>
                <TextField id="outlined-basic" placeholder="Enter Your Email Here" variant="outlined" sx={styles.Input} />
                <Button variant="contained" sx={styles.subs} >Subscribe</Button>
            </Box>
        </Box>
    )
}
export default Join

const styles = {
    fullBox: {
        height: {md: '300px', xs: '200px'},
         width: '100%', 
         backgroundColor: '#F15729',
         color: '#fff'
    },
    wordsJoin: {
        textAlign: 'center',
        // m: { md: '40px 0 20px 0', xs: '40px 0 20px 0' }
    },
    joinWord: {
        fontSize: {md: '60px', xs: '30px'},
        fontFamily: 'roboto',
        fontWeight: 900,
        fontStyle: 'normal',
        textAlign: 'center',
        pt: '50px',
        color: '#fff'
    },
    smallWord: {
        fontSize: {md:'30px', xs: '18px'},
        fontFamily: 'roboto',
        fontWeight: 300,
        fontStyle: 'normal',
        textAlign: 'center'
    },
    Input: {
        width: {md: '600px', xs: '70%'},
        height: {md:'60px', xs: '40px'},
        color: '#fff',
        backgroundColor: '#000',
        mt: {md: '80px', xs: '70px'},
        border: '1px solid #000',
        borderRadius: 'none',
        ':hover': {
            border: '1px solid #000',
        },
    },
    subs:{
        width: {md: '130px', xs: '20%'},
        height: {md:'60px', xs: '40px'},
        color: '#000',
        mt: {md: '80px', xs: '70px'},
        backgroundColor: '#fff',
        ml: 0,
        border: '2px solid #000',
        ':hover': {
            backgroundColor: '#fff',
        },
        borderRadius: 'none'
    }
}