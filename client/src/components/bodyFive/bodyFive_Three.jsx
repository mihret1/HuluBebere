import { Box,  Stack ,Typography} from "@mui/material"
import { Link } from "react-router-dom"

import img1 from '../../assets/bodysix/a1.jpg'
import img2 from '../../assets/bodysix/a2.jpg'
import img3 from '../../assets/bodysix/a3.jpg'
import img4 from '../../assets/bodysix/a4.jpg'
import img5 from '../../assets/bodysix/a5.jpg'



const BodyFive_Three=()=>{
    const imgs=[img1,img2,img3,img4,img5]
   
    return(
        <Stack  sx={{ backgroundColor:'white' }}>
            <Box sx={{ height:60, backgroundColor:'#c4def6',borderRadius:1 }}> 
            <h2 style={{ textAlign:'center',}}> Shop By Brand</h2>
            </Box>
            <Stack direction='row' p={1.5} pb={0.7} justifyContent='space-between' >
               
               <Link to='/' style={{ textDecoration:'none',color:'black',  }}> 
                      <Box sx={{ "&:hover":{boxShadow:8,},borderRadius:5 ,width:191,height:180,boxShadow:1}}>
                        <Box 
                        sx={{ 
                            backgroundImage:`url(${img1})`,
                            height:100,
                            opacity:0.8,
                            backgroundColor:'black'                          
                        }}>
                        <h1 style={{ textAlign:'center',paddingTop:30,fontWeight:'bold'}}>45% off</h1>
                        </Box>
                        
                        <h3 style={{ textAlign:'center',padding:1,}}>shampo of the week</h3>
                      </Box>
               </Link>
               <Link to='/' style={{ textDecoration:'none',color:'black',  }}> 
                      <Box sx={{ "&:hover":{boxShadow:8,},borderRadius:5 ,width:191,height:180,boxShadow:1}}>
                        <Box 
                        sx={{ 
                            backgroundImage:`url(${img2})`,
                            height:100,
                            opacity:0.8,
                            backgroundColor:'black'                          
                        }}>
                        <h1 style={{ textAlign:'center',paddingTop:30,fontWeight:'bold'}}>45% off</h1>
                        </Box>
                        
                        <h3 style={{ textAlign:'center',padding:1,}}>lotion of the week</h3>
                      </Box>
               </Link>
                <Link to='/' style={{ textDecoration:'none',color:'black',  }}> 
                      <Box sx={{ "&:hover":{boxShadow:8,},borderRadius:5 ,width:191,height:180,boxShadow:1}}>
                        <Box 
                        sx={{ 
                            backgroundImage:`url(${img3})`,
                            height:100,
                            opacity:0.8,
                            backgroundColor:'black'                          
                        }}>
                        <h1 style={{ textAlign:'center',paddingTop:30,fontWeight:'bold'}}>85% off</h1>
                        </Box>
                        
                        <h3 style={{ textAlign:'center',padding:1,}}>perfurm of the week</h3>
                      </Box>
               </Link>
                <Link to='/' style={{ textDecoration:'none',color:'black',  }}> 
                      <Box sx={{ "&:hover":{boxShadow:8,},borderRadius:5 ,width:191,height:180,boxShadow:1}}>
                        <Box 
                        sx={{ 
                            backgroundImage:`url(${img4})`,
                            height:100,
                            opacity:0.8,
                            backgroundColor:'black'                          
                        }}>
                        <h1 style={{ textAlign:'center',paddingTop:30,fontWeight:'bold'}}>10% off</h1>
                        </Box>
                        
                        <h3 style={{ textAlign:'center',padding:1,}}>oil of the week</h3>
                      </Box>
               </Link>
                <Link to='/' style={{ textDecoration:'none',color:'black',  }}> 
                      <Box sx={{ "&:hover":{boxShadow:8,},borderRadius:5 ,width:191,height:180,boxShadow:1}}>
                        <Box 
                        sx={{ 
                            backgroundImage:`url(${img5})`,
                            height:100,
                            opacity:0.8,
                            backgroundColor:'black'                          
                        }}>
                        <h1 style={{ textAlign:'center',paddingTop:30,fontWeight:'bold'}}>18% off</h1>
                        </Box>
                        
                        <h3 style={{ textAlign:'center',padding:1,}}>chapstick of the week</h3>
                      </Box>
               </Link>

            </Stack>
         
        </Stack>
    )
}

export default BodyFive_Three