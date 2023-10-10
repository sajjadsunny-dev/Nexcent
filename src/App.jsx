import './App.css'
import Achievements from './components/Achievements/Achievements'
import Banner from './components/Banner/Banner'
import Clients from './components/Clients/Clients'
import Community from './components/Community/Community'
import Navbar from './components/Navbar/Navbar'
import Unblock from './components/Unblock/Unblock'

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Clients />
      <Community />
      <Unblock />
      <Achievements />
    </>
  )
}

export default App
