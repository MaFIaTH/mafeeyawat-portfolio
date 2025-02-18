import Divider from "../utilities/Utilities.tsx";
import TestImage from "/test/hotpot.png";
import ProjectCard from "../persistent-elements/ProjectCard.tsx";

const kafoo = {
    image: TestImage,
    projectName: "KAFOO: The Root of Corruption",
    description: "This is an awesome project description that explains its purpose and features.",
    contributions: ["Button-based minigames and the shooting minigame", "Basic UI Implementation"],
    links: [
        {name: "GitHub Repo", url: "https://github.com/project-repo"},
        {name: "Itch.io", url: "https://project-demo.com"},
    ],
};



function ProjectPage() {
  return (
      <main className="min-h-screen min-w-screen">
          <div className={"flex flex-col py-20 justify-center items-center"}>
              <h1 className={"text-4xl font-bold text-white italic"}>Projects</h1>
              <Divider/>
              <div className={"grid grid-cols-1 w-2/3 gap-x-50 gap-y-20 p-10 justify-center"}>
                  <div className={""}>
                      <ProjectCard image={kafoo.image}
                                   projectName={kafoo.projectName}
                                   description={kafoo.description}
                                   contributions={kafoo.contributions}
                                   links={kafoo.links}/>
                  </div>
                  <div className={""}>
                      <ProjectCard image={kafoo.image}
                                   projectName={kafoo.projectName}
                                   description={kafoo.description}
                                   contributions={kafoo.contributions}
                                   links={kafoo.links}/>
                  </div>
              </div>
          </div>
      </main>
  );
}

export default ProjectPage;