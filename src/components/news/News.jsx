import { Box, Button, Card, CardMedia, Checkbox, Divider, IconButton, Typography } from "@mui/material";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Comment, Favorite, FavoriteBorder } from "@mui/icons-material";
import Img6 from '../../images/5.png';

function News() {
    return (
        <Box sx={styles.NewsBox}>
            <Box sx={styles.NewsBoxInside}>
                <Typography sx={styles.TypoNews1}>
                    Latest News <Typography sx={{ color: '#F15729', fontSize: '80px', fontFamily: 'lucida grande, tahoma, verdana, arial, sans-serif', }}>.</Typography>
                </Typography>
                <Box sx={styles.BoxCard}>
                    <Card sx={styles.Card}>
                        <Typography sx={styles.Earth}>
                            Earth Hour: What You <br /> Need To Know
                        </Typography>
                        <Typography sx={styles.lorem4}>
                            Lorem ipsum dolor quaerat sunt maiores odio repudiandae dolore neque voluptate quas, atque ea architecto optio quia iste maxime ullam? Nisi harum maiores laborum id necessitatibus?
                        </Typography>
                        <Divider sx={styles.Divider} />
                        <Box sx={styles.comments}>
                            <IconButton>
                                <VisibilityOutlinedIcon /> <Typography sx={styles.number}>0</Typography>
                            </IconButton>
                            <IconButton>
                                <Comment />
                            </IconButton>
                            <IconButton aria-label="add to favorites">
                                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
                            </IconButton>
                        </Box>
                    </Card>
                    <Card sx={styles.Card}>
                        <CardMedia
                            component="img"
                            height="58%"
                            image={Img6}
                            alt="Paella dish"
                        />
                        <Typography sx={styles.Earth}>
                            Your March For Climate
                        </Typography>
                        <Divider sx={styles.Divider} />
                        <Box sx={styles.comments}>
                            <IconButton>
                                <VisibilityOutlinedIcon /> <Typography sx={styles.number}>0</Typography>
                            </IconButton>
                            <IconButton>
                                <Comment />
                            </IconButton>
                            <IconButton aria-label="add to favorites">
                                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
                            </IconButton>
                        </Box>
                    </Card>
                    <Card sx={styles.Card}>
                        <Typography sx={styles.Earth}>
                            Living Your Best <br /> Sustainable Life
                        </Typography>
                        <Typography sx={styles.lorem4}>
                            Lorem ipsum dolor quaerat sunt maiores odio repudiandae dolore neque voluptate quas, atque ea architecto optio quia iste maxime ullam? Nisi harum maiores laborum id necessitatibus?
                        </Typography>
                        <Divider sx={styles.Divider} />
                        <Box sx={styles.comments}>
                            <IconButton>
                                <VisibilityOutlinedIcon /> <Typography sx={styles.number}>0</Typography>
                            </IconButton>
                            <IconButton>
                                <Comment />
                            </IconButton>
                            <IconButton aria-label="add to favorites">
                                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
                            </IconButton>
                        </Box>
                    </Card>
                </Box>
                <Button
                 sx={{
                    color:'#000',
border:'2px solid #000',
m:'10px 0 20px 0',
':hover': {
    border:'2px solid #000',
    color:'#000',
},
}} variant='outlined'>View More</Button>
            </Box>

        </Box>
    )
}

export default News

const styles = {
    NewsBox: {
        backgroundColor: '#fff',
        marginTop: { xs: '900px', md: 0 },
    },
    NewsBoxInside: {
        ml: { md: '200px', xs: '30px' }
    },
    TypoNews1: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'left',
        m: { md: '40px 0 40px 0px', xs: '20px 0 30px 0px' },
        fontSize: '70px',
        fontFamily: 'lucida grande, tahoma, verdana, arial, sans-serif',
        fontWeight: '900',
        color: '#000'
    },
    BoxCard: {
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
        gap: { md: '20px', xs: '10px' },
        justifyContent: 'space-around',
        m: { md: '20px 200px 20px 0', xs: '20px 30px 20px 0' }
    },
    Card: {
        width: { md: '400px', xs: '90%' }
    },
    Earth: {
        fontSize: '25px',
        fontFamily: 'lucida grande, tahoma, verdana, arial, sans-serif',
        fontWeight: '600',
        color: '#000',
        m: { md: '5% 0 2% 7%', xs: '3% 3% 10% 7%' }
    },
    lorem4: {
        fontSize: '16px',
        fontFamily: 'sans-serif',
        fontWeight: '300',
        color: '#575757',
        padding: 3
    },
    number: {
        fontSize: '16px',
        fontFamily: 'sans-serif',
        fontWeight: '300',
        color: '#AAAAAA',
        pl: '5px'
    },
    Divider: {
        width: '90%',
        m: '10px 5px 7px 5px',
        color: '#AAAAAA'
    },
    comments: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        color: '#AAAAAA',
        mb: 0
    }
}