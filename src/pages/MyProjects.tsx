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
            builtWith={"ReactTS, Typescript, ExpressJS, NodeJS, JWT, MongoDB, Vercel, Railway, Firebase, Insomnia, OOP"}
            githubLink={"https://github.com/Jake-Yeo/zen-cafe"}
            liveDemoLink={"https://zen-cafe.vercel.app/"}
            pictureUrls={["/pics/zenCafe/zc1.png", "/pics/zenCafe/zc2.png", "/pics/zenCafe/zc3.png", "/pics/zenCafe/zc4.png"]}
        />
        <ProjectCard
            projectName={"Nova-Type"}
            description={"A fullstack Typescript typing practice app"}
            builtWith={"ReactTS, Typescript, Firebase, OOP"}
            githubLink={"https://github.com/Jake-Yeo/nova-type"}
            liveDemoLink={"https://nova-type.web.app/"}
            pictureUrls={["/pics/novaType/nt1.png", "/pics/novaType/nt2.png", "/pics/novaType/nt3.png", "/pics/novaType/nt4.png", "/pics/novaType/nt5.png", "/pics/novaType/nt6.png"]}
        />
        <ProjectCard
            projectName={"Gorilla-Type"}
            description={"A test driven Java typing practice app"}
            builtWith={"Java, OOP, UML Diagrams, Test Driven Design"}
            githubLink={"https://github.com/Jake-Yeo/GorillaType"}
            pictureUrls={["/pics/gorillaType/gt0.png", "/pics/gorillaType/gt00.png", "/pics/gorillaType/gt1.png", "/pics/gorillaType/gt2.png", "/pics/gorillaType/gt3.png", "/pics/gorillaType/gt4.png", "/pics/gorillaType/gt5.png", "/pics/gorillaType/gt6.png", "/pics/gorillaType/gt7.png", "/pics/gorillaType/gt8.png"]}
        />
        <ProjectCard
            projectName={"Motis-Harmony"}
            description={"A Java Youtube scraper app"}
            builtWith={"Java, Selenium, JavaFX, Maven, OOP, MVC"}
            githubLink={"https://github.com/Jake-Yeo/MotisHarmony"}
            pictureUrls={["/pics/motisHarmony/mh1.png", "/pics/motisHarmony/mh2.png", "/pics/motisHarmony/mh3.png", "/pics/motisHarmony/mh4.png", "/pics/motisHarmony/mh5.png", "/pics/motisHarmony/mh6.png", "/pics/motisHarmony/mh7.png", "/pics/motisHarmony/mh8.png", "/pics/motisHarmony/mh9.png", "/pics/motisHarmony/mh10.png"]}
        />
        <ProjectCard
            projectName={"Key-Dex"}
            description={"A Java typing practice app"}
            builtWith={"Java, OOP, MVC"}
            githubLink={"https://github.com/Jake-Yeo/KeyDex"}
            pictureUrls={["/pics/keyDex/kd1.png", "/pics/keyDex/kd2.png", "/pics/keyDex/kd3.png", "/pics/keyDex/kd4.png", "/pics/keyDex/kd5.png", "/pics/keyDex/kd6.png", "/pics/keyDex/kd7.png"]}
        />
    </>)
})

export default MyProjects