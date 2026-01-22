import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='flex justify-around'>
              
            <div className="overflow-x-auto">
              <h3 className='font-bold mb-2'>TODO</h3>
  <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table bg-amber-100 p-3">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
     
      <tr>
        <th>1</th>
        <td>maruf Hossen</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
       <button className="btn btn-soft w-full h-[60%] ">Delete</button>

      </tr>
     
      <tr>
        <th>2</th>
        <td>Jobayer Hossen</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
         <button className="btn btn-soft w-full h-[60%] ">Delete</button>


      </tr>
  
      <tr>
        <th>3</th>
        <td>Mahedi Hasan</td>
        <td>Tax Accountant</td>
        <td>Red</td>
       <button className="btn btn-soft w-full h-[60%] ">Delete</button>


      </tr>
    </tbody>
  </table>
  <button className="btn btn-soft w-full">Add</button>
</div>
</div>



        <section >
          <h3 className='font-bold mb-2'>Done</h3>

          <table className="table bg-amber-100 p-3">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>  
    </thead>
     <tbody>
     
      <tr>
        <th>1</th>
        <td>maruf Hossen</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      </tbody>
    </table>

          


        </section>
      </section>
    </>
  )
}

export default App
