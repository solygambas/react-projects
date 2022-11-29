import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";

export default function Header({ signedIn, onSignOut }) {
  const onClick = () => {
    if (signedIn && onSignOut) {
      onSignOut();
    }
  };

  return (
    <React.Fragment>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{
          borderBottom: 1,
          borderBottomColor: "divider",
        }}
      >
        <Toolbar sx={{ flexWrap: "wrap", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            component={RouterLink}
            to="/"
            sx={{ textDecoration: "none" }}
          >
            App
          </Typography>
          <Button
            color="primary"
            variant="outlined"
            sx={{
              my: 1,
              mx: 1.5,
            }}
            component={RouterLink}
            to={signedIn ? "/" : "/auth/signin"}
            onClick={onClick}
          >
            {signedIn ? "Logout" : "Login"}
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
