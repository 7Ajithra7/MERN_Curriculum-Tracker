//import modules for routing for pages and css 
import logo from './logo.svg';
import './App.css';
import 'react-select-search/style.css'
import './Components/HeadFoot/HeadFoot.css';
import './Components/Home/Home.css';
import './Components/Account/Account.css';
// import './Components/Account/SignUp.css'
import './Components/AdminPanel/AdminPanel.css';
import './Components/FacultyPanel/FacultyPanel.css'
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/HeadFoot/Footer';
import Account from './Components/Account/Account';
import AdminPanel from './Components/AdminPanel/AdminPanel';
import TopNavbar from './Components/HeadFoot/TopNavbar';
import FacultyPanel from './Components/FacultyPanel/FacultyPanel';
import RequirementForm from './Components/RequirementForm/RequirementForm';
import AssignedReqForm from './Components/RequirementForm/AssignedReqForm';
import PastView from './Components/ViewCurriculum/PastView';
import ForgetPassword from './Components/Account/ForgetPassword';
import ProtectedRoute from './Components/ProtectedRoute';
import ViewCurriculum from './Components/ViewCurriculum/ViewCurriculum';
// import SignUp from './Components/Account/SignUp';
// import SignIn from './Components/Account/SignIn';

//Define App.js for react Frond End
function App() {

  return (
    <div >
      <TopNavbar />
      <BrowserRouter>
        <Routes>

          {/* Home page Routes */}
          <Route path='/' exact element={<Home />} />

          {/* Signin & SignUp Routes */}
          <Route path='/account' exact element={<Account />} />

          {/* Admin Panel Routes */}
          <Route path='/adminpanel' exact element={<ProtectedRoute admin ><AdminPanel /></ProtectedRoute>} >
            <Route path='reqform' exact element={<RequirementForm />} />
            <Route path='viewcurriculum' exact element={<ViewCurriculum />} /> </Route>

          {/* Faculty Panel Routes */}
          <Route path='/facultypanel' exact element={<ProtectedRoute faculty><FacultyPanel /></ProtectedRoute>} >
          <Route path='assignedreqform' exact element={<AssignedReqForm />} />
          <Route path='viewcurriculum' exact element={<ViewCurriculum />} /> </Route>


          <Route path='/pastview' exact element={<PastView />} />


          <Route path='/forgetpwd' exact element={<ForgetPassword />} />
          {/* <Route path='/signup' exact element = {<SignUp/>}/>
          <Route path='/signin' exact element = {<SignIn />}/> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
