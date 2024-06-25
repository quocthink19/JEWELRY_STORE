import { CssBaseline, ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Routers from "./Routers/Routers";
import { darkTheme } from "./Theme/DarkTheme";
import { getUser } from "./component/State/Authentication/Action";
function App() {
  const dispatch= useDispatch()
  const jwt = localStorage.getItem("jwt")
  const {auth} = useSelector (store=>store)

  useEffect(()=> {
    dispatch(getUser(auth.jwt || jwt))
  },[auth.jwt])
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routers />
    </ThemeProvider>
  );
}

export default App;