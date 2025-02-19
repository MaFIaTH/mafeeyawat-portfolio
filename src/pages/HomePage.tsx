import Divider from "../utilities/Utilities.tsx";
import ProfilePicture from "/profile/profile-picture.png";
import ProjectCard from "../projects/ProjectCard.tsx";
import {
    fitMeIn,
    howWeDream,
    quebic,
    theLastMeat,
    timeSprint
} from "../projects/ProjectData.tsx";

export const fullName = "Mafeeyawat Songsomboon";

function HomePage() {
    const textHighlight = "group-hover:text-amber-200 text-pretty group-hover:text-lg font-bold underline group-hover:decoration-wavy duration-500";
    return (
        <main className="min-h-screen min-w-screen bg-[#141414] bg-cover">
            <div className="text-center pt-20 px-10">
                <img src={ProfilePicture} className="max-lg:min-w-1/2 min-w-1/4 max-w-1/4 mx-auto rounded-2xl" alt="Hotpot" />
                <h2 className="max-sm:text-3xl text-5xl font-bold text-white italic pt-10" >{fullName}</h2>
                <h2 className="max-sm:text-xl text-4xl font-bold text-white pb-10">Game Programmer</h2>
                <div className="bg-black/50 w-1/2 max-lg:w-1/1 mx-auto text-left p-5
                transition-all delay-50 duration-300 ease-in-out hover:scale-110 group">
                    <p className="text-white">A game programmer with <span className={textHighlight + " group-hover:delay-500"}>5+ years of experience specializing in Unity and C#</span>, backed by strong OOP fundamentals.
                        <br/>I thrive in collaborative team environments and <span className={textHighlight + " group-hover:delay-1000"}>enjoy taking initiative</span>.
                        <br/>Over the years, I’ve built a wide range of game prototypes across various genres, which has honed my <span className={textHighlight + " group-hover:delay-1500"}>adaptability and problem-solving skills</span>.
                        <br/>I’m deeply committed to delivering <span className={textHighlight + " group-hover:delay-2000"}>high-quality work</span> and take pride in seeing projects
                        through to completion with a <span className={textHighlight + " group-hover:delay-2500"}>strong sense of responsibility</span>.</p>
                </div>
                <h1 className="pt-20 pb-5 text-4xl font-bold text-white italic" >Highlights</h1>
                <p className={"text-2xl px-10"}>Present to you, my proudest projects!</p>
            </div>
            <Divider />
            <div className={"flex flex-col pb-20 justify-center items-center"}>
                <div className={"grid grid-cols-1 w-5/6 max-xl:w-1/1 gap-y-20 p-10 justify-center"}>
                    <div className={""}>
                        <ProjectCard image={howWeDream.image}
                                     projectName={howWeDream.projectName}
                                     description={howWeDream.description}
                                     contributions={howWeDream.contributions}
                                     links={howWeDream.links}/>
                    </div>
                    <div className={""}>
                        <ProjectCard image={fitMeIn.image}
                                     projectName={fitMeIn.projectName}
                                     description={fitMeIn.description}
                                     contributions={fitMeIn.contributions}
                                     links={fitMeIn.links}/>
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
                        <ProjectCard image={timeSprint.image}
                                     projectName={timeSprint.projectName}
                                     description={timeSprint.description}
                                     contributions={timeSprint.contributions}
                                     links={timeSprint.links}/>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;