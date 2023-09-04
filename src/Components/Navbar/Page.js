"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'
import { useState } from 'react';
import { logoutHandler } from '@/apiHandler/customApiHandler';
import { useRouter } from 'next/navigation';
 
function Navbar(props) {
  const router = useRouter();
const [isDrawerOpen, setIsDrawerOpen] = useState(false);

const toggleDrawer = () => {
  setIsDrawerOpen(!isDrawerOpen);
  console.log(isDrawerOpen)
};

const handleLogOut = async () => {
  // setError('');
  //  setIsLoading(true);
  
  try {
    const data = await logoutHandler('/auth/logout');

    // Handle the response data
    if (data.success === true) {
      router.push('/');
      window.location.reload()
      // router.replace("/");
      console.log("logged in", data)
    }
    // setShow(false);
    console.log("login response", data);
  } catch (error) {
    // Handle the error
    // setShow(false);
    console.log(error);
  }

  // setIsLoading(false);
};

  return (
    <nav className={` shadow-black sticky top-0 z-10 bg-[#032216]`}>
      <div className="container mx-auto ">
      {/* <FontAwesomeIcon icon={faHome} height="2rem"/> */}
      
        <div className=''>



        <div className="md:hidden">
          <button
             onClick={toggleDrawer}
            className="text-white p-2 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* navbar for mobile  */}
       {isDrawerOpen?
       <div className="block md:hidden">
       <ul className="justify-start ">
        
         {props.navMenu.map((menu) => (
           <>
           {menu.name==="প্রচ্ছদ"?
           <div className='flex items-center space-x-4 p-1  hover:bg-[#E07B27]' >
             <div style={{paddingRight: "0rem",}}>
           <FontAwesomeIcon icon={faHome} style={{color: "#ffffff",}} height="1.1rem"/>
           </div>
           <li className="text-white "><Link href="/">প্রচ্ছদ</Link> </li>           
           </div>:
           <div>
         {localStorage.getItem('accessToken') && menu.name==="লগ ইন"?
         <li className="text-white px-10 hover:bg-[#E07B27] transition-bg duration-800 space-x-4 p-2"><div onClick={()=>{handleLogOut}}>লগআউট</div> </li>
         :
         <li className="text-white px-10 hover:bg-[#E07B27] transition-bg duration-800 space-x-4 p-2"><Link href={menu.link}>{menu.name}</Link> </li>
        //  <></>
         }
           </div>
         
         }
         </>
       ))}
         
       </ul>
       </div>:<></>}
        
   {/* for large device  */}
        <div className="hidden md:block">
        <ul className="flex justify-start items-center">
         
          {props.navMenu.map((menu) => (
            <>
            {menu.name==="প্রচ্ছদ"?
            <div className='flex items-center justify-around space-x-4 p-4 hover:bg-[#E07B27]' >
              <div style={{paddingRight: "0rem",}}>
            <FontAwesomeIcon icon={faHome} style={{color: "#ffffff",}} height="1.1rem"/>
            </div>
            <li className="text-white "><Link href="/">প্রচ্ছদ</Link> </li>           
            </div>:
          <>
          {localStorage.getItem('accessToken') && menu.name==="লগ ইন"?
          <li className="text-white px-10 hover:bg-[#E07B27] transition-bg duration-800 space-x-4 p-4 cursor-pointer"><div onClick={()=>{handleLogOut()}}>লগআউট</div> </li>
          :
          <li className="text-white px-10 hover:bg-[#E07B27] transition-bg duration-800 space-x-4 p-4"><Link href={menu.link}>{menu.name}</Link> </li>
         //  <></>
          }
            </>
          }
          </>
        ))}
          
        </ul>
        </div>
        </div>
        
      </div>
    </nav>
  )
}
 
export default Navbar