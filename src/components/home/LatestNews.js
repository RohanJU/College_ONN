import {NewsCardLeft,NewsCardRight} from  "../cards/NewsCard"; 

function LatestNews() {
    return (
        <div className="px-4 py-8"> 

            <h1 className="font-bold text-[36px] text-[#2f327d] text-center">
                Latest News and Resources   
            </h1>
            <p className="font-normal text-[24px] text-[#696984] text-center mb-8">
                See the developments that have occurred to COLLEGE ONN in the world
            </p>
            <div className="flex flex-col lg:flex-row justify-between lg:w-[90%] mx-auto gap-6">
                <div className="xl:w-1/2 hidden xl:block">
                    <NewsCardRight /> 
                </div>
                <div className="w-full xl:w-1/2 space-y-6">
                    <NewsCardLeft />
                    <NewsCardLeft />
                    <NewsCardLeft />
                </div>
            </div>
        </div>
    );
} 
export default LatestNews;