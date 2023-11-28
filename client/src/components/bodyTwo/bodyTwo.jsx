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
            <Box sx={{ width:128,height:160,display:'grid',placeItems:'center' }}>
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
                        <Componet   imgg={img1}
                            title='sangraina marta'
                            linkk='/detail' />
                        <Componet   imgg={img1}
                           title='sangraina marta'
                           linkk='/detail' />
                        <Componet   imgg={img1}
                            title='sangraina marta'
                            linkk='/detail' />
                        <Componet   imgg={img1}
                            title='sangraina marta'
                            linkk='/detail' />
                        <Componet   imgg={img1}
                            title='sangraina marta'
                            linkk='/detail' />
                        <Componet   imgg={img1}
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
                        <Componet   imgg={img2}
                            title='sangraina marta'
                            linkk='/detail' />
                        <Componet   imgg={img1}
                           title='sangraina marta'
                           linkk='/detail' />
                        <Componet   imgg={img1}
                            title='sangraina marta'
                            linkk='/detail' />
                        <Componet   imgg={img1}
                            title='sangraina marta'
                            linkk='/detail' />
                        <Componet   imgg={img1}
                            title='sangraina marta'
                            linkk='/detail' />
                        <Componet   imgg={img1}
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

    return(

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
    )
}

export default BodyTwo
