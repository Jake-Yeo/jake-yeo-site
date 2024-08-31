import { Box } from "@mui/material"
import ProjectCard from "../components/MyProjectsComponents/ProjectCard"
import { forwardRef } from "react"

interface props {
    ref: React.RefObject<HTMLDivElement>
}

const MyProjects = forwardRef<HTMLDivElement, props>((props, ref) => {

    return (<>
        <Box ref={ref}></Box>
        <ProjectCard
            projectName={"Zen-Cafe"}
            description={"A web-messaging app"}
            builtWith={"ReactTS, Typescript, ExpressJS, NodeJS, JWT, MongoDB, Vercel, Railway, Firebase, Insomnia"}
            githubLink={"https://github.com/Jake-Yeo/zen-cafe"}
            liveDemoLink={"https://zen-cafe.vercel.app/"}
            pictureUrls={["/pics/zenCafe/zc1.png", "/pics/zenCafe/zc2.png", "/pics/zenCafe/zc3.png", "/pics/zenCafe/zc4.png"]}
        />
        <ProjectCard
            projectName={"Nova-Type"}
            description={"A typing practice app"}
            builtWith={"ReactTS, Typescript, Firebase"}
            githubLink={"https://github.com/Jake-Yeo/nova-type"}
            liveDemoLink={"https://nova-type.web.app/"}
            pictureUrls={["/pics/novaType/nt1.png", "/pics/novaType/nt2.png", "/pics/novaType/nt3.png", "/pics/novaType/nt4.png", "/pics/novaType/nt5.png", "/pics/novaType/nt6.png"]}
        />
    </>)
})

export default MyProjects