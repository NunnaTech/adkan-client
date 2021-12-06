import React, { useEffect, useState } from "react";
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
import CardKanban from "./CardKanban";
import {
  TextField,
  Icon,
  Dialog,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Box,
} from "@material-ui/core";

const KanbanBoardUserHistory = () => {
  const [open, setOpen] = useState(false);
  const [fase, setFase] = useState(1);
  const [estatus, setEstatus] = useState(1);

  useEffect(() => {
    loadStylesUserHistory();
    console.log(board.columns[0].cards);
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
            status: "",
            color: "",
            dates: "",
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
            status: "Análisis",
            color: "#FF220C",
            dates: "Fechas: 13/11/2021 al 14/11/2021",
          },
          {
            id: 3,
            title: "Módulo inicio de sesión",
            description:
              "Elaborar y probar el inicio de sesión con autenticación a Google",
            status: "Programación",
            color: "#F2BB05",
            dates: "Fechas: 11/11/2021 al 11/11/2021",
          },
          {
            id: 5,
            title: "Generador de reportes",
            description:
              "Implementación y diseño de reportes con datatables e impresiones en PDF",
            status: "Diseño",
            color: "#F5B100",
            dates: "Fechas: 12/11/2021 al 12/11/2021",
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
            status: "Test",
            color: "#6AB547",
            dates: "Fechas: 14/10/2021 al l4/10/2021",
          },
        ],
      },
      {
        id: 4,
        title: "Cancelado",
        cards: [
          {
            id: 9,
            title: "Módulo de RENAPO",
            description:
              "Implementar la consulta de CURPs de los estudiantes en renapo",
            status: "Cancelado",
            color: "#969696",
            dates: "Fechas: 09/10/2021 al l2/10/2021",
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
        initialBoard={board}
        renderCard={CardKanban}
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
                style={{ color: "#333348", fontWeight: "bolder" }}
              >{`Tablero del Sistema de pase de lista`}</Typography>
              <Typography variant="h6">{`SISPA - Historias de usuario`}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography
                  variant="h6"
                  onClick={() => {
                    setOpen(true);
                  }}
                  style={{
                    borderRadius: 10,
                    width: 300,
                    backgroundColor: "#C1ECE4",
                    textAlign: "center",
                    padding: 10,
                    marginTop:5,
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  <Icon style={{ fontWeight: "bold", paddingTop: 6 }}>add</Icon>{" "}
                  Nueva Historia
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
        <Dialog open={open} onClose={() => setOpen(false)}>
          <Grid
            style={{ padding: 30 }}
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h6" style={{ margin: 10 }}>
              Nueva Historia de Usuario
            </Typography>
            <TextField
              style={{ margin: 10 }}
              multiline
              label="Título"
              variant="standard"
            />
            <TextField
              style={{ margin: 10 }}
              label="Descripción"
              multiline
              variant="standard"
            />
            <Box sx={{ minWidth: 180 }} style={{ margin: 10 }}>
              <FormControl variant="standard" fullWidth>
                <InputLabel id="demo-simple-select-label">Fase</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={fase}
                  label="Planeación"
                  onChange={(event) => setFase(event.target.value)}
                >
                  <MenuItem value={1}>Pendiente</MenuItem>
                  <MenuItem value={2}>Ejecución</MenuItem>
                  <MenuItem value={3}>Terminado</MenuItem>
                  <MenuItem value={4}>Cancelado</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 180 }} style={{ margin: 10 }}>
              <FormControl variant="standard" fullWidth>
                <InputLabel id="demo-simple-select-label">Estatus</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={estatus}
                  label="Analisis"
                  onChange={(event) => setEstatus(event.target.value)}
                >
                  <MenuItem value={1}>Analisis</MenuItem>
                  <MenuItem value={2}>Diseño</MenuItem>
                  <MenuItem value={3}>Programación</MenuItem>
                  <MenuItem value={4}>Test</MenuItem>
                  <MenuItem value={5}>Cancelado</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Typography
              variant="h6"
              onClick={() => setOpen(false)}
              style={{
                borderRadius: 10,
                width: 180,
                backgroundColor: "#6AB547",
                textAlign: "center",
                padding: 10,
                marginTop: 15,
                color: "white",
                fontWeight: "bold",
              }}
            >
              Añadir
            </Typography>

            <Typography
              variant="h6"
              onClick={() => setOpen(false)}
              style={{
                borderRadius: 10,
                width: 180,
                backgroundColor: "#F2BB05",
                textAlign: "center",
                padding: 10,
                marginTop: 15,
                color: "white",
                fontWeight: "bold",
              }}
            >
              Cerrar
            </Typography>
          </Grid>
        </Dialog>
        <KanbanBoard />
      </div>
    </>
  );
};

export default KanbanBoardUserHistory;

/*
<Typography
                variant="h6"
                onClick={() => {
                  setOpen(true);
                }}
                style={{
                  borderRadius: 10,
                  width: 300,
                  backgroundColor: "#C1ECE4",
                  textAlign: "center",
                  padding: 10,
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                <Icon style={{ fontWeight: "bold", paddingTop: 6 }}>add</Icon>{" "}
                Nueva Historia
              </Typography>

*/
