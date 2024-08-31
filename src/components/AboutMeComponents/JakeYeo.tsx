import { Global } from "@emotion/react";
import { Box, Stack, Typography } from "@mui/material"
import FontStyles from "../SharedComponents/FontStyles";


const JakeYeo = () => {
    return (<>
        <Stack margin={'10px'}>
            <FontStyles />
            <Typography width="100%" textAlign={"center"} fontWeight={400} fontFamily={"'Poppins', sans-serif"} color={"white"}>Jake Yeo</Typography>
            <Typography fontWeight={200} textAlign={"center"} fontSize={"10px"} fontFamily={"'Poppins', sans-serif"} color={"white"}>
                Third year computer science student at the University of British Columbia part of the SCOPE COOP program
            </Typography>
        </Stack>
    </>)
}

export default JakeYeo