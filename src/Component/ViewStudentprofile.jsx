import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getstudentprofiles,deleteStudentprofile } from "../profile";
import { Link } from "react-router-dom";

const Viewprofile = () => {
  const { userId } = useParams();

  const [profileData, setData] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    dob: "",
    fathername: "",
    mothername: "",
    fatheroccupation: "",
    ambition: "",
    standard: "",
    nationality: "",
    address: "",
    phoneno: "",
    pincode: "",
    bloodgroup: "",
    hobbies: "",
  });

  const [singleData, setViewData] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    dob: "",
    fathername: "",
    mothername: "",
    fatheroccupation: "",
    ambition: "",
    standard: "",
    nationality: "",
    address: "",
    phoneno: "",
    pincode: "",
    bloodgroup: "",
    hobbies: "",
  });

  const [viewstudent, setviewstudent] = useState(false);

  const loadprofile = async () => {
    console.log("Loading profileid", userId);
    const response = await getstudentprofiles(userId);
    setData(response);
  };
  const removeFromUi = async (profileId) => {
   
    const confirmed = window.confirm('Are you sure you want to delete this item?');
    
    if (confirmed) {
      await deleteStudentprofile(profileId);
    const newUser = profileData.filter(({ id }) => profileId !== id);
    setData(newUser);
    }
  }
  const handleView = (id) => {
    console.log(id);
    const selectedstudent = profileData.find((student) => student.id === id);
    console.log(selectedstudent);
    setViewData(selectedstudent || {});
    setviewstudent(true);
  };

  useEffect(() => {
    loadprofile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col w-full ml-2 mt-2">
      <p className="px-4 text-lg font-bold tracking-wider"> Student's Record </p>

     <span style={{padding :"5px", alignItems:"baseline"}}>To Add new Student Record <Link to="/User/Student/create-user">click here <i className="fa-solid fa-user-plus"></i> </Link></span>

      <table>
        <thead>
          <tr>
            <th className="tableheader ">Student ID</th>
            <th className="tableheader ">First Name</th>
            <th className="tableheader ">Last Name</th>
            <th className="tableheader ">View Record</th>
            <th className="tableheader ">Delete Record</th>
            <th className="tableheader ">Modify Record</th>
          </tr>
        </thead>
        <tbody>
          {profileData.length > 0 ? (
            profileData.map((item) => (
              <tr key={item.id} className="">
                <td className="tablecont ">{item.id}</td>
                <td className="tablecont ">{item.firstname}</td>
                <td className="tablecont ">{item.lastname}</td>
                <td className="tablecont ">
                  <i
                    className="fa-solid fa-eye"
                    onClick={() => handleView(item.id)}
                  ></i>
                </td>
                <td className="tablecont ">
                <i className="fa-solid fa-trash-can fa-lg" style={{
            color: "#red",           
            cursor: 'pointer',
            margin:"6px 6px",
            padding:"5px"
          }}
            onClick={() => removeFromUi(item.id)}
          ></i>
                </td>
                <td className="tablecont ">
                <Link to={`/user/Student/edit-user?id=${item.id}`} >
                <i className="fa-solid fa-user-pen" style={{
            color: "#red",           
            cursor: 'pointer',
            margin:"6px 6px",
            padding:"5px"
          }}
          ></i></Link>
                </td>
              </tr>
            ))
          ) : (
            <tr key="nodata" className="hover:bg-blue-500 hover:text-white">
              <td className="tablecont font-bold tracking-widest " colSpan="4">
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <br></br>
      {viewstudent && (
        <table style={{ padding: "20px", marginLeft: "50px" }}>
          <tbody>
            <tr>
              <td className="singledata ">First Name</td>
              <td className="singledatavalue ">{singleData.firstname}</td>
            </tr>
            <tr>
              <td className="singledata ">Last Name</td>
              <td className="singledatavalue ">{singleData.lastname}</td>
            </tr>
            <tr>
              <td className="singledata ">Father's Name</td>
              <td className="singledatavalue ">{singleData.fathername}</td>
            </tr>
            <tr>
              <td className="singledata ">Mother's Name</td>
              <td className="singledatavalue ">{singleData.mothername}</td>
            </tr>
            <tr>
              <td className="singledata ">Date Of Birth</td>
              <td className="singledatavalue ">{singleData.dob}</td>
            </tr>
            <tr>
              <td className="singledata ">Gender</td>
              <td className="singledatavalue ">{singleData.gender}</td>
            </tr>
            <tr>
              <td className="singledata ">Standard</td>
              <td className="singledatavalue ">{singleData.standard}</td>
            </tr>
            <tr>
              <td className="singledata ">Blood Group</td>
              <td className="singledatavalue ">{singleData.bloodgroup}</td>
            </tr>
            <tr>
              
              <td className="singledata ">Nationality</td>
              <td className="singledatavalue ">{singleData.nationality}</td>
            </tr>
            <tr>
              <td className="singledata ">address</td>
              <td className="singledatavalue ">{singleData.address}</td>
            </tr>
            <tr>
              <td className="singledata ">Phone No:</td>
              <td className="singledatavalue ">{singleData.phoneno}</td>
            </tr>
            <tr>
              <td className="singledata ">pincode</td>
              <td className="singledatavalue ">{singleData.pincode}</td>
            </tr>
            <tr>
              <td className="singledata ">Occupation</td>
              <td className="singledatavalue ">{singleData.fatheroccupation}</td>
            </tr>
            <tr>
              <td className="singledata ">Ambition</td>
              <td className="singledatavalue ">{singleData.ambition}</td>
            </tr>
            <tr>
              <td className="singledata ">Hobbies</td>
              <td className="singledatavalue ">{singleData.hobbies}</td>
            </tr>
          </tbody>
        </table>
        
      )}
    </div>
  );
};
export default Viewprofile;
