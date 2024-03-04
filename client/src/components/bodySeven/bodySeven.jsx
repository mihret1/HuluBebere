import s1 from '../../assets/bodySeven/s1.jpg'
import s2 from '../../assets/bodySeven/s2.jpg'
import s3 from '../../assets/bodySeven/s3.jpg'
import s4 from '../../assets/bodySeven/s4.jpg'
import s5 from '../../assets/bodySeven/s5.jpg'
import s6 from '../../assets/bodySeven/s6.jpg'


import { Stack,Box } from '@mui/material'
import React from 'react'
import bodySeven from './bodySeven.css'

function BodySeven() {
    const Cardd=(props)=>{
        return(
            <Stack  justifyContent='flex-end' sx={{ height:260, width:200 ,backgroundImage:`url(${props.img})`  }}>
               <Stack justifyContent='center' className='lower' sx={{ height:80, }}>
                   <span style={{ fontWeight:'bolder', fontSize:22, color:'white', paddingLeft:'20%' }}>{props.h}</span>
               </Stack>
            </Stack>
        )
    }
  return (

      <Stack spacing={1}  sx={{ backgroundColor:'white' ,borderRadius:2, boxShadow:3}}>
        <Box sx={{ height:55, backgroundColor:'red', borderStartStartRadius:5 }}>
            <h2 style={{ textAlign:'center' }}>Top Rated</h2>
        </Box>

        <Stack px={1.3} pb={1.3} direction='row' spacing={1} justifyContent='space-between'>
            
         <Cardd img={s1}  h='Smartphones'/>
         <Cardd img={s2}  h='Fridges'/>
         <Cardd img={s3}  h='Cookers'/>
         <Cardd img={s4}  h='microwaves'/>
         <Cardd img={s5}  h='washer and dryer'/>
         <Cardd img={s6}  h='Smart Tv'/>

        </Stack>
     
      </Stack>




  )
}

export default BodySeven