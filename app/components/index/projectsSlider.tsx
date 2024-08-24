import Image from 'next/image';

const projects = [
    {
        image: "/NewProjectImg.png",
        alt: "my project",
        title: "Project 1",
        category: "AI Powered",
        description: "Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man",
    },
    {
        image: "/NewProjectImg.png",
        alt: "my project",
        title: "Project 2",
        category: "AI Powered",
        description: "Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man",
    },
    {
        image: "/NewProjectImg.png",
        alt: "my project",
        title: "Project 3",
        category: "AI Powered",
        description: "Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man",
    },
    {
        image: "/NewProjectImg.png",
        alt: "my project",
        title: "Project 4",
        category: "AI Powered",
        description: "Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man",
    },
    {
        image: "/NewProjectImg.png",
        alt: "my project",
        title: "Project 5",
        category: "AI Powered",
        description: "Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man",
    },
];

export default function ProjectsSlider() {
    return (
        <section className="text-gray-600 body-font section-width">
            <div className="flex flex-col page-padding">
                <div className="flex flex-col text-center w-full mt-24">
                    <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Explore</h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">My Projects</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't</p>
                </div>
                <div className="flex flex-wrap">
                    <Projects />
                </div>
            </div>
        </section>
    );
}

export function Projects() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container py-24">
                <div className="flex flex-wrap">
                    {projects.map((project, index) => (
                    <div key={index} className="md:w-1/2 p-6 space-x-5">
                        <div className="relative bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                            <img className="w-full h-auto rounded-xl" src={project.image} alt="Card Image" />
                            <div className="absolute top-0 start-0 end-0">
                                <div className="p-4 md:p-5">
                                <h3 className="text-lg font-bold text-gray-800">
                                    {project.title} 
                                </h3>
                                <p className="mt-1 text-gray-800">
                                    {project.description} 
                                </p>
                                <p className="mt-5 text-xs text-gray-500 dark:text-neutral-500">
                                    Last updated 5 mins ago
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
