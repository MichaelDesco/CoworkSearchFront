import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Coworkings from "./pages/Coworkings";
import Add from "./pages/Add";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CoworkingDetails from "./pages/CoworkingDetails";
import Admin from "./admin/Admin";
import HomeAdmin from "./admin/HomeAdmin";
import CoworkingsAdmin from "./admin/CoworkingsAdmin";
import UsersAdmin from "./admin/UsersAdmin";
import CoworkingsUpdateAdmin from "./admin/CoworkingsUpdateAdmin";
// import Admin from "./pages/Admin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          {/* ROUTE UTILISATEUR */}
          <Route path="/" element={<Home />} />
          <Route path="/coworkings" element={<Coworkings />} />
          <Route path="/coworkings/:id" element={<CoworkingDetails />} />
          <Route path="/add" element={<Add />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* ROUTE ADMIN */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/" element={<HomeAdmin />} />
          <Route path="/admin/coworkings" element={<CoworkingsAdmin />} />
          <Route path="/admin/coworkings/:id" element={<CoworkingsUpdateAdmin />} />
          <Route path="/admin/users" element={<UsersAdmin />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
} 

export default App;
