import { Box,  Stack ,Typography} from "@mui/material"
import { Link } from "react-router-dom"

import img1 from '../../assets/bodyFour/d1.jpg'
import img2 from '../../assets/bodyFour/d2.jpg'
import img3 from '../../assets/bodyFour/d3.jpg'
import img4 from '../../assets/bodyFour/d4.jpg'
import img5 from '../../assets/bodyFour/d5.jpg'
import img6 from '../../assets/bodyFour/d6.jpg'
import img7 from '../../assets/bodyFour/d7.jpg'
import img8 from '../../assets/bodyFour/d8.jpg'
import img9 from '../../assets/bodyFour/d9.jpg'
import img10 from '../../assets/bodyFour/d10.jpg'
import img11 from '../../assets/bodyFour/d11.jpg'
import img12 from '../../assets/bodyFour/d12.jpg'

const BodyFour=()=>{
    const imgs=[img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12]
   
    return(
        <Stack  sx={{ backgroundColor:'white' }}>
            <Box sx={{ height:60, backgroundColor:'#c4def6',borderRadius:1 }}> 
            <h2 style={{ textAlign:'center',}}> HuluBebere deal</h2>
            </Box>
            <Stack direction='row' spacing={2} p={1.5} pb={0.7}>
               
               {imgs.map((e,index)=>(
                 index <=5 && <Link to='/' style={{ textDecoration:'none',color:'white', }}> 
                      <Box sx={{ "&:hover":{boxShadow:8,},borderRadius:5 ,width:181,height:240}}> <img src={e} style={{width:186,height:240,borderRadius:5,  }}/></Box>
                 </Link>

               ))}
            </Stack>
            <Stack  direction='row' spacing={2} p={1.5} pt={0.7}>
            {imgs.map((e,index)=>(
                 index >=6 && <Link to='/' style={{ textDecoration:'none',color:'white', }}> 
                      <Box sx={{ "&:hover":{boxShadow:8,},borderRadius:5 ,width:181,height:240}}> <img src={e} style={{width:186,height:240,borderRadius:5,  }}/></Box>
                 </Link>

               ))}
            </Stack>
        </Stack>
    )
}

export default BodyFour