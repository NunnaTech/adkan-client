import React from 'react'
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@material-ui/core/TextField';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Table from 'react-data-table-component';
import data from './data'
import columns from './columns'
import customStyles from './customStyles'

const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <>
        <TextField id="outlined-basic" label="Buscar" variant="outlined" size="small" style={{ margin: '5px' }} value={filterText} onChange={onFilter} />
        <Button variant="outlined" startIcon={< CloseIcon />} onClick={onClear}>
            Limpiar
        </Button>
    </>
);

const Datatable = (state) => {
    const [filterText, setFilterText] = React.useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);

    const filteredItems = data.filter(
        item => item.code && item.code.toLowerCase().includes(filterText.toLowerCase()),
    );

    const subHeaderComponentMemo = React.useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
        );

    }, [filterText, resetPaginationToggle]);

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


            <Card style={{ boxShadow: 'box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;', marginTop: 30, padding: 20, borderRadius: 20, }}>
                <Table
                    style={{height: '100%'}}
                    columns={columns}
                    data={filteredItems}
                    pagination
                    customStyles={customStyles}
                    highlightOnHover
                    pointerOnHover
                    subHeader
                    paginationResetDefaultPage={resetPaginationToggle}
                    subHeaderComponent={subHeaderComponentMemo}
                    persistTableHead
                />
            </Card>
        </>
    )
}

export default Datatable;