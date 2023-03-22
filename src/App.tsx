import { useEffect, useState } from 'react'
import Navbar from '@/scenes/navbar';
import {SelectedPage} from '@/shared/types';
import Home from '@/scenes/home';
import Benefits from '@/scenes/benefits';
import OurClasses from '@/scenes/ourClasses';


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const[isTopOfPage,setIsTopOfPage]=useState<boolean>(true)

  useEffect(()=>{
    const handleScroll =()=>{
    if(window.scrollY === 0){
      setIsTopOfPage(true)
      setSelectedPage(SelectedPage.Home)
    }
    if(window.screenY !== 0){
      setIsTopOfPage(false)
    }
}
    window.addEventListener("scroll",handleScroll)
    return ()=> window.removeEventListener("scroll",handleScroll)
  },[])

  return (
    <div className="bg-gray-20">
    <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} isTopOfPage={isTopOfPage}/>
    <Home setSelectedPage={setSelectedPage} />
    <Benefits  setSelectedPage={setSelectedPage}/>
    <Benefits  setSelectedPage={setSelectedPage}/>
    <OurClasses  setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App
