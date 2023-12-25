import './App.css'
import Landing from './pages/homePage'
import LogIn from './components/Sign/LogIn'
import SignIn from './components/Sign/SignIn'
import Carousel from './utils/Carousel/carousel'
import Footer from './utils/Footer/footer'
import Navbar from './utils/Navbar/navbar'
import CameraEqupi from './pages/cameraAndEqupi'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'

function App() {
 
  return (
    <>
   
    <Router basename="/olapool-landingpage/">
    <Navbar />
   
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/sign' element={<SignIn />} /> 
        <Route path='/login' element={<LogIn />} />
        <Route path='/cameraeqip' element={<CameraEqupi />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
