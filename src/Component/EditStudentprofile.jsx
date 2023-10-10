import React, { useEffect, useState } from "react";
import { getStudentprofile,updateStudentProfile} from "../profile";
import { useSearchParams, useNavigate } from "react-router-dom";
const Editprofile = () => {

const initialState = {
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
}
const [params] = useSearchParams();

  const [formData, setFormData] = useState(initialState);

  const navigate = useNavigate();

  const loadprofile= async () => {
    console.log(params.get('id'));
    const response = await getStudentprofile(params.get('id'));
    console.log(response);
    setFormData(response);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    await updateStudentProfile(params.get('id'), formData);
    navigate('/User/Student/viewstudent');
  };

  useEffect(() => {
    loadprofile();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


return (
  <form onSubmit={handleSubmit} style={{ padding: '16px' }}>
    <div style={{ padding: 4}}>
        <label htmlFor="username">Student Id:</label>
        <input
          type="text"
          id="studentid"
          name="studentid"
          value={formData.id}
          onChange={handleChange}
          required
        />
      </div>
    <div style={{ padding: 4}}>
        <label htmlFor="username">First Name:</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ padding: 4 }}>
        <label htmlFor="dateofBirth">Last Name:</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ padding: 4 }}>
        <label htmlFor="imageurl">Father's Name:</label>
        <input
          type="text"
          id="fathername"
          name="fathername"
          value={formData.fathername}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ padding: 4 }}>
        <label htmlFor="role">Mother's Name :</label>
        <input
          type="text"
          id="mothername"
          name="mothername"
          value={formData.mothername}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ padding: 4 }}>
        <label htmlFor="nationality">Nationality:</label>
        <input
          type="text"
          id="nationality"
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ padding: 4 }}>
        <label htmlFor="ranking">Standard:</label>
        <input
          type="text"
          id="standard"
          name="standard"
          value={formData.standard}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ padding: 4 }}>
        <label htmlFor="ranking">Gender:</label>
        <input
          type="text"
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ padding: 4 }}>
        <label htmlFor="ranking">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ padding: 4 }}>
        <label htmlFor="ranking">Father Occuption:</label>
        <input
          type="text"
          id="fatheroccupation"
          name="fatheroccupation"
          value={formData.fatheroccupation}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ padding: 4 }}>
        <label htmlFor="ranking">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ padding: 4 }}>
        <label htmlFor="ranking">Phone no.:</label>
        <input
          type="text"
          id="phoneno"
          name="phoneno"
          value={formData.phoneno}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ padding: 4 }}>
        <label htmlFor="ranking">Ambition:</label>
        <input
          type="text"
          id="ambition"
          name="ambition"
          value={formData.ambition}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ padding: 4 }}>
        <label htmlFor="ranking">Hobbies:</label>
        <input
          type="text"
          id="hobbies"
          name="hobbies"
          value={formData.hobbies}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ padding: 4 }}>
        <label htmlFor="ranking">pincode:</label>
        <input
          type="text"
          id="pincode"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ padding: 4 }}>
        <label htmlFor="ranking">Blood group:</label>
        <input
          type="text"
          id="bloodgroup"
          name="bloodgroup"
          value={formData.bloodgroup}
          onChange={handleChange}
          required
        />
      </div>
    
      <button type="submit">Submit</button>
  </form>
);
}
export default Editprofile;