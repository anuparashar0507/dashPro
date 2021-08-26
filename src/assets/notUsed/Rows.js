import React from 'react'
import data from '../assets/data'
import TableRow from './TableRow'
import Paggination from './Paggination'
// import coloums from '../assets/coloums'
const Table = () => {
    return (
  <>    


<Paggination
data={data}
RenderComponent={TableRow}
pageLimit={5}
dataLimit={5}
/>
      
               
               {/* <tbody> 


                    {data.map((r,i )=> 
                        <TableRow  key = {i} formCode = {r.formCode} formName = {r.formName}
                         name = {r.name} appDate = {r.appDate}  appTime = {r.appTime} phone ={r.phone}/>
                    )}    
              </tbody> */}
</>
       
    )
}

export default Table
