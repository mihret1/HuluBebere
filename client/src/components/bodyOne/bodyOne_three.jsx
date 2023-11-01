import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { Box ,Stack} from '@mui/material';
import imgg from '../../assets/bodyone/img5.jpg'
import { Link } from 'react-router-dom';
const BodyOneThree=()=>{
    return(
    <Stack spacing={2}> 
        <List  sx={{ bgcolor: 'background.paper' ,width:260,height:199, paddingTop:0}}>
        
        <Link to='/post' style={{ textDecoration:'none' }}>

          <ListItem>
            <ListItemAvatar>
             <Avatar sx={{ backgroundColor:'white', border:1, borderColor:'#86442d' }}>
               <ImageIcon sx={{ color:'#86442d' }} />
             </Avatar>
             </ListItemAvatar>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            
          </ListItem>
        </Link>

        <Link to='/post' style={{ textDecoration:'none' }}>

<ListItem>
  <ListItemAvatar>
   <Avatar sx={{ backgroundColor:'white', border:1, borderColor:'#86442d' }}>
     <ImageIcon sx={{ color:'#86442d' }} />
   </Avatar>
   </ListItemAvatar>
  <ListItemText primary="Photos" secondary="Jan 9, 2014" />
  
</ListItem>
        </Link>
        <Link to='/post' style={{ textDecoration:'none' }}>

<ListItem>
  <ListItemAvatar>
   <Avatar sx={{ backgroundColor:'white', border:1, borderColor:'#86442d' }}>
     <ImageIcon sx={{ color:'#86442d' }} />
   </Avatar>
   </ListItemAvatar>
  <ListItemText primary="Photos" secondary="Jan 9, 2014" />
  
</ListItem>
        </Link>
        </List> 
        <img src={imgg} style={{ width:260 ,height:199}}/>

    </Stack>
    )
}


export default BodyOneThree