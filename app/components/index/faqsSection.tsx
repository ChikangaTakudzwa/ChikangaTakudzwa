
const faqs = [
    {
        question: "What technologies are you proficient in?",
        ans: "Python, JavaScript, PHP, Cloud Computing (AWS,Azure), Docker looking forward to learn Go and React Native",
    },
    {
        question: "Where are you located?",
        ans: "Currently based in Harare, Zimbabwe",
    },
    {
        question: "What is your process for working on a new project?",
        ans: "Project Initiation and Planning > Development Phase > Deployment and Testing > Maintenance and Support",
    },
    {
        question: "Web Dev Experience",
        ans: "4 years and counting as a software developer with a focus on web development projects",
    },
    {
        question: "Collabo’s, part-time or remote roles",
        ans: "Open to everything that speaks innovation and tech...",
    },
    {
        question: "Web Dev Services as a solo Dev",
        ans: "Yes I do provide web development services as a solo developer (Freelancing/Outsource) provided that I don't have a full time role employment.",
    },
];

export default function FrequentlyAsked() {
    return (
        <section className="text-gray-600 body-font section-width">
            <div className="container page-padding">
                <div className="flex flex-col text-center w-full mt-4">
                    <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Frequently</h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Asked Questions</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't</p>
                </div>
                <div className="flex flex-wrap">
                    <Faqs />
                </div>
            </div>
        </section>
    );
}

export function Faqs() {
    return (
        <div className="hs-accordion-group section-width py-24">
            <div className="page-padding">
                {faqs.map((faq, index) => (
                <div key={index} className="hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent" id="hs-active-bordered-heading-one">
                    <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400" aria-expanded="false" aria-controls="hs-basic-active-bordered-collapse-one">
                    {faq.question}
                    <svg className="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                    </svg>
                    <svg className="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                    </svg>
                    </button>
                    <div id="hs-basic-active-bordered-collapse-one" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-active-bordered-heading-one">
                    <div className="pb-4 px-5">
                        <p className="text-gray-800 dark:text-neutral-200">
                        {faq.ans}
                        </p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}