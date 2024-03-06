
import { useEffect, useState } from "react";
import e1 from '../../assets/bodyten/e1.jpg'
import e2 from '../../assets/bodyten/e2.jpg'
import e3 from '../../assets/bodyten/e3.jpg'
import e4 from '../../assets/bodyten/e4.jpg'
import e5 from '../../assets/bodyten/e5.jpg'
import e6 from '../../assets/bodyten/e6.jpg'
import e7 from '../../assets/bodyten/e7.jpg'
import { Link } from "react-router-dom";
import { ButtonBase, Stack } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const BodyEleven=()=> {
    const [count,setCount]=useState(1) 
    // useEffect(()=>{
    //     const interval=setInterval(()=>{
    //         setCount((e)=>e+1)
    //         if(count ===7){

    //             setCount(1)
    //         }
    //     },2000)

    //     return ()=> clearInterval(interval)
    // },[count])

   

  return (
    <Stack>
     { count ===1  && <Link to='/'> <img src={e1} style={{ width:'100%' }}/></Link>} 
     { count ===2  && <Link to='/'> <img src={e2} style={{ width:'100%' }} /></Link>} 
     { count ===3  &&  <Link to='/'><img src={e3} style={{ width:'100%' }}/></Link>} 
     { count ===4  &&  <Link to='/'><img src={e4} style={{ width:'100%' }}/></Link>} 
     { count ===5  &&  <Link to='/'><img src={e5} style={{ width:'100%' }}/></Link>} 
     { count ===6  &&  <Link to='/'><img src={e6} style={{ width:'100%' }}/></Link>} 
     { count ===7  &&  <Link to='/'><img src={e7} style={{ width:'100%' }}/></Link>}

     <Stack direction='row' spacing={1} justifyContent='center' sx={{ boxShadow:7 , }}>
<ButtonBase onClick={()=>setCount(1)}> <FiberManualRecordIcon   fontSize="small" sx={{...(count===1 && {color:"#ff6900",fontSize:'30px'} )}} /></ButtonBase>
<ButtonBase onClick={()=>setCount(2)}> <FiberManualRecordIcon   fontSize="small" sx={{...(count===2 && {color:"#ff6900",fontSize:'30px'} )}} /></ButtonBase>
<ButtonBase onClick={()=>setCount(3)}> <FiberManualRecordIcon   fontSize="small" sx={{...(count===3 && {color:"#ff6900",fontSize:'30px'} )}} /></ButtonBase>
<ButtonBase onClick={()=>setCount(4)}> <FiberManualRecordIcon   fontSize="small" sx={{...(count===4 && {color:"#ff6900",fontSize:'30px'} )}} /></ButtonBase>
<ButtonBase onClick={()=>setCount(5)}> <FiberManualRecordIcon   fontSize="small" sx={{...(count===5 && {color:"#ff6900",fontSize:'30px'} )}} /></ButtonBase>
<ButtonBase onClick={()=>setCount(6)}> <FiberManualRecordIcon   fontSize="small" sx={{...(count===6 && {color:"#ff6900",fontSize:'30px'} )}} /></ButtonBase>
<ButtonBase onClick={()=>setCount(7)}> <FiberManualRecordIcon   fontSize="small" sx={{...(count===7 && {color:"#ff6900",fontSize:'30px'} )}} /></ButtonBase>

     </Stack> 

    </Stack>
  
  )
}

export default BodyEleven