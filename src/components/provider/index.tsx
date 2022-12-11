import {ThemeProvider} from "@mui/material";
import {FC} from "react";
import {LightTheme} from "../../utils/theme";

interface Props {
  children: React.ReactNode;
}

const OverallProvider: FC<Props> = ({children}) => {
  return <ThemeProvider theme={LightTheme}>{children}</ThemeProvider>;
};

export default OverallProvider;
