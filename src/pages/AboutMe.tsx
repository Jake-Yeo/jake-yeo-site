import { Stack } from "@mui/material"
import Header from "../components/SharedComponents/Header"
import ProfilePic from "../components/AboutMeComponents/ProfilePic"
import JakeYeo from "../components/AboutMeComponents/JakeYeo"

const AboutMe = () => {
    return (<>
        <Stack justifyContent={"center"} alignItems={"center"} height={"100vh"} width={"100%"}>
            <Header></Header>
            <ProfilePic></ProfilePic>
            <JakeYeo></JakeYeo>
        </Stack>
    </>)
}

export default AboutMe