
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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AddCardIcon from '@mui/icons-material/AddCard';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {Link} from 'react-router-dom'
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Navbar=()=>{
    const [count,setCount]=useState(1)
    const [search,setSearch]=useState('')
    const [anchorEl,setAnchorEl] = useState(null);
    const [anchorEH,setAnchorEH] = useState(null);
    const [acolor,setAcolor]=useState(false)
    const [hcolor,setHcolor]=useState(false)

    const openA = Boolean(anchorEl);
    const openH = Boolean(anchorEH);

    const closeA=()=>{
    setAnchorEl(null)
    setAcolor(false)
    }
    const closeH=()=>{
    setAnchorEH(null)
    setHcolor(false)
    }
    useEffect(()=>{
        const interval=setInterval(()=>{
                setCount(count+1)
                if(count===3)setCount(1)
        },2000)
        return ()=>clearInterval(interval)
    },[count])

    const handleAccountClick=(e)=>{
        setAnchorEl(e.currentTarget)
        setAcolor(true)
        
    }
    const handleHelpClick=(e)=>{
        setAnchorEH(e.currentTarget)
        setHcolor(true)
        
    }


    return(
        
        <Box className=''>
           
                             
                <Stack sx={{ backgroundColor:'#86442d',height:65 }}>
                    <h1 style={{  color:'white' ,fontSize:28}}>
                        FREE DELIVERY
                    </h1>
                </Stack>
                <Stack direction='row' spacing={40} ml={18} pt={1} sx={{ height:28}}>                        
                      <StarsIcon /> 
                      sell on HuluBebere
                      <Stack direction='row' spacing={2}>
                         <LiquorIcon   />party
                         <RestaurantIcon /> food
                         <PaymentsIcon />pay
                        </Stack>
                 </Stack>

                <Stack  className='realNav' direction='row' sx={{ backgroundColor:'white',height:80,boxShadow:3 }} >
                 
                 <Link to='/' style={{ textDecoration:'none' }}  >
                  <h1 style={{color:'black',marginLeft:40,fontSize:34,fontFamily:'fantasy'}}>HuleBebere <ShoppingCartIcon sx={{color:'#a84119',fontSize:40}}/></h1> 
                 </Link>

                 <Stack className='searchInput' direction='row' pl={1} mt={3.3} ml={12} sx={{ border:'1px solid',width:430,height:36,borderRadius:1 }}>
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

                 <Stack className='navInfo' direction='row' spacing={1} mt={3.4} ml={1} >
                   <Button variant='contained'
                    sx={{ ":hover": {
                            backgroundColor: "#a84119"
                            },
                             height:34.3,backgroundColor:'#a84119',width:78 }}>
                        Search
                  </Button>
                   
                  <Button  sx={{ 
                           ...(acolor ===true &&{
                            backgroundColor:'grey'
                           }),
                            color:'black',                 
                           ":hover": {
                            color: "#a84119"
                                   },
                            height:36       
                                }} 

                       onClick={handleAccountClick}> <ManageAccountsOutlinedIcon /> Account <KeyboardArrowDownOutlinedIcon />
                    </Button>
                     <Menu
                        anchorEl={anchorEl}
                        open={openA}
                        onClose={closeA}>

                        <MenuItem onClick={()=>{}}>
                            <Box sx={{ height:55 ,borderBottom:1,width:160}}>
                                <Button sx={{ ":hover": {
                                       backgroundColor: "#a84119"
                                   },backgroundColor:'#a84119',width:135,marginLeft:1.5,color:'white' }}>Sign In</Button>
                            </Box>
                        </MenuItem>
                        <MenuItem onClick={()=>{}}><PersonOutlineOutlinedIcon sx={{marginRight:1}}/> My account</MenuItem>
                        <MenuItem onClick={()=>{}}><AddCardIcon sx={{marginRight:1}}/> Orders</MenuItem>
                        <MenuItem onClick={()=>{}}><FavoriteBorderOutlinedIcon sx={{marginRight:1}}/> Saved Items</MenuItem>

                     </Menu>


                     <Button  sx={{ 
                           ...(hcolor ===true &&{
                            backgroundColor:'grey'
                           }),
                            color:'black',                 
                           ":hover": {
                            color: "#a84119"
                                   },
                            height:36       
                                }} 

                       onClick={handleHelpClick}> <HelpOutlineOutlinedIcon /> Help {hcolor ?<KeyboardArrowUpOutlinedIcon/> : <KeyboardArrowDownOutlinedIcon />}
                    </Button>
                     <Menu
                        anchorEl={anchorEH}
                        open={openH}
                        onClose={closeH}>

                       
                        <MenuItem onClick={()=>{}}> Help Center</MenuItem>
                        <MenuItem onClick={()=>{}}> Place an Order</MenuItem>
                        <MenuItem onClick={()=>{}}> Track Your Order</MenuItem>
                        <MenuItem onClick={()=>{}}> Order Cancellation</MenuItem>
                        <MenuItem onClick={()=>{}}> Returns & Refunds</MenuItem>
                        <MenuItem onClick={()=>{}}>Payment & Hulubebere Account</MenuItem>
                        <MenuItem onClick={()=>{}}>
                            <Box sx={{ borderTop:1,width:250 }}>
                                <Button sx={{ backgroundColor:'#a84119',width:145,marginLeft:5,color:'white' ,marginTop:1,
                                ":hover": {
                                       backgroundColor: "#a84119"
                                   }
                                   }}><SmsOutlinedIcon sx={{marginRight:1}}/> LIVE CHAT</Button></Box>
                        </MenuItem>
                     </Menu>

                     <Link to='/' style={{ textDecoration:'none'}}>
                         <Button sx={{ color:'black',fontSize:17,fontFamily:'sans-serif' ,":hover": {
                                color: "#a84119"
                                   }, }}><ShoppingCartOutlinedIcon sx={{marginRight:1}}/>Cart</Button>
                  </Link>
                 </Stack>
                  

                </Stack>
        
        
        </Box>
       
    )
}

export default Navbar