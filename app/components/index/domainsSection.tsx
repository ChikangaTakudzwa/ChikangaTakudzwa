import Image from 'next/image';
import FrontEndStack from "@/app/components/index/techStack/frontend";

const techs = [
    {
        alt: "docker",
        path: "/stack/docker.png",
    },
    {
        alt: "figma",
        path: "/stack/figma.jpg",
    },
    {
        alt: "github",
        path: "/stack/github.jpg",
    },
    {
        alt: "hugging_face",
        path: "/stack/hugging_face.webp",
    },
    {
        alt: "javascript",
        path: "/stack/Javascript_Logo.png",
    },
    {
        alt: "k8s",
        path: "/stack/k8s.png",
    },
    {
        alt: "microsoft_azure",
        path: "/stack/Microsoft_Azure.png",
    },
    {
        alt: "nodejs",
        path: "/stack/nodejs.png",
    },
    {
        alt: "og",
        path: "/stack/og.png",
    },
    {
        alt: "postgresql",
        path: "/stack/Postgresql.png",
    },
    {
        alt: "python",
        path: "/stack/python.jpeg",
    },
];


export default function DomainsSection() {
    return (
        <section className="section-width page-padding">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {techs.map((tech, index) => (
                    <img key={index} className="w-38 h-38 size-40 p-8 object-contain" src={tech.path} alt={tech.alt}/>
                ))}
            </div>
        </section>
    );
}
