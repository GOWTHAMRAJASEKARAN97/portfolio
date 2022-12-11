declare module "@mui/material/styles" {
  interface Palette {
    bg: {
      primary: string;
      secondary: string;
    };
  }

  interface PaletteOptions {
    bg: {
      primary: string;
      secondary: string;
    };
    custom?: {
      primary?: string;
      secondary?: string;
    };
  }
}
export {};
