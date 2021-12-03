import { Link } from "react-router-dom";
import { AppBar, Toolbar, Grid, Typography, Button, Icon } from "@mui/material";

const InfoAppBar = ({ name, shortName }) => {
  return (
    <AppBar
      style={{
        borderRadius: 10,
        padding: 8,
        backgroundColor: "#FFFEFF",
        boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
        marginBottom: 20,
        borderLeft: "8px solid #0094c7",
      }}
      position="sticky"
    >
      <Toolbar>
        <Grid
          container
          rowSpacing={4}
          columnSpacing={{ xs: 12, sm: 12, md: 12 }}
        >
          <Grid item xs={8}>
            <Typography
              variant="h5"
              style={{ color: "#333348", fontWeight: "bolder" }}
            >{`Proyecto ${name}`}</Typography>
            <Typography variant="h6">{`${shortName} - Detalles`}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Link
              to="/KanbanBoardUserHistory"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                style={{
                  backgroundColor: `#018EC1`,
                  color: "white",
                  width: 250,
                  borderRadius: 10,
                  marginTop: 10,                 
                }}
              >
                <Icon style={{ marginRight: 10 }}>dashboard</Icon>Ver tablero
                Kanban
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default InfoAppBar;
