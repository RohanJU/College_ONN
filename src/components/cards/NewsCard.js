

function NewsCardRight() {
    return (
        <div className="p-2.5">

            <img src="./image/news/image.png" className="w-full"></img>
            <div className="w-full flex flex-col gap-2 justify-center">

                <button className="bg-[#49BBBD] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#3da2a4] transition w-fit mt-5 mb-5 cursor-pointer">
                    News
                </button>

                <p className="text-black">Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</p>
                <p className="text-[#696984]">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
            </div>
        </div>
    )
}

function NewsCardLeft() {
    return (
        <div className="flex flex-wrap md:flex-nowrap gap-8  p-2.5 ">
            <div className="relative inline-block">
                <img src="./image/news/image.png" height={200} className="w-full sm:w-[280px]" />
                <button className="bg-[#49BBBD] text-xs text-white px-4 py-2 rounded-full shadow-md hover:bg-[#3da2a4] transition w-fit cursor-pointer absolute bottom-4 right-2">
                    News
                </button>
            </div>

            <div className="w-full flex flex-col gap-2 justify-center">
                <p className="text-black">Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand</p>
                <p className="text-[#696984]">Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand</p>
            </div>
        </div>
    )
}

export { NewsCardRight, NewsCardLeft };  
