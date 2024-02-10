import { Box, Stack } from "@mui/material"
import { Link } from "react-router-dom"
import s1 from '../../assets/s1.jpg'
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const BodyThree=()=>{
    const [time,setTime]=useState(new Date())

    const Cardd=(props)=>{
        return(

            <Box  sx={{ height:270,width:163,borderRadius:2,":hover":{boxShadow:5}}}>
              <Link to={props.linke} style={{ textDecoration:'none',color:'black' }}>
                 <img src={props.imge} style={{ height:156,width:163,borderRadius:2 }}/>
                 <Box ml={1} mt={2} mr={1}>
                  <p style={{ marginTop:2.2 ,marginBottom:2.2}}>{props.title}</p>
                  <b style={{ marginTop:2.3 }}>{props.price}</b>
                  <p style={{ textDecoration:'line-through' ,marginTop:2.3}}>{props.rejectPrice}</p>
                  <Box sx={{ height:8,backgroundColor:'red',borderRadius:5 }}></Box>
                  <span style={{color:'#fa7a21', backgroundColor:'#f6d9d9',padding:3.5,position:'relative',bottom:248,left:113 }}>-38% {props.percent}</span>
                 </Box>

               </Link>            
            </Box>

        )
    }
    return(
        <Stack>
          Body Three        
             <Stack direction='row' pl={5} pr={5} justifyContent='space-between'  alignItems='center'sx={{ height:50, backgroundColor:'red' }}>
                
                
                <h2 style={{ color:'white' }}> <LoyaltyIcon sx={{color:'white', transform:'rotate(90deg)'}}/> Flash Sales</h2>
                <h3>Time Left :  08h : 24m : 47s  </h3>
                <Link style={{ textDecoration:'none',color:'white',position:'relative', }}> SEE ALL <ArrowForwardIosIcon sx={{fontSize:16,top:5,position:'relative',top:2}}/> </Link>

             </Stack>
             <Box></Box>
              
              <Cardd 
                    linke='/detail'
                    imge={s1}
                    title='three....'
                    price='APP KSh 4,500'
                    rejectPrice='Ksh 2909- ksh-890'

                    />

        </Stack>
    )
}

export default BodyThree


