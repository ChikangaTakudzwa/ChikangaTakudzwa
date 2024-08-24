
const getInTouch = [
    {
        name: "Email",
        link: "",
        img: "/getintouch/outlook_mail.png",
    },
    {
        name: "Github",
        link: "",
        img: "/getintouch/github_.jpg",
    },
    {
        name: "LinkedIn",
        link: "",
        img: "/getintouch/linkedin.jpg",
    },
    {
        name: "Discord",
        link: "",
        img: "/getintouch/discord.jpg",
    },
];

export default function GetInTouch() {
    return (
        <section className="text-gray-900 mt-20 body-font section-width">
            <div className="flex flex-col page-padding">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Get in Touch</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-gray-900 inline-flex"></div>
                    </div>
                </div>
                <div className="flex flex-row justify-center">
                    <Contact />
                </div>
            </div>
        </section>
    );
}

export function Contact() {
    return (
        <section className="text-gray-600 body-font section-width">
            <div className="container px-5 pb-24 pt-8">
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    {getInTouch.map((contact, index) => (
                    <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                        </div>
                        <div className="flex-grow">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{contact.name}</h2>

                        <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        </div>
                    </div>
                    ))}
                </div>
                <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            </div>
        </section>
    );
}