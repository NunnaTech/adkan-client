import {
  Card,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  ListItemAvatar,
  ListItemText,
  List,
} from "@material-ui/core";
import PersonIcon from "@mui/icons-material/Person";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";

const emails = ["Claudio Lopez", "Mauro Castro","Juan Manuel", "Jose Flores"];

const CardProject = ({ id, title, description, status, color, dates }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card style={{ padding: 20, width: 300, border: 10 }}>
        <Typography variant="h6" style={{ marginTop: 5 }}>
          {title}
        </Typography>
        <Typography variant="body2" style={{ marginTop: 5 }}>
          {description}.
        </Typography>
        <Typography
          onClick={() => setOpen(true)}
          style={{
            backgroundColor: `#D5F2FF`,
            borderRadius: 10,
            width: 120,
            textAlign: "center",
            marginTop: 5,
            color: "black",
            fontWeight: "bold",
          }}
        >
          Equipo
        </Typography>
      </Card>
      <Dialog onClose={() => setOpen(false)} open={open}>
          <DialogTitle>Equipo</DialogTitle>
          <List sx={{ pt: 0 }}>
            {emails.map((email) => (
              <ListItem button key={email}>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "gray", color: "white" }}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={email} />
              </ListItem>
            ))}
          </List>
        </Dialog>
    </>
  );
};

export default CardProject;
