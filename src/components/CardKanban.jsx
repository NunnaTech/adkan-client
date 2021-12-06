import { Card, Typography } from "@material-ui/core";

const CardKanban = ({ id, title, description, status, color, dates }) => {
  return (
    <Card style={{ padding: 20, width: 300, border:10 }}>
      <Typography variant="h6" style={{marginTop:5}}>{title}</Typography>
      <Typography variant="body2" style={{marginTop:5}}>{description}.</Typography>
      <Typography
        variant="body2"
        style={{
          backgroundColor: `${color}`,
          borderRadius: 10,
          width: 120,
          textAlign: "center",
          marginTop:5,
          color:"white",
          fontWeight:"bold"
        }}
      >
        {status}
      </Typography>
      <Typography variant="body2" style={{marginTop:5}}>{dates}</Typography>
    </Card>
  );
};

export default CardKanban;
