import {styled} from "@mui/material";
import {Link} from "react-router-dom";

namespace S {
  export const NavBarContainer = styled("nav")(({theme}) => ({
    padding: ".5rem",
    backgroundColor: theme.palette.bg.primary,
    width: "100vw",
  }));
  export const ListContainer = styled("ul")({
    marginLeft: "1rem",
    display: "flex",
    gridAutoRows: "auto 1fr auto",
    textDecoration: "none",
  });
  export const List = styled("li")({
    marginRight: "1rem",
    listStyleType: "none",
  });
  export const Text = styled(Link)(({theme}) => ({
    color: theme.palette.bg.secondary,
    textDecoration: "none",
  }));
}

export default S;
