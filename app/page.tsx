import Image from "next/image";
import NavBar from "./Components/Navbar/NavBar";
import CtaSelection from "./Components/site/CtaSelection";

export default function Home() {
  return (
    <div className="poppins">
      <NavBar/>
      {/**Body Content */}
      <CtaSelection/>

    </div>
    
   
  );
}
