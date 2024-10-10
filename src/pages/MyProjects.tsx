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
            builtWith={"ReactTS, Typescript, Python, ExpressJS, NodeJS, JWT, MongoDB, Vercel, Railway, Firebase, Insomnia, OOP"}
            githubLink={"https://github.com/Jake-Yeo/zen-cafe"}
            liveDemoLink={"https://zen-cafe.vercel.app/"}
            pictureUrls={["/pics/zenCafe/zc1.png", "/pics/zenCafe/zc2.png", "/pics/zenCafe/zc3.png", "/pics/zenCafe/zc4.png"]}
            about={"Zen-Cafe is a real-time web messaging app featuring a built-in music radio system, designed to create an engaging online cafe experience where users can chat and enjoy music together. I started by prototyping the UI in Figma to refine the user experience, then implemented the design using React, MUI, and TypeScript. For the backend, I developed it with TypeScript, Node.js, and Express.js, seamlessly connecting to MongoDB to deliver new messages in real time. Additionally, I used Python to scrape around 1,000 music audios from YouTube and programmatically hosted them on GitHub, ensuring minimal latency when users play music. I also incorporated JWT for user authorization, enhancing data security. The frontend is hosted on Vercel, while the backend operates on Railway."}
        />
        <ProjectCard
            projectName={"Nova-Type"}
            description={"A fullstack Typescript typing practice app"}
            builtWith={"ReactTS, Typescript, Firebase, OOP, Regex"}
            githubLink={"https://github.com/Jake-Yeo/nova-type"}
            liveDemoLink={"https://nova-type.web.app/"}
            pictureUrls={["/pics/novaType/nt1.png", "/pics/novaType/nt2.png", "/pics/novaType/nt3.png", "/pics/novaType/nt4.png", "/pics/novaType/nt5.png", "/pics/novaType/nt6.png"]}
            about={"Nova-Type is a typing practice app designed to help users type faster. Its frontend was prototyped with Figma and implemented in TypeScript using React. The app features customizable settings that allow users to adjust font size and select the types of letters, symbols, and numbers they encounter. With a vast library containing thousands of sentences and tens of thousands of words, it generates unique prompts for each practice session. Additionally, Nova-Type tracks users' practice history, recording key metrics such as accuracy and words per minute. For authentication and user data storage, I used Firebase. To enhance the variety of practice material, I engineered regex patterns and used Java to parse books, essays, and my personal work into words and sentences."}
        />
        <ProjectCard
            projectName={"Gorilla-Type"}
            description={"A test driven Java typing practice app"}
            builtWith={"Java, OOP, UML Diagrams, Test Driven Design"}
            githubLink={"https://github.com/Jake-Yeo/GorillaType"}
            pictureUrls={["/pics/gorillaType/gt0.png", "/pics/gorillaType/gt00.png", "/pics/gorillaType/gt1.png", "/pics/gorillaType/gt2.png", "/pics/gorillaType/gt3.png", "/pics/gorillaType/gt4.png", "/pics/gorillaType/gt5.png", "/pics/gorillaType/gt6.png", "/pics/gorillaType/gt7.png", "/pics/gorillaType/gt8.png"]}
            about={"Gorilla-Type is a typing practice app developed in Java using Test-Driven Development (TDD). I planned the project thoroughly in advance by creating user stories, UML diagrams, and sequence diagrams to outline the application's structure and functionality. I applied Object-Oriented Programming (OOP) principles and utilized JSON objects to ensure data persistence. Additionally, I achieved 100% code coverage through comprehensive unit testing, creating both black-box and white-box tests with JUnit. Using Java, I also parsed books into words and sentences, allowing for a diverse set of practice material for users."}
        />
        <ProjectCard
            projectName={"Motis-Harmony"}
            description={"A Java Youtube scraper app"}
            builtWith={"Java, Selenium, JavaFX, Maven, OOP, MVC"}
            githubLink={"https://github.com/Jake-Yeo/MotisHarmony"}
            pictureUrls={["/pics/motisHarmony/mh1.png", "/pics/motisHarmony/mh2.png", "/pics/motisHarmony/mh3.png", "/pics/motisHarmony/mh4.png", "/pics/motisHarmony/mh5.png", "/pics/motisHarmony/mh6.png", "/pics/motisHarmony/mh7.png", "/pics/motisHarmony/mh8.png", "/pics/motisHarmony/mh9.png", "/pics/motisHarmony/mh10.png"]}
            about={"Motis Harmony is a YouTube music scraper application built in Java. It utilizes Selenium to intercept network data sent by YouTube to the user, parsing this information to locate the audio source link for downloading music. Once downloaded, the audio source, originally in WebA format, is converted to M4A using FFMPEG. The user interface is designed with JavaFX, featuring a comprehensive music player interface, playlist and music manager, account creation functionality, an alarm clock, a timer, a music visualizer, and an integrated browser; all seamlessly incorporated into the app."}
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