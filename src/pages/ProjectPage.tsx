import Divider from "../utilities/Utilities.tsx";
import ProjectCard from "../projects/ProjectCard.tsx";
import {
    dyscord,
    fitMeIn,
    howWeDream,
    kafoo,
    quebic,
    theLastMeat,
    timeSprint,
    wichard
} from "../projects/ProjectData.tsx";





function ProjectPage() {
  return (
      <main className="min-h-screen min-w-screen">
          <div className={"flex flex-col py-20 justify-center items-center"}>
              <h1 className={"text-4xl font-bold text-white italic"}>Projects</h1>
              <Divider/>
              <div className={"grid grid-cols-1 w-2/3 max-xl:w-1/1 gap-y-20 p-10 justify-center"}>
                  <div className={""}>
                      <ProjectCard image={kafoo.image}
                                   projectName={kafoo.projectName}
                                   description={kafoo.description}
                                   contributions={kafoo.contributions}
                                   links={kafoo.links}/>
                  </div>
                  <div className={""}>
                      <ProjectCard image={wichard.image}
                                   projectName={wichard.projectName}
                                   description={wichard.description}
                                   contributions={wichard.contributions}
                                   links={wichard.links}/>
                  </div>
                  <div className={""}>
                      <ProjectCard image={theLastMeat.image}
                                   projectName={theLastMeat.projectName}
                                   description={theLastMeat.description}
                                   contributions={theLastMeat.contributions}
                                   links={theLastMeat.links}/>
                  </div>
                  <div className={""}>
                      <ProjectCard image={quebic.image}
                                   projectName={quebic.projectName}
                                   description={quebic.description}
                                   contributions={quebic.contributions}
                                   links={quebic.links}/>
                  </div>
                  <div className={""}>
                      <ProjectCard image={fitMeIn.image}
                                   projectName={fitMeIn.projectName}
                                   description={fitMeIn.description}
                                   contributions={fitMeIn.contributions}
                                   links={fitMeIn.links}/>
                  </div>
                  <div className={""}>
                      <ProjectCard image={timeSprint.image}
                                   projectName={timeSprint.projectName}
                                   description={timeSprint.description}
                                   contributions={timeSprint.contributions}
                                   links={timeSprint.links}/>
                  </div>
                  <div className={""}>
                      <ProjectCard image={dyscord.image}
                                   projectName={dyscord.projectName}
                                   description={dyscord.description}
                                   contributions={dyscord.contributions}
                                   links={dyscord.links}/>
                  </div>
                  <div className={""}>
                      <ProjectCard image={howWeDream.image}
                                   projectName={howWeDream.projectName}
                                   description={howWeDream.description}
                                   contributions={howWeDream.contributions}
                                   links={howWeDream.links}/>
                  </div>
              </div>
          </div>
      </main>
  );
}

export default ProjectPage;