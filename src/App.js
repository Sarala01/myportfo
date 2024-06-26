import Portfolio from "./Portfolio";
import About from "./components/About";
import { Contact } from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import { NavBar } from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";


export default function App() {
  return (
    <div>
     <NavBar/>
     <Home/>
     <About/>
     <Portfolio/>
     <Experience/>
     <Contact/>
     <SocialLinks/>
    </div>
  )
}