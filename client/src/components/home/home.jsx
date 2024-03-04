import { Box, Stack } from "@mui/material"
import BodyOne from "../bodyOne/bodyOne"
import { ComOne } from "../bodyOne/bodyone_componets"
import BodyTwo from "../bodyTwo/bodyTwo"
import BodyThree from "../bodyThree/bodyThree"

import BodyFour from "../bodyFour/bodyFour"
import BodyFive from "../bodyFive/bodyFive"
import BodyFive_Two from "../bodyFive/bodyFive_two"
import BodyFive_Three from "../bodyFive/bodyFive_Three"
import BodySix from "../bodySix/bodySix"
import BodySixTwo from "../bodySix/body_six-two"
import BodySixThree from "../bodySix/bodysix_three"
import BodySeven from "../bodySeven/bodySeven"
import BodyEight from "../bodyEight/bodyEight"

const Home=()=>{
    return(
        <Stack spacing={2} ml={8} mr={9}>
           <BodyOne />
           <BodyTwo />
           <BodyThree />
           <BodyFour />
           <BodyFive />
           <BodyFive_Two />
           <BodyFive_Three />
           <BodySix />
           <BodySixTwo />
           <BodySixThree />
           <BodySeven/>
           <BodyEight />

        </Stack>
    )
}

export default Home
