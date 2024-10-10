import { Box, Grid, Stack } from "@mui/material"
import CategorizedSkills from "../components/MySkillsComponents/CategorizedSkills"
import { forwardRef } from "react"


interface props {
    ref: React.RefObject<HTMLDivElement>
}

const MySkills = forwardRef<HTMLDivElement, props>((props, ref) => {

    return (<>
        <Box ref={ref} minHeight="100vh">
            <Grid flex={1} container spacing={1} justifyContent={'center'}>
                <Grid item>
                    <CategorizedSkills key={1} skillCategory={"Languages"} skills={["TypeScript", "JavaScript", "HTML", "CSS", "Java", "Python", "C",]} ></CategorizedSkills>
                </Grid>
                <Grid item>
                    <CategorizedSkills key={3} skillCategory={"Frameworks"} skills={["ReactTS", " ExpressJS", "NodeJS", " Material-UI", "CSS", "JavaFx", "Mocha", "Chai", "JUnit"]} ></CategorizedSkills>
                </Grid>
                <Grid item>
                    <CategorizedSkills key={2} skillCategory={"Tools"} skills={["MongoDb", " FireBase", "VS-code", " GitHub", "JWT", "JSON", "Vercel", "Railway", "Insomnia", "Eclipse", "Netbeans"]} ></CategorizedSkills>
                </Grid>
            </Grid>
        </Box>
    </>)
})

export default MySkills