import { Box, Button, Typography } from "@mui/material"
import Img1 from '../../images/1.jpeg'

function Banner1() {
    return (
        <Box sx={styles.bigBox}>
            <Box sx={styles.secondBox}>
            </Box>
            <Box sx={styles.words}>
                <Box sx={styles.wordaBox}>
                    <Typography sx={styles.typ}>
                        PROTECT
                    </Typography>
                    <Typography sx={styles.span}>OUR WILDLIFE</Typography>
                </Box>
                <Typography sx={styles.lorem} >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolor quasi odio vero veniam quisquam obcaecati voluptatum, aspernatur natus dolores cumque. Distinctio quibusdam cumque amet natus, voluptatibus culpa illo quisquam hic nulla iusto asperiores enim repudiandae optio voluptate expedita recusandae.
                </Typography>
                 <Button variant="contained" sx={styles.buttonBottom}>
                        Get started
                    </Button>
            </Box>
        </Box>
    )
}

export default Banner1

const styles = {
    bigBox: {
        backgroundImage: `url(${Img1})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: 'fixed',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundSize: "cover"
    },
    secondBox: {
        display: { xs: 'none', md: 'flex' },
        width: { xs: '200px', md: '150px' },
        height: '40px',
        backgroundColor: '#F15729',
        margin: '50px 0 0 200px'
    },
    words: {
        display: 'flex',
        flexDirection: 'column',

    },
    wordaBox: {
        marginLeft: { xs: '30px', md: '200px' },
        mt: { xs: '7%', md: '5%' }
    },
    typ: {
        fontSize: { xs: '2rem', md: '5rem' },
        fontWeight: 900,
        fontStyle: 'normal',
        fontFamily: 'monoscape',
        color: '#222',
        display: 'flex'
    },
    span: {
        fontSize: '5rem',
        fontWeight: 800,
        fontStyle: 'normal',
        fontFamily: 'monoscape',
        color: '#F15729'
    },
    lorem: {
        fontSize: '1rem',
        fontWeight: 200,
        fontStyle: 'normal',
        fontFamily: 'monoscape',
        color: '#222',
        width: {md: '500px', xs: '300px'},
        height: '40px',
        margin: { xs: '20px 10px 10px 30px', md: '40px 20px 20px 200px' }
    },
    buttonBottom: {
        width: { xs: '200px', md: '400px' },
        height: '60px',
        backgroundColor: '#222',
        color: '#fff',
        fontSize: '16px',
        marginTop: '150px',
        marginLeft: { xs: '30px', md: '200px' },
        marginBottom: { xs: '20px', md: '10px' },
        ':hover': {
            backgroundColor: '#222',
        },
        border: 'none'
    }
}