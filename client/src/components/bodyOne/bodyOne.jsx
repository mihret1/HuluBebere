
import {Stack,Box, Button, ButtonBase} from '@mui/material'
import {Link} from 'react-router-dom'
import ShopOutlinedIcon from '@mui/icons-material/ShopOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import CoffeeMakerOutlinedIcon from '@mui/icons-material/CoffeeMakerOutlined';
import VaccinesOutlinedIcon from '@mui/icons-material/VaccinesOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import img1 from '../../assets/bodyone/img1.jpg'


import BodyOneTwo from './bodyOne_two';
import BodyOneThree from './bodyOne_three';

const BodyOne=()=>{
    return(
    <Stack direction='row' spacing={4} pl={11} pr={11} pt={3} sx={{ height:425 }}>
         <Stack p={2} spacing={1.3} sx={{ width:185,backgroundColor:'white',borderRadius:1 }}>
            <Link to='/posts' style={{  textDecoration:'none',}}>
              <ButtonBase  sx={{  color:'black',
                                 paddingRight:9,
                                ":hover": {
                            color: "#a84119"
                            },
                             }}><ShopOutlinedIcon /> Official storee </ButtonBase>
            </Link> 

            <Link style={{ textDecoration:'none' }}>
              <ButtonBase sx={{ color:'black',
                           ":hover": {
                            color: "#994827"
                            },
                            paddingRight:9,

                             }}><ShopOutlinedIcon /> Official store</ButtonBase>
            </Link>
            <Link style={{ textDecoration:'none' }}>
              <ButtonBase sx={{ color:'black',":hover": {
                            color: "#994827"
                            } ,paddingRight:9,
                          }}><ShopOutlinedIcon /> Official store</ButtonBase>
            </Link>
            <Link style={{ textDecoration:'none' }}>
              <ButtonBase sx={{ color:'black',paddingRight:9,":hover": {
                            color: "#994827"
                            } }}><ShopOutlinedIcon /> Official store</ButtonBase>
            </Link>
            <Link to='/posts' style={{ textDecoration:'none' }}>
              <ButtonBase sx={{ color:'black' ,paddingRight:9,":hover": {
                            color: "#994827"
                            }}}><ShopOutlinedIcon /> Official store </ButtonBase>
            </Link> 
            <Link style={{ textDecoration:'none' }}>
              <ButtonBase sx={{ color:'black',paddingRight:9,":hover": {
                            color: "#994827"
                            } }}><ShopOutlinedIcon /> Official store</ButtonBase>
            </Link>
            <Link style={{ textDecoration:'none' }}>
              <ButtonBase sx={{ color:'black',paddingRight:9,":hover": {
                            color: "#994827"
                            } }}><ShopOutlinedIcon /> Official store</ButtonBase>
            </Link>
            <Link style={{ textDecoration:'none' }}>
              <ButtonBase sx={{ color:'black' ,paddingRight:9,":hover": {
                            color: "#994827"
                            }}}><ShopOutlinedIcon /> Official store</ButtonBase>
            </Link>
            <Link to='/posts' style={{ textDecoration:'none' }}>
              <ButtonBase sx={{ color:'black' ,paddingRight:9,":hover": {
                            color: "#994827"
                            }}}><ShopOutlinedIcon /> Official store </ButtonBase>
            </Link> 
            <Link style={{ textDecoration:'none' }}>
              <ButtonBase sx={{ color:'black',paddingRight:9,":hover": {
                            color: "#994827"
                            } }}><ShopOutlinedIcon /> Official store</ButtonBase>
            </Link>
            <Link style={{ textDecoration:'none' }}>
              <ButtonBase sx={{ color:'black',paddingRight:9,":hover": {
                            color: "#994827"
                            } }}><ShopOutlinedIcon /> Official store</ButtonBase>
            </Link>
            <Link style={{ textDecoration:'none' }}>
              <ButtonBase sx={{ color:'black',paddingRight:9,":hover": {
                            color: "#994827"
                            } }}><ShopOutlinedIcon /> Official store</ButtonBase>
            </Link>
        

         </Stack>
         
         <Box><BodyOneTwo /> </Box>
         <Box><BodyOneThree /></Box>
    </Stack>
    )
}

export default BodyOne

