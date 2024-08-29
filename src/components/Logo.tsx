import { Box } from "@mui/material"

const Logo = () => {
    return (<>
        <Box sx={{
            background: `url("/svgs/LogoJY.svg")`,
            backgroundSize: 'contain', // Scale the background image to fit within the container while preserving its aspect ratio
            backgroundRepeat: 'no-repeat',
            height: '50px',
            width: '50px'
        }}></Box>
    </>)
}

export default Logo