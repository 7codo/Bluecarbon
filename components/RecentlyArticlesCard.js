import React from 'react'
import Image from 'next/image'

function RecentlyArticlesCard() {
    return (
        <div className="flex shadow-md">
            <Image 
                src='/recently_articles/1.png'
                height={170}
                width={170}
                />
            <div className="px-4 py-4 flex flex-col justify-between max-w-xs">
                <h4 className="text-2xl whitespace-wrap font-semibold" >Common Symbols And Their Meanings</h4>
                <div className="flex items-center">
                    <Image 
                        className="rounded-full"
                        src='/jack_lebous.jpg'
                        height={60}
                        width={60}
                        />
                    <span className="font-medium mx-2 text-base text-gray-500">Jack Lebous</span>
                </div>
            </div>
        </div>
    )
}

export default RecentlyArticlesCard
