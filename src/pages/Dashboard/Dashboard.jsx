import React from "react";

const Dashboard = ({ admin }) => {
  return <div>Dashboard {admin ? "del Admin" : ""} </div>;
};

export default Dashboard;
