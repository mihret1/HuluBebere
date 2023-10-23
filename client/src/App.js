import { Box } from "@mui/material";
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";

function App() {
  return (
    <BrowserRouter>
    <Box sx={{ backgroundColor:'#ece7e5' }}>
     <Navbar />
     <Routes>
          <Route exact={true} path="/" element={<Home />}/>
     </Routes>
    </Box>
    </BrowserRouter>
  );
}

export default App;
