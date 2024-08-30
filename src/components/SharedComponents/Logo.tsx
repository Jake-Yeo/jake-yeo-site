import { Box } from "@mui/material"

interface props {
    padding?: string,
    height?: number,
}

const Logo = ({ padding = "0px", height = 100 }: props) => {

    const WHRatio = 323 / 226;

    const width = height * WHRatio;
    console.log(`${width} + px`);

    return (<>
        <Box sx={{ // we need to wrap below box in another box because since the image is not an actual component, margin and padding will not do anything
            padding: padding
        }}>
            <Box sx={{
                background: `url("/svgs/LogoJY.svg")`,
                backgroundSize: 'contain', // Scale the background image to fit within the container while preserving its aspect ratio
                backgroundRepeat: 'no-repeat',
                height: `${height}px`,
                maxheight: `${height}px`,
                maxWidth: `${width}px`,
                minWidth: `${width}px`
            }}></Box>
        </Box>
    </>)
}

export default Logo