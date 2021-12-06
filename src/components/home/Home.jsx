import React from 'react'
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../assets/images/Logo.png';
const Home = (state) => {
    return (
        <>
            <AppBar
                style={{ borderRadius: 10, padding: 8, backgroundColor: '#FFFEFF', boxShadow: 'box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;',borderLeft: "8px solid #0094c7" }}
                position="sticky"
            >
                <Toolbar  >
                    <IconButton
                        style={{ color: 'black' }}
                        aria-label="open drawer"
                        edge="start"
                        onClick={state}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Grid container spacing={0} columns={1}>
                        <Grid item xs={8}>
                            <Typography variant="h4" noWrap component="div" style={{ color: '#333348', fontWeight: 'bolder' }}>
                                Bienvenido
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="h5" noWrap component="div" style={{ color: '#333348', }}>
                                Administrador de Proyectos Kanban
                            </Typography>
                        </Grid>

                    </Grid>
                    <img src={Logo} alt="Logo ADKAN" />
                </Toolbar>
            </AppBar>
            <div style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)", marginTop: 30, padding: 20, borderRadius: 20, backgroundColor: '#FFFFFF', borderLeft: "8px solid #0094c7" }}>

                <Grid container rowSpacing={1} columns={2} >
                    <Grid item xs={8}>
                        <Typography variant="h5" noWrap component="div" style={{ color: '#333348', fontWeight: 'bolder', paddingBottom: 20 }}>
                            Integrantes del equipo
                        </Typography>
                    </Grid>
                    <Grid xs={8}>

                        <Typography variant="h6" noWrap component="div" style={{ color: '#333348', }}>
                            - Hector Saldaña Espinoza
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="h6" noWrap component="div" style={{ color: '#333348', }}>
                            - Raúl Genaro Adame Najera
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="h6" noWrap component="div" style={{ color: '#333348', }}>
                            - Luis Enrique Álvarez Ortiz
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="h6" noWrap component="div" style={{ color: '#333348', }}>
                            - José Manuel Rodriguez Pavón
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="h6" noWrap component="div" style={{ color: '#333348', }}>
                            - Alexis Loya García
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="h6" noWrap component="div" style={{ color: '#333348', }}>
                            - Jair David Vasquez Martinez
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Home;