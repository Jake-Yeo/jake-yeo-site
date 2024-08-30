
import { Stack, Typography } from "@mui/material";
import Logo from "../components/SharedComponents/Logo";
import Header from "../components/SharedComponents/Header";
import AboutMe from "./AboutMe";

const HomePage = () => {
    return (<>
        <Stack justifyContent={"center"} alignItems={"center"} width={"100vw"}>
            <AboutMe></AboutMe>
        </Stack>
    </>)
}

export default HomePage