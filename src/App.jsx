import React from 'react'
import Signup from './components/Signup'
import Sidebar from './components/Sidebar'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Expenses from './pages/Expenses'
import First from './pages/First'
import Trips from './pages/Trips'
import Create from './pages/Create'

const App = () => {
  return (
  
    <div>

      {/* <Signup/> */}
        <div>

         
        <Sidebar/>
         
        

            <div className='grow ml-16 md:ml-64 h-full lg:h-full   text-gray-900 pt-14 pb-20 px-8 bg-white'>
            

              <Routes>

                <Route path='/' element={<First/>}></Route>
                <Route path='/expenses' element={<Expenses/>}></Route>
                <Route path='/trips' element={<Trips/>}></Route>
                <Route path='/create' element={<Create/>}></Route>

              </Routes>

           

            
           </div>

          

        

        </div>

      
    </div>
        
   
  )
}

export default App