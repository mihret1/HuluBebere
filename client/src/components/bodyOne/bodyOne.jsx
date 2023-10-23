
import {Stack,Box, Button} from '@mui/material'
import {Link} from 'react-router-dom'
import ShopOutlinedIcon from '@mui/icons-material/ShopOutlined';

const BodyOne=()=>{
    return(
    <Stack>
         <Stack>
            <Link style={{ textDecoration:'none' }}>
              <Button sx={{ color:'black' }}><ShopOutlinedIcon /> Official store</Button>
            </Link>
         </Stack>
         <Box></Box>
         <Box></Box>
    </Stack>
    )
}

export default BodyOne