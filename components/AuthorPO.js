//Author Profile Overview

import Image from "next/image";



function AuthorProfile() {



    return (
        <div className="fixed left-0 top-0 w-full h-full bg-opacity-50 bg-black flex items-center justify-center z-10">
            <section className="bg-white p-5">
                <div className='head flex flex-col md:flex-row justify-start items-center py-2'>
                    <Image 
                        className="rounded-full"
                        src="/jack_lebous.jpg"
                        alt=''
                        width={115}
                        height={115}
                    />
                    <div className="px-3">
                        <h4 className="text-lg font-bold">Jollins Collin</h4>
                        <h5 className="font-medium">@jesse_collins</h5>
                    </div>
                    <div className="grid grid-cols-3 mx-4 py-4 text-center bg-gray-100 border-gray-200 border-2 w-72 my-3 md:my-0">
                        <div className="">
                            <p className="font-bold">10.7K</p>
                            <p className="font-medium">Posts</p>
                        </div>
                        <div>
                            <p className="font-bold">22</p>
                            <p className="font-medium">Following</p>
                        </div>
                        <div>
                            <p className="font-bold">320</p>
                            <p className="font-medium">Followers</p>
                        </div>
                    </div>
                
                </div>
                    <div>
                        <div className='tab mx-2 border-b-2 border-gray-100'>
                            <Tab label="Feed" isActive={false} />
                            <Tab label="Trending now" isActive={true} />
                            <Tab label="Events" isActive={false} />
                        </div>
                        <TrendingTab />
                    </div>
            </section>
        </div>
    )
}


const Tab = ({label, isActive}) => {
    return (
        <button className={`mx-2 px-5 py-4 ${isActive? 'active-tab': ''}`}>{label}</button>
    )
}

const TrendingTab = () => {
    return (
        <div className="trending-tab py-2">
        <div className="card grid grid-cols-2">
            <div>
                <p className="font-semibold">#science</p>
                <p>157 talking about it</p>
            </div>
            <di className="bg-red-600 max-w-full">

            </di>
        </div>
        <div className="card grid grid-cols-2 py-4">
            <div>
                <p className="font-semibold">#creativity</p>
                <p>14 talking about it</p>
            </div>
            <di className="bg-yellow-600 max-w-full">

            </di>
        </div>
        <div className="card grid grid-cols-2">
            <div>
                <p className="font-semibold">#art</p>
                <p>157 talking about it</p>
            </div>
            <di className="bg-green-600 max-w-full">

            </di>
        </div>
        <a href="" className="font-medium pt-6 block">
                Load more tags
        </a>
    </div>

    )
}

export default AuthorProfile
