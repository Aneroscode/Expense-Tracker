import React from 'react'

const Header = () => {
  return (
    <>
    <div className='w-full h-screen flex items-center gap-10 justify-center flex-col bg-center bg-cover bg-no-repeat' style={{"backgroundImage": "url('./src/assets/background.jpg')"}}>
    <h1 className='text-4xl font-bold italic mb-24 text-emerald-300'>Logo</h1>
    <div className='flex flex-col  px-10'>
       <label className='text-slate-200 font-bold '>Enter password</label>
       <input className=' bg-slate-500  rounded-lg py-1 '/>

        <div className='pt-10'>
          <button className='bg-emerald-300 py-2 px-48 rounded-lg hover:bg-emerald-500'>Start</button>
        </div>
    </div>
    </div>
    </>
    
  )
}

export default Header