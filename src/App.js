import './App.css';
import Nav from './component/home/Nav';
import Signin from './component/login/Signin';
import Signup from './component/logup/Signup';
import { Route, Routes}from 'react-router-dom'
import Dashboord from './component/dashboord/Dashboord';
import  { WithRoleAuthentication,WithAuthentication } from './component/RequireAuthin';
import CreateQuize from './component/CreateQuize';
import ViewQuize from './component/ViewQuize';
import ViewAnnouncement from './component/ViewAnnouncement';
import CreateAnnouncement from './component/CreateAnnouncement';


function App() {
  
  
  return (
    
    <div className="App">
      <Nav/>
    <Routes>
      <Route path='signin' element={<Signin/>}/>
      <Route path='signup'element={<Signup/>}/>
      <Route path='dashboord'element={<WithAuthentication><Dashboord /></WithAuthentication>}/>
      <Route path='quize'element={<WithRoleAuthentication><CreateQuize/></WithRoleAuthentication>}/>
      <Route path='viewQuize'element={<WithRoleAuthentication><ViewQuize/></WithRoleAuthentication>}/>
      <Route path='viewannounce'element={<WithRoleAuthentication><ViewAnnouncement/></WithRoleAuthentication>}/>
      <Route path='createannounce'element={<WithRoleAuthentication><CreateAnnouncement/></WithRoleAuthentication>}/>
    </Routes>
    </div>
  );
}

export default App;
