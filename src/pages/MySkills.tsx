import { Box, Grid, Stack } from "@mui/material"
import CategorizedSkills from "../components/MySkillsComponents/CategorizedSkills"

const MySkills = () => {

    return (<>
        <Box minHeight="100vh">
            <Grid container spacing={1} justifyContent={'center'}>
                <Grid item>
                    <CategorizedSkills key={1} skillCategory={"Languages"} skills={["Typescript", "Java", "C", "HTML", "CSS", "Javascript"]} ></CategorizedSkills>
                </Grid>
                <Grid item>
                    <CategorizedSkills key={3} skillCategory={"Frameworks"} skills={["ReactTS", " ExpressJS", "NodeJS", " Material-UI", "CSS", "JavaFx"]} ></CategorizedSkills>
                </Grid>
                <Grid item>
                    <CategorizedSkills key={2} skillCategory={"Tools"} skills={["MongoDb", " FireBase", "VS-code", " GitHub", "JWT", "Vercel", "Railway", "Insomnia", "Eclipse", "Netbeans"]} ></CategorizedSkills>
                </Grid>
            </Grid>
        </Box>
    </>)
}

export default MySkills