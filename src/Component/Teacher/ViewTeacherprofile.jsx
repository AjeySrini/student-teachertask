import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTeacherprofiles,deleteTeacherprofile } from '../../profile';
import { Link } from "react-router-dom";

const ViewTeacherprofile = () => {
  const { userId } = useParams();

  const [profileData, setData] = useState({
    firstname:  "",
    lastname: "",
    gender:  "",
    dob:  "",
    experience:  "",
    qualification:  "",
    subjecthandling:  "",
    email: "",
    mobile:"",
    joiningdt: "",
    Address: "",
    nationality: "",
    bloodgroup: "",
  });

  const [singleData, setViewData] = useState({
    firstname:  "",
    lastname: "",
    gender:  "",
    dob:  "",
    experience:  "",
    qualification:  "",
    subjecthandling:  "",
    email: "",
    mobile:"",
    joiningdt: "",
    Address: "",
    nationality: "",
    bloodgroup: "",
  });

  const [viewTeacher, setviewTeacher] = useState(false);

  const loadprofile = async () => {
    console.log("Loading profileid", userId);
    const response = await getTeacherprofiles(userId);
    setData(response);
  };
  const removeFromUi = async (profileId) => {
   
    const confirmed = window.confirm('Are you sure you want to delete this item?');
    
    if (confirmed) {
      await deleteTeacherprofile(profileId);
    const newUser = profileData.filter(({ id }) => profileId !== id);
    setData(newUser);
    }
  }
  const handleView = (id) => {
    console.log(id);
    const selectedTeacher = profileData.find((Teacher) => Teacher.id === id);
    console.log(selectedTeacher);
    setViewData(selectedTeacher || {});
    setviewTeacher(true);
  };

  useEffect(() => {
    loadprofile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col w-full ml-2 mt-2">
      <p className="px-4 text-lg font-bold tracking-wider"> Teacher's Record </p>

     <span style={{padding :"5px", alignItems:"baseline"}}>To Add new Teacher Record <Link to="/User/Teacher/create-user">click here <i className="fa-solid fa-user-plus"></i> </Link></span>

      <table>
        <thead>
          <tr>
            <th className="tableheader ">Teacher ID</th>
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
                <Link to={`/user/Teacher/edit-user?id=${item.id}`} >
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
      {viewTeacher && (
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
              <td className="singledata ">Date Of Birth</td>
              <td className="singledatavalue ">{singleData.dob}</td>
            </tr>
            <tr>
              <td className="singledata ">Gender</td>
              <td className="singledatavalue ">{singleData.gender}</td>
            </tr>
            <tr>
              <td className="singledata ">Experience</td>
              <td className="singledatavalue ">{singleData.experience}</td>
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
              <td className="singledatavalue ">{singleData.Address}</td>
            </tr>
            <tr>
              <td className="singledata ">Phone No:</td>
              <td className="singledatavalue ">{singleData.mobile}</td>
            </tr>
            <tr>
              <td className="singledata ">Qualification</td>
              <td className="singledatavalue ">{singleData.qualification}</td>
            </tr>
            <tr>
              <td className="singledata ">Email id :</td>
              <td className="singledatavalue ">{singleData.email}</td>
            </tr>
            <tr>
              <td className="singledata ">Joining Date :</td>
              <td className="singledatavalue ">{singleData.joiningdt}</td>
            </tr>
            <tr>
              <td className="singledata ">Subject Handling</td>
              <td className="singledatavalue ">{singleData.subjecthandling}</td>
            </tr>
          </tbody>
        </table>
        
      )}
    </div>
  );
};
export default ViewTeacherprofile;
