
import { useEffect, useState } from "react";
import e1 from '../../assets/bodyten/e1.jpg'
import e2 from '../../assets/bodyten/e2.jpg'
import e3 from '../../assets/bodyten/e3.jpg'
import e4 from '../../assets/bodyten/e4.jpg'
import e5 from '../../assets/bodyten/e5.jpg'
import e6 from '../../assets/bodyten/e6.jpg'
import e7 from '../../assets/bodyten/e7.jpg'


const BodyEleven=()=> {
    const [count,setCount]=useState(1) 
    useEffect(()=>{
        const interval=setInterval(()=>{
            setCount((e)=>e+1)
            if(count ===8){

                setCount(1)
            }
        },2000)

        return ()=> clearInterval(interval)
    },[count])

   

  return (
    <div>
        bodyEleven
    </div>
  )
}

export default BodyEleven