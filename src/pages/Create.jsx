import React from 'react'

const Create = () => {

  


  return (
    <div className='bg-white w-full h-100vh flex justify-center items-center'>

        <div className='pt-7 pb-7 rounded shadow-lg w-4/5 p-4 px-10 '>
            <h1 className='text-4xl font-bold' >Add New Expenses</h1>

            <form  className='mt-4'>

                <div className='mb-2 '>
                    <label className='font-semibold text-lg' >Details:</label>
                    <input className=' p-2 w-full border-2 rounded-lg border-gray-200' type='text' name='name' placeholder='Enter your details'
                     />
                
                </div>



                <div className='mb-2'>
                    <label className='font-semibold text-lg'>Merchant:</label>
                    <input className='p-2 w-full border-2 rounded-lg border-x-gray-200' type='text' name='name' placeholder='Enter your merchant'
                     />
                </div>


                <div className='mb-2'>
                    <label className='font-semibold text-lg'>Amount:</label>
                    <input className='p-2 w-full border-2 rounded-lg border-x-gray-200' type='text' name='name' placeholder='Enter your amount'
                     />
                </div>

                <div className='mb-2'>
                    <label className='font-semibold text-lg'>Report:</label>
                    <input className='p-2 w-full border-2 rounded-lg border-x-gray-200' type='text' name='name' placeholder='Enter your Report'
                     />
                </div>

             

                <div className='mb-2'>
                    <label className='font-semibold text-lg'>Status:</label>
                    <input className='p-2 w-full border-2 rounded-lg border-x-gray-200' type='text' name='name' placeholder='Enter your Status'
                     />
                </div>

                <button className='px-8 py-2 bg-green-600 font-semibold text-white shadow-md   rounded-xl mt-2 hover:bg-green-500 active:bg-green-400'>Submit</button>
            </form>

        </div>

    </div>
  )
}

export default Create