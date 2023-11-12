// import "./App.css";
// import { Select } from "./components/Select";
import BasicSelect from "./components/Select/Select";
import Barrel from "./img/barrel.png";
import fruit from "./img/blueberry.png";
import Crown from "./img/crown.png";
import GoldLine from "./img/goldLine.png";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="sm">
        <BasicSelect label="Owoc" />
        <BasicSelect label="Butelka" />
      </Container>
    </div>
  );
}

export default App;
