import styled from "styled-components";
import Card from "@mui/material/Card";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
import FlagIcon from "@mui/icons-material/Flag";
import BuildIcon from "@mui/icons-material/Build";
import GroupsIcon from "@mui/icons-material/Groups";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

const Container = styled.div`
  background: #36393e;

  display: flex;
  justify-content: center; // 1
  flex-flow: row wrap; // 2
  width: 100%;
  height: 100%;
`;
// const List = styled.div`
//   display: flex;
//   justify-content: center; // 3
//   flex-flow: column wrap; // 4
// `;

// const Card = styled.div`
//   margin: 20px;
//   background: #fff;
//   height: 300px;
//   width: 400px;
//   border-radius: 20px;
//   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);

//   display: flex;
//   flex-flow: column; // 5
//   justify-content: center;
//   align-items: center;
// `;

const drawerWidth = 240;

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Headway{" "}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FlagIcon />
                </ListItemIcon>
                <ListItemText primary="Goals" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="Skills" />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <GroupsIcon />
                </ListItemIcon>
                <ListItemText primary="Meetings" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TextSnippetIcon />
                </ListItemIcon>
                <ListItemText primary="Notes" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Container>
          {" "}
          <List>
            {[0, 1, 2, 3, 5, 6, 7, 8, 9].map((item) => (
              <Card
                sx={{
                  margin: 2,
                  // background: #fff,
                  height: (300 * item) / 10 + 50,
                  width: 400,
                  // border-radius: 20
                  // box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);

                  // display: flex;
                  // flex-flow: column; // 5
                  // justify-content: center;
                  // align-items: center;
                }}
              >
                {item}
              </Card>
            ))}
          </List>
        </Container>
      </Box>
    </Box>
  );
}
