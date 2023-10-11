import './App.css'
import Achievements from './components/Achievements/Achievements'
import Banner from './components/Banner/Banner'
import Calender from './components/Calender/Calender'
import Clients from './components/Clients/Clients'
import Community from './components/Community/Community'
import Customers from './components/Customers/Customers'
import Demo from './components/Demo/Demo'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Unblock from './components/Unblock/Unblock'
import Updates from './components/Updates/Updates'

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Clients />
      <Community />
      <Unblock />
      <Achievements />
      <Calender />
      <Customers />
      <Updates />
      <Demo />
      <Footer />
    </>
  )
}

export default App
