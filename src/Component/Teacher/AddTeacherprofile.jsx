import React,{ useState } from "react";
import { createTeacherprofile } from "../../profile";
const AddTeacherprofile = () => {

  const initialState = {
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

    createTeacherprofile(formData);
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
        <label htmlFor="username">Teacher Id:</label>
        <input
          type="text"
          id="teacherid"
          name="teacherid"
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
        <label htmlFor="imageurl">Qualification</label>
        <input
          type="text"
          id="qualification"
          name="qualification"
          value={formData.qualification}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ padding: 4 }}>
        <label htmlFor="role">Experience :</label>
        <input
          type="text"
          id="experience"
          name="experience"
          value={formData.experience}
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
        <label htmlFor="ranking">Subject Handling:</label>
        <input
          type="text"
          id="subjecthandling"
          name="subjecthandling"
          value={formData.subjecthandling}
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
        <label htmlFor="ranking">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
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
          value={formData.Address}
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
          value={formData.mobile}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ padding: 4 }}>
        <label htmlFor="ranking">Joining Dt:</label>
        <input
          type="text"
          id="joiningdt"
          name="joiningdt"
          value={formData.joiningdt}
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



export default AddTeacherprofile;