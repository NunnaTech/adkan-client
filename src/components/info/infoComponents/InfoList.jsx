import { Grid, Typography, Icon } from "@material-ui/core";

const InfoList = ({ info, rol, iconName }) => {
  return (
    <Grid
      container
      style={{ margin: 10 }}
      rowSpacing={4}
      columnSpacing={{ xs: 12, sm: 12, md: 12 }}
    >
      <Grid item xs={10}>
        <Typography variant="h6">{rol}</Typography>
        {info.map((e) => {
          return <Typography variant="body2">{`- ${e.name}`}</Typography>;
        })}
      </Grid>
      <Grid item sx={6}>
        <Icon style={{ fontSize: 40, marginTop: 5 }}>{iconName}</Icon>
      </Grid>
    </Grid>
  );
};

export default InfoList;
