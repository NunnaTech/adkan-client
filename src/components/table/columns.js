import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const columns = [
    {
        name: 'Código',
        selector: row => row.code,
        conditionalCellStyles: [
            {
                when: row => row.status,
                style: {
                    fontWeight: 'bold',
                },
            },
        ]
    },
    {
        name: 'Proyecto',
        selector: row => row.project,
    },
    {
        name: 'Estado',
        selector: row => row.status,
        conditionalCellStyles: [
            {
                when: row => row.status === 'Planeado',
                style: {
                    fontWeight: 'bold',
                    color: '#898989',
                },
            },
            {
                when: row => row.status === 'Ejecución',
                style: {
                    fontWeight: 'bold',
                    color: '#FDB441',
                },
            },
            {
                when: row => row.status === 'Terminado',
                style: {
                    fontWeight: 'bold',
                    color: '#6AB547',
                },
            },
            {
                when: row => row.status === 'Retrasado',
                style: {
                    fontWeight: 'bold',
                    color: '#FF220C',
                },
            },
            {
                when: row => row.status === 'Cancelado',
                style: {
                    fontWeight: 'bold',
                    color: '#343434',
                },
            },
        ]
    },
    {
        name: 'Fecha inicio plan',
        selector: row => row.dateStartPlan,
    },
    {
        name: 'Fecha fin plan',
        selector: row => row.dateEndPlan,
    },
    {
        name: 'Fecha de estatus',
        selector: row => row.dateStatus,
    },
    {
        name: 'Product Owner',
        selector: row => row.owner,
    },
    {
        name: 'Scrum Master',
        selector: row => row.master,
    },
    {
        cell: () =>
            <IconButton aria-label="delete">
                <DeleteIcon />
            </IconButton>,
        ignoreRowClick: false,
        allowOverflow: true,
        button: true,
    },
    {
        cell: () =>
            <IconButton aria-label="delete">
                < EditIcon />
            </IconButton>,
        ignoreRowClick: false,
        allowOverflow: true,
        button: true,
    }
];

export default columns;