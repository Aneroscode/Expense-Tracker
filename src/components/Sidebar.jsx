import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faHouse, faMoneyCheckDollar, faPhone, faPlane, faSliders } from '@fortawesome/free-solid-svg-icons'
import image from '../assets/avatar.png'
import { Link,useNavigate } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='bg-white text-gray-600 h-screen px-2 md:px-4 fixed w-16 md:w-64 border-r border-gray-300'>
        <div className=' '>

            <div className='flex flex-col items-center mt-6'>
                <div className=''><img className='w-16 ' src={image} alt="pic" /></div>
                
                <h3 className=' font-bold hidden md:block'>Frank Abbey</h3>
            </div>

            <div className='flex flex-col mt-5 text-xl'>
                
                <Link to={"/"} className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-gray-200 hover:text-black active:bg-gray-400'>
                <FontAwesomeIcon icon={faHouse} />
                    <span className='hidden md:inline'>Home</span>
                </Link>
            
                <Link to={"/expenses"} className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-gray-200 hover:text-black  active:bg-gray-400'>
                    <FontAwesomeIcon icon={faMoneyCheckDollar} />
                    <span className='hidden md:inline'>Expenses</span>
                </Link>
                

                <Link to={"/trips"} className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-gray-200 hover:text-black  active:bg-gray-400' >
                    <FontAwesomeIcon icon={faPlane} />
                    <span className='hidden md:inline'>Trips</span>
                </Link>

                <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-gray-200 hover:text-black  active:bg-gray-400'>
                    <FontAwesomeIcon icon={faCheckCircle}/>
                    <span className='hidden md:inline'>Approvals</span>
                </li>

                <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-gray-200 hover:text-black  active:bg-gray-400 '>
                    <FontAwesomeIcon icon={faSliders}/>
                    <span className='hidden md:inline'>Settings</span>
                </li>

                <li className='flex items-center  py-3 px-2 space-x-4 hover:rounded-full md:hover:rounded hover:cursor-pointer hover:bg-gray-200 hover:text-black  active:bg-gray-400 '>
                    <FontAwesomeIcon  icon={faPhone} />
                    <span className='hidden md:inline'>Support</span>
                </li>

            </div>
             <h1 className='text-xl  md:text-3xl lg:text-4xl italic font-bold mt-24'>Logo</h1>
        </div>

       
    </div>
  )
}

export default Sidebar