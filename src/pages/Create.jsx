import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {

  const [inputData, setInputData] = useState({

    details : "",
    merchant : "",
    amount : "",
    report : "",
    status : "",
    
  })

  const navigat = useNavigate()

  function handleSubmit(event) { 

    event.preventDefault()
    axios.post('http://localhost:3031/data', inputData)
    .then(res => {
        alert("Expense Added Successfully")
        navigat('/')
    }).catch (err => console.log(err))

  }

  return (
    <div className='bg-white w-full h-100vh flex justify-center items-center'>

        <div className='pt-7 pb-7 rounded shadow-lg w-4/5 p-4 px-10 '>
            <h1 className='text-4xl font-bold' >Add New Expenses</h1>

            <form onSubmit={handleSubmit}  className='mt-4'>

                <div className='mb-2 '>
                    <label className='font-semibold text-lg' >Details:</label>
                    <input className=' p-2 w-full border-2 rounded-lg border-gray-200' type='text' name='details' placeholder='Enter your details'   onChange={e => setInputData({...inputData, details:e.target.value})}
                     />
                
                </div>



                <div className='mb-2'>
                    <label className='font-semibold text-lg'>Merchant:</label>
                    <input className='p-2 w-full border-2 rounded-lg border-x-gray-200' type='text' name='merchant' placeholder='Enter your merchant'
                      
                      onChange={e => setInputData({...inputData, merchant: e.target.value})}/>
                </div>


                <div className='mb-2'>
                    <label className='font-semibold text-lg'>Amount:</label>
                    <input className='p-2 w-full border-2 rounded-lg border-x-gray-200' type='text' name='amount' placeholder='Enter your amount'
                      
                      onChange={e => setInputData({...inputData, amount: e. target.value})} />
                </div>

                <div className='mb-2'>
                    <label className='font-semibold text-lg'>Report:</label>
                    <input className='p-2 w-full border-2 rounded-lg border-x-gray-200' type='text' name='report' placeholder='Enter your Report'
                       
                       onChange={e => setInputData({...inputData, report: e.target.value})}
                       />
                </div>

             

                <div className='mb-2'>
                    <label className='font-semibold text-lg'>Status:</label>
                    <input className='p-2 w-full border-2 rounded-lg border-x-gray-200' type='text' name='status' placeholder='Enter your Status'
                      
                      onChange={e => setInputData({...inputData, status: e.target.value})}
                     
                     />
                </div>

                <button
                    
                className='px-8 py-2 bg-green-600 font-semibold text-white shadow-md   rounded-xl mt-2 hover:bg-green-500 active:bg-green-400'>Submit</button>
            </form>

        </div>

    </div>
  )
}

export default Create