import { Global } from "@emotion/react";
import { Box, Stack, Typography } from "@mui/material"
import FontStyles from "../SharedComponents/FontStyles";
import Contact from "../SharedComponents/Contact";


const JakeYeo = () => {
    return (<>
        <Stack margin={'10px'} alignItems={'center'}>
            <FontStyles />
            <Typography width="100%" textAlign={"center"} fontWeight={400} fontSize={"30px"} fontFamily={"'Poppins', sans-serif"} color={"white"}>Jake Yeo</Typography>
            <Typography fontWeight={200} textAlign={"center"} fontSize={"20px"} fontFamily={"'Poppins', sans-serif"} color={"white"} marginBottom={"5px"}>
                Third year computer science student at the University of British Columbia part of the SCOPE COOP program
            </Typography>
            <Contact></Contact>
        </Stack>
    </>)
}

export default JakeYeo