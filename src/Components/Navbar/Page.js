import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'
 
function Navbar(props) {
// console.log(props)


  return (
    <nav className={` shadow-black sticky top-0 z-10 bg-[#032216]`}>
      <div className="container mx-auto ">
      {/* <FontAwesomeIcon icon={faHome} height="2rem"/> */}
        <div className=''>
        <ul className="flex justify-start ">
         
          {props.navMenu.map((menu) => (
            <>
            {menu.name==="প্রচ্ছদ"?
            <div className='flex items-center justify-around space-x-4 p-4 hover:bg-[#E07B27]' >
              <div style={{paddingRight: "0rem",}}>
            <FontAwesomeIcon icon={faHome} style={{color: "#ffffff",}} height="1.1rem"/>
            </div>
            <li className="text-white "><Link href="/">প্রচ্ছদ</Link> </li>           
            </div>:
          <li className="text-white px-10 hover:bg-[#E07B27] transition-bg duration-800 space-x-4 p-4"><Link href={menu.link}>{menu.name}</Link> </li>}
          </>
        ))}
          
        </ul>
        </div>
        
      </div>
    </nav>
  )
}
 
export default Navbar