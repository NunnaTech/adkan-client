import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Toolbar from "@mui/material/Toolbar";
import Logo from "../assets/images/Logo.png";
import Datatable from "../components/table/Datatable";
import InfoProject from "../components/info/InfoProject";
import KanbanBoard from '../components/KanbanBoard'
import KanbanBoardUserHistory from '../components/KanbanBoardUserHistory'
import Home from "../components/home/Home";
import { useNavigate } from "react-router-dom";
import {
  Routes,
  Route
} from "react-router-dom";
const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const navigate = useNavigate();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div style={{ flexGrow: 1, margin: 24, paddingTop: 10 }}>
        <img src={Logo} alt="logo" />
      </div>

      <List>
        {[
          {
            name: "Inicio",
            icon: <HomeIcon style={{ color: "black" }} />,
            path: "/"
          },
          {
            name: "Tablero",
            icon: <DashboardIcon style={{ color: "black" }} />,
            path: "/dashboardProject"
          },
          {
            name: "Proyectos",
            icon: <AssessmentIcon style={{ color: "black" }} />,
            path: "/tableProject"
          },
          {
            name: "Empleados",
            icon: <PersonIcon style={{ color: "black" }} />,
            path: "/projectDetail"
          },
          {
            name: "Equipos",
            icon: <GroupIcon style={{ color: "black" }} />,
            path: "/projectDetail"
          },
        ].map((item, index) => (
          <ListItem onClick={() => { navigate(item.path) }} button key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
      <Toolbar />
      <Toolbar />

      <List>
        {[
          {
            name: "Ajustes",
            icon: <SettingsIcon style={{ color: "black" }} />,
          },
          {
            name: "Modo oscuro",
            icon: <DarkModeIcon style={{ color: "black" }} />,
          },
        ].map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }} style={{ backgroundColor: "#F3F5F9" }}>
      <CssBaseline />
      <Box
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          style={{ borderRadius: 20 }}
          container={container}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          style={{ borderRadius: 20 }}
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        height="100vh"
        display="flex"
        flexDirection="column"
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {/*Aqui va su contenido*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tableProject" element={<Datatable />} />
          <Route path="/projectDetail" element={<InfoProject />} />
          <Route path="/dashboardProject" element={<KanbanBoard />} />
          <Route path="/KanbanBoardUserHistory" element={<KanbanBoardUserHistory />} />
        </Routes>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
