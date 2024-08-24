

export default function DailyDev() {
    return (
        <section className="text-gray-600 body-font section-width">
            <div className="page-padding">
                <div className="min-h-60 flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                    <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        DailyDev
                        </h3>
                        <p className="mt-2 text-gray-500 dark:text-neutral-400">
                        Content i read more about
                        </p>
                        <a className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600" href="#">
                        Card link
                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m9 18 6-6-6-6"></path>
                        </svg>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}