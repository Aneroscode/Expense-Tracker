import { faBook, faClock, faDollar, faPaperPlane, faPlane, faReceipt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar, Doughnut, Line } from 'react-chartjs-2'
import React from 'react'
import { Link } from 'react-router-dom'



const Card = () => {
  return (
    <div className=' flex flex-col    md:grid    md:grid-cols-2 lg:grid-rows-4 lg:grid-cols-3 gap-10  '>
      
        <div className=' rounded-lg border border-gray-200 bg-gray-100  md:col-span-1 max-h-fit  cursor-pointer '>
            <div className='  bg-gray-50 border-b-2 border-gray-200'>
                <h4 className='px-3 py-1 font-bold '>Pending Tasks</h4>
            </div>

            <div className=' flex justify-between px-3 py-1'>
                <div >
                    <ul className='flex flex-col  text-sm font-semibold  gap-1'>

                        <li className='flex items-center space-x-3 '>
                            <FontAwesomeIcon icon={faClock}/>
                            <span>Pending Approvals</span>
                        </li>

                        <li className='flex items-start space-x-3'>
                            <FontAwesomeIcon className='mt-1' icon={faPlane}/>
                            <span>New Registered Trip</span>
                        </li>

                        <li className='flex items-start space-x-3'>
                            <FontAwesomeIcon className='mt-1' icon={faBook}/>
                            <span>Unreported Expenses</span>
                        </li>

                        <li className='flex items-start space-x-3'>
                            <FontAwesomeIcon className='mt-1' icon={faClock}/>
                            <span>Upcoming Expenses</span>
                        </li>

                        <li className='flex items-start space-x-3'>
                            <FontAwesomeIcon className='mt-1' icon={faDollar}/>
                            <span>Unreported Expenses</span>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col'>
                    <span>5</span>
                    <span>1</span>
                    <span>4</span>
                    <span>0</span>
                    <span className=''>0</span>
                </div>
            </div>

        </div>

        <div className=' rounded-lg border border-gray-200 bg-stone-100 col-span-3 max-h-fit lg:max-w-full md:1/2'>
            <div className='flex flex-col'>

                    <div className=' bg-gray-50 border-b-2 border-gray-200'>
                            <h4 className='px-3 py-1 font-bold'>Recent Expenses</h4>
                    </div>
                        <div className='flex justify-between px-3 py-1 cursor-pointer'>

                    <div className='flex flex-col text-sm font-semi-bold items-center'>
                        <h4 className='font-bold'>Subject</h4>
                        <span>Office Supplies</span>
                        <span>Business Launch</span>
                        <span>Travel Expenses</span>
                        <span>Client Dinner</span>
                        <span>Hotel</span>
                    </div>


                    <div className='flex flex-col text-sm font-semi-bold'>
                        <h4 className='font-bold'>Employee</h4>
                        <span>John Smith</span>
                        <span>Sarah Jade</span>
                        <span>Mike Brown</span>
                        <span>Jennifer Lee</span>
                        <span>David Wilson</span>
                    </div>

                    <div className='flex flex-col text-sm font-semi-bold items-center space-x-'>
                        <h4 className='font-bold'>Team</h4>
                        <span className=''>Marketing</span>
                        <span className=''>Sales</span>
                        <span className=''>Operationgs</span>
                        <span className=''>Finance</span>
                        <span className=''>Hotel</span>
                    </div>

                    <div className='flex flex-col text-sm font-semi-bold items-center space-y-'>
                        <h4 className='font-bold'>Subject</h4>
                        <span className='bg-pink-300 rounded-xl px-2  bg-opacity-75'>Office Supplies</span>
                        <span className='bg-green-300 rounded-xl px-2 bg-opacity-75'>Business Launch</span>
                        <span className='bg-blue-300 rounded-xl px-2 bg-opacity-75'>Travel Expenses</span>
                        <span className='bg-red-300 rounded-xl px-2 bg-opacity-75'>Client Dinner</span>
                        <span className='bg-yellow-300 rounded-xl px-2 bg-opacity-75'>Hotel</span>
                    </div>

                </div>
             </div>
        </div>




        <div className='  rounded-lg border border-gray-200 bg-stone-100 col-span-4  '>
            <div className='  bg-gray-50 border-b-2 border-gray-200'>
                    <h4 className=' px-3 py-2 font-bold  md:px-3 md:py-1'>Pending Tasks</h4>
            </div>

            <div className='py-3 px-3 md:grid md:grid-cols-2 md:grid-row-2 md:items-center md:space-x-5  space-y-4 lg:flex lg:items-center lg:justify-evenly   '>
                <Link to={"/create"}>
                <div className=' py-5 px-8 rounded-lg lg:mt-4 md:ml-5 md:mt-4 space-x-3 flex items-center border border-gray-200 shadow-xl  bg-slate-200 hover:scale-110 duration-100 transition transform cursor-pointer'>
                    <FontAwesomeIcon className='bg-yellow-300 bg-opacity-75 shadow-xl py-3 rounded-full w-3 px-3' icon={faBook}/>
                    <span className='font-bold'>+New Expenses</span>
                </div>
                </Link>

                <div className='py-5 px-8 rounded-lg space-x-3 flex items-center border  border-gray-200 bg-slate-200 shadow-xl  hover:scale-110 duration-100 transition transform cursor-pointer'>
                    <FontAwesomeIcon className='bg-yellow-300 bg-opacity-75 py-3 rounded-full w-3 px-3 ' icon={faReceipt}/>
                    <span className='font-bold'>+Add Receipt</span>
                </div>

                <div className='py-5 px-8 rounded-lg space-x-3 flex items-center border border-gray-200 bg-slate-200 shadow-xl  hover:scale-110 duration-100 transition transform cursor-pointer'>
                    <FontAwesomeIcon className='bg-yellow-300 bg-opacity-75 py-3 rounded-full w-3 px-3' icon={faPaperPlane}/>
                    <span className='font-bold'>+Create report</span>

                </div>

                <div className='py-5 px-8 rounded-lg space-x-3 flex items-center border border-gray-200 bg-slate-200 shadow-xl  hover:scale-110 duration-100 transition transform cursor-pointer'>
                    <FontAwesomeIcon className='bg-yellow-300 bg-opacity-75 py-3 rounded-full w-3 px-3' icon={faPlane}/>
                    <span className='font-bold'>+Create trip</span>
                </div>
            </div>
        </div>


        
        
        <div className=' rounded-lg border border-gray-200 bg-stone-100 col-span-4 h-0 '>
            <div className='  bg-gray-50 border-b-2 border-gray-200'>
                    <h4 className='px-3 py-1 font-bold'>Pending Tasks</h4>
            </div>

                <div className=' flex flex-col lg:flex lg:flex-row px-3 py-2 gap-2 '>

                    <div className='lg:w-1/2 bg-gray-200 rounded-lg p-4' >

                        <h4>Team Spending Trend</h4>
                        <div className=' '>
                          <Bar
                          
                            data={{
                                labels : ['PJ', 'SJ', 'MB', 'IS', 'DW','NJ', 'BS'],
                                datasets: [
                                    {
                                        label:'Expenses',
                                        data: [0, 20,40,60,80, 100]
                                    }
                                ],
                            }}
                          
                          />
                        </div>


                    </div>



                    <div className='lg:w-1/2 bg-gray-200 rounded-lg p-4'>
                        <h4>Day-to-Day Expenses</h4>

                                                 
                        <Line
                        
                        data={{
                            labels :['Accomodatio', 'COMMS', 'Services', 'Food', 
                                'fuel'
                             ],

                             datasets: [
                                {
                                    label:'Expenses',
                                    data: [0, 20,30,40,80, 100]
                                }
                            ],
                        }}
                        
                        
                        />
                        
                          
                     
                        
                        
                    </div>
                </div>
        </div>
        
        

    </div>
  )
}

export default Card