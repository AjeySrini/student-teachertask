import React from 'react'

const Header = () => {
    return (
      
      <div className="titlesection" style={{ display:"flex",flexDirection:"row",justifyContent:"space-between"}}><div  style={{ padding: "8px" }}>
      <input
        type="text"
        className="text-sm input-group h-1/2 w-4/5 px-4 rounded-md input mt-2"
        placeholder="Search for ..."
        style={{ padding: "4px" }}
      />

              <i className="fas fa-search fa-sm" style={{ padding: "4px" }}></i>
          
    </div>
    <div
      className="w-1/2 flex flex-row justify-end items-center nav"
      style={{ padding: "5px" }}
    >
      <a
        className="a-1 flex items-center px-3"
        role="button"
        style={{ padding: "5px" }}
      >
        <i className="fas fa-bell fa-fw"></i>
        <span className="badge badge-danger badge-counter ml-1">3+</span>
      </a>
      <a
        className="a-1 flex items-center px-3"
        role="button"
        style={{ padding: "5px" }}
      >
        <i className="fas fa-envelope fa-fw"></i>
        <span className="badge badge-danger badge-counter ml-2">7</span>
      </a>
    </div>
    <div style={{ padding: "5px" }}>
      <a
        className="a-1 flex items-center px-3"
        role="button"
        style={{ display: "flex" }}
      >
        <span  style={{padding: "4px"}}>Ajey Srinivasu</span>
        <img className="img-profile rounded-full " style={{width:"28px",height:"28px",padding: "6px"}} src="src/assets/profile.svg"  alt='.' />
      </a>
    </div>
    </div>
    );
  }
  
  export default Header;