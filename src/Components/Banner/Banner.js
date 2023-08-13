import Link from 'next/link'
import ImgSlider from '../ImgSlider/ImgSlider'
 
function Banner() {

  const images = [
    'https://darululoomhathazari.com/media/img/slider/a781a297987f74051463fc572af574c1.jpg',
    'https://darululoomhathazari.com/media/img/slider/7efacc318422f9c09506d0f2e3d1aea2.jpg',
    'https://darululoomhathazari.com/media/img/slider/a781a297987f74051463fc572af574c1.jpg',
    'https://darululoomhathazari.com/media/img/slider/c59bd8f5f41342d815bc1d66c665d78d.jpg',
    
  ];

  return (
    <div className='lg:flex lg:flex-row md:flex md:flex-col md:align-center p-10 lg:grid lg:grid-cols-2 lg:gap-4 '>
        <div>
          <ImgSlider images={images}/>
        </div>
        <div>
          <div>
          <h1 className='text-3xl font-extrabold pt-10'>দারুল উলূম হাটহাজারী’র সংক্ষিপ্ত পরিচিতি</h1>
          <h1 className='text-xl pb-10'>______________________________</h1>
          <p className='text-justify'>আল-জামিয়াতুল আহ্‌লিয়া দারুল উলূম মুঈনুল ইসলাম-হাটহাজারী (হাটহাজারী মাদ্‌রাসা) উপ-মহাদেশের অন্যতম বৃহৎ ও সুবিখ্যাত একটি ইসলামী শিক্ষা প্রতিষ্ঠান। প্রতিষ্ঠানটি বাংলাদেশের চট্টগ্রাম জেলার হাটহাজারী উপজেলার প্রাণকেন্দ্রে অবস্থিত। জামিয়ার আয়তন ৪.৪৩ একর বা ১৭,৯২৭ বর্গ মিটার। জামিয়ায় বর্তমানে ১১০ জন দেশবরেণ্য সুদক্ষ শিক্ষক এবং কর্মকর্তার তত্ত্বাবধানে প্রায় ৮ সহস্রাধিক ছাত্র অধ্যায়নের সুযোগ লাভ করে আসছে। শুধুমাত্র দাওরায়ে হাদীস (টাইটেল) ক্লাসে ২৫৩৮ জন ছাত্র অধ্যায়ন করছে। তাছাড়া প্রায় ৪,৭০০ জন গরীব মেধাবী ছাত্রকে বিনামূল্যে...</p>
          </div>
          <div>
          {/* <button className='rounded-none'>বিস্তারিত</button> */}
          <button class="bg-[#013622] hover:bg-[#E07B27] text-white font-bold py-2 px-6 my-10 rounded-none">
          বিস্তারিত
</button>
        </div>
        </div>
        
    </div>
  )
}
 
export default Banner