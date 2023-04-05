import { Card, CardContent, Divider, List, Typography } from "@mui/material";
import React from "react";
import ListItemUser from "./ListItemUser";

const ListLicencias = ({ admin, licencias }) => {
  return (
    <Card sx={{ width: 300 }}>
      <CardContent>
        <List
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            height: "300px",
            bgcolor: "background.paper",
            overflowY: "auto",
          }}
        >
          {Array.isArray(licencias) &&
            licencias.map((licencia, i, arr) => {
              return (
                <>
                  <ListItemUser
                    key={licencia.id}
                    licencia={licencia}
                    admin={admin}
                  />
                  {arr.length - 1 !== i ? <Divider variant="fullWidth" /> : ""}
                </>
              );
            })}
        </List>
      </CardContent>
    </Card>
  );
};

export default ListLicencias;
