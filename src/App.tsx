import { Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import MusicKits from "./components/MusicKits/MusicKits"
import Collections from "./components/Collections/Collections"
import Weapons from "./components/Weapons/Weapons"
import Stickers from "./components/Stickers/Stickers"
import Agents from "./components/Agents/Agents"
import Keychains from "./components/Keychains/Keychains"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <>
    <main id='wrapper'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/musickits' element={<MusicKits />}></Route>
        <Route path='/collections' element={<Collections />}></Route>
        <Route path='/weapons' element={<Weapons />}></Route>
        <Route path='/stickers' element={<Stickers />}></Route>
        <Route path='/agents' element={<Agents />}></Route>
        <Route path='/keychains' element={<Keychains />}></Route>
      </Routes>
      <Footer />
    </main>
    </>
  )
}

export default App
