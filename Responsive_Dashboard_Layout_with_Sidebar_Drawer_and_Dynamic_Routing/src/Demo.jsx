import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  Collapse,
} from "@mui/material";
import { useLocation } from "react-router-dom";

const drawerWidth = 290;


const SidebarContent = ({ onClose }) => {
  const location = useLocation();
  const isAnimatedActive = location.pathname.startsWith("/movie/animated");
  const isBollywoodActive = location.pathname.startsWith("/movie/bollywood");
  const isMovieActive = location.pathname.startsWith("/movie");

  const [openMovies, setOpenMovies] = React.useState(false);
  const [openAnimated, setOpenAnimated] = React.useState(false);
  const [openBollywood, setOpenBollywood] = React.useState(false);

  const toggleMovies = () => setOpenMovies(!openMovies);

  useEffect(() => {
    if (isMovieActive && isAnimatedActive) {
      setOpenMovies(true)
      setOpenAnimated(true)
    }
    else if (isMovieActive && isBollywoodActive) {
      setOpenMovies(true)
      setOpenBollywood(true)
    }
  }, [])


  return (
    <Box sx={{ width: drawerWidth }}>
      {/* Close Button for Mobile */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" }, // Only show on mobile
          justifyContent: "flex-end",
          pt: 2,
        }}
      >
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Box sx={{
        display: { xs: "none", md: "block" }, // Hide on mobile
        pt: 2,
      }}></Box>

      {/* Sidebar Title */}
      <Typography variant="h6" sx={{ px: 2, py: 2 }}>
        Dummy Module
      </Typography>

      <Divider />

      {/* Navigation Links */}
      <List>
        {[
          { label: "Dashboard", path: "/" },
          { label: "Products", path: "/Products" },
          { label: "Games", path: "/Games" },
          { label: "Cloths", path: "/Cloths" },
          { label: "Shoes", path: "/Shoes" },
          { label: "watches", path: "/watches" },
        ].map(({ label, path }) => (
          <ListItem
            key={label}
            disablePadding
            sx={{
              "& a": {
                textDecoration: "none",
                color: "inherit",
                display: "block",
                width: "100%",
                padding: "8px 16px",
              },
              "& .active": {
                fontWeight: "bold",
                color: "#1976d2",
                backgroundColor: "#e3f2fd",
              },
              "&:hover": {
                backgroundColor: "#f5f5f5",
              }
            }}
          >
            <NavLink
              to={path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <ListItemText primary={label} />
            </NavLink>
          </ListItem>
        ))}

        {/* sub category */}

        {/* Movies - Expandable Section */}
        <ListItem button onClick={toggleMovies} sx={{ backgroundColor: isMovieActive ? "#e3f2fd" : "inherit", color: isMovieActive ? "#1976d2" : "default" }}>
          <ListItemText primary="Movies" />
          {openMovies ? <ExpandLess /> : <ExpandMore />}

        </ListItem>

        <Collapse in={openMovies} timeout="auto" unmountOnExit>
          <List component="div" disablePadding >

            {/* Animated - Expandable */}
            <ListItem button onClick={() => setOpenAnimated((prev) => !prev)} sx={{ mb: ["8px"], ml: ["20px"], mt: 1, maxWidth: "85%", backgroundColor: isAnimatedActive ? "#e3f2fd" : "inherit", color: isAnimatedActive ? "#1976d2" : "default" }}>
              <ListItemText primary="Animated" />
              {openAnimated ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={openAnimated} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {[
                  { label: "Cartoon 1", path: "/movie/animated/cartoon-1" },
                  { label: "Cartoon 2", path: "/movie/animated/cartoon-2" },
                ].map(({ label, path }) => (
                  <ListItem
                    key={label}
                    sx={{
                      pl: ["39px"],
                      maxWidth: "95%",
                      pt: 0,
                      "& a": {
                        textDecoration: "none",
                        color: "inherit",
                        display: "block",
                        width: "95%",
                        padding: "8px 16px",
                        "&:hover": { backgroundColor: "#f5f5f5" }
                      },
                      "& .active": {
                        fontWeight: "bold",
                        color: "#1976d2",
                        backgroundColor: "#e3f2fd",
                      },
                    }}
                  >
                    <NavLink
                      to={path}
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <ListItemText primary={label} />
                    </NavLink>
                  </ListItem>
                ))}
              </List>
            </Collapse>

            {/* Bollywood - Expandable */}
            <ListItem button onClick={() => setOpenBollywood((prev) => !prev)} sx={{ mb: ["8px"], ml: 2, mr: 2, mt: 1, maxWidth: "85%", backgroundColor: isBollywoodActive ? "#e3f2fd" : "inherit", }}>
              <ListItemText primary="Bollywood" />
              {openBollywood ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={openBollywood} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {[
                  { label: "Movie 1", path: "/movie/bollywood/movie-1" },
                  { label: "Movie 2", path: "/movie/bollywood/movie-2" },
                ].map(({ label, path }) => (
                  <ListItem
                    key={label}
                    sx={{
                      pl: 4,
                      maxWidth: "95%",
                      pt: 0,
                      "& a": {
                        textDecoration: "none",
                        color: "inherit",
                        display: "block",
                        width: "95%",
                        padding: "8px 16px",
                        "&:hover": { backgroundColor: "#f5f5f5" }
                      },
                      "& .active": {
                        fontWeight: "bold",
                        color: "#1976d2",
                        backgroundColor: "#e3f2fd",
                      },
                    }}
                  >
                    <NavLink
                      to={path}
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <ListItemText primary={label} />
                    </NavLink>
                  </ListItem>
                ))}
              </List>
            </Collapse>

          </List>
        </Collapse>


      </List>
    </Box>
  );
}
SidebarContent.propTypes = {
  onClose: PropTypes.func,
};

export default function ResponsiveDashboard() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>

      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar>
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6" noWrap component="div">
              My Dashboard
            </Typography>
          </Toolbar>
        </AppBar>

        {isMobile ? (
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              [`& .MuiDrawer-paper`]: {
                marginTop: "65px",
                 pb: ["40px"],
                maxHeight:"91vh"

              }
            }}
          >
            <SidebarContent onClose={handleDrawerToggle} />
          </Drawer>
        ) : (
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                marginTop: "65px",
                width: drawerWidth,
                boxSizing: "border-box",
                overflowX: "hidden",
                pb: ["40px"],
                maxHeight:"91vh"
                
              },

            }}
            open
          >

            <SidebarContent />
          </Drawer>
        )}

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          {/* 👇 Dynamic routed content will be rendered here */}
          <Outlet />
        </Box>
      </Box>

    </>
  );
}
