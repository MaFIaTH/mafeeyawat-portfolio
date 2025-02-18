import Divider, {CopyToClipboard} from "../utilities/Utilities.tsx";
import {Tooltip} from "react-tooltip";
import EmailIcon from "/test/hotpot.png";
import GitHubIcon from "/test/hotpot.png";
import DiscordIcon from "/test/hotpot.png";
import PhoneIcon from "/test/hotpot.png";

function ContactPage() {
    return (
        <main className="min-h-screen min-w-screen">
            <div className={"flex flex-col py-20 justify-center items-center"}>
                <h1 className="text-4xl font-bold text-white italic">Contact</h1>
                <Divider />
                <div className="grid grid-cols-2 size-1/4 gap-4 pt-10 justify-center items-center">
                    <img src={EmailIcon} className="" alt="Email Icon" />
                    <div>
                        <a href="mailto:mafeeyawat@gmail.com"
                           className="text-2xl transition-all duration-300 ease-in-out">
                            mafeeyawat@gmail.com
                        </a>
                    </div>
                    <img src={PhoneIcon} className="" alt="Phone Icon" />
                    <div>
                        <p className="text-2xl hover:underline hover:scale-110 delay-50"
                           onClick={() => CopyToClipboard("0951916276")}
                           data-tooltip-id="copy-to-clipboard"
                            data-tooltip-content="Click to copy">
                            095-191-6276
                        </p>
                        <Tooltip id="copy-to-clipboard" />
                    </div>
                    <img src={DiscordIcon} className="" alt="Discord Icon" />
                    <div>
                        <p className="text-2xl hover:underline hover:scale-110 delay-50"
                           onClick={() => CopyToClipboard("mafia2547")}
                           data-tooltip-id="copy-to-clipboard"
                           data-tooltip-content="Click to copy">
                            mafia2547
                        </p>
                        <Tooltip id="copy-to-clipboard" />
                    </div>
                    <img src={GitHubIcon} className="" alt="GitHub Icon" />
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