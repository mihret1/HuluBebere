import { Box, Stack } from "@mui/material"
import Brightness1OutlinedIcon from '@mui/icons-material/Brightness1Outlined';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import IconButton from '@mui/material/IconButton';
import { useEffect, useState } from "react";

import img1 from '../../assets/bodyone/img1.jpg'
import img11 from '../../assets/bodyone/img3.jpg'
import img111 from '../../assets/bodyone/img12.jpg'
import img1111 from '../../assets/bodyone/img9.jpg'


import img2 from  '../../assets/bodyone/img27.jpg'

import img3 from  '../../assets/bodyone/img15.jpg'
import img33 from  '../../assets/bodyone/img10.jpg'
import img333 from  '../../assets/bodyone/img11.jpg'
import img3333 from  '../../assets/bodyone/img20.jpg'

import img4 from  '../../assets/bodyone/img26.jpg'

import img5 from  '../../assets/bodyone/img2.jpg'
import img55 from  '../../assets/bodyone/img16.jpg'
import img555 from  '../../assets/bodyone/img19.jpg'
import img5555 from  '../../assets/bodyone/img23.jpg'


import img6 from  '../../assets/bodyone/img27.jpg'

import img7 from  '../../assets/bodyone/img4.jpg'
import img77 from  '../../assets/bodyone/img5.jpg'
import img777 from  '../../assets/bodyone/img24.jpg'
import img7777 from  '../../assets/bodyone/img8.jpg'

import img8 from  '../../assets/bodyone/img25.jpg'

 import img9 from  '../../assets/bodyone/img30.jpg'
 import img99 from  '../../assets/bodyone/32.jpg'
 import img999 from  '../../assets/bodyone/33.jpg'
 import img9999 from  '../../assets/bodyone/34.jpg'

import img10 from  '../../assets/bodyone/img28.jpg'
import img100 from  '../../assets/bodyone/31.jpg'
import img1000 from  '../../assets/bodyone/35.jpg'
import img10000 from  '../../assets/bodyone/img18.jpg'

import style from './BO.css'
import { ComOne } from "./bodyone_componets";
  
const BodyOneTwo=({hoverEffect,isShown,cursorr,setCursorr})=>{

  // const [cursorr,setCursorr]=useState(false)
    const [count,setCount]=useState(1)  
      
    useEffect(()=>{
      const interval=setInterval(()=>{
        setCount((prev)=>prev+1)
        if(count===40){setCount(1)}
        
       },1000)
        return ()=> clearInterval(interval)
     },[count])

  
    return(
    <Box> 

       {(!isShown && !cursorr) && (<>

      {(count===1)&&<img  src={img1} style={{ height:423,width:620 }}/>}
      {(count===2)&&<img  src={img11} style={{ height:423,width:620 }}/>}
      {(count===3)&&<img  src={img111} style={{ height:423,width:620 }}/>}
      {(count===4)&&<img  src={img1111} style={{ height:423,width:620 }}/>}
      
      {(count===5 ||  count===6 ||  count=== 7 || count===8 )&&<img  src={img2} style={{ height:423,width:620 }}/>}

      {(count===9)&&<img  src={img3} style={{ height:423,width:620 }}/>}
      {(count===10)&&<img  src={img33} style={{ height:423,width:620 }}/>}
      {(count===11)&&<img  src={img333} style={{ height:423,width:620 }}/>}
      {(count===12)&&<img  src={img3333} style={{ height:423,width:620 }}/>}
      
      {(count===13 ||  count===14 ||  count=== 15 || count===16 )&&<img  src={img4} style={{ height:423,width:620 }}/>}

      {(count===17)&&<img  src={img5} style={{ height:423,width:620 }}/>}
      {(count===18)&&<img  src={img55} style={{ height:423,width:620 }}/>}
      {(count===19)&&<img  src={img555} style={{ height:423,width:620 }}/>}
      {(count===20)&&<img  src={img5555} style={{ height:423,width:620 }}/>}
      
      {(count===21 ||  count===22 ||  count=== 23 || count===24 )&&<img  src={img6} style={{ height:423,width:620 }}/>}

      {(count===25)&&<img  src={img7} style={{ height:423,width:620 }}/>}
      {(count===26)&&<img  src={img77} style={{ height:423,width:620 }}/>}
      {(count===27)&&<img  src={img777} style={{ height:423,width:620 }}/>}
      {(count===28)&&<img  src={img7777} style={{ height:423,width:620 }}/>}
      
      {(count===29 ||  count===30 ||  count===31 || count===32 )&&<img  src={img8} style={{ height:423,width:620 }}/>}
      
      {(count===33)&&<img  src={img9} style={{ height:423,width:620 }}/>}
      {(count===34)&&<img  src={img99} style={{ height:423,width:620 }}/>}
      {(count===35)&&<img  src={img999} style={{ height:423,width:620 }}/>}
      {(count===36)&&<img  src={img9999} style={{ height:423,width:620 }}/>}

      {(count===37)&&<img  src={img10} style={{ height:423,width:620 }}/>}
      {(count===38)&&<img  src={img100} style={{ height:423,width:620 }}/>}
      {(count===39)&&<img  src={img1000} style={{ height:423,width:620 }}/>}
      {(count===40)&&<img  src={img10000} style={{ height:423,width:620 }}/>}

      </>)}

      {(isShown && hoverEffect===1) && (<ComOne cursorr={cursorr} setCursorr={setCursorr} />)}
      {(cursorr) && (<ComOne cursorr={cursorr} setCursorr={setCursorr} />)}
 
      <Stack direction='row' spacing={1}>


         <IconButton  onClick={()=>{setCount(1)}} sx={{ width:10,height:10}}><Brightness1Icon  sx={{fontSize:12, ...((count===1 || count===2 || count===3 || count===4) &&{color:'#86442d'})}}/></IconButton>
         <IconButton  onClick={()=>{setCount(5)}} sx={{ width:10,height:10}}><Brightness1Icon  sx={{fontSize:12, ...((count===5 || count===6 || count===7 || count===8)&&{color:'#86442d'})}}/></IconButton>
         <IconButton  onClick={()=>{setCount(9)}} sx={{ width:10,height:10}}><Brightness1Icon  sx={{fontSize:12, ...((count===9 || count===10 || count===11 || count===12)&&{color:'#86442d'})}}/></IconButton>
         <IconButton  onClick={()=>{setCount(13)}} sx={{ width:10,height:10}}><Brightness1Icon  sx={{fontSize:12, ...((count===13 || count===14 || count===15 || count===16) &&{color:'#86442d'})}}/></IconButton>
         <IconButton  onClick={()=>{setCount(17)}} sx={{ width:10,height:10}}><Brightness1Icon  sx={{fontSize:12, ...((count===17 || count===18 || count===19 || count===20) &&{color:'#86442d'})}}/></IconButton>
         <IconButton  onClick={()=>{setCount(21)}} sx={{ width:10,height:10}}><Brightness1Icon  sx={{fontSize:12, ...((count===21 || count===22 || count===23 || count===24) &&{color:'#86442d'})}}/></IconButton>
         <IconButton  onClick={()=>{setCount(25)}} sx={{ width:10,height:10}}><Brightness1Icon  sx={{fontSize:12, ...((count===25 || count===26 || count===27 || count===28)&&{color:'#86442d'})}}/></IconButton>
         <IconButton  onClick={()=>{setCount(29)}} sx={{ width:10,height:10}}><Brightness1Icon  sx={{fontSize:12, ...((count===29 || count===30 || count===31 || count===32) &&{color:'#86442d'})}}/></IconButton>
         <IconButton  onClick={()=>{setCount(33)}} sx={{ width:10,height:10}}><Brightness1Icon  sx={{fontSize:12, ...((count===33 || count===34 || count===35 || count===36) &&{color:'#86442d'})}}/></IconButton>
         <IconButton  onClick={()=>{setCount(37)}} sx={{ width:10,height:10}}><Brightness1Icon  sx={{fontSize:12, ...((count===37 || count===38 || count===39 || count===40) &&{color:'#86442d'})}}/></IconButton>
                
      </Stack>

    </Box>
    )
}


export default BodyOneTwo