
import { Stack, Typography } from "@mui/material";
import Logo from "../components/SharedComponents/Logo";
import Header from "../components/SharedComponents/Header";
import AboutMe from "./AboutMe";
import MySkills from "./MySkills";
import MyProjects from "./MyProjects";
import { useRef } from "react";
import Contact from "../components/SharedComponents/Contact";
import FontStyles from "../components/SharedComponents/FontStyles";

const HomePage = () => {

    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    return (<>
        <Stack justifyContent={"center"} alignItems={"center"} width={"100%"}>
            <Header aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef}></Header>
            <AboutMe ref={aboutRef}></AboutMe>
            <MySkills ref={skillsRef}></MySkills>
            <MyProjects ref={projectsRef}></MyProjects>
            <Contact ref={contactRef}></Contact>
            <FontStyles />
            <Typography width="100%" textAlign={"center"} fontSize={"8px"} fontWeight={100} fontFamily={"'Poppins', sans-serif"} color={"white"}>Copyright 2024 © Jake Yeo</Typography>
        </Stack>
    </>)
}

export default HomePage