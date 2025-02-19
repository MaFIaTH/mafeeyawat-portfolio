import Divider from "../utilities/Utilities.tsx";
import { useState } from "react";
import ResumeImage from "/resume/resume.png";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function ResumePage() {
    const [isImageVisible, setIsImageVisible] = useState(false); // State to track image visibility
    const toggleImageVisibility = () => {
        const resumeImage = document.getElementById("resume-image");
        if (resumeImage) {
            resumeImage.classList.toggle("hidden"); // Toggles the "hidden" class on the image
            setIsImageVisible(!isImageVisible); // Update state to reflect the new visibility
        }
    };

    return (
        <main className="bg-[#141414] bg-cover min-h-screen min-w-screen">
            <div className="flex flex-col py-20 justify-center items-center">
                <h1 className={"text-4xl font-bold text-white italic"}>Resume</h1>
                <Divider />
                <CanvaResume />
                <Divider />
                <div className={"text-center"}>
                    <h2 className={"text-2xl pb-2.5"}>If above doesn't work, try this</h2>
                    {/*click button to show image*/}
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={toggleImageVisibility}>
                        {isImageVisible ? "Hide Resume Image" : "Show Resume Image"}
                    </button>
                    <div className={"min-w-7/16 max-w-7/16 max-sm:min-w-2/3 mx-auto"}>
                        <TransformWrapper>
                            <TransformComponent>
                                <img
                                    src={ResumeImage}
                                    className="hidden pt-5 rounded" // Initially hidden using the "hidden" class from Tailwind CSS
                                    alt="Resume not loaded, please refresh"
                                    id="resume-image"
                                />
                            </TransformComponent>
                        </TransformWrapper>
                    </div>
                </div>
            </div>
        </main>
    );
}

function CanvaResume(){
    return (
        <div className={"min-w-1/2"}>
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height: "0",
                    paddingTop: "141.4286%",
                    paddingBottom: "0",
                    boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
                    marginTop: "1.6em",
                    marginBottom: "0.9em",
                    overflow: "hidden",
                    borderRadius: "8px",
                    willChange: "transform",
                }}
            >
                <iframe
                    loading="lazy"
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        top: "0",
                        left: "0",
                        border: "none",
                        padding: "0",
                        margin: "0",
                    }}
                    src="https://www.canva.com/design/DAGfdEnsnm4/43RHmsTNytQfUSt70Zr0qQ/view?embed"
                    allowFullScreen
                    allow="fullscreen"
                ></iframe>
            </div>
            <div className={"text-center"}>
                <a
                    href="https://www.canva.com/design/DAGfdEnsnm4/43RHmsTNytQfUSt70Zr0qQ/view?utm_content=DAGfdEnsnm4&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
                    target="_blank"
                    rel="noopener noreferrer">
                    Mafeeyawat Songsomboon - Resume
                </a>
            </div>
        </div>
    )
}

export default ResumePage;