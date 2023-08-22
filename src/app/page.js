
// import './globals.css'; 

import Banner from "@/Components/Banner/Banner";
import Declarations from "@/Components/Declarations/Declarations";
import FbPage from "@/Components/FbPage/fbPage";
import ImgSlider2 from "@/Components/ImgSlider2/ImgSlider2";
import News from "@/Components/News/News";
import VideoSlider from "@/Components/VideoSlider/VideoSlider";

export default function Home() {
  const images = [
    'https://darululoomhathazari.com/media/img/slider/a781a297987f74051463fc572af574c1.jpg',
    'https://darululoomhathazari.com/media/img/slider/7efacc318422f9c09506d0f2e3d1aea2.jpg',
    'https://darululoomhathazari.com/media/img/slider/a781a297987f74051463fc572af574c1.jpg',
    'https://darululoomhathazari.com/media/img/slider/c59bd8f5f41342d815bc1d66c665d78d.jpg',
    
  ];

  const videos = [
    "https://www.youtube.com/embed/p8rHF9gTKVQ",
    'https://www.youtube.com/embed/Jx8M1K0SFOk',
    'https://www.youtube.com/embed/c-RvAAIisIc',
    'https://www.youtube.com/embed/GXDDgToP-8o',
    
  ];


  return (
    <div>
      
    <main>
      <Banner/>
      {/* <News/> */}
      <Declarations/>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div className="md:col-span-2">
    <ImgSlider2 images={images}/>
  </div>
  <FbPage/>
</div>

      <VideoSlider videos={videos}/>
    </main>
    </div>
  )
}
