import s1 from '../../assets/bodyten/c1.jpg'
import s2 from '../../assets/bodyten/c2.jpg'
import s3 from '../../assets/bodyten/c3.png'
import s4 from '../../assets/bodyten/c4.jpg'
import s5 from '../../assets/bodyten/c5.jpg'
import s6 from '../../assets/bodyten/c6.jpg'


import { Stack,Box } from '@mui/material'
import React from 'react'
import bodySeven from '../bodySeven/bodySeven.css'

function BodyTen() {
    const Cardd=(props)=>{
        return(
            <Stack  justifyContent='flex-end' sx={{borderRadius:3, height:250, width:190 ,backgroundImage:`url(${props.img})`  }}>
               <Stack justifyContent='center' className='lower' sx={{ height:40, borderBottomLeftRadius:4,borderBottomRightRadius :4}}>
                   <span style={{ fontWeight:'bolder', fontSize:20, color:'white', paddingLeft:'20%' }}>{props.h}</span>
               </Stack>
            </Stack>
        )
    }
  return (

      <Stack spacing={1}  sx={{ backgroundColor:'white' ,borderRadius:2, boxShadow:3}}>
        <Box sx={{ height:55, backgroundColor:'#ff6900', borderStartStartRadius:5 }}>
            <h2 style={{ textAlign:'center' }}>HuluBebere Fashion</h2>
        </Box>

        <Stack px={1.3} pb={1.3} direction='row' spacing={1} justifyContent='space-between'>
            
         <Cardd img={s1}  h='Men`s Fashion'/>
         <Cardd img={s2}  h='Women`s Clothing'/>
         <Cardd img={s3}  h='Hands bag and Wallets'/>
         <Cardd img={s4}  h='Mens`s sneaker'/>
         <Cardd img={s5}  h='Kid`s Fashion'/>
         <Cardd img={s6}  h='Womens sneaker'/>

        </Stack>
     
      </Stack>




  )
}

export default BodyTen