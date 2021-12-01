import CardOne from "./CardOne";
import { Grid, Typography, Button } from "@material-ui/core";

const GridCards = ({ info }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ marginLeft: -40, marginTop: 20 }}
    >
      <Grid item xs={5} style={{ margin: 10 }}>
        <CardOne
          info={info.productOwner}
          rol={`Product Owner`}
          iconName={`person`}
        />
      </Grid>
      <Grid item xs={5} style={{ margin: 10 }}>
        <CardOne
          info={info.scrumMaster}
          rol={`Scrum Master`}
          iconName={`person`}
        />
      </Grid>
      <Grid item xs={5} style={{ margin: 10 }}>
        <CardOne
          info={info.historyUser}
          rol={`Historias de Usuario`}
          iconName={`device_hub`}
          isList={true}
        />
      </Grid>
      <Grid item xs={5} style={{ margin: 10 }}>
        <CardOne
          info={info.developmentTeam}
          rol={`Development Team`}
          iconName={`group`}
          isList={true}
        />
      </Grid>
      <Grid item xs={5} style={{ margin: 10 }}>
        <CardOne
          info={`Inicio: ${info.dateStart.start} Final: ${info.dateStart.final}`}
          rol={`Fechas Planeadas`}
          iconName={`event`}
          isList={false}
        />
      </Grid>
      <Grid item xs={5} style={{ margin: 10 }}>
        <CardOne
          info={`Inicio: ${info.dateFinal.start} Final: ${info.dateFinal.final}`}
          rol={`Fechas Reales`}
          iconName={`event`}
          isList={false}
        />
      </Grid>
    </Grid>
  );
};

export default GridCards;
