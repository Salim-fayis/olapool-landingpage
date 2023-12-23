import './App.css'
import Landing from './components/Landing'
import LogIn from './pages/Sign/LogIn'
import SignIn from './pages/Sign/SignIn'
import Carousel from './utils/Carousel/Carousel'
import Footer from './utils/Footer/Footer'
import Navbar from './utils/Navbar/Navbar'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'

function App() {
 
  return (
    <>
   
    <Router basename="/olapool-landingpage/">
    <Navbar />
    <Carousel />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/sign' element={<SignIn />} /> 
        <Route path='/login' element={<LogIn />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
