import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ActionContext } from "./Contexts/ContextProvider";
import Layout from "./Layout/Layout";
import Calendario from "./pages/Calendario/Calendario";
import DashboardPage from "./pages/Dashboard/Dashboard";
import Licencia from "./pages/Licencia/Licencia";
import LoginPage from "./pages/Login/Login";
import Perfil from "./pages/Perfil/Perfil";
import NotFound from "./pages/NotFound/NotFound";
import AdminUsuarios from "./pages/AdminUsuarios/AdminUsuarios";
import AdminUsuariosCreate from "./pages/AdminUsuarios/createUser/AdminUsuariosCreate";
import AdminUsuariosEdit from "./pages/AdminUsuarios/editUser/AdminUsuariosEdit";

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
                  path="/"
                  element={
                    <DashboardPage
                      admin={user.data?.roles[0] === "SUPERVISOR"}
                    />
                  }
                >
                  <Route
                    path="/licencia/:licenseId"
                    element={<Licencia dashboardLic={true} />}
                  />
                </Route>
                <Route path="licencia" element={<Licencia />} />
                <Route path="calendario" element={<Calendario />} />
                <Route path="perfil" element={<Perfil />} />

                {user.data?.roles[0] === "SUPERVISOR" && (
                  <>
                    <Route path="admin-usuarios" element={<AdminUsuarios />} />
                    <Route
                      path="admin-usuarios/create"
                      element={<AdminUsuariosCreate />}
                    />
                    <Route
                      path="admin-usuarios/edit/:idUser"
                      element={<AdminUsuariosEdit />}
                    />
                  </>
                )}
                <Route path="*" element={<NotFound />} />
              </Route>
            </>
          ) : (
            <>
              <Route index element={<LoginPage />} />
              <Route path="*" element={<NotFound />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
