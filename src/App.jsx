import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ActionContext } from "./Contexts/ContextProvider";
import Layout from "./Layout/Layout";
import Calendario from "./pages/Calendario/Calendario";
import DashboardPage from "./pages/Dashboard/Dashboard";
import Licencia from "./pages/Licencia/Licencia";
import LoginPage from "./pages/Login/Login";
import EditarUsuario from "./pages/Perfil/EditarUsuario/EditarUsuario";
import Perfil from "./pages/Perfil/Perfil";
import NotFound from "./pages/NotFound/NotFound";
import AdminUsuarios from "./pages/AdminUsuarios/AdminUsuarios";

function App() {
  const { user } = useContext(ActionContext);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {user.isLogged ? (
            <>
              <Route path="/" element={<Layout />}>
                <Route
                  index
                  element={<DashboardPage admin={user.rol.administrator} />}
                />
                <Route path="licencia" element={<Licencia />} />
                <Route path="calendario" element={<Calendario />} />
                <Route path="perfil" element={<Perfil />}>
                  <Route path="editar" element={<EditarUsuario />} />
                </Route>

                {user.rol.administrator && (
                  <Route path="admin-usuarios" element={<AdminUsuarios />} />
                )}
                <Route path="*" element={<NotFound />} />
              </Route>
            </>
          ) : (
            <Route index element={<LoginPage />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
