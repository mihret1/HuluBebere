import { Stack ,Box} from '@mui/material'
import React from 'react'
import s1 from '../../assets/nin/f1.jpg'
import s2 from '../../assets/nin/f2.jpg'
import s3 from '../../assets/nin/f3.jpg'
import s4 from '../../assets/nin/f4.jpg'
import s5 from '../../assets/nin/f5.jpg'
import s6 from '../../assets/nin/f6.jpg'
import s7 from '../../assets/nin/f7.png'
import s8 from '../../assets/nin/f8.png'
import s9 from '../../assets/nin/f9.jpg'
import s10 from '../../assets/nin/f10.jpg'
import s11 from '../../assets/nin/f11.jpg'
import s12 from '../../assets/nin/f12.png'
import { Link } from "react-router-dom"

function BodyNine() {
  return (
    <Stack spacing={1} bgcolor='white'>
          <Box sx={{ height:55, backgroundColor:'red' }}>
            <h2 style={{ textAlign:'center' }}>Official Store</h2>
          </Box>
          <Stack px={2} direction='row' justifyContent='space-between'> 
             <Box sx={{ "&:hover":{boxShadow:7} }}>  
              <Link to='/'><img src={s1} style={{width:190  }}/></Link>
            </Box> 
            <Box sx={{ "&:hover":{boxShadow:7} }}>  
              <Link to='/'><img src={s2} style={{width:190  }}/></Link>
            </Box>             
            <Box sx={{ "&:hover":{boxShadow:7} }}>  
              <Link to='/'><img src={s3} style={{width:190  }}/></Link>
            </Box>            
            <Box sx={{ "&:hover":{boxShadow:7} }}>  
              <Link to='/'><img src={s4} style={{width:190  }}/></Link>
            </Box> 
            <Box sx={{ "&:hover":{boxShadow:7} }}>  
              <Link to='/'><img src={s5} style={{width:190  }}/></Link>
            </Box>
            <Box sx={{ "&:hover":{boxShadow:7} }}>  
              <Link to='/'><img src={s6} style={{width:190  }}/></Link>
            </Box>  
          </Stack>
          <Stack px={2} direction='row' justifyContent='space-between'> 
             <Box sx={{ "&:hover":{boxShadow:7} }}>  
              <Link to='/'><img src={s7} style={{width:190  }}/></Link>
            </Box> 
            <Box sx={{ "&:hover":{boxShadow:7} }}>  
              <Link to='/'><img src={s8} style={{width:190  }}/></Link>
            </Box>             
            <Box sx={{ "&:hover":{boxShadow:7} }}>  
              <Link to='/'><img src={s9} style={{width:190  }}/></Link>
            </Box>            
            <Box sx={{ "&:hover":{boxShadow:7} }}>  
              <Link to='/'><img src={s10} style={{width:190  }}/></Link>
            </Box> 
            <Box sx={{ "&:hover":{boxShadow:7} }}>  
              <Link to='/'><img src={s11} style={{width:190  }}/></Link>
            </Box>
            <Box sx={{ "&:hover":{boxShadow:7} }}>  
              <Link to='/'><img src={s12} style={{width:190  }}/></Link>
            </Box>  
          </Stack>
    </Stack>
  )
}

export default  BodyNine