
import { Stack, Typography } from "@mui/material";

const HomePage = () => {
    return (<>
        <Stack justifyContent={"center"} alignItems={"center"} height={"100vh"} width={"100vw"} sx={{ background: "black" }}>
            <Typography color={"white"} textAlign={"center"}>
                This site is still under construction!
            </Typography>
            <Typography color={"white"} textAlign={"center"}>
                Hi my name is Jake Yeo! Im a third year student at UBC and am currently in the SCOPE coop program.
            </Typography>
            <Typography color={"white"} textAlign={"center"}>
                My github repo is here: 
            </Typography>
            <a style={{ color: '#00d6f7' }} href="https://github.com/Jake-Yeo">Github</a>
            <Typography color={"white"} textAlign={"center"}>
                My linkedin is here:
            </Typography>
            <a style={{ color: '#00d6f7' }} href="https://www.linkedin.com/in/jake-yeo/">Linkedin</a>
            <Typography color={"white"} textAlign={"center"}>
                Additionally here are some links to the live demos of my personal projects
            </Typography>
            <a style={{ color: '#00d6f7' }} href="https://zen-cafe.vercel.app/">Web-Messaging-App</a>
            <a style={{ color: '#00d6f7' }} href="https://nova-type.web.app/">Typing-Practice-App</a>
            
        </Stack>
    </>)
}

export default HomePage