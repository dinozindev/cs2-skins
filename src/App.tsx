import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import MusicKits from "./pages/MusicKits/MusicKits"
import Collections from "./pages/Collections/Collections"
import Weapons from "./pages/Weapons/Weapons"
import Stickers from "./pages/Stickers/Stickers"
import Agents from "./pages/Agents/Agents"
import Keychains from "./pages/Keychains/Keychains"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Error404 from "./pages/Error404/Error404"

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
        <Route path="/*" element={<Error404 />}></Route>
      </Routes>
      <Footer />
    </main>
    </>
  )
}

export default App
