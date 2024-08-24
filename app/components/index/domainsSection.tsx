import Image from "next/image";
import FrontEndStack from "@/app/components/index/techStack/frontend";

const techs = [
  {
    alt: "docker",
    path: "https://ivesexid.sirv.com/Portfolio/2024-Portfolio/stack/docker.png",
  },
  {
    alt: "figma",
    path: "https://ivesexid.sirv.com/Portfolio/2024-Portfolio/stack/figma.jpg",
  },
  {
    alt: "github",
    path: "https://ivesexid.sirv.com/Portfolio/2024-Portfolio/stack/github.jpg",
  },
  {
    alt: "hugging_face",
    path: "https://ivesexid.sirv.com/Portfolio/2024-Portfolio/stack/hugging_face.webp",
  },
  {
    alt: "javascript",
    path: "https://ivesexid.sirv.com/Portfolio/2024-Portfolio/stack/Javascript_Logo.png",
  },
  {
    alt: "k8s",
    path: "https://ivesexid.sirv.com/Portfolio/2024-Portfolio/stack/k8s.png",
  },
  {
    alt: "microsoft_azure",
    path: "https://ivesexid.sirv.com/Portfolio/2024-Portfolio/stack/Microsoft_Azure.png",
  },
  {
    alt: "nodejs",
    path: "https://ivesexid.sirv.com/Portfolio/2024-Portfolio/stack/nodejs.png",
  },
  {
    alt: "og",
    path: "https://ivesexid.sirv.com/Portfolio/2024-Portfolio/stack/og.png",
  },
  {
    alt: "postgresql",
    path: "https://ivesexid.sirv.com/Portfolio/2024-Portfolio/stack/Postgresql.png",
  },
  {
    alt: "python",
    path: "https://ivesexid.sirv.com/Portfolio/2024-Portfolio/stack/python.jpeg",
  },
];

export default function DomainsSection() {
  return (
    <section className="section-width page-padding">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {techs.map((tech, index) => (
          <img
            key={index}
            className="w-38 h-38 size-40 p-8 object-contain"
            src={tech.path}
            alt={tech.alt}
          />
        ))}
      </div>
    </section>
  );
}
