import './App.css';
import {Navbar} from './component/Navbar/Navbar';
import { CssBaseline, ThemeProvider, dividerClasses } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import Home from './component/Home/Home';
import JewelryDetails from './component/Jewelry/JewelryDetails';
import Cart from './component/Cart/Cart';
import Profile from './component/Profile/Profile';
import {StaffRouter} from './component/Routers/StaffRouter'
import { Auth } from './component/Auth/Auth';
function App() {
  return (
<ThemeProvider theme={darkTheme}>
<CssBaseline/>
  <Navbar/>
  <Home/>
  {/* <JewelryDetails/> */}
  {/* <Cart/> */}
  {/* <Profile/> */}
{/* <StaffRouter/> */}
{/* <StaffRouter/> */}
</ThemeProvider>

  );
}

export default App;
