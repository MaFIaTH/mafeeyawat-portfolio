import Divider from "../utilities/Utilities.tsx";
import ProjectCard from "../projects/ProjectCard.tsx";
import {
    bubbleBomb,
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
      <main className="bg-[#141414] bg-cover min-h-screen min-w-screen">
          <div className={"flex flex-col py-20 justify-center items-center text-center"}>
              <h1 className={"text-4xl font-bold text-white italic"}>Projects</h1>
              <Divider/>
              <h2 className={"text-4xl font-bold text-white italic pt-10 pb-5"}>Awarded Projects</h2>
              <p className={"text-2xl px-10"}>A proof of my skills and experiences.</p>
              <Divider/>
              <div className={"grid grid-cols-1 w-5/6 max-xl:w-1/1 gap-y-20 p-10 justify-center"}>
                  <div className={""}>
                      <ProjectCard image={wichard.image}
                                   projectName={wichard.projectName}
                                   description={wichard.description}
                                   contributions={wichard.contributions}
                                   links={wichard.links}/>
                  </div>
                  <div className={""}>
                      <ProjectCard image={quebic.image}
                                   projectName={quebic.projectName}
                                   description={quebic.description}
                                   contributions={quebic.contributions}
                                   links={quebic.links}/>
                  </div>
                  <div className={""}>
                      <ProjectCard image={howWeDream.image}
                                   projectName={howWeDream.projectName}
                                   description={howWeDream.description}
                                   contributions={howWeDream.contributions}
                                   links={howWeDream.links}/>
                  </div>
              </div>
              <h2 className={"text-4xl font-bold text-white italic pt-10 pb-5"}>Game Jam Projects</h2>
              <p className={"text-2xl px-10"}>Game jam projects that might be small but packed with creativity and fun.</p>
              <Divider/>
              <div className={"grid grid-cols-1 w-5/6 max-xl:w-1/1 gap-y-20 p-10 justify-center"}>
                  <div className={""}>
                      <ProjectCard image={kafoo.image}
                                   projectName={kafoo.projectName}
                                   description={kafoo.description}
                                   contributions={kafoo.contributions}
                                   links={kafoo.links}/>
                  </div>
                  <div className={""}>
                      <ProjectCard image={theLastMeat.image}
                                   projectName={theLastMeat.projectName}
                                   description={theLastMeat.description}
                                   contributions={theLastMeat.contributions}
                                   links={theLastMeat.links}/>
                  </div>
                  <div className={""}>
                      <ProjectCard image={bubbleBomb.image}
                                   projectName={bubbleBomb.projectName}
                                   description={bubbleBomb.description}
                                   contributions={bubbleBomb.contributions}
                                   links={bubbleBomb.links}/>
                  </div>
              </div>
              <h2 className={"text-4xl font-bold text-white italic pt-10 pb-5"}>Rapid Game Projects</h2>
              <p className={"text-2xl px-10"}>Games I made within 3 weeks from Rapid Game subject in Bangkok University. The testament that even with limited time, a quality game can be made.</p>
              <Divider/>
              <div className={"grid grid-cols-1 w-5/6 max-xl:w-1/1 gap-y-20 p-10 justify-center"}>
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
              </div>
          </div>
      </main>
  );
}

export default ProjectPage;