import { Box, Stack } from "@mui/material"
import Brightness1OutlinedIcon from '@mui/icons-material/Brightness1Outlined';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import IconButton from '@mui/material/IconButton';
import { useEffect, useState } from "react";

import img1 from '../../assets/bodyone/img1.jpg'
import img2 from  '../../assets/bodyone/img8.jpg'
import img3 from  '../../assets/bodyone/img2.jpg'
import img4 from  '../../assets/bodyone/img15.jpg'
import img5 from  '../../assets/bodyone/img14.jpg'
import img6 from  '../../assets/bodyone/img18.jpg'
import img7 from  '../../assets/bodyone/img24.jpg'
import img8 from  '../../assets/bodyone/img25.jpg'
import img9 from  '../../assets/bodyone/img26.jpg'
import img10 from  '../../assets/bodyone/img27.jpg'



const BodyOneTwo=()=>{
    const [count,setCount]=useState(1)

    useEffect(()=>{
      const interval=setInterval(()=>{
        setCount((prev)=>prev+1)
        if(count===11){setCount(1)}
        
       },2000)
        return ()=> clearInterval(interval)
     },[count])
    
    return(
    <Box> 
        <img  src={img1} style={{ height:423,width:620 }}/>

        <Stack direction='row' spacing={1}>
         <IconButton onClick={()=>{setCount(1)}} sx={{ width:10,height:10}}><Brightness1Icon  sx={{fontSize:12, ...(count===1 &&{color:'#86442d'})}}/></IconButton>
         <IconButton onClick={()=>{setCount(2)}} sx={{ width:10,height:10}}><Brightness1Icon  sx={{fontSize:12, ...(count===2 &&{color:'#86442d'})}}/></IconButton>
         <IconButton onClick={()=>{setCount(3)}} sx={{ width:10,height:10}}><Brightness1Icon  sx={{fontSize:12, ...(count===3 &&{color:'#86442d'})}}/></IconButton>
         <IconButton onClick={()=>{setCount(4)}} sx={{ width:10,height:10}}><Brightness1Icon  sx={{fontSize:12, ...(count===4 &&{color:'#86442d'})}}/></IconButton>
         <IconButton onClick={()=>{setCount(5)}} sx={{ width:10,height:10}}><Brightness1Icon  sx={{fontSize:12, ...(count===5 &&{color:'#86442d'})}}/></IconButton>
         <IconButton onClick={()=>{setCount(6)}} sx={{ width:10,height:10}}><Brightness1Icon  sx={{fontSize:12, ...(count===6 &&{color:'#86442d'})}}/></IconButton>
         <IconButton onClick={()=>{setCount(7)}} sx={{ width:10,height:10}}><Brightness1Icon  sx={{fontSize:12, ...(count===7 &&{color:'#86442d'})}}/></IconButton>
         <IconButton onClick={()=>{setCount(8)}} sx={{ width:10,height:10}}><Brightness1Icon  sx={{fontSize:12, ...(count===8 &&{color:'#86442d'})}}/></IconButton>
         <IconButton onClick={()=>{setCount(9)}} sx={{ width:10,height:10}}><Brightness1Icon  sx={{fontSize:12, ...(count===9 &&{color:'#86442d'})}}/></IconButton>
         <IconButton onClick={()=>{setCount(10)}} sx={{ width:10,height:10}}><Brightness1Icon  sx={{fontSize:12, ...(count===10 &&{color:'#86442d'})}}/></IconButton>

        
        
        </Stack>

    </Box>
    )
}


export default BodyOneTwo