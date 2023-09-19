import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { ButtonGroup } from '@mui/material';
import Img2 from '../../images/logo.png'


const pages = ['Log In', 'Donate Now', 'Take Actions', 'Menu'];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="sticky" sx={{ backgroundColor: '#fff', height: '70px' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters backgroundColor='#fff'>
                    {/* <Container
                    component='img'
                    src={Img2}
                    sx={{
                        width:'70px',
                         height:'56px',
                          mt:'10%' 
                    }}
                    alt="logo"
                    /> */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 5,
                            ml: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 300,
                            letterSpacing: '.001rem',
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        LAST CHANCE
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'right', justifyContent: 'right' }}>

                        <ButtonGroup sx={{ marginRight: 0 }}>
                            <Button
                                variant="contained"
                                sx={{
                                    color: 'black',
                                    display: 'block',
                                    backgroundColor: '#fff',
                                    width: '150px',
                                    height: '70px',
                                    border: 'none',
                                    ':hover': {
                                        backgroundColor: '#fff',
                                    }
                                }}
                            >
                                Log In
                            </Button>
                            <Button
                                variant="contained"
                                sx={{
                                    color: 'white',
                                    display: 'block',
                                    backgroundColor: '#F15729',
                                    width: '150px',
                                    height: '70px',
                                    border: 'none',
                                    ':hover': {
                                        backgroundColor: '#F15729',
                                    }
                                }}
                            >
                                Donate Now
                            </Button>
                            <Button
                                variant="contained"
                                sx={{
                                    color: 'white',
                                    display: 'block',
                                    backgroundColor: '#F99725',
                                    width: '150px',
                                    height: '70px',
                                    border: 'none',
                                    ':hover': {
                                        backgroundColor: '#F99725',
                                    }
                                }}
                            >
                                Take Actions
                            </Button>
                            <Button
                                variant="contained"
                                sx={{
                                    color: 'white',
                                    display: 'block',
                                    backgroundColor: '#222',
                                    width: '150px',
                                    height: '70px',
                                    border: 'none',
                                    mr: 0,
                                    ':hover': {
                                        backgroundColor: '#222',
                                    }
                                }}
                            >
                                Menu
                            </Button>
                        </ButtonGroup>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, flexDirection: 'right', alignItems: 'right', marginLeft: '80%', mt: '10px' }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="black"
                        >
                            <MenuIcon />
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </IconButton>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LAST CHANCE
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;

