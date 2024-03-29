import { styled } from "@mui/material";
namespace S {
  export const Container = styled("div")({});
  export const ProjectContainer = styled("div")({
    maxWidth: "1140px",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "4rem",
    paddingBottom: "5rem",
  });
  export const ProjectHeading = styled("h1")({
    textAlign: "center",
    padding: "4rem 0 2rem 0",
  });
}
export default S;
