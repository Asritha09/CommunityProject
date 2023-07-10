
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import HomePage from './Components/HomePage';
import AboutUs from './Components/AboutUs';
import WomenEducation from './Components/WomenEducation';
import OnlineEducation from './Components/OnlineEducation';
import SchoolEducation from './Components/SchoolEducation';
import GetInvovled from './Components/GetInvovled';
import Feedback from './Components/Feedback';

function App() {
  return (
    <div>
       <Router>
            <Routes>
                  <Route exact path='/' element={<HomePage/>}></Route>
                  <Route exact path='/about-us' element={<AboutUs/>}></Route>
                  <Route exact path='/women-education' element={<WomenEducation/>}></Route>
                  <Route exact path='/online-education' element={<OnlineEducation/>}></Route>
                  <Route exact path='/school-education' element={<SchoolEducation/>}></Route>
                  <Route exact path='/getinvolved' element={<GetInvovled/>}></Route>
                  <Route exact path='/feedback' element={<Feedback/>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
