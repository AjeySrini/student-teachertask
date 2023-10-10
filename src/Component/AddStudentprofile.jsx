import React,{ useState } from "react";
import { createStudentprofile } from "../profile";
const Addprofile = () => {

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

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the form submission, for example, by sending the data to a server or performing other actions.
    console.log('Form data:', formData);

    createStudentprofile(formData);
    setFormData(initialState);
  };

  return (

    <div style={{
      textAlign: 'center',
      justifyContent: 'center'  
    }}> Add Studend Record
    <form onSubmit={handleSubmit} style={{ padding: '16px',
      backgroundcolor: "white"}}>
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
    </div>
  );
}



export default Addprofile;