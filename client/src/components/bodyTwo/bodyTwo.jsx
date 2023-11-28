import {TransitionGroup,CSSTransition} from 'react-transition-group'
import {Box, Button, Stack} from '@mui/material'
import { useState } from 'react'
import ButtonBase from '@mui/material'
import {Link} from 'react-router-dom'
import img1 from '../../assets/bodyone/img1.jpg'


const BodyTwo=()=>{
    const [counter,setCounter]=useState(1)
    const Componet=(props)=>{
        return(
            <Box sx={{ width:130,height:160,display:'grid',placeItems:'center' }}>
            <Link 
               style={{ textDecoration:'none', color:'black' }}
               to={props.linkk}>
               <img src={props.imgg} style={{ width:129,height:133,borderRadius:'10px' }}/>
                <p style={{ marginTop:0,textAlign:'center',fontFamily:'monospace',fontSize:'larger' }}>{props.title}</p>
            
            </Link>
            </Box>
        )
    }

    const Com1=()=>{
        return(
            <Stack direction='row' spacing={1}>
                        <Componet   imgg={img1}
                            title='sangraina marta'
                            linkk='/detail' />
                        <Componet   imgg={img1}
                           title='sangraina marta'
                           linkk='/detail' />
                        <Componet   imgg={img1}
                            title='sangraina marta'
                            linkk='/detail' />
                        <Componet   imgg={img1}
                            title='sangraina marta'
                            linkk='/detail' />
                        <Componet   imgg={img1}
                            title='sangraina marta'
                            linkk='/detail' />
                        <Componet   imgg={img1}
                            title='sangraina marta'
                            linkk='/detail' />
                        <Componet   imgg={img1}
                            title='sangraina marta'
                            linkk='/detail' />
                        <Componet   imgg={img1}
                            title='sangraina marta'
                            linkk='/detail' />
            </Stack>
        )
    }

    return(

        <Box>
            <Com1    />
        </Box>
    )
}

export default BodyTwo
