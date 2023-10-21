
import {Box, Stack} from '@mui/material'
const Navbar=()=>{
    return(
        
        <Box className='Navmain'>
            <Box className='' >
                <Box sx={{ height:70,backgroundColor:'#86442d' }}></Box>
                <Box >
                    <Stack direction='row'>
                        <h3 >sell on HuluBebere</h3>

                         <h3>party</h3>
                         <h3>food</h3>
                         <h3>pay</h3>

                    </Stack>
                </Box>
            </Box>

            <Box>

            </Box>
        </Box>
       
    )
}

export default Navbar