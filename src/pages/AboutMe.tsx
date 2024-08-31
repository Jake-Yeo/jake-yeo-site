import { Stack } from "@mui/material"
import Header from "../components/SharedComponents/Header"
import ProfilePic from "../components/AboutMeComponents/ProfilePic"
import JakeYeo from "../components/AboutMeComponents/JakeYeo"
import { forwardRef } from "react"

interface props {
    ref: React.RefObject<HTMLDivElement>
}

const AboutMe = forwardRef<HTMLDivElement, props>((props, ref) => {
    return (<>
        <Stack ref={ref} justifyContent={"center"} alignItems={"center"} minHeight={"100vh"} width={"100%"}>
            <ProfilePic></ProfilePic>
            <JakeYeo></JakeYeo>
        </Stack>
    </>)
})

export default AboutMe