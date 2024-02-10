import {TransitionGroup,CSSTransition} from 'react-transition-group'
import {Box, Button, Stack} from '@mui/material'
import { useState } from 'react'
// import ButtonBase from '@mui/material'
import {Link} from 'react-router-dom'
import { ButtonBase } from "@material-ui/core";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import img1 from '../../assets/bodyone/img1.jpg'
import img2 from '../../assets/bodyone/img7.jpg'
import img3 from '../../assets/bodyone/img12.jpg'
import img4 from '../../assets/bodyone/img8.jpg'
import img5 from '../../assets/bodyone/img21.jpg'
import img6 from '../../assets/bodyone/img2.jpg'
import img7 from '../../assets/bodyone/img28.jpg'
import img8 from '../../assets/bodyone/img3.jpg'
import img9 from '../../assets/bodyone/img11.jpg'
import img10 from '../../assets/bodyone/img17.jpg'
import img12 from '../../assets/bodyone/img5.jpg'
import img13 from '../../assets/bodyone/img9.jpg'
import img14 from '../../assets/bodyone/img29.jpg'
import img11 from '../../assets/bodyone/img24.jpg'
import v1 from '../../assets/v1.jpg'
import v2 from '../../assets/v2.jpg'

import s1 from '../../assets/s1.jpg'
import s2 from '../../assets/s2.jpg'
import s3 from '../../assets/s3.jpg'
import s4 from '../../assets/s4.jpg'
import s5 from '../../assets/s5.jpg'
import s6 from '../../assets/s6.jpg'


const BodyTwo=()=>{
    const [counter,setCounter]=useState(1)

    const  handleLeftPress=()=>{
           setCounter((prev)=>prev-1)
           if(( counter===1 )){setCounter(1)}
     }
     
    const  handleRightPress=()=>{
      setCounter((prev)=>prev+1)
       if(counter ===2 ){setCounter(2)}
    }

    const Componet=(props)=>{
        return(
            <Box sx={{ width:128,height:180,display:'grid',placeItems:'center' ,":hover":{boxShadow:4},borderRadius:2}}>
            <Link 
               style={{ textDecoration:'none', color:'black' }}
               to={props.linkk}>
               <img src={props.imgg} style={{ width:128,height:133,borderRadius:'10px' }}/>
                <p style={{ marginTop:0,textAlign:'center',fontFamily:'monospace',fontSize:'larger' }}>{props.title}</p>
            
            </Link>
            </Box>
        )
    }

    const Com1=()=>{
        return(
            <Stack direction='row' spacing={1}>
                        <Componet   imgg={img9}
                            title='sangraina marta'
                            linkk='/detail' />
                        <Componet   imgg={img10}
                           title='sangraina marta'
                           linkk='/detail' />
                        <Componet   imgg={img11}
                            title='sangraina marta'
                            linkk='/detail' />
                        <Componet   imgg={img12}
                            title='sangraina marta'
                            linkk='/detail' />
                        <Componet   imgg={img13}
                            title='sangraina marta'
                            linkk='/detail' />
                        <Componet   imgg={img14}
                            title='sangraina marta'
                            linkk='/detail' />
                        <Componet   imgg={img1}
                            title='sangraina marta'
                            linkk='/detail' />
                        <Componet   imgg={img1}
                            title='sangraina marta'
                            linkk='/detail' />
            </Stack>
        )
    }
    const Com2=()=>{
        return(
            <Stack direction='row' spacing={1}>
                        <Componet   imgg={img1}
                            title='sangraina marta'
                            linkk='/detail' />
                        <Componet   imgg={img2}
                           title='sangraina marta'
                           linkk='/detail' />
                        <Componet   imgg={img3}
                            title='sangraina marta'
                            linkk='/detail' />
                        <Componet   imgg={img4}
                            title='sangraina marta'
                            linkk='/detail' />
                        <Componet   imgg={img5}
                            title='sangraina marta'
                            linkk='/detail' />
                        <Componet   imgg={img6}
                            title='sangraina marta'
                            linkk='/detail' />
                        <Componet   imgg={img7}
                            title='sangraina marta'
                            linkk='/detail' />
                        <Componet   imgg={img8}
                            title='sangraina marta'
                            linkk='/detail' />
            </Stack>
        )
    }



    const Cardd=(props)=>{
        return(
            <Box sx={{ height:240,width:163,borderRadius:2,":hover":{boxShadow:5}}}>
              <Link to={props.linke} style={{ textDecoration:'none',color:'black' }}>
                 <img src={props.imge} style={{ height:156,width:163,borderRadius:2 }}/>
                 <Box ml={1} mt={2}>
                  <p style={{ marginTop:2.2 ,marginBottom:2.2}}>{props.title}</p>
                  <b style={{ marginTop:2.3 }}>{props.price}</b>
                  <p style={{ textDecoration:'line-through' ,marginTop:2.3}}>{props.rejectPrice}</p>
                  <span style={{color:'#fa7a21', backgroundColor:'#f6d9d9',padding:3.5,position:'relative',bottom:248,left:113 }}>-38% {props.percent}</span>

                 </Box>
               </Link>
            </Box>
        )
    }
    return(
        <Stack spacing={2}>

          <Stack direction='row' spacing={1}  sx={{ backgroundColor:'white',borderRadius:2 }} p={1.3}>
             <ButtonBase   onClick={handleLeftPress} style={{ }} > <Box sx={{ borderRadius:50, width:37, height:37 ,backgroundColor:'#6b706e'}}>
                  <ArrowBackIosIcon
                  sx={{ marginTop:1.2,marginLeft:1 ,color:'white',fontSize:17}}
              />
            </Box>
            </ButtonBase>

            { counter===1 &&<Com1    />} { counter===2 &&<Com2    />}


           <ButtonBase onClick={handleRightPress} style={{ }} > <Box sx={{ borderRadius:50, width:40, height:40 ,backgroundColor:'#6b706e'}}>
              <ArrowForwardIosIcon
                sx={{ marginTop:1.2,marginLeft:0.7 ,color:'white',fontSize:17}}             />
             </Box>
           </ButtonBase>
          </Stack>

          <Box pl={2} sx={{ height:315,backgroundColor:'white'}}>
              <h2 style={{marginBottom:7 }}> Last Viewed</h2>
              <Link style={{ textDecoration:'none',color:'orange',position:'relative', left:1080 ,top:-30}}> SEE ALL <ArrowForwardIosIcon sx={{fontSize:20,top:5,position:'relative'}}/> </Link>
              <Stack direction='row' spacing={1}>
              <Cardd 
                    linke='/detail'
                     imge={v1}
                    title='FreePods 4 Active...'
                    price='APP KSh 4,500'
                    rejectPrice='Ksh 2909- ksh-890'/>
                     <Cardd 
                    linke='/detail'
                     imge={v2}
                    title='FreePods 4 Active...'
                    price='APP KSh 4,500'
                    rejectPrice='Ksh 2909- ksh-890'/>
                     <Cardd 
                    linke='/detail'
                     imge={img9}
                    title='FreePods 4 Active...'
                    price='APP KSh 4,500'
                    rejectPrice='Ksh 2909- ksh-890'/>
              </Stack>
            
          </Box>

          <Stack direction='row' spacing={1}  sx={{ backgroundColor:'white',borderRadius:2 }} p={1.3}>
             <ButtonBase   onClick={handleLeftPress} style={{ }} > <Box sx={{ borderRadius:50, width:37, height:37 ,backgroundColor:'#6b706e'}}>
                  <ArrowBackIosIcon
                  sx={{ marginTop:1.2,marginLeft:1 ,color:'white',fontSize:17}}
              />
            </Box>
            </ButtonBase>

            { counter===1 &&<Com1    />} { counter===2 &&<Com2    />}


           <ButtonBase onClick={handleRightPress} style={{ }} > <Box sx={{ borderRadius:50, width:40, height:40 ,backgroundColor:'#6b706e'}}>
              <ArrowForwardIosIcon
                sx={{ marginTop:1.2,marginLeft:0.7 ,color:'white',fontSize:17}}             />
         </Box>
           </ButtonBase>
          </Stack>

          <Box pl={2} sx={{ height:315,backgroundColor:'white'}}>
              <h2 style={{marginBottom:7 }}> <b>Last Searched </b>| shoes</h2>
              <Link style={{ textDecoration:'none',color:'orange',position:'relative', left:1080 ,top:-30}}> SEE ALL <ArrowForwardIosIcon sx={{fontSize:20,top:5,position:'relative'}}/> </Link>
              
              <Stack direction='row' spacing={3}>
              <Cardd 
                    linke='/detail'
                     imge={s1}
                    title='FreePods 4 Active...'
                    price='APP KSh 4,500'
                    rejectPrice='Ksh 2909- ksh-890'
                    />
                     <Cardd 
                    linke='/detail'
                     imge={s2}
                    title='FreePods 4 Active...'
                    price='APP KSh 4,500'
                    rejectPrice='Ksh 2909- ksh-890'/>
                     <Cardd 
                    linke='/detail'
                     imge={s3}
                    title='FreePods 4 Active...'
                    price='APP KSh 4,500'
                    rejectPrice='Ksh 2909- ksh-890'/>
                    <Cardd 
                    linke='/detail'
                     imge={s4}
                    title='FreePods 4 Active...'
                    price='APP KSh 4,500'
                    rejectPrice='Ksh 2909- ksh-890'/>
                     <Cardd 
                    linke='/detail'
                     imge={s5}
                    title='FreePods 4 Active...'
                    price='APP KSh 4,500'
                    rejectPrice='Ksh 2909- ksh-890'/>
                     <Cardd 
                    linke='/detail'
                     imge={s6}
                    title='FreePods 4 Active...'
                    price='APP KSh 4,500'
                    rejectPrice='Ksh 2909- ksh-890'/>
              </Stack>
            
          </Box>
      </Stack>
    )
}

export default BodyTwo
