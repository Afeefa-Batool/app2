import AddData from './screens/AddData'
import ShowData from './screens/ShowData'
import React, { useState } from 'react';
import  {userData} from "./screens/UserData"
function App() {
  
const [users,setusers] = useState(userData);
  return (
    <div>
            <div className='jumbotron mt-3'>
      <div className="container">

 <div className="row">

   <div className="col-md-6">
      <AddData />
    </div>
    <div className="col-md-6">
      <ShowData allusers={users} />
     </div>
   </div>
  
  </div>
</div>
    </div>
  )
}

export default App