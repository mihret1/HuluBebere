
import {Box, Stack, TextField,Button} from '@mui/material'
import { useEffect ,useState} from 'react'
import img1 from '../../assets/nav.gif'
import img3 from '../../assets/nav3.png'

import RestaurantIcon from '@mui/icons-material/Restaurant';
import LiquorIcon from '@mui/icons-material/Liquor';
import PaymentsIcon from '@mui/icons-material/Payments';
import StarsIcon from '@mui/icons-material/Stars';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import IconButton from '@mui/material/IconButton';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

import {Link} from 'react-router-dom'

const Navbar=()=>{
    const [count,setCount]=useState(1)
    const [search,setSearch]=useState('')
    
    useEffect(()=>{
        const interval=setInterval(()=>{
                setCount(count+1)
                if(count===3)setCount(1)
        },2000)
        return ()=>clearInterval(interval)
    },[count])


    return(
        
        <Box className='' sx={{ backgroundColor:'red'}}>
           
                             
                <Stack sx={{ backgroundColor:'#86442d',height:65 }}>
                    <h1 style={{  color:'white' ,fontSize:28}}>
                        FREE DELIVERY
                    </h1>
                </Stack>
                <Stack direction='row' spacing={40} ml={18} pt={1} sx={{ height:28}}>
                        
                    <StarsIcon /> sell on HuluBebere
                      <Stack direction='row' spacing={2}>
                         <LiquorIcon   />party
                         <RestaurantIcon /> food
                         <PaymentsIcon />pay
                         </Stack>
                </Stack>
                <Stack direction='row' sx={{ backgroundColor:'white',height:80,boxShadow:3 }} >
                 <Link to='/' style={{ textDecoration:'none' }}  >
                  <h1 style={{color:'black',marginLeft:40,fontSize:34,fontFamily:'fantasy'}}>HuleBebere <ShoppingCartIcon sx={{color:'#a84119',fontSize:40}}/></h1> 
                 </Link>
                 <Stack direction='row' pl={1} mt={3} sx={{ border:'1px solid',width:430,height:31,borderRadius:1 }}>
                 <SearchIcon sx={{paddingTop:0.5}}/>
                   <input 
                     type='text'
                     placeholder='Search products,brands and catagories'
                     onChange={(e)=>setSearch(e.target.value)}
                      style={{ border:'none',outline:'none',width:370 }}
                      value={search}

                    />
                    {search && <IconButton onClick={()=>setSearch('')}><ClearOutlinedIcon  sx={{paddingTop:0.3}}/></IconButton> }
                 </Stack>
                 <Stack direction='row' spacing={1}>
                   <Button variant='contained' sx={{ height:30,backgroundColor:'#a84119',width:78 }}>Search</Button>
                    <Button> <ManageAccountsOutlinedIcon /> Account<></> </Button>
                 </Stack>
                </Stack>
        
        
        </Box>
       
    )
}

export default Navbar