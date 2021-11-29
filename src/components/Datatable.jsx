import React from 'react'
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';

const Datatable = (state) => {
    const columns = ["Name", "Company", "City", "State"];

    const data = [
        ["Joe James", "Test Corp", "Yonkers", "NY"],
        ["John Walsh", "Test Corp", "Hartford", "CT"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
    ];

    const options = {
        filterType: 'checkbox',
    };

    return (
        <>
            <AppBar
                style={{ borderRadius: 10, padding: 8, backgroundColor: '#FFFEFF', boxShadow: 'box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;' }}
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
                            <Typography variant="h5" noWrap component="div" style={{ color: '#333348', fontWeight: 'bolder' }}>
                                Lista de proyectos
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="h6" noWrap component="div" style={{ color: '#333348', }}>
                                Tabla
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>


            <Card style={{ boxShadow: 'box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;', marginTop: 30, padding: 20, borderRadius: 20 }}>
                
            </Card>
        </>
    )
}

export default Datatable;