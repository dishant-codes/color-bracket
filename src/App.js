import React, { Fragment, useState } from "react";
import "./App.css";
import Auth from "./Auth";
import Store from "./Store";
import { Route, Routes } from "react-router-dom";
import Employees from "./Employees";

function App() {
  const [empId, setEmpID] = useState(1);
  return (
    <div className="App">
      <Store>
        <Routes>
          <Route path="/" element={<Auth setEmpID={setEmpID} />} />
          <Route exact path="/employee" element={<Employees empId={empId} />} />
        </Routes>
      </Store>
    </div>
  );
}

export default App;
