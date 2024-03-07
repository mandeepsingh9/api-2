
import './App.css';
import { useRef, useState } from 'react';
import axios from 'axios'
import Lists from './Components/Lists';
function App() {
    const [Data,setData]=useState([]);
    const [filter,setFilter]=useState("");
    const inputvalue=useRef();
    
    async function handlepincode()
    {
        let pincode=inputvalue.current.value;
        console.log(pincode);
        

        try {
              let response=await axios(`https://api.postalpincode.in/pincode/${pincode}`);
              
              
              if(response.data[0].Status==="Error")
                {
                  console.log("invalid Pincode");

                  return ;
                }

             setData([...response.data]);
            

        } catch (error) {
             console.log("connection error h ");
        }
    }



  function filterinput(e)
  {
      console.log(e.target.value);

      setFilter(e.target.value);
  }

  return (
    <div className="App">
      <div className='pincode'>
         <input type="number" placeholder='Enter Pincode' ref={inputvalue}/>
         <button onClick={handlepincode}>ADD</button>
         <input type='text'className='filter' placeholder='filter' onChange={filterinput}/>


         <div className='cardcontainer'>
      {
         Data.length>0 &&  Data[0].PostOffice
         .filter((item)=> (item.Name.includes(filter) ))
         .map((item,key)=>(
          <Lists item={item} key={item.Pincode}/>
        ))
      }

      
      </div>
      </div>
    </div>
  );
}

export default App;
