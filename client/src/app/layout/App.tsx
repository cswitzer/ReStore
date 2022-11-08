import {
  createTheme,
  CssBaseline,
  Container,
  ThemeProvider,
} from "@mui/material"
import { useState } from "react"
import Catalog from "../../features/catalog/Catalog"
import Header from "./Header"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const paletteType = darkMode ? "dark" : "light"
  const theme = createTheme({
    palette: {
      mode: paletteType,
    },
  })

  function handleThemeChange() {
    setDarkMode((prevState) => {
      return !prevState
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
        <Container>
          <Catalog />
        </Container>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App
