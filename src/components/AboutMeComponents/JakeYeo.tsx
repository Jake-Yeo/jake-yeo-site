import { Global } from "@emotion/react";
import { Stack, Typography } from "@mui/material"
import FontStyles from "../SharedComponents/FontStyles";


const JakeYeo = () => {
    return (<>
        <Stack>
            <FontStyles />
            <Typography fontWeight={300} fontFamily={"'Poppins', sans-serif"} color={"white"}>Jake Yeo</Typography>
        </Stack>
    </>)
}

export default JakeYeo