
import { Stack, Typography } from "@mui/material";
import Logo from "../components/SharedComponents/Logo";
import Header from "../components/SharedComponents/Header";
import AboutMe from "./AboutMe";
import MySkills from "./MySkills";
import MyProjects from "./MyProjects";

const HomePage = () => {
    return (<>
        <Header></Header>
        <Stack justifyContent={"center"} alignItems={"center"} width={"100%"}>
            <AboutMe></AboutMe>
            <MySkills></MySkills>
            <MyProjects></MyProjects>
        </Stack>
    </>)
}

export default HomePage