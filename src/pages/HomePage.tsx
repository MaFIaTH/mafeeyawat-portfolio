import Divider from "../utilities/Utilities.tsx";
import ProfilePicture from "/test/hotpot.png";

export const fullName = "Mafeeyawat Songsomboon";

function HomePage() {
    const textHighlight = "group-hover:text-amber-200 text-pretty group-hover:text-lg font-bold underline group-hover:decoration-wavy duration-500";
    return (
        <main className="min-h-screen min-w-screen bg-gray bg-cover">
            <div className="text-center py-20">
                <img src={ProfilePicture} className="w-1/8 mx-auto pb-10" alt="Hotpot" />
                <h1 className="text-4xl font-bold text-white italic" >{fullName}</h1>
                <h2 className="text-4xl font-bold text-white pb-10">Game Programmer</h2>
                <div className="bg-black/50 w-1/2 mx-auto text-left p-5
                transition-all delay-50 duration-300 ease-in-out hover:scale-110 group">
                    <p className="text-white">A game programmer with <span className={textHighlight + " group-hover:delay-500"}>5+ years of experience specializing in Unity and C#</span>, backed by strong OOP fundamentals.
                        <br/>I thrive in collaborative team environments and <span className={textHighlight + " group-hover:delay-1000"}>enjoy taking initiative</span>.
                        <br/>Over the years, I’ve built a wide range of game prototypes across various genres, which has honed my <span className={textHighlight + " group-hover:delay-1500"}>adaptability and problem-solving skills</span>.
                        <br/>I’m deeply committed to delivering <span className={textHighlight + " group-hover:delay-2000"}>high-quality work</span> and take pride in seeing projects
                        through to completion with a <span className={textHighlight + " group-hover:delay-2500"}>strong sense of responsibility</span>.</p>
                </div>
                <h1 className="pt-20 text-4xl font-bold text-white italic" >Highlights</h1>
                <Divider />
            </div>
        </main>
    );
}

export default HomePage;