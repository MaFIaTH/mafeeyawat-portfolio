import React from "react";

interface ProjectCardProps {
    image: string; // Image URL or path
    projectName: string;
    description: string;
    contributions: string[]; // List of contributions
    links: { name: string; url: string }[]; // List of links (with name and URL)
}

const ProjectCard: React.FC<ProjectCardProps> = ({
                                                     image,
                                                     projectName,
                                                     description,
                                                     contributions,
                                                     links,
                                                 }) => {
    return (
        <div className="border-2 p-5 grid lg:grid-cols-2 max-lg:grid-rows-2 gap-x-10 gap-y-10 rounded-2xl
        justify-center items-center text-left hover:scale-110 hover:border-amber-200
        transition-all duration-300 ease-in-out group">
            <div className="row-span-full">
                <img src={image} className="aspect-16/9 rounded-xl w-full" alt={`${projectName} Icon`} />
            </div>
            <div className="">
                <h2 className="pb-5 font-bold italic text-6xl max-sm:text-4xl">{projectName}</h2>
                <p>{description}</p>
                <h2 className="py-2.5 text-2xl">Contributions</h2>
                <ul className="list-inside list-disc">
                    {contributions.map((contribution, index) => (
                        <li key={index} className="">
                            {contribution}
                        </li>
                    ))}
                </ul>
                <h2 className="py-2.5 text-xl font-semibold">Links</h2>
                <ul className="list-inside list-disc">
                    {links.map((link, index) => (
                        <li key={index}>
                            <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline hover:text-blue-700"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


export default ProjectCard;