import React from "react";
import { deleteTeacherprofile } from "../../profile";


const DeleteTeacherprofile = () => {


const handleSubmit = () => {
  const data = document.getElementById("teacherIddelete").value;
  console.log('Delete user ID:', data);

  deleteTeacherprofile(data);
};

  return (
    <div>
      <div style={{ padding: 4 }}>
        <label htmlFor="userId">Teacher ID to Delete:</label>
        <input
          type="text"
          id="teacherIddelete"
          name="teacherIddelete"
          required
        />
      </div>

      <button type="submit" onClick={handleSubmit} >Delete</button>
      </div>
  );
}

export default DeleteTeacherprofile;