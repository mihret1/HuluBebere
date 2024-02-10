import { Box, Stack } from "@mui/material"
import BodyOne from "../bodyOne/bodyOne"
import { ComOne } from "../bodyOne/bodyone_componets"
import BodyTwo from "../bodyTwo/bodyTwo"
import BodyThree from "../bodyThree/bodyThree"



const Home=()=>{
    return(
        <Stack spacing={2} ml={8} mr={9}>
           <BodyOne />
           <BodyTwo />
           <BodyThree />
        </Stack>
    )
}

export default Home
