
import {Stack,Box, Button, ButtonBase} from '@mui/material'
import {Link} from 'react-router-dom'
import ShopOutlinedIcon from '@mui/icons-material/ShopOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import CoffeeMakerOutlinedIcon from '@mui/icons-material/CoffeeMakerOutlined';
import VaccinesOutlinedIcon from '@mui/icons-material/VaccinesOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import img1 from '../../assets/bodyone/img1.jpg'
import { useState } from 'react';

import BodyOneTwo from './bodyOne_two';
import BodyOneThree from './bodyOne_three';

const BodyOne=()=>{
     const [hoverEffect,setHoverEffect]=useState(0)
    const [isShown,setIsShown]=useState(false)


    const mouseEnterr=(val)=>{
      setIsShown(true)
      setHoverEffect(val)
    }

    return(
    <Stack direction='row' spacing={2} pl={10} pr={5} pt={3} sx={{ height:425 }}>
         <Stack p={2} spacing={1.3} sx={{ width:185,backgroundColor:'white',borderRadius:1 }}>
            <Link to='/posts' style={{  textDecoration:'none',}}>
              <ButtonBase  onMouseEnter={()=>mouseEnterr(1)} onMouseLeave={() => setIsShown(false)}
                sx={{  color:'black',
                                 paddingRight:9,
                                 ":hover": {
                                    color: "#a84119"
                                         },
                             }}><ShopOutlinedIcon /> Official storee 
              </ButtonBase>
            </Link> 

            <Link style={{ textDecoration:'none' }}>
              <ButtonBase onMouseEnter={()=>mouseEnterr(2)} onMouseLeave={() => setIsShown(false)}
              sx={{ color:'black',
                           ":hover": {
                            color: "#994827"
                            },
                            paddingRight:9,

                             }}><ShopOutlinedIcon /> Official store</ButtonBase>
            </Link>
            <Link style={{ textDecoration:'none' }}>
              <ButtonBase  onMouseEnter={()=>mouseEnterr(3)} onMouseLeave={() => setIsShown(false)}
              sx={{ color:'black',":hover": {
                            color: "#994827"
                            } ,paddingRight:9,
                          }}><ShopOutlinedIcon /> Official store</ButtonBase>
            </Link>
            <Link style={{ textDecoration:'none' }}>
              <ButtonBase  onMouseEnter={()=>mouseEnterr(4)} onMouseLeave={() => setIsShown(false)}
              sx={{ color:'black',paddingRight:9,":hover": {
                            color: "#994827"
                            } }}><ShopOutlinedIcon /> Official store</ButtonBase>
            </Link>
            <Link to='/posts' style={{ textDecoration:'none' }}>
              <ButtonBase onMouseEnter={()=>mouseEnterr(5)} onMouseLeave={() => setIsShown(false)}
              sx={{ color:'black' ,paddingRight:9,":hover": {
                            color: "#994827"
                            }}}><ShopOutlinedIcon /> Official store </ButtonBase>
            </Link> 
            <Link style={{ textDecoration:'none' }}>
              <ButtonBase onMouseEnter={()=>mouseEnterr(6)} onMouseLeave={() => setIsShown(false)}
              sx={{ color:'black',paddingRight:9,":hover": {
                            color: "#994827"
                            } }}><ShopOutlinedIcon /> Official store</ButtonBase>
            </Link>
            <Link style={{ textDecoration:'none' }}>
              <ButtonBase onMouseEnter={()=>mouseEnterr(7)} onMouseLeave={() => setIsShown(false)}
              sx={{ color:'black',paddingRight:9,":hover": {
                            color: "#994827"
                            } }}><ShopOutlinedIcon /> Official store</ButtonBase>
            </Link>
            <Link style={{ textDecoration:'none' }}>
              <ButtonBase onMouseEnter={()=>mouseEnterr(8)} onMouseLeave={() => setIsShown(false)}
              sx={{ color:'black' ,paddingRight:9,":hover": {
                            color: "#994827"
                            }}}><ShopOutlinedIcon /> Official store</ButtonBase>
            </Link>
            <Link to='/posts' style={{ textDecoration:'none' }}>
              <ButtonBase onMouseEnter={()=>mouseEnterr(9)} onMouseLeave={() => setIsShown(false)}
              sx={{ color:'black' ,paddingRight:9,":hover": {
                            color: "#994827"
                            }}}><ShopOutlinedIcon /> Official store </ButtonBase>
            </Link> 
            <Link style={{ textDecoration:'none' }}>
              <ButtonBase onMouseEnter={()=>mouseEnterr(10)} onMouseLeave={() => setIsShown(false)}
              sx={{ color:'black',paddingRight:9,":hover": {
                            color: "#994827"
                            } }}><ShopOutlinedIcon /> Official store</ButtonBase>
            </Link>
            <Link style={{ textDecoration:'none' }}>
              <ButtonBase onMouseEnter={()=>mouseEnterr(11)} onMouseLeave={() => setIsShown(false)}
              sx={{ color:'black',paddingRight:9,":hover": {
                            color: "#994827"
                            } }}><ShopOutlinedIcon /> Official store</ButtonBase>
            </Link>
            <Link style={{ textDecoration:'none' }}>
              <ButtonBase onMouseEnter={()=>mouseEnterr(12)} onMouseLeave={() => setIsShown(false)}
              sx={{ color:'black',paddingRight:9,":hover": {
                            color: "#994827"
                            } }}><ShopOutlinedIcon /> Official store</ButtonBase>
            </Link>
        

         </Stack>
         
         <Box>

               <BodyOneTwo 
                 hoverEffect={hoverEffect} 
                 isShown={isShown}
               /> 


          </Box>
         <Box><BodyOneThree /></Box>

         {/* <Box>  {`${isShown} and ${hoverEffect}`}</Box> */}
    </Stack>
    
    )
}

export default BodyOne

