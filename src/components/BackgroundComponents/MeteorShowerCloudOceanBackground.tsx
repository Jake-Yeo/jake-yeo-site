
import MeteorShowerAnimation from "./MeteorShowerAnimation"
import { Box, Stack } from "@mui/material"
import { ReactNode } from "react"


interface Props {
    children?: ReactNode,
}

const MeteorShowerCloudOceanBackground = ({ children }: Props) => { // this allows us to pass in child elements like so <MeteorShowerCloudOceanBackground>hi there!</MeteorShowerCloudOceanBackground>

    return (
        <Stack // Please fix overflow on mobile, they cant scroll!
            direction='column'
            justifyContent='space-between'
            alignItems={'center'}
            minHeight='100vh'
            width='100%'
            sx={{
                overflowX: 'hidden',
                overflowY: 'hidden',
                position: 'relative'
            }}
        >
            {children}
            <Box zIndex={-1}>
                <MeteorShowerAnimation shootingStarInterval={95} />
            </Box>
        </Stack>
    )
}

export default MeteorShowerCloudOceanBackground