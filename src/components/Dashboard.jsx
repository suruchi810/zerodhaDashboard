import React from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Holdings from "./Holdings";
import Funds from "./Funds.jsx";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";

const Dashboard = () => {
  const username = localStorage.getItem('username');
  return (
    <div className="dashboard-container">
      {/* <GeneralContextProvider> */}
        <WatchList />
      {/* </GeneralContextProvider> */}
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary user={username}/>} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;