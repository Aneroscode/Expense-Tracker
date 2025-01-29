import { faBars, faBed, faBurger, faCancel, faDeleteLeft, faDumpster, faListDots, faLuggageCart, faMobile, faNetworkWired, faScissors, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DataTable from 'react-data-table-component'

import { Link, useNavigate } from 'react-router-dom'

const Expenses = () => {

  const [data, setData] = useState([])
  const navigate = useNavigate()
  

      useEffect(() => {
          axios.get('http://localhost:3000/data')
          .then(res => setData(res.data))
          .catch(err => console.log(err))
        }
        
      ,[])

    function handleDelete(id) {
        const del = window.confirm("Do you want to delete?")

        if(del){
          axios.delete('http://localhost:3000/data/'+id)
          .then(res => {
            alert('Expenses has been deleted')
          }).catch(err => console.log(err))
        }
    } 
 
 
  

 
  

  return (
    <div className=' px-4 py-6'>
       <div className=' flex justify-between   py-2'>
        <h1 className='text-2xl md:3xl lg:4xl font-bold'>Expenses</h1>
        <div className='flex space-x-4'>
          <Link to={"/create"}>
          <button  className='py-1 px-4 rounded-xl font-bold hover:scale-110'>+New expense</button>
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
               <FontAwesomeIcon onClick={e => handleDelete(current.id)} className='mt-3 text-red-500 cursor-pointer hover:scale-125 ' icon={faXmark}/>
                    
                    <FontAwesomeIcon className='mt-1 rounded-full bg-opacity-50 bg-yellow-300 px-2 py-2' icon={faBurger}/>
                  <div>
                    <span>{current.date}</span>
                    <h4>{current.details}</h4>
                  </div>
                </div>
              </td>


             <td className='p-3 text-sm text-gray-700'>{current.merchant}</td>
             <td className='p-3 text-sm text-gray-700'>{current.amount}</td>
             <td className='p-3 text-sm text-gray-700'>{current.report}</td>
             <td className='p-3 text-sm text-gray-700 '>{current.status}</td>


            
            </tr>
          
            
          </tbody>
          
        ))
      }
      </table>

     

    
     

    </div>
  )
}

export default Expenses