
import { Stack, Typography } from "@mui/material";
import Logo from "../components/Logo";

const HomePage = () => {
    return (<>
        <Stack justifyContent={"center"} alignItems={"center"} height={"100vh"} width={"100vw"} sx={{ background: "white" }}>
            <Logo></Logo>
        </Stack>
    </>)
}

export default HomePage