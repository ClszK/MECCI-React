import React from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/global/Topbar";
import Dashbaord from "./scenes/dashboard";
import Prosidebar from "./scenes/global/Prosidebar";
import Viewcode from "./scenes/viewcode"
import Select from "./scenes/select"
import FileUpload from "./scenes/fileupload";
import UserForm from "./scenes/userform"
import DiffViewer from "./components/DiffViewer";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="contents" style={{zIndex: "2"}}>
            <Topbar />
            <Routes>
              <Route path="/" element={<Select/>} />
              <Route path="/viewcode" element={<Viewcode/>} />
              <Route path="/test" element={<DiffViewer/>} />
              <Route path="/userform" element={<UserForm/>} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
