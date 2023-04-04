import { Card, CardContent, Divider, List, Typography } from "@mui/material";
import React from "react";
import ListItemUser from "./ListItemUser";

const ListLicencias = ({ admin, licencia }) => {
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
          {[0, 1, 2, 3, 4, 5, 6, 7].map((value, i, arr) => {
            return (
              <>
                <ListItemUser
                  value={value}
                  key={value + i}
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
