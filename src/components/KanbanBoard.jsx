import React from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Board from "@asseinfo/react-kanban";
import '@asseinfo/react-kanban/dist/styles.css'
import "../components/KanbanStyles.css"
import "../assets/js/KanbanStyles.js"

const KanbanBoard = (onClick) => {


  const board = {
    columns: [
      {
        id: 1,
        title: "Planeación",
        cards: [
          {
            id: 1,
            title: "Gestionar Horarios Profesor PTC",
            description: "GERO",
          },
        ],
      },
      {
        id: 2,
        title: "Ejecución",
        cards: [
          {
            id: 2,
            title: "Sistema de pase de Lista",
            description: "SIPA",
          },
          {
            id: 3,
            title: "Sistema Ingenio Azucarero",
            description: "SIAZ",
          },
        ],
      },
      {
        id: 3,
        title: "Retrasado",
        cards: [
          {
            id: 4,
            title: "Gestor de Nóminas",
            description: "GENO",
          },

        ],
      },
      {
        id: 4,
        title: "Terminado",
        cards: [
          {
            id: 5,
            title: "Daily Food Delivery ",
            description: "DAFDE",
          },
          {
            id: 6,
            title: "Sistema Malvisco",
            description: "SIMA",
          },
        ],
      },
      {
        id: 5,
        title: "Cancelado",
        cards: [
          {
            id: 7,
            title: "Aplicación de Productos Digitales",
            description: "APRO",
          },

        ],
      },
    ],
  };

  function KanbanBoard() {
    return (
      <Board
        allowRemoveLane
        allowRemoveCard
        disableColumnDrag
        onLaneRemove={console.log}
        onCardRemove={console.log}
        onLaneRename={console.log}
        initialBoard={board}

        allowAddCard={{ on: "bottom" }}
        onNewCardConfirm={(draftCard) => ({
          id: new Date().getTime(),
          ...draftCard,
        })}
        onCardNew={console.log}
      />
    );
  }

  return (
    <>
      <AppBar
        style={{
          borderRadius: 10,
          padding: 8,
          backgroundColor: "#FFFEFF",
          boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
          borderLeft: "8px solid #0094c7"
        }}
        position="sticky"
      >
        <Toolbar>
          <IconButton
            style={{ color: "black" }}
            aria-label="open drawer"
            edge="start"
            onClick={onClick}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Grid container spacing={0} columns={1}>
            <Grid item xs={8}>
              <Typography
                variant="h5"
                noWrap
                component="div"
                style={{ color: "#333348", fontWeight: "bolder" }}
              >
                Tablero de Proyectos
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h6" noWrap component="div" style={{ color: '#333348', }}>
                Estados actuales
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <div
        style={{
          boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
          marginTop: 30,
          padding: 20,
          borderRadius: 20,
          backgroundColor: '#FFFFFF'
        }}
      >
        <KanbanBoard />
      </div>
    </>
  );
};


export default KanbanBoard;
