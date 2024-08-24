import Image from 'next/image';

export default function AboutMeSection() {
    return (
        <section className="text-gray-600 body-font page-padding section-width">
            <div className="container mx-auto flex py-16 md:flex-row mt-10 rounded-lg flex-col items-center">

                <div className="lg:flex-grow md:w-1/2 md:px-8  flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About Me</h1>
                    <p className="mb-8 leading-relaxed">With an emphasis on web development, Takudzwa Chikanga is a skilled software engineer with experience managing projects from inception to completion. He has developed enterprise software systems and specialized custom online apps. He is skilled in a variety of technologies, including HTML, CSS, PHP, Python, JavaScript, and No/Low Code Tools. Because of his broad knowledge in front-end, back-end, UI/UX, and API development, he has experience offering comprehensive and detailed online end-to-end solutions.
</p>
                </div>
                <div className="lg:max-w-lg flex flex-row justify-center lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <Image
                        src="/proficiency.png"
                        alt="Takudzwa Chikanga Proficiency"
                        width={500}
                        height={80}
                        className="rounded-lg"
                        blurDataURL="data:..." 
                        placeholder="blur" // Optional blur-up while loading
                    />
                </div>
            </div>
        </section>
    );
}
