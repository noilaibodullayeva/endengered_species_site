import { Typography, Box } from "@mui/material"


function Statistics() {
    return (
        <Box sx={styles.StatisticBox}>
            <Box sx={styles.boxes}>
                <Typography sx={styles.TypoOne}>
                    40K
                </Typography>
                <Typography sx={styles.lorem}>
                    Endengered<br/> Species
                </Typography>
            </Box>
            <Box sx={styles.boxes}>
                <Typography sx={styles.TypoOne}>
                    800
                </Typography>
                <Typography sx={styles.lorem}>
                    Volunteers
                </Typography>
            </Box>
            <Box sx={styles.boxes}>
                <Typography sx={styles.TypoOne}>
                    140
                </Typography>
                <Typography sx={styles.lorem}>
                    Conservation<br/> Programs
                </Typography>
            </Box>
            <Box sx={styles.boxes}>
                <Typography sx={styles.TypoOne}>
                    1
                </Typography>
                <Typography sx={styles.lorem}>
                    Earth For<br/> Us to Protect
                </Typography>
            </Box>
        </Box>
    )
}

export default Statistics

const styles = {
    StatisticBox: {
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: {md: '20px', xs: '30px'},
        m: {md: '60px 20px 30px 20px'}
    },
    boxes: {
        width: '200px',
        height: '200px',
        backgroundColor: '#fff',
    },
    TypoOne: {
        fontSize: '5rem',
        fontFamily: 'fantasy',
        fontWeight: '900',
        color: '#F15729'
    },
    lorem: {
        fontSize: '2rem',
        fontFamily: 'fantasy',
        fontWeight: '300',
        color: '#222',
    }
}