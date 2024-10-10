import { Box, Grid, ImageList, ImageListItem } from "@mui/material"
import { ReactElement, useEffect, useState } from "react"
import { Masonry } from "@mui/lab";

interface props {
    pictureUrls: string[]
}

const Gallery = ({ pictureUrls }: props) => {

    const pictures: ReactElement[] = []

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Add event listener to update width on window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    for (const pictureUrl of pictureUrls) {
        pictures.push(
            <>
                <Box key={pictureUrl}>
                    <img
                        srcSet={`${pictureUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${pictureUrl}?w=248&fit=crop&auto=format`}
                        alt={pictureUrl}
                        loading="lazy"
                        style={{ width: '100%', display: 'block' }} // Ensures proper image scaling
                    />
                </Box>
            </>
        )
    }

    return (
        <>
            {windowWidth < 800
                ?
                <Masonry columns={1} spacing={2}>
                    {pictures}
                </Masonry>
                :
                <Masonry columns={2} spacing={2}>
                    {pictures}
                </Masonry>
            }
        </>)
}

export default Gallery