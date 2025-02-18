import Divider from "../utilities/Utilities.tsx";
import EmailIcon from "/test/hotpot.png";
import GitHubIcon from "/test/hotpot.png";

function ContactPage() {
    return (
        <main className="min-h-screen min-w-screen">
            <div className={"flex flex-col text-center pt-20 justify-center items-center"}>
                <h1 className="text-4xl">Contact</h1>
                <Divider />
                <div className="grid grid-cols-2 size-1/4 gap-4 pt-10 justify-center items-center">
                    <img src={EmailIcon} className="" alt="Email Icon" />
                    <div>
                        <a href="mailto:mafeeyawat@gmail.com" className="text-2xl">mafeeyawat@gmail.com</a>
                    </div>
                    <img src={GitHubIcon} className="" alt="GitHub Icon" />
                    <div>
                        <a href="" className="text-2xl">GitHub</a>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ContactPage;