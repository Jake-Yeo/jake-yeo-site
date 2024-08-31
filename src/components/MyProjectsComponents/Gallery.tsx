import { Box, Grid, ImageList, ImageListItem } from "@mui/material"
import { ReactElement } from "react"

interface props {
    pictureUrls: string[]
}

const Gallery = ({ pictureUrls }: props) => {

    const pictures: ReactElement[] = []

    for (const pictureUrl of pictureUrls) {
        pictures.push(
            <>
                <ImageListItem key={pictureUrl}>
                    <img
                        srcSet={`${pictureUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${pictureUrl}?w=248&fit=crop&auto=format`}
                        alt={pictureUrl}
                        loading="lazy"
                    />
                </ImageListItem>
            </>
        )
    }

    return (<>
        <ImageList variant="masonry" cols={2} gap={8}>
            {pictures}
        </ImageList>
    </>)
}

export default Gallery