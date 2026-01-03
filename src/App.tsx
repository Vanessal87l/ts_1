import { BrowserRouter } from "react-router-dom";
import AppRoutes from "@/router";
import Normativ from "./normativ";
Normativ;
function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
