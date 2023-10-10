import React from "react";
import { deleteStudentprofile } from "../profile";


const Deleteprofile = () => {


const handleSubmit = () => {
  const data = document.getElementById("userIddelete").value;
  console.log('Delete user ID:', data);

  deleteStudentprofile(data);
};

  return (
    <div>
      <div style={{ padding: 4 }}>
        <label htmlFor="userId">Studend ID to Delete:</label>
        <input
          type="text"
          id="userIddelete"
          name="userIddelete"
          required
        />
      </div>

      <button type="submit" onClick={handleSubmit} >Delete</button>
      </div>
  );
}

export default Deleteprofile;