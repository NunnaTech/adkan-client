import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Board from "@asseinfo/react-kanban";
import "@asseinfo/react-kanban/dist/styles.css";
import "../components/KanbanStylesUserHistory.css";
import loadStylesUserHistory from "../assets/js/KanbanUserHistoryStyles";

const KanbanBoardUserHistory = (onClick) => {
  useEffect(() => {
    loadStylesUserHistory();
  }, []);
  const board = {
    columns: [
      {
        id: 1,
        title: "Pendiente",
        cards: [
          {
            id: 1,
            title: "Módulo estudiantes",
            description: "Elaborar el módulo del CRUD de los estudiantes",
          },
        ],
      },
      {
        id: 2,
        title: "Ejecución",
        cards: [
          {
            id: 2,
            title: "Módulo docentes",
            description: "Elaborar el módulo del CRUD de los docentes",
          },
          {
            id: 3,
            title: "Módulo inicio de sesión",
            description:
              "Elaborar y probar el inicio de sesión con autenticación a Google",
          },
          {
            id: 4,
            title: "Generador de reportes",
            description:
              "Implementación y diseño de reportes con datatables e impresiones en PDF",
          },
        ],
      },
      {
        id: 3,
        title: "Terminado",
        cards: [
          {
            id: 4,
            title: "Diseño de pantallas",
            description:
              "Elaborar el boceto de todas las pantallas a intereractuar",
          },
        ],
      },
      {
        id: 4,
        title: "Cancelado",
        cards: [
          {
            id: 5,
            title: "Módulo de RENAPO",
            description:
              "Implementar la consulta de CURPs de los estudiantes en renapo",
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
          borderLeft: "8px solid #0094c7",
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
                Tablero de <span style={{ color: "#0190C3" }}>Sistema de pase de lista</span>
              </Typography>
              
            </Grid>
            <Grid item xs={8}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                style={{ color: "#333348" }}
              >
                SISPA - Historias de usuario{" "}
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

export default KanbanBoardUserHistory;
