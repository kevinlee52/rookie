"use client";
import { ColorModeContext, useMode } from "../../context/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { ReactNode } from "react";
// import Dashboard from "./scenes/dashboard";

export default function Nav({ children }: { children: ReactNode }) {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            {children}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
