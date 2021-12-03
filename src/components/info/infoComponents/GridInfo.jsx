import { Grid, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { infoProject } from "../infoUtilities/Info";
import GridCards from "./GridCards";

const GridInfo = () => {
  const [color, setColor] = useState("");

  useEffect(() => {
    if (infoProject.status.type === 1) {
      setColor("#898989")
    } else if (infoProject.status.type === 2) {
      setColor("#FDB441")
    } else if (infoProject.status.type === 3) {
      setColor("#FF220C")
    } else if (infoProject.status.type === 4) {
      setColor("#6AB547")
    } else if (infoProject.status.type === 5) {
      setColor("#343434")
    }
  }, [])

  return (
    <Grid
      container
      rowSpacing={4}
      columnSpacing={{ xs: 12, sm: 12, md: 12 }}
      style={{ margin: 40 }}
    >
      <Grid item xs={7}>
        <Typography variant="h6">Descripción</Typography>
        <Typography variant="body2" style={{textAlign:'justify'}}>{infoProject.description}</Typography>
      </Grid>
      <Grid item xs={3} style={{ marginLeft: 10 }}>
        <Typography variant="h6">Estado</Typography>

        <Typography
          style={{
            backgroundColor: `${color}`,
            color: "white",
            width: 200,
            padding: 10,
            textAlign: "center",
            borderRadius: 10,
          }}
        >
          {infoProject.status.name}
        </Typography>

      </Grid>
      <GridCards info={infoProject} />
    </Grid>
  );
};

export default GridInfo;

