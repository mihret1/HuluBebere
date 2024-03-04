


import { Stack,Box } from '@mui/material'
import React from 'react'
import imge from '.././../assets/bodyeight/i1.jpg'

function BodyEightFour() {
   
  return (

      <Stack   sx={{ backgroundColor:'white' ,borderRadius:2, boxShadow:3}}>
        <Box sx={{ height:55, backgroundColor:'orange', borderStartStartRadius:5 }}>
            <h2 style={{ textAlign:'center' }}>Wednesday 10AM</h2>
        </Box>
        <img src={imge}/>
     
     
      </Stack>




  )
}

export default BodyEightFour