import { Card, CardContent, Divider, List, Typography } from "@mui/material";
import React from "react";
import ListItemUser from "./ListItemUser";

const ListLicencias = ({ admin, licencias }) => {
  return (
    <Card
      sx={{ minWidth: "clamp(300px, 80%, 500px)" }}
      className="listLicencias_card"
    >
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
                  <ListItemUser key={i} licencia={licencia} admin={admin} />
                  {arr.length - 1 !== i ? <Divider /> : ""}
                </>
              );
            })}
        </List>
      </CardContent>
    </Card>
  );
};

export default ListLicencias;
