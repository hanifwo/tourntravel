import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Middle from './Components/Middle/Middle'
import Destinations from './Components/Destinations/Destinations'
import Portofolio from './Components/Portofolio/Portofolio'
import Reviews from './Components/Reviews/Reviews'
import Questions from './Components/Questions/Questions'
import Subscribe from './Components/Subscribe/Subscribe'
import Footer from './Components/Footer/Footer'


function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <Middle/>
      <Destinations/>
      <Portofolio/>
      <Reviews/>
      <Questions/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default App
