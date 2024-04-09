// App.js
import { Route, Routes } from "react-router-dom";
import { Login, Signup } from "./pages";
import Home, { useAuth } from "./pages/Home";
import Navbar from "./components/Navbar";
import UpdateUser from "./pages/Updateuser";
import DeleteUser from "./pages/DeleteUser";
import PublicRoutes from "./pages/PublicRoutes";
import PrivateRoutes from "./pages/PrivateRoutes";
import ErrorComp from "./components/ErrorComp";
import { Toaster } from "sonner";

function App() {
  const isAutheticated=useAuth()
  console.log(isAutheticated);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Home />} path='/' />
          <Route element={<UpdateUser />} path='/updateuser' />
          <Route element={<DeleteUser />} path='/deleteuser' />
          <Route element={<ErrorComp />} path='*' />
        </Route>
        <Route element={<PublicRoutes />}>
          <Route element={<Login />} path='/login' />
          <Route element={<Signup />} path='/signup' />
        </Route>
      </Routes>
      <Toaster />

    </div>
  );
}

export default App;
