import Image from 'next/image';

export default function HeroSection() {
    return (
        <section className="text-gray-600 body-font page-padding section-width">
            <div className="container bg-gray-100 mx-auto flex py-16 md:flex-row mt-10 rounded-lg flex-col items-center">
                <div className="lg:max-w-lg flex flex-row justify-center lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <Image
                        src="/avi.png"
                        alt="Takudzwa Chikanga Profile Photo"
                        width={400}
                        height={80}
                        className="circle-img"
                        blurDataURL="data:..." 
                        placeholder="blur" // Optional blur-up while loading
                    />
                </div>
                <div className="lg:flex-grow md:w-1/2 md:px-8  flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hi, Call Me TK</h1>
                    <p className="mb-8 leading-relaxed">Takudzwa Chikanga is a professional software developer who has been in the IT software development field for more than four years, He has had the chance to work with both international businesses and IT teams from different domains. TK is a seasoned developer in many different technologies and fields, but AI and cybersecurity are two areas that he is most interested in.</p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg">Hire Me</button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">My Projects</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
