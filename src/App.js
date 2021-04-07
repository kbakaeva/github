// import React, { useEffect, useState } from 'react'


// export default function App() {
//   const [val, setVal] = useState(0)
//   useEffect(()=>{
//     alert(val)
//   },[])

//   // useEffect(()=>{
//   //   alert(val)
//   // // }) component did mount && update mount

//   return (
//     <div>
//       <h1>{val}</h1>
//       <button onClick={()=>setVal(val+1)}>+</button>
//     </div>
//   )
// }

// //объяснение темы useEffect^


import React, {useEffect, useState } from 'react'
import Search from './component/Search'
import Output from './component/Output'
import { API } from './config';

export default function App() {
const [name, setName] = useState()
const [info, setInfo] = useState()

const getUser = async(event)=>{
  event.preventDefault()
  let req = await fetch(API + name)
  let resp = await req.json()
  console.log(resp)
  setInfo(resp)
}

  return (
    <div>
      <Search
        name = {name}
        changeName = {setName}
        send = {getUser} //пропс - передаваемые объекты с родителького к дочерней
      />
      <Output
        data = {info}
      />
    </div>
  )
}
