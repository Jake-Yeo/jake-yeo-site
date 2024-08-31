import ProjectCard from "../components/MyProjectsComponents/ProjectCard"

const MyProjects = () => {
    return (<>
        <ProjectCard
            projectName={"Zen-Cafe"}
            description={"A webmessaging app built in react"}
            builtWith={"ReactTS, Typescript, ExpressJS, NodeJS, JWT, MongoDB, Vercel, Railway, Firebase, Insomnia"}
            githubLink={"https://github.com/Jake-Yeo/zen-cafe"}
            liveDemoLink={"https://zen-cafe.vercel.app/"}
            pictureUrls={["/pics/zenCafe/zc1.png", "/pics/zenCafe/zc2.png" ,"/pics/zenCafe/zc3.png", "/pics/zenCafe/zc4.png"]}></ProjectCard>
    </>)
}

export default MyProjects