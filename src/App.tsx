import { ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Homepage from "./pages/Homepage";
import chatTheme from "./theme/chatTheme";

function App() {
  return (
    <ThemeProvider theme={chatTheme}>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
