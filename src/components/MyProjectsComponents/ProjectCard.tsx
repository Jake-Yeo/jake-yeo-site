import { Box, Link, Stack, Typography } from "@mui/material"
import FontStyles from "../SharedComponents/FontStyles"
import CategorizedSkills from "../MySkillsComponents/CategorizedSkills"
import Gallery from "./Gallery"

interface props {
    projectName: string,
    description: string,
    builtWith: string,
    githubLink: string,
    liveDemoLink?: string,
    pictureUrls: string[],
}

const ProjectCard = ({ projectName, description, builtWith, githubLink, liveDemoLink, pictureUrls }: props) => {
    return (<>
        <Box
            sx={{
                paddingLeft: '10px',
                paddingRight: '10px',
                paddingTop: '5px',
                marginBottom: '50px',
                width: "80%",
                backdropFilter: 'blur(3px)',
                boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.7)",
                borderRadius: "1em",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
        >
            <FontStyles ></FontStyles>
            <Stack alignItems={'center'}>
                <Typography textAlign={"center"} fontWeight={600} fontSize={"40px"} fontFamily={"'Poppins', sans-serif"} color={"white"}>{projectName}</Typography>
                <Typography textAlign={"center"} fontWeight={200} fontSize={"20px"} fontFamily={"'Poppins', sans-serif"} color={"white"}>{description}</Typography>
                <Link
                    fontWeight={200} fontSize={"20px"} fontFamily={"'Poppins', sans-serif"}
                    sx={{
                        marginTop: "10px",
                        zIndex: 1,
                        color: 'white', // Set text color to white
                        textDecorationColor: 'rgba(255, 255, 255, 0.5)',
                        width: 'fit-content',

                    }} href={githubLink}
                    underline="always"
                    target="_blank"
                    rel="noopener noreferrer" // they said to add this for security
                >
                    Github Link
                </Link>
                <Link
                    fontWeight={200} fontSize={"20px"} fontFamily={"'Poppins', sans-serif"}
                    sx={{
                        zIndex: 1,
                        margin: "10px",
                        color: 'white', // Set text color to white
                        textDecorationColor: 'rgba(255, 255, 255, 0.5)',
                        width: 'fit-content',

                    }} href={liveDemoLink}
                    underline="always"
                    target="_blank"
                    rel="noopener noreferrer" // they said to add this for security
                >
                    {liveDemoLink ? "Live Demo" : ""}
                </Link>
                <CategorizedSkills skillCategory={"Built With"} skills={[builtWith]}></CategorizedSkills>
                <Gallery pictureUrls={pictureUrls}></Gallery>
            </Stack>
        </Box>
    </>)
}

export default ProjectCard