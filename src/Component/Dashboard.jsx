import React from "react";

import { Link } from "react-router-dom";

const Dashboard = () => {

  
  return (
    <div>
    <h1>Dashboard</h1><br></br>
    <div  style={{ display:"flex",flexDirection:"column"}} > 
     <h3>View Student Records <Link to="/User/Student/viewstudent"> Click here</Link></h3><br></br><br></br>
     <h3>View Teacher Records <Link to="/User/teacher/viewteacher"> Click here</Link></h3>
    </div>
    </div>
  );
};


export default Dashboard;