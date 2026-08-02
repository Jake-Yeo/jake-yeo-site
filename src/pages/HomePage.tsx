type Project = {
  name: string;
  year: string;
  summary: string;
  detail: string;
  technologies: string[];
  github: string;
  demo?: string;
  image: string;
  imageAlt: string;
};

const projects: Project[] = [
  {
    name: "Gorilla Type",
    year: "2024",
    summary: "A test-driven desktop typing application built in Java.",
    detail:
      "Designed from user stories and UML diagrams, with persistent practice data and a comprehensive JUnit test suite covering the core typing experience.",
    technologies: ["Java", "JUnit", "OOP", "TDD"],
    github: "https://github.com/Jake-Yeo/GorillaType",
    image: "/pics/gorillaType/gt00.png",
    imageAlt: "Gorilla Type typing practice interface",
  },
  {
    name: "Zen Cafe",
    year: "2024",
    summary: "A real-time messaging app with a shared music radio.",
    detail:
      "A full-stack social cafe experience with JWT authentication, MongoDB-backed messaging, and a curated audio library served for low-latency playback.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    github: "https://github.com/Jake-Yeo/zen-cafe",
    demo: "https://zen-cafe.vercel.app/",
    image: "/pics/zenCafe/zc1.png",
    imageAlt: "Zen Cafe messaging application",
  },
  {
    name: "Nova Type",
    year: "2024",
    summary: "A customizable typing practice platform with progress tracking.",
    detail:
      "Generates varied practice sessions from a large text library, tracks accuracy and speed over time, and supports user accounts and personalized settings.",
    technologies: ["React", "TypeScript", "Firebase", "Regex"],
    github: "https://github.com/Jake-Yeo/nova-type",
    demo: "https://nova-type.web.app/",
    image: "/pics/novaType/nt1.png",
    imageAlt: "Nova Type typing test interface",
  },
  {
    name: "Motis Harmony",
    year: "2022",
    summary: "A desktop music manager and YouTube audio scraper.",
    detail:
      "Combines a JavaFX music player, playlists, timers, visualization, and browser tooling with a Selenium-based audio acquisition workflow.",
    technologies: ["Java", "JavaFX", "Selenium", "Maven"],
    github: "https://github.com/Jake-Yeo/MotisHarmony",
    image: "/pics/motisHarmony/mh7.png",
    imageAlt: "Motis Harmony desktop music player",
  },
  {
    name: "KeyDex",
    year: "2021",
    summary: "An early Java typing trainer focused on deliberate practice.",
    detail:
      "A desktop application exploring object-oriented design, MVC architecture, configurable exercises, and local progress tracking.",
    technologies: ["Java", "JavaFX", "MVC", "OOP"],
    github: "https://github.com/Jake-Yeo/KeyDex",
    image: "/pics/keyDex/kd1.png",
    imageAlt: "KeyDex typing application",
  },
];

const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Node.js",
  "Java",
  "Python",
  "MongoDB",
  "Firebase",
];

const workExperience = [
  {
    company: "UBC Faculty of Medicine",
    role: "Software Developer Intern",
    period: "May - Dec 2025",
    product: "Faculty360",
    summary:
      "Built the core document-authoring system for Faculty360 as part of a three-developer team, helping turn a small internal app into a full-stack platform for faculty data and academic document generation.",
    highlights: [
      "Designed a deeply nested drag-and-drop document builder for configurable 20-50 page academic documents.",
      "Built AWS Lambda and Docker pipelines using Gotenberg and Adobe APIs to generate PDF and DOCX files.",
      "Implemented UBC OIDC login, application authorization, PostgreSQL features, and GraphQL-backed workflows.",
    ],
    technologies: ["JavaScript", "Python", "PostgreSQL", "GraphQL", "AWS", "Docker"],
  },
  {
    company: "Invoke Media",
    role: "Web Developer Intern",
    period: "Jan - Apr 2025",
    product: "Chunks Chunks Chunks · TrueLoyalty",
    summary:
      "Worked across frontend, backend, and AWS infrastructure on production applications, with primary ownership across video upload, processing, clipping, and playback workflows.",
    highlights: [
      "Implemented direct-to-S3 multipart uploads using expiring presigned URLs and event-driven Lambda processing.",
      "Built an FFmpeg pipeline for HLS segmentation, parallel clip generation, streaming, and MP4 downloads.",
      "Recovered a drifted AWS environment as the only available engineer before a CEO-led product demonstration.",
    ],
    technologies: ["TypeScript", "Next.js", "Python", "GraphQL", "AWS Lambda", "FFmpeg"],
  },
];

const recentProjects = [
  {
    name: "PullUp",
    period: "2026 · In development",
    context: "Team software project",
    description:
      "A full-stack social event platform for organizing pullups, inviting friends and social circles, managing RSVPs, and sharing event photos.",
    contribution:
      "Built major parts of the MongoDB and Express API, Redux state architecture, Auth0 flow, friend and RSVP systems, and event detail/editing experience.",
    technologies: ["React", "TypeScript", "Redux", "Express", "MongoDB", "Auth0"],
  },
  {
    name: "Sightline",
    period: "Oct 2025",
    context: "StormHacks 2025",
    description:
      "An accessibility-first PWA that gives blind and low-vision users spoken descriptions of scenes captured with their phone camera.",
    contribution:
      "Built the mobile and desktop camera capture experience, scene-description interface, and reusable frontend components under hackathon time constraints.",
    technologies: ["Next.js", "TypeScript", "Gemini", "ElevenLabs", "PWA"],
    source: "https://github.com/xuanhieu2611/Sightline",
    demo: "https://sightline-xi.vercel.app/describe",
  },
  {
    name: "Sum-Up Sundae",
    period: "Jan 2025",
    context: "nwHacks 2025 · Sponsor Prize winner",
    description:
      "A weekly video-recap platform that encourages friends to stay connected by unlocking group updates after each member contributes.",
    contribution:
      "Designed MongoDB models and Express APIs, integrated Livepeer upload and playback, tested endpoints with Postman, and wired group and video flows into the frontend.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Livepeer", "Firebase"],
    source: "https://github.com/tyin76/sum-up-sundae",
  },
];

const HomePage = () => {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Jake Yeo, back to top">
          Jake Yeo
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">about</a>
          <a href="#experience">experience</a>
          <a href="#projects">projects</a>
          <a href="#contact">contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="intro" id="about">
          <p className="eyebrow">Computer science · UBC</p>
          <h1>Software developer working across web, cloud, and data.</h1>
          <p className="intro-copy">
            I&apos;m Jake, a computer science student and full-stack developer based in
            Vancouver. I enjoy turning ambitious ideas into clear, reliable products,
            from web platforms to desktop tools.
          </p>
          <div className="intro-links">
            <a href="mailto:jakeyeozh@gmail.com">Email me <span aria-hidden="true">↗</span></a>
            <a href="https://github.com/Jake-Yeo/" target="_blank" rel="noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a href="https://ca.linkedin.com/in/jake-yeo" target="_blank" rel="noreferrer">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="experience" id="experience" aria-labelledby="experience-title">
          <div className="section-heading experience-heading">
            <p className="eyebrow">Experience</p>
            <h2 id="experience-title">Building production software with real users.</h2>
          </div>
          <div className="experience-list">
            {workExperience.map((job) => (
              <article className="experience-item" key={job.company}>
                <div className="experience-meta">
                  <span>{job.period}</span>
                  <span>{job.product}</span>
                </div>
                <div className="experience-body">
                  <div>
                    <h3>{job.company}</h3>
                    <p className="experience-role">{job.role}</p>
                  </div>
                  <div className="experience-detail">
                    <p>{job.summary}</p>
                    <ul className="experience-highlights">
                      {job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                    <ul className="tech-list" aria-label={`${job.company} technologies`}>
                      {job.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills" aria-labelledby="skills-title">
          <div className="section-heading">
            <p className="eyebrow" id="skills-title">Working with</p>
            <p>Tools I use to move from idea to shipped product.</p>
          </div>
          <ul className="skill-list">
            {skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </section>

        <section className="projects" id="projects" aria-labelledby="projects-title">
          <div className="section-heading projects-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 id="projects-title">Projects, newest first.</h2>
            </div>
            <p>A selection of full-stack, desktop, and developer-focused work.</p>
          </div>

          <div className="recent-projects" aria-label="Recent projects">
            {recentProjects.map((project, index) => (
              <article className="recent-project" key={project.name}>
                <div className="recent-project-index">{String(index + 1).padStart(2, "0")}</div>
                <div className="recent-project-main">
                  <div className="recent-project-title">
                    <div>
                      <p className="eyebrow">{project.context}</p>
                      <h3>{project.name}</h3>
                    </div>
                    <span>{project.period}</span>
                  </div>
                  <div className="recent-project-content">
                    <p>{project.description}</p>
                    <p>{project.contribution}</p>
                  </div>
                  <div className="recent-project-footer">
                    <ul className="tech-list" aria-label={`${project.name} technologies`}>
                      {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                    </ul>
                    <div className="project-links">
                      {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live site <span aria-hidden="true">↗</span></a>}
                      {project.source && <a href={project.source} target="_blank" rel="noreferrer">Source <span aria-hidden="true">↗</span></a>}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="archive-label eyebrow">Earlier work</p>

          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project" key={project.name}>
                <div className="project-media">
                  <img src={project.image} alt={project.imageAlt} loading={index > 1 ? "lazy" : "eager"} />
                </div>
                <div className="project-copy">
                  <div className="project-meta">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3>{project.name}</h3>
                  <p className="project-summary">{project.summary}</p>
                  <p className="project-detail">{project.detail}</p>
                  <ul className="tech-list" aria-label={`${project.name} technologies`}>
                    {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                  <div className="project-links">
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer">Live site <span aria-hidden="true">↗</span></a>
                    )}
                    <a href={project.github} target="_blank" rel="noreferrer">Source <span aria-hidden="true">↗</span></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact">
        <div>
          <p className="eyebrow">Let&apos;s connect</p>
          <h2>Have a project or opportunity in mind?</h2>
        </div>
        <a className="contact-link" href="mailto:jakeyeozh@gmail.com">jakeyeozh@gmail.com <span aria-hidden="true">↗</span></a>
        <p className="copyright">© {new Date().getFullYear()} Jake Yeo</p>
      </footer>
    </div>
  );
};

export default HomePage;
