import Homepage from './Components/Homepage'
import {Routes,Route} from 'react-router-dom'
import Climate_School from './Components/Climate_School'
import Climate_Careers from './Components/Climate_Careers'
import Tech_Bootcamps from './Components/Tech_Bootcamps'
import FreelanceSchool from './Components/FreelanceSchool'
import Career_Coaching from './Components/Career_Coaching'
import Climate_HR from './Components/Climate_HR'
import Claim from './Components/Claim'
import About from './Components/About'
import Contact from './Components/Contact'
import Welcome_Aboard from './Components/Welcome_Aboard'
import Blog from './Components/Blog'
import Form_Component from './Components/Form_Component.jsx'
import Form_LastPage from './Components/Form_LastPage.jsx'
import Scroll from './Components/Scroll.jsx'
import LoginRegister from './Components/LoginRegister.jsx'


function App() {

  return (
    <>
      <Routes>
        <Route path='/scroll' element={<Scroll />} />
        <Route path="/" element={<Homepage />} />
        <Route path='/climate_careers' element={<Climate_Careers/>} />
        <Route path="/climate_school" element={<Climate_School/>} />
        <Route path="/tech_bootcamps" element={<Tech_Bootcamps/>} />
        <Route path="/freelancing_school" element={<FreelanceSchool/>} />
        <Route path="/career_coaching" element={<Career_Coaching/>} />
        <Route path="/climate_hr" element={<Climate_HR/>}/>
        <Route path="/claim" element={<Claim/>} />
        <Route path='/about' element={<About/>}  />
        <Route path='/contact' element={<Contact/>}  />
        <Route path='/blog' element={<Blog/>}  />
        <Route path='/welcome' element={<Welcome_Aboard/>}  />
        <Route path='/form_page' element={<Form_Component/>}  />
        <Route path='/form' element={<Form_LastPage/>}  />
        <Route path='/sign_in' element={<LoginRegister/>}  />
      </Routes>
    </>
  )
}

export default App
