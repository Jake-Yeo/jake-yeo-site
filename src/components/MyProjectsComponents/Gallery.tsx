import { Box, Grid, ImageList, ImageListItem } from "@mui/material"
import { ReactElement } from "react"
import { Masonry } from "@mui/lab";

interface props {
    pictureUrls: string[]
}

const Gallery = ({ pictureUrls }: props) => {

    const pictures: ReactElement[] = []

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

    return (<>
            <Masonry columns={2} spacing={2}>
                {pictures}
            </Masonry>
    </>)
}

export default Gallery