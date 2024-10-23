import { Link, Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import MusicKits from "./components/MusicKits/MusicKits"
import Collections from "./components/Collections/Collections"
import Weapons from "./components/Weapons/Weapons"
import Stickers from "./components/Stickers/Stickers"
import Agents from "./components/Agents/Agents"
import Keychains from "./components/Keychains/Keychains"

const App = () => {
  return (
    <>
    <div id='wrapper'>
      <Link to='/'>Home</Link>
      <Link to='/musickits'>Music Kits</Link>
      <Link to='/collections'>Collections</Link>
      <Link to='/weapons'>Weapons</Link>
      <Link to='/stickers'>Stickers</Link>
      <Link to='/agents'>Agents</Link>
      <Link to='/keychains'>Keychains</Link>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/musickits' element={<MusicKits />}></Route>
        <Route path='/collections' element={<Collections />}></Route>
        <Route path='/weapons' element={<Weapons />}></Route>
        <Route path='/stickers' element={<Stickers />}></Route>
        <Route path='/agents' element={<Agents />}></Route>
        <Route path='/keychains' element={<Keychains />}></Route>
      </Routes>
    </div>
    </>
  )
}

export default App
