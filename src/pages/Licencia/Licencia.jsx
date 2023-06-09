import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Avatar,
  Typography,
  Stack,
  Button,
  TextField,
  Divider,
} from "@mui/material";
import "../Licencia/licencia.css";
import "react-datepicker/dist/react-datepicker.css";
import CalendarioButtons from "./Components/CalendarioButtons";
import SelectFieldGenerico from "./Components/SelectFieldGenerico";
import { LicenciasDetalles } from "./Components/LicenciasDetalles";
import { AdjuntarArchivo } from "./Components/AdjuntarArchivo";
import { getDaysWorkable } from "../../Utils/convertDates";
import { ActionContext } from "../../Contexts/ContextProvider";
import { toast } from "react-toastify";
import { useUsuario } from "../../Hooks/useUsuario";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  createLicencia,
  getLicenseById,
} from "../../Services/licenciasServices";
import { estadoColores } from "../../constants/constantes";
import { getUserById } from "../../Services/usuarioServices";

// mover a carpeta constantes!
let initialState = {
  licenseUser: "",
  licenseSupervisor: "",
  description: "",
  requiredDays: "",
};

const tipoLicencias = [
  { name: "Tramites", id: 0 },
  { name: "Vacaciones", id: 1 },
  { name: "Dia de Estudio", id: 2 },
  { name: "Licencia Medica", id: 3 },
];

// no llegué a modularizar este componente y separar los estados
// porque me enfoqué en el back
const Licencia = ({ dashboardLic }) => {
  const { user } = useContext(ActionContext);
  const { getUsers, data } = useUsuario();
  const [licenciaData, setLicenciaData] = useState(initialState);
  const [unicaLicenciaData, setUnicaLicenciaData] = useState();
  const [userSelectedById, setUserSelectedById] = useState();
  const [userSelect, setUserSelect] = useState();
  const { licenseId } = useParams();

  const redirect = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target);
    if (
      user.data.available_days <
      getDaysWorkable(licenciaData.startDate, licenciaData.endDate).length
    ) {
      return toast.info(
        "Por favor, ingrese un rango de días equivalente o menor a sus días disponibles."
      );
    }

    console.log(licenciaData);
    await createLicencia(licenciaData)
      .then(() => {
        toast.success("Se ha logrado crear la licencia");
        redirect("/");
      })
      .catch(() => {
        setLicenciaData(initialState);
        e.target.reset();
        toast.error("No se ha logrado crear la licencia");
      })
      .finally(() => {
        setLicenciaData(initialState);
        e.target.reset();
      });
  };

  const handleDesc = (e) => {
    setLicenciaData(() => ({
      ...licenciaData,
      [e.target.name]: e.target.value,
    }));
  };

  // obtenemos los usuarios para el select de usuario
  useEffect(() => {
    getUsers().catch(() => {
      toast.error(
        "No se ha podido renderizar los usuarios, intente nuevamente"
      );
    });
    setLicenciaData((old) => {
      return { ...old, createdBy: user?.data?.id };
    });
  }, []);

  // comprobamos si la licencia cambia de usuario y si el usuario tiene supervisor,
  // en caso que tenga supervisor lo agregamos al objeto de la licencia
  useEffect(() => {
    if (data) {
      data?.map((user) => {
        if (user.id == licenciaData?.licenseUser && user.supervisor != null) {
          setLicenciaData((old) => {
            return { ...old, licenseSupervisor: user.id };
          });
        }
      });
    }
  }, [licenciaData.licenseUser]);

  // hacemos un useEffect donde verificamos si tenemos un :licenseId de la ruta del dashboard
  useEffect(() => {
    getLicenseById(licenseId).then((res) => {
      console.log(res);
      setUnicaLicenciaData(res);
    });
  }, [licenseId]);

  useEffect(() => {
    if (userSelectedById != null) {
      const fetchData = () => {
        getUserById(userSelectedById)
          .then((res) => {
            console.log(res);
            setUserSelect(res);
          })
          .catch(() => {
            toast.error(
              "No se ha logrado sacar la informacion del usuario seleccionado",
              { toastId: "toast-user-selected" }
            );
          });
      };
      return fetchData();
    }
  }, [userSelectedById]);

  return (
    <>
      <section
        style={{
          backgroundColor: "#fbfbfb",
          minHeight: "calc(100vh - 64px)",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <Box
          id="licencias"
          component={"form"}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100vw",
            margin: "5px 10px",
            border: "0.5px solid #797979",
            borderRadius: "8px",
          }}
          onSubmit={handleSubmit}
        >
          {licenseId && (
            <Link to={"/"} style={{ alignSelf: "flex-end" }}>
              <Button
                sx={{
                  color: "white",
                  backgroundColor: "red",
                  margin: "10px",
                }}
              >
                X
              </Button>
            </Link>
          )}
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            sx={{ padding: "10px" }}
          >
            {data && (
              <SelectFieldGenerico
                valores={data}
                label={"Usuario"}
                name={"licenseUser"}
                setter={setLicenciaData}
                state={licenciaData}
                setUserSelectedById={setUserSelectedById}
                defaultValue={
                  licenseId && unicaLicenciaData?.usuarioDTO?.id != null
                    ? unicaLicenciaData?.usuarioDTO?.id
                    : ""
                }
              />
            )}

            {/* Título "Estado" e status da solicitação */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h6">Estado</Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  background:
                    estadoColores[unicaLicenciaData?.status] || "green",
                  borderRadius: "16px",
                  color: "white",
                  padding: "0 15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {licenseId && unicaLicenciaData
                  ? unicaLicenciaData?.status
                  : "AUN NO ENVIADO"}
              </Typography>
            </Box>
          </Stack>

          <Box
            component={"ul"}
            sx={{
              display: "flex",
              flexDirection: "column",
              borderTop: "0.5px solid #797979",
              padding: "20px 70px",
              gap: "30px",
              listStyleType: "none",
            }}
          >
            <Box component={"li"} sx={{ display: "flex", gap: "100px" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "fit-content",
                }}
              >
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{ display: "inline" }}
                >
                  TIPO DE LICENCIA
                </Typography>
                <SelectFieldGenerico
                  valores={tipoLicencias}
                  label={"Licencia"}
                  name={"tipoLicencia"}
                  setter={setLicenciaData}
                  state={licenciaData}
                  defaultValue={
                    licenseId &&
                    unicaLicenciaData &&
                    !licenciaData?.tipoLicencia
                      ? unicaLicenciaData?.licenseTypeId
                      : licenciaData
                      ? licenciaData?.tipoLicencia
                      : undefined
                  }
                  createdMode={true}
                />
              </Box>
              <AdjuntarArchivo />
            </Box>
            <Box
              component={"li"}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                padding: "0 7%",
                width: "fit-content",
              }}
            >
              {/* calendario */}
              <CalendarioButtons
                defaultValues={
                  licenseId && unicaLicenciaData
                    ? [unicaLicenciaData.startDate, unicaLicenciaData.endDate]
                    : ""
                }
                setLicenciaData={setLicenciaData}
              />

              <Box
                sx={{
                  border: " 0.5px solid #797979",
                  display: "flex",
                  width: "fit-content",
                  borderRadius: "10px",
                  gap: "5px",
                }}
              >
                <Box
                  sx={{
                    borderRight: " 0.5px solid #797979",
                    padding: " 0 15px",
                  }}
                >
                  <Typography variant="subtitle2" color={"#06B80D"}>
                    {licenciaData.startDate &&
                      licenciaData.endDate &&
                      getDaysWorkable(
                        licenciaData.startDate,
                        licenciaData.endDate
                      ).length}{" "}
                    días laborales
                  </Typography>
                </Box>

                <Box sx={{ padding: " 0 15px" }}>
                  <Typography variant="subtitle2" color={"text.secondary"}>
                    {user.data.available_days && !userSelect?.available_days
                      ? user.data.available_days
                      : ""}
                    {userSelect?.available_days && userSelect?.available_days}{" "}
                    días disponibles
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Divider variant="middle" />
            <Box
              component={"li"}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="h6">Descripcion</Typography>
              <TextField
                id="descripcion"
                label={
                  licenseId && unicaLicenciaData?.description != null
                    ? undefined
                    : "Ingrese una descripción"
                }
                variant="outlined"
                name="description"
                onChange={handleDesc}
                defaultValue={
                  licenseId && unicaLicenciaData
                    ? unicaLicenciaData?.description
                    : ""
                }
                multiline
                rows={5}
                disabled={
                  licenseId && unicaLicenciaData?.description != null
                    ? true
                    : false
                }
              />
            </Box>

            <Box
              component={"li"}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="h6" sx={{ mb: 1 }}>
                APROBACION A CARGO DE:
              </Typography>
              {licenciaData?.licenseUser && data
                ? data.map((user) => {
                    if (
                      user.id == licenciaData?.licenseUser &&
                      user.supervisor != null
                    ) {
                      return (
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                          }}
                        >
                          <Avatar sx={{ width: "70px", height: "70px" }}>
                            {user.supervisor.name[0].toUpperCase() +
                              user.supervisor.lastname[0].toUpperCase()}
                          </Avatar>
                          <Typography
                            variant="h5"
                            fontWeight={"#FF8585"}
                            color={"red"}
                          >
                            {`${user.supervisor.name} ${user.supervisor.lastname}`}
                          </Typography>
                        </Box>
                      );
                    }
                  })
                : ""}
              {licenseId &&
              unicaLicenciaData?.usuarioDTO?.supervisor != null ? (
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  {unicaLicenciaData?.usuarioDTO?.supervisor?.profile_picture !=
                    null &&
                  unicaLicenciaData?.usuarioDTO?.supervisor?.profile_picture
                    .length > 500 ? (
                    <CardMedia
                      component="img"
                      src={user.data.profile_picture}
                      sx={{
                        width: "40px",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                  ) : (
                    <Avatar sx={{ width: "70px", height: "70px" }}>
                      {unicaLicenciaData?.usuarioDTO?.supervisor?.name[0].toUpperCase() +
                        unicaLicenciaData?.usuarioDTO?.supervisor?.lastname[0].toUpperCase()}
                    </Avatar>
                  )}
                  <Typography variant="h5" fontWeight={"#FF8585"} color={"red"}>
                    {`${unicaLicenciaData?.usuarioDTO?.supervisor?.name} ${unicaLicenciaData?.usuarioDTO?.supervisor?.lastname}`}
                  </Typography>
                </Box>
              ) : (
                ""
              )}
            </Box>
            {!licenseId && (
              <Box component={"li"} sx={{ alignSelf: "flex-end" }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                >
                  Solicitar Aprobacion
                </Button>
              </Box>
            )}
          </Box>
        </Box>
        {!dashboardLic && (
          <Box
            id="detallesVacaciones"
            sx={{
              border: "1px solid grey",
              minHeight: "100vh",
              minWidth: "30vw",
              borderRadius: "10px",
              margin: "5px 10px",
            }}
          >
            <Box
              sx={{
                borderBottom: "1px solid grey",
                display: "flex",
                flexDirection: "column",
                minHeight: "100%",
                flexWrap: "wrap",
              }}
            >
              <Typography
                sx={{
                  alignSelf: "center",
                }}
              >
                Detalle de Vacaciones
              </Typography>
              <LicenciasDetalles />
              <LicenciasDetalles />
              <LicenciasDetalles />
            </Box>
          </Box>
        )}
      </section>
    </>
  );
};

export default Licencia;
