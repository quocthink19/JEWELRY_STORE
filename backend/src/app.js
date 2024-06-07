import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes } from "react-router-dom";
import { findCart, getUser } from "./redux/actions/authActions";
import darktheme from "./theme/darktheme";



function App() {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const { auth } = useSelector((store) => store);
    
    useEffect(() => {
    dispatch(getUser(auth.jwt || jwt));
    dispatch(findCart(jwt));
}, [auth.jwt]);

return (
    <ThemeProvider theme={darktheme}>
        <CssBaseline/>
        <Routes/>
    </ThemeProvider>
);
}


export default App;