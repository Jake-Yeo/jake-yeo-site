import { Box } from "@mui/material"

const ProfilePic = () => {
    return (<>
        <Box>
            <Box sx={{
                background: `url("/pics/jakeCircleCropPhoto.JPG")`,
                backgroundSize: 'contain', // Scale the background image to fit within the container while preserving its aspect ratio
                backgroundRepeat: 'no-repeat',
                height: "300px",
                width: "300px",
            }}>
            </Box>
        </Box>
    </>)
}

export default ProfilePic