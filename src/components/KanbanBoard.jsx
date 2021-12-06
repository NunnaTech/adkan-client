import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import {Icon} from "@material-ui/core";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Board from "@asseinfo/react-kanban";
import "@asseinfo/react-kanban/dist/styles.css";
import "../components/KanbanStyles.css";
import loadStyles from "../assets/js/KanbanStyles.js";
import CardProject from '../components/CardProject';

const KanbanBoard = () => {
  useEffect(() => {
    loadStyles();
  }, []);

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
      disableCardDrag
      initialBoard={board}
      renderCard={CardProject}
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
            <Grid item xs={9}>
              <Typography
                variant="h5"
                style={{ color: "#333348", fontWeight: "bolder", marginTop:15 }}
              >{`Tablero de Proyectos`}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="h6"
                
                style={{
                  borderRadius: 10,
                  width: 300,
                  backgroundColor: "#C1ECE4",
                  textAlign: "center",
                  padding: 10,
                  marginTop: 5,
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                <Icon style={{ fontWeight: "bold", paddingTop: 6 }}>add</Icon>{" "}
                Nuevo Proyecto
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
          backgroundColor: "#FFFFFF",
        }}
      >
        <KanbanBoard />
      </div>
    </>
  );
};

export default KanbanBoard;
