import React, { useState } from "react";

import {  Link } from 'react-router-dom';


const Sidebar = ({ children }) => {
  const [isActive, setActive] = useState(null);

  const handleClick = (elementId) => {
    if (elementId === isActive) {
      setActive(null); // Close the clicked element if already active
    } else {
      setActive(elementId); // Open the clicked element
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <div className="container">
      <div style={{ width: isOpen ? "160px" : "75px" }} className="sidebar">
        <div className="top_section">
          <div className="sidebar-brand rotate-n-15" >
            <i className="fas fa-laugh-wink icon "></i>
          </div>
          <div
            style={{ display: isOpen ? "block" : "none" ,padding:"6px",font:"18px"}}
          >
            SB ADMIN<sup className="font-extrabold">2</sup>
          </div>
        </div>
        <hr className="border-t-1 border-solid border-white ml-2 mr-2 box-content h-0 mt-2 md:mt-0" /><br></br>
        <div className="sidebar-brand flex flex-col md:flex-row justify-evenly items-center mt-0 md:mt-2 w-full">
        <Link to="/User">
          <i className="fas fa-fw fa-tachometer-alt text-sm w-1/10 text-center"></i>
          <span className="text-xs md:text-base font-bold mt-2 md:mt-0 w-4/5 text-center md:text-left md:px-4" style={{ display: isOpen ? "block" : "none" }} >
            Dashboard
          </span>
          </Link>
        </div>
        <p style={{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",color:"white" ,display: isOpen ? "none" : "block",paddingLeft:"8px"}}><Link to="/User">Dashboard</Link></p><br></br>
        <hr className="border-t-1 border-solid border-white ml-2 mr-2 box-content h-0 mt-2 md:mt-0" /><br></br>
         <div
          className="flex flex-col items-start justify-start text-base  text-white md:px-4 md:py-2 mt-2 pointer"
          onClick={() => handleClick("div1")}
        >
          <div className="sidebar-brand flex flex-col md:flex-row justify-evenly items-center mt-0 md:mt-2 w-full">
           
            <span className="text-xs md:text-sm font-light mt-2 md:mt-0 w-4/5 text-center md:text-left md:px-4" style={{ display: isOpen ? "block" : "none" }}>
              Teacher : <i className="fa-solid fa-chevron-right hidden md:inline w-1/10 text-end"></i>
            </span>
            
          </div>
          <p style={{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",color:"white" ,display: isOpen ? "none" : "block",paddingRight:"4px"}}>Teacher</p>
       
          {isActive === "div1" && (
           
             <div className="flex-col bg-white mt-2 rounded-md  w-full">
              <Link to="/User/Teacher/viewTeacher"> <p className="collapse-item">View </p></Link> 
            <Link to="/User/Teacher/create-user"> <p className="collapse-item">Add </p></Link> 
            <Link to="/User/Teacher/edit-user?id=1"> <p className="collapse-item">Modify </p></Link> 
              <Link to="/User/Teacher/deleteprofile"> <p className="collapse-item">Delete </p></Link>
            </div>
          )}
        </div><br></br>
        <hr className="border-t-1 border-solid border-white ml-2 mr-2 box-content h-0 mt-2 md:mt-0" /><br></br>
        <div
          className="flex flex-col items-start justify-start text-base  text-white md:px-4 md:py-2 mt-2 pointer"
          onClick={() => handleClick("div2")}
        >
          <div className="sidebar-brand flex flex-col md:flex-row justify-start text-start items-center mt-4 md:mt-0 w-full">
           
            <span className="text-xs md:text-sm font-light mt-2 md:mt-0 w-4/5 text-center md:text-left md:px-4" style={{ display: isOpen ? "block" : "none" }}>
              Students : <i className="fa-solid fa-chevron-right hidden md:inline w-1/10 text-end"></i>
            </span>
           
          </div>
          <p style={{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",color:"white" ,display: isOpen ? "none" : "block",paddingLeft:"5px"}}>Students</p>
       
          {isActive === "div2" && (
            <div className="flex-col bg-white mt-2 rounded-md  w-full">
            <Link to="/User/Student/viewstudent"> <p className="collapse-item">View </p></Link> 
            <Link to="/User/Student/create-user"> <p className="collapse-item">Add </p></Link> 
            <Link to="/User/Student/edit-user?id=1"> <p className="collapse-item">Modify </p></Link> 
              <Link to="/User/Student/deleteprofile"> <p className="collapse-item">Delete </p></Link> 
            </div>
          )}
        </div><br></br>
        
        <hr className="border-t-1 border-solid border-white ml-2 mr-2 box-content h-0 mt-2 md:mt-0" />
        <div className="top_section" style={{display:"flex",alignItems:"center",justifyContent:"center"}} onClick={toggle}> 
          {isOpen ?  <i className="fa-solid fa-chevron-right hidden md:inline w-1/10 text-end fa-rotate-180"></i>
         :  <i className="fa-solid fa-chevron-right hidden md:inline w-1/10 text-end "></i>
        }
        </div>

      

        <br></br>
       
        <div class="sidebar-card d-none d-lg-flex">
          <img
            class="sidebar-card-illustration mb-2"
            src="src/assets/rocket.svg"
            alt="..."
            style={{width:"50%", height:"50%"}}
          />
          <div>
          <p class="text-center mb-2 text-xs color"  style={{ display: isOpen ? "block" : "none" }}>
            <strong>SB Admin Pro</strong> is packed with premium features,
            components, and more!
          </p>
          <p style={{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",color:"white" ,display: isOpen ? "none" : "block",paddingLeft:"8px"}}> <strong>SB Admin Pro</strong> is packed with premium features,
            components, and more!</p>
       
          <a
            class="btn btn-success btn-sm"
            href="https://startbootstrap.com/theme/sb-admin-pro"
            style={{ display: isOpen ? "block" : "none" }}
          >
            Upgrade to Pro!
          </a>
          <p style={{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",color:"white" ,display: isOpen ? "none" : "block",paddingLeft:"8px"}}> Upgrade to Pro!</p>
       
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br><br></br>
        <br></br><br></br><br></br>
      </div>

      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
