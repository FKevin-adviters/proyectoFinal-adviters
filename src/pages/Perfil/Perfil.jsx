import { Box, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import UsuarioFields from "../../Components/UsuarioFields/UsuarioFields";
import { ActionContext } from "../../Contexts/ContextProvider";

const Perfil = () => {
  const { user } = useContext(ActionContext);
  const [userInfo, setUserInfo] = useState();
  if (userInfo) {
    console.log(userInfo);
  }
  return (
    <Box
      component={"section"}
      sx={{ backgroundColor: "#fbfbfb", minHeight: "90vh" }}
    >
      <Box
        sx={{
          border: "1px solid grey",
          width: "65vw",
          minHeight: "100vh",
          padding: "10px",
          borderRadius: "10px",
          margin: "10px",
        }}
      >
        <Typography variant="h4" color={"red"} padding={"20px"}>
          Mi perfil
        </Typography>
        <UsuarioFields
          defaultValues={user?.data}
          setter={setUserInfo}
          state={userInfo}
          createdMode={false}
        />
      </Box>
    </Box>
  );
};

export default Perfil;
