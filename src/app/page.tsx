
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import RangeSection from "@/components/RangeSection";
import RoomInpiration from "@/components/RoomInpiration";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <RangeSection/>
      <br />
      <Products/>
      <br />
      <RoomInpiration/>
      <hr />
      <Footer/>

  
    </div>
  );
}
