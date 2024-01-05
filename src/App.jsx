import "./App.css";
import NewUser from "./components/NewUser.jsx";
import Update from "./components/Update.jsx";
import User from "./components/User.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />}></Route>
        <Route path="/NewUser" element={<NewUser />}></Route>
        <Route path="/Update/:id" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
