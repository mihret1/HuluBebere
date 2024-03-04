import { Box, Stack } from "@mui/material"
import { Link } from "react-router-dom"
import s1 from '../../assets/bodyeight/p1.jpg'
import s2 from '../../assets/bodyeight/p2.jpg'
import s3 from '../../assets/bodyeight/p3.jpg'
import s4 from '../../assets/bodyeight/p4.jpg'
import s5 from '../../assets/bodyeight/p5.jpg'
import s6 from '../../assets/bodyeight/p6.jpg'


import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



const BodyEightThree=()=>{

    const Cardd=(props)=>{
        return(

            <Box  sx={{backgroundColor:'white', height:270,width:170,boxShadow:0.1, borderRadius:2,"&:hover":{boxShadow:8,}}}>
              <Link to={props.linke} style={{ textDecoration:'none',color:'black' }}>
                 <img src={props.imge} style={{ height:156,width:170,borderRadius:2 }}/>
                 <Box ml={1} mt={2} mr={1}>
                  <p style={{ marginTop:2.2 ,marginBottom:2.2}}>{props.title}</p>
                  <b style={{ marginTop:2.3 }}>{props.price}</b>
                  <p style={{ textDecoration:'line-through' ,marginTop:2.3}}>{props.rejectPrice}</p>
                  <span style={{color:'#86442d', backgroundColor:'#f6d9d9',padding:3.5,position:'relative',bottom:248,left:113 }}>-38% {props.percent}</span>
                 </Box>

               </Link>            
            </Box>

        )
    }
    return(
        <Stack  pb={1} sx={{ backgroundColor:'white',boxShadow:5,borderRadius:2}}>
                  
             <Stack direction='row' mb={1} pl={3} pr={3} justifyContent='space-between'  alignItems='center'sx={{ height:50, backgroundColor:'#86442d' }}>
                
                
                <h3 style={{ color:'white' }}>Computing Deals</h3>
                <Link style={{ textDecoration:'none',position:'relative', color:'white'}}> SEE ALL <ArrowForwardIosIcon sx={{fontSize:16,top:5,position:'relative',top:2}}/> </Link>

             </Stack>
             <Stack direction='row' justifyContent='space-between'>
              
              <Cardd 
                    linke='/detail'
                    color='red'
                    imge={s1}
                    title='three....'
                    price='APP KSh 4,500'
                    rejectPrice='Ksh 2909- ksh-890'


                    />
                     <Cardd 
                    linke='/detail'
                    imge={s2}
                    title='three....'
                    price='APP KSh 4,500'
                    rejectPrice='Ksh 2909- ksh-890'

                    
                    />
                     <Cardd 
                    linke='/detail'
                    imge={s3}
                    title='three....'
                    price='APP KSh 4,500'
                    rejectPrice='Ksh 2909- ksh-890'

                    
                    />
                     <Cardd 
                    linke='/detail'
                    imge={s4}
                    title='three....'
                    price='APP KSh 4,500'
                    rejectPrice='Ksh 2909- ksh-890'

                    
                    />
                     <Cardd 
                    linke='/detail'
                    imge={s5}
                    title='three....'
                    price='APP KSh 4,500'
                    rejectPrice='Ksh 2909- ksh-890'

                    
                    />
                     <Cardd 
                    linke='/detail'
                    imge={s6}
                    title='three....'
                    price='APP KSh 4,500'
                    rejectPrice='Ksh 2909- ksh-890'

                    
                    />

             </Stack>

        </Stack>
    )
}

export default BodyEightThree


