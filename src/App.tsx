import { ThemeProvider } from "@mui/material/styles";
import chatTheme from "./theme/chatTheme";

function App() {

  return (
    <ThemeProvider theme={chatTheme}>
    <div className="App">
      Chat App
    </div>
    </ThemeProvider>
  )
}

export default App
