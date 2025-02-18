import Divider from "../utilities/Utilities.tsx";
import ProfilePicture from "/test/hotpot.png";

export const fullName = "Mafeeyawat Songsomboon";

function HomePage() {
    return (
        <main className="min-h-screen min-w-screen bg-gray bg-cover">
            <div className="text-center py-20">
                <img src={ProfilePicture} className="w-1/8 mx-auto pb-10" alt="Hotpot" />
                <h1 className="text-4xl font-bold text-white italic" >{fullName}</h1>
                <h2 className="text-4xl font-bold text-white pb-20">Game Programmer</h2>
                <div className={"bg-black/50 w-1/2 mx-auto text-left p-5 transition delay-50 duration-300 ease-in-out hover:scale-110"}>
                    <p className="text-white">A game programmer with <b><u>5+ years of experience specializing in Unity and C#</u></b>, backed by strong OOP fundamentals.
                        I thrive in collaborative team environments and <b><u>enjoy taking initiative</u></b>.
                        Over the years, I’ve built a wide range of game prototypes across various genres, which has honed my <b><u>adaptability and problem-solving skills</u></b>.
                        I’m deeply committed to delivering <b><u>high-quality work</u></b> and take pride in seeing projects
                        through to completion with a <b><u>strong sense of responsibility</u></b>.</p>
                </div>
                <h1 className="pt-20 text-4xl font-bold text-white italic" >Highlights</h1>
                <Divider />
            </div>
        </main>
    );
}

export default HomePage;