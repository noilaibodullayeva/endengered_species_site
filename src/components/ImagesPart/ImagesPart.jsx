import { Box, Typography, Button } from '@mui/material';
import Img3 from '../../images/3.jpg'
import Img4 from '../../images/4.jpg'
import Img5 from '../../images/2.jpeg'

function Imagespart() {
    return (
        <Box sx={styles.BoxFull}>
            <Box sx={styles.BoxFirst}>
                <Box sx={styles.first}>
                    <Typography sx={{ fontSize: '30px', fontWeight: 400, ml: '30px', color: '#fff', mt: '40px' }}>
                        About Last <br /> Chance
                    </Typography>
                    <Typography sx={styles.lorem2} width='400px'>
                        Lorem ipsum, dolor sit amet eligendi alias. Libero, nobis explicabo! Necessitatibus. Perferendis tempora ipsa consequuntur reiciendis praesentium assumenda tempore, illum sapiente.
                    </Typography>
                    <Button variant='outlined' sx={styles.button1}> Learn More</Button>
                </Box>
                <Box sx={styles.ImageBox}
                ></Box>
                <Box sx={styles.second}>
                    <Typography sx={{ fontSize: '23px', fontWeight: 400, ml: '30px', color: '#fff', mt: '40px' }}>
                        Upcoming Projects <br /> To Found
                    </Typography>
                    <Typography sx={styles.lorem2} width='400px'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elitempora ipsa consequuntur reiciendis praesentium assumenda tempore, illum sapiente.
                    </Typography>
                    <Button variant='outlined' sx={styles.button1}>Support Us</Button>
                </Box>
            </Box>
            <Box sx={styles.BoxSecond} >
                <Box sx={styles.third}>
                    <Box sx={styles.insideBox}>
                        <Box p='60px 0 0 25px'>
                            <Typography sx={{ fontSize: '30px', fontWeight: 400, ml: '30px', color: '#fff', }}>
                                All The Latest <br /> Updates
                            </Typography>
                            <Typography sx={styles.lorem2} width='200px' >
                                Lorem ipsum, dolor sit amet elige praesentium assumenda tempore, illum sapiente.
                            </Typography>
                            <Button variant='outlined' sx={styles.button1}> Learn More</Button>
                        </Box>
                    </Box>
                </Box>
                <Box sx={styles.fourth}>
                    <Box sx={styles.fifth}>
                        <Typography sx={{ fontSize: '35px', fontWeight: 600, ml: '30px', color: '#fff', mt: '40px' }}>
                            HOW YOU <br /> CAN HELP
                        </Typography>
                        <Typography sx={styles.lorem2} width='400px' display='flex' flexDirection='row' justifyContent='space-around' mt='55px'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elitempora ipsa consequuntur reiciendis praesentium assumenda tempore, illum sapiente.
                            <Button variant='outlined' sx={styles.button2}>Act Now</Button>
                        </Typography>
                    </Box>
                    <Box sx={styles.sixth}>
                        <Box sx={styles.insideBox2}>
                            <Box p='20px 10px'>
                                <Typography sx={{ fontSize: '23px', fontWeight: 400, ml: '30px', color: '#fff', mt: '40px' }}>
                                    Get To <br /> Know Us
                                </Typography>
                                <Typography sx={styles.lorem2} width='260px'>
                                    Lorem ipsum,  ipsa consequuntur reiciendis praesentium assumenda tempore, illum sapiente.
                                </Typography>
                                <Button variant='outlined' sx={styles.button1}>Support Us</Button>
                            </Box>

                        </Box>
                    </Box>
                </Box>
                <Box>
                </Box>
            </Box>
        </Box>
    )
}
export default Imagespart

const styles = {
    BoxFull: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 0,
        mb: 9
    },
    BoxFirst: {
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
        width: '100%',
        height: { md: '300px', xs: '390px' },
        mt: { xs: '20px' }
    },
    first: {
        width: { md: '45%', xs: '100%' },
        backgroundColor: '#222'
    },
    lorem2: {
        fontSize: '15px',
        ml: '30px',
        color: '#fff'
    },
    button1: {
        width: '150px',
        borderRadius: 0,
        border: '1px solid #fff',
        color: '#fff',
        m: { md: '20px 0 0 30px', xs: '30px 0 20px 30px' },
        ':hover': {
            border: '1px solid #fff',
        }
    },
    button2: {
        width: '400px',
        borderRadius: 0,
        border: '1px solid #fff',
        color: '#fff',
        m: { md: '0px -90px 90px 50px', xs: '20px 40px 180px 30px' },
        ':hover': {
            border: '1px solid #fff',
        }
    },
    ImageBox: {
        width: { md: '15%', xs: '100%' },
        backgroundImage: `url(${Img3})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% ",

    },
    second: {
        width: { md: '45%', xs: '100%' },
        backgroundColor: '#7DB6E4',
        ml: { md: 0 }
    },
    BoxSecond: {
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
        width: '100%',
        height: { md: '650px', xs: '500px' },
        mt: { xs: '178px', md: 0 },
        mb: 0
    },
    third: {
        width: { md: '43%', xs: '100%' },
        backgroundImage: `url(${Img4})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% ",
        height: { md: '650px', xs: '500px' },
    },
    insideBox: {
        backgroundColor: '#F99725',
        width: '300px',
        height: '350px',
        margin: { md: '46.6% 0 0 53.4%', xs: '26.9% 0 0 43.5%' }
    },
    fourth: {
        display: 'flex',
        flexDirection: 'column',
        width: { md: '57%', xs: '100%' },
    },
    fifth: {
        height: {md: '300px', xs: '400px'},
        display: 'flex',
        flexDirection: {md: 'row', xs: 'column'},
        backgroundColor: '#F15729'
    },
    sixth: {
        backgroundImage: `url(${Img5})`,
        height: { md: '650px', xs: '500px' },
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%  100%",
    },
    insideBox2: {
        backgroundColor: '#000000',
        width: '300px',
        height: '350px',
        margin: { md: '12% 0 0 0', xs: '' }
    },
}