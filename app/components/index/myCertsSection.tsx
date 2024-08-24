import Image from 'next/image';

const certs = [
    {
        image: "/certs/azure_cert.png",
        alt: "Microsoft Azure Fundamentals Certification",
        title: "Microsoft Azure",
        category: "Cloud Computing",
        verify: "",
    },
    {
        image: "/certs/py4ds_cert.png",
        alt: "Python For Data Science",
        title: "Python For Data Science",
        category: "Data Science",
        verify: "",
    },
    {
        image: "/certs/containers_k8s_essen_cert.png",
        alt: "Containers & K8S Essentials",
        title: "Containers & K8S Essentials",
        category: "DevOps",
        verify: "",
    },
    {
        image: "/certs/uplimit_cert.jpeg",
        alt: "Building AI Products w/ OpenAI Certification",
        title: "Building AI Products w/ OpenAI",
        category: "AI/ML",
        verify: "",
    },
    {
        image: "/certs/ibm_devops_cert.jpeg",
        alt: "IBM DevOps and SE Professional Certificate",
        title: "IBM DevOps Professional Certificate",
        category: "DevOps",
        verify: "",
    },
];

export default function Certs() {
    return (
        <section className="bg-gray-900 text-gray-50 mt-20 body-font section-width">
            <div className="flex flex-col page-padding">
                <div className="flex flex-col text-center w-full mt-24">
                    <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Explore</h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-50">My Certifications</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't</p>
                </div>
                <div className="flex flex-wrap">
                    <Certifications />
                </div>
            </div>
        </section>
    );
}

export function Certifications() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container py-24">
                <div className="flex flex-wrap">
                    {certs.map((cert, index) => (
                    <div key={index} className="md:w-1/3 p-2">
                        <div className="flex flex-col p-1 mb-8 bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                            <img className="w-full h-auto rounded-t-xl" src={cert.image} alt={cert.alt} />
                            <div className="p-1">
                                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                <span className="text text-xs bg-gray-900 text-white py-1 px-2 rounded-lg">{cert.category}</span><br />
                                {cert.title}
                                </h3>
                                <p className="mt-5 text-xs text-gray-500 dark:text-neutral-500">
                                Verify
                                </p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
