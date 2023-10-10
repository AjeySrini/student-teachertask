import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Addprofile from './Component/AddStudentprofile';
import Editprofile from './Component/EditStudentprofile';
import Dashboard from './Component/Dashboard';
import Deleteprofile from './Component/DeleteStudentprofile';
import Viewprofile from './Component/ViewStudentprofile';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import Footer from './Component/Footer'
import AddTeacherprofile from './Component/Teacher/AddTeacherprofile';
import EditTeacherprofile from './Component/Teacher/EditTeacherprofile';
import ViewTeacherprofile from './Component/Teacher/ViewTeacherprofile';
import DeleteTeacherprofile from './Component/Teacher/DeleteTeacherprofile';


const App=()=> {
  
  
  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar>
      <Header/>
      
        <header className='header'>
       Teacher and Student Database Management
        </header>
        <Routes>
        <Route index path="/" element={<Dashboard />} />
          <Route path="User" >
            <Route index element={<Dashboard />} />
            <Route path="Student/create-user" element={<Addprofile />} />
            <Route path="Student/edit-user" element={<Editprofile />} />
            <Route path="Student/viewstudent" element={<Viewprofile />} /> 
            <Route path="Student/deleteprofile" element={<Deleteprofile />} />
            <Route path="teacher/create-user" element={<AddTeacherprofile />} />
            <Route path="teacher/edit-user" element={<EditTeacherprofile />} />
            <Route path="teacher/viewteacher" element={<ViewTeacherprofile />} /> 
            <Route path="teacher/deleteprofile" element={<DeleteTeacherprofile />} />
            </Route>
           <Route path="*" element={<h3>Page not found, please check url</h3>} />
           
        </Routes>
      
      </Sidebar>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
