import Divider, {CopyToClipboard} from "../utilities/Utilities.tsx";
import {Tooltip} from "react-tooltip";
import EmailIcon from "/icon/email-icon.png";
import GitHubIcon from "/icon/github-icon.png";
import DiscordIcon from "/icon/discord-icon.png";
import PhoneIcon from "/icon/phone-icon.png";

function ContactPage() {
    return (
        <main className="bg-[#141414] bg-cover min-h-screen min-w-screen">
            <div className={"flex flex-col py-20 justify-center items-center"}>
                <h1 className="text-4xl font-bold text-white italic">Contact</h1>
                <Divider />
                <div className="grid md:grid-cols-2 max-sm:grid-rows-2 w-1/4 gap-10 pt-10 justify-center items-center mx-auto text-center">
                    <img src={EmailIcon} className="mx-auto w-2/3 invert row-span-full" alt="Email Icon" />
                    <div>
                        <a href="mailto:mafeeyawat@gmail.com"
                           className="text-wrap text-2xl">
                            mafeeyawat@gmail.com
                        </a>
                    </div>
                    <img src={PhoneIcon} className="mx-auto w-2/3 invert" alt="Phone Icon" />
                    <div>
                        <p className="text-2xl hover:underline hover:scale-110 duration-300 ease-in-out text-nowrap"
                           onClick={() => CopyToClipboard("+66951916276")}
                           data-tooltip-id="copy-to-clipboard"
                            data-tooltip-content="Click to copy">
                            095-191-6276
                        </p>
                        <Tooltip id="copy-to-clipboard" />
                    </div>
                    <img src={DiscordIcon} className="mx-auto w-2/3 invert" alt="Discord Icon" />
                    <div>
                        <p className="text-2xl hover:underline hover:scale-110 duration-300 ease-in-out"
                           onClick={() => CopyToClipboard("mafia2547")}
                           data-tooltip-id="copy-to-clipboard"
                           data-tooltip-content="Click to copy">
                            mafia2547
                        </p>
                        <Tooltip id="copy-to-clipboard" />
                    </div>
                    <img src={GitHubIcon} className="mx-auto w-2/3 invert" alt="GitHub Icon" />
                    <div>
                        <a href="https://github.com/MaFIaTH"
                           className="text-2xl hover:underline hover:scale-110">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}



export default ContactPage;