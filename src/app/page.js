
// import './globals.css'; 

import Banner from "@/Components/Banner/Banner";
import ImgSlider2 from "@/Components/ImgSlider2/ImgSlider2";

export default function Home() {
  const images = [
    'https://darululoomhathazari.com/media/img/slider/a781a297987f74051463fc572af574c1.jpg',
    'https://darululoomhathazari.com/media/img/slider/7efacc318422f9c09506d0f2e3d1aea2.jpg',
    'https://darululoomhathazari.com/media/img/slider/a781a297987f74051463fc572af574c1.jpg',
    'https://darululoomhathazari.com/media/img/slider/c59bd8f5f41342d815bc1d66c665d78d.jpg',
    
  ];
  return (
    <div>
      
    <main>
      <Banner/>
      <ImgSlider2 images={images}/>
    </main>
    </div>
  )
}
