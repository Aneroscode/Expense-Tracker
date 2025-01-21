import { faBars, faBed, faBurger, faListDots, faLuggageCart, faMobile, faNetworkWired, faScissors } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DataTable from 'react-data-table-component'
import Data from '../components/data.json'
import { Link } from 'react-router-dom'

const Expenses = () => {

  // const column =[
  //   {
  //     name: "ID",
  //     selector : row => row.id 
  //   },
  //   {
  //     name: "NAME",
  //     selector : row => row.name
  //   },
  //   {
  //     name: "EMAIL",
  //     selector : row => row.email
  //   },
  //   {
  //     name: "CITY",
  //     selector : row => row.address.city
  //   },
  //   {
  //     name: "USERNAME",
  //     selector : row => row.username
  //   }
  // ]

  //     useEffect(() => {
  //       const fetchData = async () => {
  //         axios.get('https://jsonplaceholder.typicode.com/users')
  //         .then(res => setRecords(res.data))
  //         .catch(err => console.log(err))
  //       }
  //       fetchData()
  //     },[])

  //     const [records, setRecords] = useState([])
  const [status, setStatus] = useState(false)
  const [data, setData] = useState(Data)

  return (
    <div className=' px-4 py-6'>
       <div className=' flex justify-between   py-2'>
        <h1 className='text-2xl md:3xl lg:4xl font-bold'>Expenses</h1>
        <div className='flex space-x-4'>
        <button className='bg-red-500 font-bold py-1 px-7 rounded-lg hover:bg-red-400 active:bg-red-300 '>Delete</button>
          <Link to={"/create"}>
          <button className='py-1 px-4 rounded-xl font-bold hover:scale-110'>+New expense</button>
          </Link>
          <div className='flex mt-2 space-x-3 '>
            <FontAwesomeIcon className=' py-1 px-1 rounded-lg hover:scale-110' icon={faNetworkWired}/>
            <FontAwesomeIcon className=' py-1 px-1 rounded-lg hover:scale-110' icon={faBars}/>
            <FontAwesomeIcon className=' py-1 px-1 rounded-lg hover:scale-110' icon={faListDots}/>
          </div>
        </div>
      </div>

      <table className='w-full'>
      <thead className=' bg-gray-50 border-b-2 border-gray-200  '>
            <tr>
              <th className='p-3 text-sm font-semibold -tracking-wide text-left' >DETAILS</th>
              <th  className='p-3 text-sm font-semibold -tracking-wide text-left'  >MERCHANT</th>
              <th  className='p-3 text-sm font-semibold -tracking-wide text-left' >AMOUNT</th>
              <th  className='p-3 text-sm font-semibold -tracking-wide text-left' >REPORT</th>
              <th  className='p-3 text-sm font-semibold -tracking-wide text-left'  >STATUS</th>
            </tr>
          </thead>
     
      {
        
        data.map((current, i) =>(
          <tbody>
            
           
            <tr key={i} className='bg-white border-b-2'>
             <td className='p-3 text-sm text-gray-700'>
               <div className='flex items-centers gap-2 '>
                    <input type="checkbox" name='checkbox' id='checkbox' />
                    <FontAwesomeIcon className='mt-1 rounded-full bg-opacity-50 bg-yellow-300 px-2 py-2' icon={faBurger}/>
                  <div>
                    <span>11/09/2022</span>
                    <h4>{current.details}</h4>
                  </div>
                </div>
              </td>


             <td className='p-3 text-sm text-gray-700'>{current.merchant}</td>
             <td className='p-3 text-sm text-gray-700'>{current.amount}</td>
             <td className='p-3 text-sm text-gray-700'>{current.Report}</td>
             <td className='p-3 text-sm text-gray-700 '>{current.satus}</td>
            </tr>
          
            
          </tbody>
        ))
      }
      </table>

      {/* <div className=' flex justify-between   py-2'>
        <h1 className='text-2xl md:3xl lg:4xl font-bold'>Expenses</h1>
        <div className='flex space-x-4'>
          <button className='py-1 px-4 rounded-xl font-bold hover:scale-110'>+New expense</button>
          <div className='flex mt-2 space-x-3 '>
            <FontAwesomeIcon className=' py-1 px-1 rounded-lg hover:scale-110' icon={faNetworkWired}/>
            <FontAwesomeIcon className=' py-1 px-1 rounded-lg hover:scale-110' icon={faBars}/>
            <FontAwesomeIcon className=' py-1 px-1 rounded-lg hover:scale-110' icon={faListDots}/>
          </div>
        </div>
      </div> */}

      {/* <div className=''>
      <DataTable
      
      columns  = {column}
        data = {records}
      
      ></DataTable>
      </div> */}

      {/* <div > 
        <table  className='w-full'>
          <thead className=' bg-gray-50 border-b-2 border-gray-200  '>
            <tr>
              <th className='p-3 text-sm font-semibold -tracking-wide text-left' >DETAILS</th>
              <th  className='p-3 text-sm font-semibold -tracking-wide text-left'  >MERCHANT</th>
              <th  className='p-3 text-sm font-semibold -tracking-wide text-left' >AMOUNT</th>
              <th  className='p-3 text-sm font-semibold -tracking-wide text-left' >REPORT</th>
              <th  className='p-3 text-sm font-semibold -tracking-wide text-left'  >STATUS</th>
            </tr>
          </thead>


          <tbody >
            <tr className='bg-white' >
              <td className='p-3 text-sm text-gray-700' >
                <div className='flex items-centers gap-2 '>
                  <input type="checkbox" name='checkbox' id='checkbox' />
                  <FontAwesomeIcon className='mt-1 rounded-full bg-opacity-50 bg-yellow-300 px-2 py-2' icon={faBurger}/>
                  <div>
                    <span>09/11/2022</span>
                    <h4>Food Catering</h4>
                  </div>
                </div>
                </td> 
              <td className='p-3 text-sm text-gray-700'>McFood</td> 
              <td className='p-3 text-sm text-gray-700'>250</td> 
              <td className='p-3 text-sm text-gray-700'>November_2022</td> 
              <td className='p-3 text-sm text-gray-700'>
                <span className=' cursor-pointer p-1.5 font-medium text-xs uppercase -tracking-wider text-blue-800 bg-blue-200 rounded-lg bg-opacity-50'>Not Submitted</span>
                </td> 
            </tr>

            <tr className='bg-gray-50'>
              <td className='p-3 text-sm text-gray-700'>
               <div className='flex items-center gap-2'>
                 <input type="checkbox" name='checkbox' id='checkbox' />
                <FontAwesomeIcon className='mt-1 rounded-full bg-opacity-50 bg-yellow-300 px-2 py-2' icon={faScissors}/>
                  <div>
                    <span>09/11/2022</span>
                    <h4>Office Supplies</h4>
                  </div>
                </div>
              </td>
              <td className='p-3 text-sm text-gray-700'>Officio</td> 
              <td className='p-3 text-sm text-gray-700'>150</td> 
              <td className='p-3 text-sm text-gray-700'>November_2022</td> 
              <td className='p-3 text-sm text-gray-700'>
                <span className='p-1.5 font-medium text-xs uppercase -tracking-wider text-blue-800 bg-blue-200 rounded-lg bg-opacity-50'>Not Submitted</span>
                </td> 
            </tr>

            <tr className='bg-white'>

              <td className='p-3 text-sm text-gray-700'>
            <div className='flex items-center gap-2'>
               <input type="checkbox" name='checkbox' id='checkbox' />
              <FontAwesomeIcon className='mt-1 rounded-full bg-opacity-50 bg-yellow-300 px-2 py-2' icon={faBurger}/>
                  <div>
                    <span>09/11/2022</span>
                    <h4>Business Launch</h4>
                  </div>
                </div>
                </td>
              <td  className='p-3 text-sm text-gray-700'>Resturant</td> 
              <td  className='p-3 text-sm text-gray-700'>75.50</td> 
              <td  className='p-3 text-sm text-gray-700'>November_2022</td> 
              <td  className='p-3 text-sm text-gray-700'>
                <span className='p-1.5 font-medium text-xs uppercase -tracking-wider text-blue-800 bg-blue-200 rounded-lg bg-opacity-50'>Not Submitted</span>
                </td> 
            </tr>

            <tr className='bg-gray-50'>
              <td  className='p-3 text-sm text-gray-700'>
               <div className='flex items-center gap-2 '>
                 <input type="checkbox" name='checkbox' id='checkbox' />
                <FontAwesomeIcon className='mt-1 rounded-full bg-opacity-50 bg-yellow-300 px-2 py-2' icon={faLuggageCart}/>
                  <div>
                    <span>09/11/2022</span>
                    <h4>Travel Expenses</h4>
                  </div>
                </div>
              </td>
              <td className='p-3 text-sm text-gray-700'>Airlines</td> 
              <td className='p-3 text-sm text-gray-700'>450.20</td> 
              <td className='p-3 text-sm text-gray-700'>November_2022</td> 
              <td className='p-3 text-sm text-gray-700'>
                <span className='p-1.5 font-medium text-xs uppercase -tracking-wider text-pink-800 bg-pink-200 rounded-lg bg-opacity-50'>Submitted</span>
                </td> 
            </tr>


            <tr className='bg-white'>
              <td className='p-3 text-sm text-gray-700'>
               <div className='flex items-center gap-2'>
                 <input type="checkbox" name='checkbox' id='checkbox' />
                <FontAwesomeIcon className='mt-1 rounded-full bg-opacity-50 bg-yellow-300 px-2 py-2' icon={faBurger}/>
                  <div>
                    <span>09/11/2022</span>
                    <h4>Client Dinner</h4>
                  </div>
                </div>
               </td>  
              <td className='p-3 text-sm text-gray-700'>Bistro</td> 
              <td className='p-3 text-sm text-gray-700'>120.00</td> 
              <td className='p-3 text-sm text-gray-700'>November_2022</td> 
              <td className='p-3 text-sm text-gray-700' >
                <span className='p-1.5 font-medium text-xs uppercase -tracking-wider text-blue-800 bg-blue-200 rounded-lg bg-opacity-50'>Not Submitted</span>
                </td> 
            </tr>

            <tr className='bg-gray-50'>
              <td className='p-3 text-sm text-gray-700'>
                <div className='flex items-center gap-2'>
                   <input type="checkbox" name='checkbox' id='checkbox' />
                  <FontAwesomeIcon className='mt-1 rounded-full bg-opacity-50 bg-yellow-300 px-2 py-2' icon={faBed}/>
                  <div>
                    <span>09/11/2022</span>
                    <h4>Accommodation</h4>
                  </div>
                </div>
              </td>
              <td className='p-3 text-sm text-gray-700'>Hotel***</td> 
              <td className='p-3 text-sm text-gray-700'>275.75</td> 
              <td className='p-3 text-sm text-gray-700'>November_2022</td> 
              <td className='p-3 text-sm text-gray-700'>
                <span className='p-1.5 font-medium text-xs uppercase -tracking-wider text-pink-800 bg-pink-200 rounded-lg bg-opacity-50'>Submited</span>
                </td> 
            </tr>

            <tr className='bg-white'>
              <td className='p-3 text-sm text-gray-700'>
               <div className='flex items-center gap-2'>
                 <input type="checkbox" name='checkbox' id='checkbox' />
                <FontAwesomeIcon className='mt-1 rounded-full bg-opacity-50 bg-yellow-300 px-2 py-2' icon={faMobile}/>
                  <div>
                    <span>09/11/2022</span>
                    <h4>News Subscription</h4>
                  </div>
                </div>
              </td>
              <td className='p-3 text-sm text-gray-700' >NewsTimes</td> 
              <td className='p-3 text-sm text-gray-700' >30.00</td> 
              <td className='p-3 text-sm text-gray-700'>November_2022</td> 
              <td className='p-3 text-sm text-gray-700' >
                <span className='p-1.5 font-medium text-xs uppercase -tracking-wider text-blue-800 bg-blue-200 rounded-lg bg-opacity-50'>Not Submited</span>
                </td> 
            </tr>
          </tbody>
        </table>
      </div> */}

    </div>
  )
}

export default Expenses