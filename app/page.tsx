"use client";
import { ColorModeContext, useMode } from "../context/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "../components/shared/Topbar";
import Sidebar from "../components/shared/Sidebar";
// import Dashboard from "./scenes/dashboard";

export default function Home() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="mainpage">
          <Sidebar />
          <main className="content">
            <Topbar />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
