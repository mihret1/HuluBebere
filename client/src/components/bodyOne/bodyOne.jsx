
import {Stack,Box, Button, ButtonBase} from '@mui/material'
import {Link} from 'react-router-dom'
import ShopOutlinedIcon from '@mui/icons-material/ShopOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import CoffeeMakerOutlinedIcon from '@mui/icons-material/CoffeeMakerOutlined';
import VaccinesOutlinedIcon from '@mui/icons-material/VaccinesOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';


import BodyOneTwo from './bodyOne_two';

const BodyOne=()=>{
    return(
    <Stack direction='row' spacing={5} pl={11} pr={11} pt={5} sx={{  }}>
         <Stack p={2} spacing={1.5} sx={{ width:185,backgroundColor:'white',borderRadius:1 }}>
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
         
         <Box>part two:<BodyOneTwo /></Box>
         <Box>part three</Box>
    </Stack>
    )
}

export default BodyOne
